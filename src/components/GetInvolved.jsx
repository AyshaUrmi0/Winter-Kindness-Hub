

const GetInvolved = () => {
  return (
    <section className="py-12 bg-gray-200 get-involved-section">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold text-blue-600">Get Involved and Make a Difference</h2>
        <p className="mb-6 text-lg text-gray-700">
          There are many ways you can help this winter, whether it’s by volunteering, donating, or sharing the cause with others.
        </p>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-lg involved-card">
            <h3 className="mb-4 text-2xl font-semibold text-blue-600">Volunteer with Us</h3>
            <p className="mb-4 text-lg text-gray-700">
              Join our team of volunteers and help us distribute donations to those who need it the most.
            </p>
            <a href="#volunteer" className="font-semibold text-blue-600 hover:text-blue-700">Learn More</a>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg involved-card">
            <h3 className="mb-4 text-2xl font-semibold text-blue-600">Donate Now</h3>
            <p className="mb-4 text-lg text-gray-700">
              Every little bit helps! Your donation will provide warmth and support to families in need.
            </p>
            <a href="#donate" className="font-semibold text-blue-600 hover:text-blue-700">Donate Today</a>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg involved-card">
            <h3 className="mb-4 text-2xl font-semibold text-blue-600">Spread the Word</h3>
            <p className="mb-4 text-lg text-gray-700">
              Share our mission on social media and inspire others to get involved in our cause.
            </p>
            <a href="#share" className="font-semibold text-blue-600 hover:text-blue-700">Share Now</a>
          </div>
        </div>

        <p className="mt-6 text-lg text-gray-700">
          Together, we can create a stronger, warmer community. Let’s make this winter a little brighter for everyone!
        </p>
      </div>
    </section>
  );
};

export default GetInvolved;
