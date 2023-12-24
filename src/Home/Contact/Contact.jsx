import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import LineGradient from "../../Components/LineGradient";
import contactImg from "./../../../src/assets/myProjects/contact-image.jpeg";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    // clear the form upon clickng the back button
    window.onbeforeunload = () => {
      for (const form of document.getElementsByTagName("form")) {
        form.reset();
      }
    };

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-48">
      {/* HEADINGS */}
      <motion.div
        className="flex md:justify-center xs:justify-start w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 50 },
        }}
      >
        <p className="font-playfair font-semibold md:text-4xl xs:text-3xl basis-1/2">
          <span className="text-yellow">CONTACT ME </span> TO GET STARTED
          <LineGradient className="basis-1/2" />
        </p>

        {/* <div className="flex md:justify-end my-5">
          <LineGradient width="w-1/2" />
        </div> */}
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        {/* IMAGE */}
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={contactImg} alt="contact" />
        </motion.div>

        {/* FORM */}
        <motion.div
          className="basis-1/2 mt-10 md:mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            onSubmit={onSubmit}
            action="https://formspree.io/f/xeqyjnzj"
            method="POST"
          >
            {/* NAME */}
            <input
              type="text"
              className="w-full bg-blue font-semibold placeholder-deep-blue text-black  p-3"
              placeholder="NAME"
              {...register("name", { required: true, maxLength: 100 })}
            />
            {errors.name && (
              <p className="text-red">
                {errors.name.type === "required" && "NAME is required"}
                {errors.name.type === "maxLength" &&
                  "Max Length is 100 characters"}
              </p>
            )}

            {/* EMAIL */}
            <input
              type="email"
              className="w-full bg-blue font-semibold placeholder-deep-blue text-black p-3 mt-5"
              placeholder="EMAIL"
              {...register("email", { required: true, maxLength: 100 })}
            />
            {errors.email && (
              <p className="text-red">
                {errors.email.type === "required" && "EMAIL field is required"}
              </p>
            )}

            {/* MESSAGE */}
            <textarea
              className="w-full bg-blue font-semibold placeholder-deep-blue text-black p-3 mt-5"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", { required: true, maxLength: 2000 })}
            />
            {errors.message && (
              <p className="text-red">
                {errors.message.type === "required" &&
                  "MESSAGE field is required"}
                {errors.message.type === "maxLength" &&
                  "Max Length is 2000 characters"}
              </p>
            )}

            <button
              type="submit"
              className="p-5 bg-yellow font-semibold text-deep-blue hover:bg-red hover:text-white transition duration-500"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
