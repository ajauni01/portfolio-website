import { motion } from "framer-motion";
import LineGradient from "../../Components/LineGradient";
import instructorImg from "../../assets/recognitionImg.png";

const Recognition = () => {
  const recognitionStyles = `mx-auto relative flex flex-col justify-end pt-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

  return (
    <section id="recognition" className="pt-10 pb-10">
      {/* Title and description div */}
      <motion.div
        className="md:w-1/3 text-center xs:text-left mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 50 },
        }}
      >
        {/* title */}
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          Professor Recommendation
        </p>
        {/* Gradient line */}
        <LineGradient width="mx-auto w-2/4" />
        {/* description */}
        <p className="mt-2">
          Endorsement Excellence: Esteemed Recommendation by Dr.Lori
          Nicholson, Professor of Computer Technology & Information Systems at
          Wayne State College
        </p>
      </motion.div>
      {/* Instructor recognition */}
      <div className="md:flex md:justify-between">
        <motion.div
          className={`${recognitionStyles}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          {/* Instructor recommendation image */}
          <img
            className="md:mt-[-150px] xs:mt-[-200px]"
            src={instructorImg}
            alt="Image of the professor recommendation"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Recognition;
