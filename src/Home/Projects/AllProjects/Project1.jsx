// PROJECT-01 (Chef-Recipe-Website)
import ChefRecipeModal from "../../../Components/AllModals/Chef-Recipe-Modal";
import chefRecipeImg from "../../../assets/myProjects/Chef-Recipe-Website.jpg"
import { motion } from 'framer-motion';


const Project1 = () => {
  // serverSite Code URL
  const serverSite = 'https://github.com/ajauni01/Chef-Recipe-Server-Side'
  const clientSide = 'https://github.com/ajauni01/Chef-Recipe-Client-Side'
  const liveSite = 'https://chef-recipe-website-66c1c.web.app/'

  const overlayStyles = `absolute w-full h-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  const projectTitle = "Chef-Recipe-Website"

  return <>

    <motion.div variants={projectVariant} className='relative' >
      <div className={overlayStyles}>

        <p className='text-2xl font-playfair'>{projectTitle}</p>

        <ChefRecipeModal projectTitle={projectTitle} serverSite={serverSite} clientSide={clientSide} liveSite={liveSite}></ChefRecipeModal>

      </div>
      <img src={chefRecipeImg} alt="" />
    </motion.div>

  </>
}
export default Project1;
