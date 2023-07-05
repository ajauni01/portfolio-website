import useMediaQuery from '../../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import LineGradient from '../../Components/LineGradient';
import skillImg from "../../assets/skills-image.png"
import { CircularProgressbar } from 'react-circular-progressbar';
import VisibilitySensor from "react-visibility-sensor";
import '../../Components/ProgressProvider/ProgressProvider.css'

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return (
    <section id='skills' className='pt-10 pb-80'>
      {/* HEADER & IMAGE SECTION FOR MEDIUM SCREENS */}
      <div className='md:flex md:justify-between md:gap-16 mt-32'>
        <motion.div
          className='md:w-1/3'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 50 }
          }}
        >
          <p className='font-playfair font-semibold text-4xl mb-5'>
            MY <span className='text-red'>SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className='mt-10 mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, impedit.
          </p>
        </motion.div>
        <div className='mt-16 md:mt-0'>{
          isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">

              <img className="hover:filter hover:saturate-150 transition duration-500 z-10" src={skillImg} alt="skills" />
            </div>) :
            (<div>
              <img className="hover:filter hover:saturate-150 transition duration-500 z-10" src={skillImg} alt="skills" />
            </div>)}
        </div>
      </div>

      {/* SKILLS */}
      <div className='md:flex md:justify-between mt-16 gap-32'>
        {/* MongoDB */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 50 }
          }}>
          <div className='relative h-32'>
            <div >
              <p className='font-playfair font-semibold text-5xl'>M</p>
              <p className='font-playfair font-semibold text-3xl mt-3 text-yellow'>MongoDB</p>

              {/* CIRCULAR PROGRESS BAR */}
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible ? 60 : 0;
                  return (
                    <div className='w-1/2 md:w-3/4 h-32  absolute right-0 top-0 z-[-1]'>
                      <CircularProgressbar

                        value={percentage}
                        text={`${percentage}%`}
                      />
                    </div>
                  );
                }}
              </VisibilitySensor>

              {/* CIRCULAR PROGRESS BAR ENDS */}
            </div>
          </div>
          <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, amet!</p>
        </motion.div>

        {/* Express.js */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 50 }
          }}>
          <div className='relative h-32'>
            <div >
              <p className='font-playfair font-semibold text-5xl'>E</p>
              <p className='font-playfair font-semibold text-3xl mt-3 text-yellow'>Express.js</p>

              {/* CIRCULAR PROGRESS BAR */}
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible ? 60 : 0;
                  return (
                    <div className='w-1/2 md:w-3/4 h-32  absolute right-0 top-0 z-[-1]'>
                      <CircularProgressbar

                        value={percentage}
                        text={`${percentage}%`}
                      />
                    </div>
                  );
                }}
              </VisibilitySensor>

              {/* CIRCULAR PROGRESS BAR ENDS */}
            </div>
          </div>
          <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, amet!</p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 50 }
          }}>
          <div className='relative h-32'>
            <div >
              <p className='font-playfair font-semibold text-5xl'>R</p>
              <p className='font-playfair font-semibold text-3xl mt-3 text-yellow'>React.js</p>

              {/* CIRCULAR PROGRESS BAR */}
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible ? 70 : 0;
                  return (
                    <div className='w-1/2 md:w-3/4 h-32  absolute right-0 top-0 z-[-1]'>
                      <CircularProgressbar

                        value={percentage}
                        text={`${percentage}%`}
                      />
                    </div>
                  );
                }}
              </VisibilitySensor>

              {/* CIRCULAR PROGRESS BAR ENDS */}
            </div>
          </div>
          <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, amet!</p>
        </motion.div>
        {/* Node.js */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 50 }
          }}>
          <div className='relative h-32'>
            <div >
              <p className='font-playfair font-semibold text-5xl'>N</p>
              <p className='font-playfair font-semibold text-3xl mt-3 text-yellow'>Node.js</p>

              {/* CIRCULAR PROGRESS BAR */}
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible ? 70 : 0;
                  return (
                    <div className='w-1/2 md:w-3/4 h-32  absolute right-0 top-0 z-[-1]'>
                      <CircularProgressbar

                        value={percentage}
                        text={`${percentage}%`}
                      />
                    </div>
                  );
                }}
              </VisibilitySensor>

              {/* CIRCULAR PROGRESS BAR ENDS */}
            </div>
          </div>
          <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, amet!</p>
        </motion.div>

      </div>

    </section>
  );
};

export default MySkills;