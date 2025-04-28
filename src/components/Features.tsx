
const Features = () => {
  const features = [
    {
      id: 1,
      title: "AI-Generated Personas",
      description: "Create targeted marketing personas based on your industry and business needs with our advanced AI algorithms.",
      icon: "🎯"
    },
    {
      id: 2,
      title: "Automated Content Creation",
      description: "Generate personalized content for different platforms tailored to your specific target audience.",
      icon: "✏️"
    },
    {
      id: 3,
      title: "Multi-Platform Publishing",
      description: "Schedule and post content to LinkedIn, Facebook, Instagram, Pinterest, and Twitter all from one dashboard.",
      icon: "📱"
    },
    {
      id: 4, 
      title: "Content Calendar",
      description: "Plan and visualize your content strategy with an easy-to-use drag-and-drop calendar interface.",
      icon: "📅"
    },
    {
      id: 5,
      title: "Analytics Dashboard",
      description: "Track engagement, reach, and conversion metrics to optimize your marketing strategy.",
      icon: "📊"
    },
    {
      id: 6,
      title: "Team Collaboration",
      description: "Work together with your team members on content creation, approval, and publishing workflows.",
      icon: "👥"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Power your marketing with AI
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Fabel helps businesses create targeted marketing content 
            that resonates with their audience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white p-6 rounded-lg shadow-md border border-fabel-blue-light hover:border-fabel-gold transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
