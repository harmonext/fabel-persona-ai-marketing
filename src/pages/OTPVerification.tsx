
import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const OTPVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";
  const [otpValues, setOtpValues] = useState<string[]>(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  // Start the countdown for resending OTP
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  // If there's no email, redirect to the signup page
  useEffect(() => {
    if (!email) {
      navigate("/signup");
    }
  }, [email, navigate]);

  // Handle OTP input change
  const handleOtpChange = (index: number, value: string) => {
    // Only allow numbers
    if (value !== "" && !/^\d+$/.test(value)) return;

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Auto-focus next input if value is entered
    if (value !== "" && index < otpValues.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }

    // Clear error when typing
    if (error) setError("");
  };

  // Handle key press (for backspace and navigation)
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && otpValues[index] === "" && index > 0) {
      // Move focus to previous input when backspace is pressed on empty input
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  // Handle paste event (allow pasting entire OTP)
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    
    // Only process if pasted content looks like a numeric OTP
    if (pastedData.length === otpValues.length && /^\d+$/.test(pastedData)) {
      const newOtpValues = pastedData.split("").slice(0, otpValues.length);
      setOtpValues(newOtpValues);
      
      // Focus the last input
      const lastInput = document.getElementById(`otp-${otpValues.length - 1}`);
      if (lastInput) {
        lastInput.focus();
      }
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const otp = otpValues.join("");
    
    // Validate OTP format
    if (otp.length !== 6) {
      setError("Please enter the complete 6-digit OTP");
      return;
    }
    
    setIsVerifying(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      setIsVerifying(false);
      
      // For demo purposes, we'll accept any OTP
      // In a real application, you would verify the OTP with your backend
      navigate("/dashboard");
    }, 1500);
  };

  // Handle OTP resend
  const handleResendOtp = () => {
    if (!canResend) return;
    
    // Here you would call your backend to resend an OTP
    setCanResend(false);
    setResendTimer(60);
    
    // Show a simulated success message
    setError("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-md w-full">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Verify your email</h2>
            <p className="mt-2 text-gray-600">
              We've sent a verification code to <br />
              <span className="font-medium">{email}</span>
            </p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="otp-0" className="block text-sm font-medium text-gray-700 mb-2 text-center">
                Enter verification code
              </label>
              
              <div className="flex items-center justify-center gap-2">
                {otpValues.map((value, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className="w-12 h-12 text-center text-xl font-medium border-2 rounded-md 
                      focus:border-fabel-gold focus:ring-fabel-gold bg-white"
                  />
                ))}
              </div>
              
              {error && (
                <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
              )}
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={isVerifying}
                className="btn-primary w-full sm:w-auto px-10 flex items-center justify-center"
              >
                {isVerifying ? "Verifying..." : (
                  <>
                    Verify <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Didn't receive a code?{" "}
                {canResend ? (
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    className="font-medium text-fabel-gold-dark hover:text-fabel-gold"
                  >
                    Resend code
                  </button>
                ) : (
                  <span className="text-gray-500">
                    Resend code in {resendTimer}s
                  </span>
                )}
              </p>
            </div>
            
            <div className="text-center">
              <Link
                to="/signup"
                className="text-sm font-medium text-fabel-gold-dark hover:text-fabel-gold"
              >
                Use a different email address
              </Link>
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OTPVerification;
