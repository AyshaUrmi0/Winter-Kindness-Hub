import  { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import 'animate.css'; 

const Impact = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  
  const { ref: familiesRef, inView: familiesInView } = useInView();
  const { ref: itemsRef, inView: itemsInView } = useInView();
  const { ref: volunteersRef, inView: volunteersInView } = useInView();

  return (
    <section className="py-12 bg-blue-100 impact-section">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold text-blue-600">Your Impact This Winter</h2>
        <p className="mb-6 text-lg text-gray-700">
          Your generous donations are making a real difference! Here’s how you’ve helped so far:
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
         
          <div
            ref={familiesRef}
            className={`p-6 bg-white rounded-lg shadow-lg stat-card ${
              selectedCard === 'families' ? 'animate__animated animate__pulse animate__infinite' : ''
            } ${familiesInView ? 'animate__animated animate__fadeInUp' : ''}`}
            onClick={() => setSelectedCard('families')}
          >
            <h3 className="mb-4 text-2xl font-semibold text-blue-600">
              {familiesInView ? <CountUp start={0} end={500} duration={2} /> : '500+'} Families Helped
            </h3>
            <p className="text-lg text-gray-700">
              We’ve delivered warmth to over 500 families in need across the region.
            </p>
          </div>

        
          <div
            ref={itemsRef}
            className={`p-6 bg-white rounded-lg shadow-lg stat-card ${
              selectedCard === 'items' ? 'animate__animated animate__pulse animate__infinite' : ''
            } ${itemsInView ? 'animate__animated animate__fadeInUp' : ''}`}
            onClick={() => setSelectedCard('items')}
          >
            <h3 className="mb-4 text-2xl font-semibold text-blue-600">
              {itemsInView ? <CountUp start={0} end={3000} duration={2} /> : '3000+'} Items Donated
            </h3>
            <p className="text-lg text-gray-700">
              Your donations have helped us distribute over 3000 items, including jackets, blankets, and more.
            </p>
          </div>

        
          <div
            ref={volunteersRef}
            className={`p-6 bg-white rounded-lg shadow-lg stat-card ${
              selectedCard === 'volunteers' ? 'animate__animated animate__pulse animate__infinite' : ''
            } ${volunteersInView ? 'animate__animated animate__fadeInUp' : ''}`}
            onClick={() => setSelectedCard('volunteers')}
          >
            <h3 className="mb-4 text-2xl font-semibold text-blue-600">
              {volunteersInView ? <CountUp start={0} end={100} duration={2} /> : '100'} Volunteers Engaged
            </h3>
            <p className="text-lg text-gray-700">
              Our community of volunteers has been working tirelessly to make sure help reaches those who need it the most.
            </p>
          </div>
        </div>

        <p className="mt-6 text-lg text-gray-700">
          But there’s still more to be done. Your donation can help us do even more. Thank you for your continued support!
        </p>
      </div>
    </section>
  );
};

export default Impact;
