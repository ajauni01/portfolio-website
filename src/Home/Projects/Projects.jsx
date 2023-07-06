import { motion } from 'framer-motion';
import LineGradient from '../../Components/LineGradient';
import Project1 from './AllProjects/Project1';
import Project2 from './AllProjects/Project2';
import OtherModal from '../../Components/AllModals/OtherModal';
import sportsAcademyHomeImg from "../../assets/myProjects/PowerPlay-sports-website-home.jpg"
import sportsAcademyAdminImg from "../../assets/myProjects/PowerPlay-sports-website-admin-dashboard.jpg"

const container = {
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

// // PROJECT-03 (PowerPlay Sports Academy)
const Project3 = ({ title }) => {
  const serverSite = 'https://github.com/ajauni01/Sports-Academy-Server-Side'
  const clientSide = 'https://github.com/ajauni01/Sports-Academy-Client-Side'
  const liveSite = 'https://powerplay-sports-academy.web.app/'
  const overlayStyles = `absolute w-full h-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  const projectTitle = title.split(" ").join("-").toLowerCase();

  console.log('lowercase project title', projectTitle)

  return (
    <motion.div variants={projectVariant} className='relative' >
      <div className={overlayStyles}>
        <p className='text-2xl font-playfair'>{title}</p>
        <OtherModal id="my_modal_7" projectTitle="PowerPlay Sports Academy" serverSite={serverSite} clientSide={clientSide} liveSite={liveSite}></OtherModal>
      </div>
      <img src={sportsAcademyHomeImg} alt="" />
    </motion.div>
  )
}
// // PROJECT-04 (PowerPlay Sports Academy Admin)
const Project4 = ({ title }) => {
  const serverSite = 'https://github.com/ajauni01/Sports-Academy-Server-Side'
  const clientSide = 'https://github.com/ajauni01/Sports-Academy-Client-Side'
  const liveSite = 'https://powerplay-sports-academy.web.app/'
  const overlayStyles = `absolute w-full h-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  const projectTitle = title.split(" ").join("-").toLowerCase();

  console.log('lowercase project title', projectTitle)

  return (
    <motion.div variants={projectVariant} className='relative' >
      <div className={overlayStyles}>
        <p className='text-2xl font-playfair'>{title}</p>
        <OtherModal id="my_modal_10" projectTitle={title} serverSite={serverSite} clientSide={clientSide} liveSite={liveSite}></OtherModal>
      </div>
      <img src={sportsAcademyAdminImg} alt="" />
    </motion.div>
  )
}

const Projects = () => {

  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className='md:w-2/4 mx-auto text-center'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 50 }
        }}>
        <div>
          <p className='font-playfair font-semibold text-4xl'>
            <span className='text-red'>PRO</span>JECTS
          </p>
          <div className='flex justify-center mt-5'>
            <LineGradient width='w-1/3' />
          </div>
        </div>

        <p className='mt-12 mb-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, laudantium?</p>
      </motion.div>

      {/* PROJECTS DETAILS */}
      <div className='flex justify-center'>
        <motion.div
          className='sm:grid sm:grid-cols-3'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}>

          {/* ROW-1 */}
          <div className='flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
            BEAUTIFUL USER INTERFACES
          </div>
          <Project1></Project1>
          <Project2></Project2>
          <Project3 title="PowerPlay Sports Academy (Home)" />
          < Project4 title="PowerPlay Sports Academy (Admin)" ></Project4>

          <div className='flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
            SMOOTH USER EXPERIENCE
          </div>

        </motion.div>
      </div>

    </section>
  );
};

export default Projects;