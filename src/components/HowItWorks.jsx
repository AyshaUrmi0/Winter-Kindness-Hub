import 'animate.css';

const HowItWorks = () => {
  return (
    <section className="container px-4 py-10 mx-auto bg-gray-100 how-it-works-section">
      <div className="mb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold text-blue-600 animate__animated animate__fadeInDown">
          How It Works
        </h2>
        <p className="text-lg text-gray-700 animate__animated animate__fadeInUp">
          Learn about our donation process, collection points, and the areas we serve.
        </p>
      </div>

      <div className="flex flex-col gap-10 md:flex-row">
      
        <div className="w-full p-4 transition-transform transform bg-white rounded-lg shadow-lg text-start hover:scale-105 md:w-1/3 animate__animated animate__zoomIn">
          <img
            src="https://i.ibb.co.com/HYTYCKx/donatenow.jpg"
            alt="Donation Instructions"
            className="object-cover w-full mb-4 rounded-lg h-200"
          />
          <h3 className="mb-3 text-xl font-semibold text-blue-600 ">Donation Instructions</h3>
          <p className="p-6 text-gray-700">
            1. Select the items you wish to donate (e.g., coats, blankets, essentials). <br />
            2. Pack them securely for transport. <br />
            3. Drop off your donations at the nearest collection point or schedule a pick-up.
          </p>
        </div>

       
        <div className="w-full p-4 transition-transform transform bg-white rounded-lg shadow-lg text-start hover:scale-105 md:w-1/3 animate__animated animate__zoomIn animate__delay-1s">
          <img
            src="https://i.ibb.co.com/ZGMNm78/collectionpoint.jpg"
            alt="Collection Points"
            className="object-cover w-full mb-4 rounded-lg h-200"
          />
          <h3 className="mb-3 text-xl font-semibold text-blue-600">Collection Points</h3>
          <p className="p-6 mb-4 text-gray-700">
            Locate your nearest drop-off point using our <span className="font-semibold text-blue-500">interactive map</span>.
          </p>
         
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093723!2d144.9537353159045!3d-37.81627974202195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577db6f9800f6a1!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1633437251369!5m2!1sen!2sus"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow"
            title="Collection Points Map"
          ></iframe>
        </div>

       
        <div className="w-full p-4 transition-transform transform bg-white rounded-lg shadow-lg text-start hover:scale-105 md:w-1/3 animate__animated animate__zoomIn animate__delay-2s ">
          <img
            src="https://i.ibb.co.com/hgmhYK7/donationdevision.jpg"
            alt="Supported Divisions"
            className="object-cover w-full mb-4 rounded-lg h-200"
          />
          <h3 className="mb-3 text-xl font-semibold text-blue-600">Supported Divisions</h3>
          <p className="p-6 text-gray-700">
            Our campaign supports: <br />
            - Dhaka Division <br />
            - Chattogram Division <br />
            - Cumilla Division <br />
            - Barishal Division <br />
            - Khulna Division <br />
            - Rajshahi Division <br />
            - Sylhet Division <br />
            - Rangpur Division
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
