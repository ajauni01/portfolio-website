import { motion } from 'framer-motion';
import LineGradient from '../../../Components/LineGradient';


const Recognition = () => {

  const recognitionStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end pt-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`

  return (
    <section id="recognition" className="pt-32 pb-16">
      <motion.div
        className='md:w-1/3 text-center md:text-left'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 50 }
        }}
      >
        <p className='font-playfair font-semibold text-4xl mb-5 text-red'>
          Instructor Recommendation
        </p>
        <LineGradient width="mx-auto w-2/4" />
        <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, impedit.
        </p>
      </motion.div>
      {/* RECOGNITION */}
      <div className='md:flex justify-start md:justify-center gap-8'>
        <motion.div
          className={`bg:blue ${recognitionStyles}before::content-person1 before:md:content-person1`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
          }}
        >

        </motion.div>
      </div>

    </section>
  );
};

export default Recognition;