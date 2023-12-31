import useMediaQuery from "../../hooks/useMediaQuery";
import profileImg from "../../assets/profile-img.png";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsDownload } from "react-icons/bs";
import { Link } from "react-scroll";
import SocialMediaIcons from "../../Components/SocialMediaIcons";
import React from "react";
import TextTransition, { presets } from "react-text-transition";
import Resume from "../../assets/Resume of Ajharul Islam Aunik.pdf";

const LandingPage = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  // titles array
  const titles = [
    "Web Developer",
    "Full Stack Developer",
    "Tech Enthusiast",
    "Code Lover",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Interface Designer",
    "UI/UX Designer",
    "React Developer",
    "Node Developer",
    "Innovation Enthusiast",
  ];

  // current title
  const [index, setIndex] = React.useState(0);
  // setInterval function to change the title every 3 seconds
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  // function to handle resume download
  const handleResumeDownload = () => {
    // Create a new hidden anchor element
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Resume of Ajharul Islam";
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-40">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[600px] before:w-full before:max-w-[500px] before:h-full before:border-2 before:border-blue before:z-[-1]">
            <img
              className="hover:filter hover:saturate-150 transition duration-500  w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px] bg-opacity-5"
              src={profileImg}
              alt="profile"
            />
          </div>
        ) : (
          <img
            className="hover:filter hover:saturate-150 transition duration-500  w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px] bg-opacity-5"
            src={profileImg}
            alt="profile"
          />
        )}
      </div>

      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32 -ms-5 md:ms-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 50 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-start">
            Ajharul{" "}
            <span className="xs:relative xs:text-white xs:font-semibold z-20 before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]">
              {" "}
              Islam Aunik
            </span>
          </p>

          {/* Developer titles with text transition */}
          <p className="mt-12 mb-10 text-start">
            <TextTransition springConfig={presets.wobbly}>
              <span className="text-5xl text-pink-500">
                {titles[index % titles.length]}
              </span>
            </TextTransition>
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 50 },
          }}
        >
          {/* CONTACT */}
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>

          {/* DOWNLOAD RESUME */}
          <Link
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            href=""
            onClick={handleResumeDownload}
            to=""
            smooth={true}
            duration={500}
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
              Resume <BsDownload className="ms-2 text-xl" />
            </div>
          </Link>
        </motion.div>

        {/* SOCIAL MEDIA ICONS */}
        <motion.div
          className="flex justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 50 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default LandingPage;