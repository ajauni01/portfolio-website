import { motion } from "framer-motion";
import Modal from "../../../Components/Modal";
import toyMarketPlaceImg from "../../../assets/myProjects/Toy-Marketplace-Website.jpg";

const Project2 = () => {
  const serverSite = "https://github.com/ajauni01/Toy-Marketplace-Server-Side";
  const clientSide = "https://github.com/ajauni01/Toy-Marketplace-Client-Side";
  const liveSite = "https://toymarketplace-eccad.web.app/";

  const overlayStyles = `absolute w-full h-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const projectTitle = "Toy Marketplace Website";

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{projectTitle}</p>
        <Modal
          id="my_modal_2"
          projectTitle={projectTitle}
          serverSite={serverSite}
          clientSide={clientSide}
          liveSite={liveSite}
        />
      </div>
      <img src={toyMarketPlaceImg} alt="" />
    </motion.div>
  );
};
export default Project2;
