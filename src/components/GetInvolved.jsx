import { motion } from "framer-motion";

const GetInvolved = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="py-12 bg-gray-200 get-involved-section"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="mb-6 text-3xl font-bold text-blue-600"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Get Involved and Make a Difference
        </motion.h2>
        <motion.p
          className="mb-6 text-lg text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          There are many ways you can help this winter, whether it’s by volunteering, donating, or sharing the cause with others.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div className="p-6 bg-white rounded-lg shadow-lg involved-card" variants={cardVariants}>
            <h3 className="mb-4 text-2xl font-semibold text-blue-600">Volunteer with Us</h3>
            <p className="mb-4 text-lg text-gray-700">
              Join our team of volunteers and help us distribute donations to those who need it the most.
            </p>
            <a href="#volunteer" className="font-semibold text-blue-600 hover:text-blue-700">
              Learn More
            </a>
          </motion.div>
          <motion.div className="p-6 bg-white rounded-lg shadow-lg involved-card" variants={cardVariants}>
            <h3 className="mb-4 text-2xl font-semibold text-blue-600">Donate Now</h3>
            <p className="mb-4 text-lg text-gray-700">
              Every little bit helps! Your donation will provide warmth and support to families in need.
            </p>
            <a href="#donate" className="font-semibold text-blue-600 hover:text-blue-700">
              Donate Today
            </a>
          </motion.div>
          <motion.div className="p-6 bg-white rounded-lg shadow-lg involved-card" variants={cardVariants}>
            <h3 className="mb-4 text-2xl font-semibold text-blue-600">Spread the Word</h3>
            <p className="mb-4 text-lg text-gray-700">
              Share our mission on social media and inspire others to get involved in our cause.
            </p>
            <a href="#share" className="font-semibold text-blue-600 hover:text-blue-700">
              Share Now
            </a>
          </motion.div>
        </motion.div>

        <motion.p
          className="mt-6 text-lg text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Together, we can create a stronger, warmer community. Let’s make this winter a little brighter for everyone!
        </motion.p>
      </div>
    </motion.section>
  );
};

export default GetInvolved;
