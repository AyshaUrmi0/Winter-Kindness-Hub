

const HowToHelp = () => {
  const steps = [
    {
      title: "Donate Warm Clothes",
      description:
        "Help those in need by donating winter jackets, scarves, gloves, and blankets. Your contribution can bring warmth to someone's life this winter.",
      icon: "🧥",
    },
    {
      title: "Support with Financial Aid",
      description:
        "Provide financial support to help us purchase essential items like heaters and thermal wear for families in need.",
      icon: "💰",
    },
    {
      title: "Volunteer",
      description:
        "Join our team of volunteers to distribute donations and bring smiles to people during the harsh winter season.",
      icon: "🤝",
    },
    {
      title: "Spread the Word",
      description:
        "Share our mission on social media and with friends to help us reach more donors and volunteers.",
      icon: "📣",
    },
  ];

  return (
    <section className="py-12 bg-blue-50">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <h2 className="mb-8 text-4xl font-bold text-center text-blue-900">
          How You Can Help
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
          Winter can be harsh, but together we can bring warmth and hope to
          those in need. Here is  how you can make a difference this season.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 text-center transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
            >
              <div className="text-5xl">{step.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-blue-800">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="text-white bg-blue-700 btn btn-primary hover:bg-blue-800">
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
