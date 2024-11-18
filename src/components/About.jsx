import 'animate.css';

const About = () => {
  return (
    <section className="container px-4 py-10 mx-auto bg-gray-100 about-section">
      <div className="flex flex-col items-center md:flex-row">
       
        <div className="w-full p-4 text-center text-section md:w-1/2 md:text-left">
          <h2 className="mb-4 text-3xl font-bold text-blue-600 animate__heartBeat">
            About Our Winter Donation Campaign
          </h2>
          <p className="mb-6 text-lg text-gray-700">
            This winter, we are working to provide warmth and care to those in need. Your generous donations
            can help us deliver coats, blankets, and other essential items to individuals and families facing harsh
            conditions. Together, we can make a real difference in our community.
          </p>
          <p className="mb-6 text-lg text-gray-700">
            Join us in spreading warmth and kindness. Your support will go a long way in helping us achieve our goal.
          </p>
          <button className="px-6 py-2 text-black transition duration-300 bg-red-400 rounded-lg btn hover:bg-red-100 animate__animated animate__swing">
            Donate Now
          </button>
        </div>

        <div className="w-full p-4 image-section md:w-1/2 ">
          <img 
            src="https://i.ibb.co.com/G2pk8Vx/about.jpg" 
            alt="Winter Donation Campaign"
            className="w-full rounded-lg shadow-lg animate__animated animate__flipInX"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
