import { MdOutlineEmail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useRef, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

import emailjs from "emailjs-com";
import emailConfig from "../../emailAPI";
import { motion } from "framer-motion";
import { slideFromSide } from "../helpers/motion";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const resetForm = () => {
    setTimeout(() => {
      setError("");
      setStatus("");
    }, 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        emailConfig.service_id,
        emailConfig.template_id,
        form.current,
        emailConfig.public_key
      )
      .then(
        (result) => {
          setStatus(result.status);
          setLoading(false);

          if (result.status === 200) {
            form.current.reset();
            resetForm();
          }
        },
        (error) => {
          setLoading(false);
          setStatus(null);
          form.current.reset();
          setError(error.text);
        }
      );
  };

  return (
    <section id="contact" className="container py-10">
      <motion.div
        className="text-center"
        variants={slideFromSide(0, 0, "-100%", "0")}
        initial="hidden"
        whileInView="show"
      >
        <h5 className="text-white/70">Get in touch</h5>
        <h1 className="text-primary">Contact Me</h1>
      </motion.div>

      <div className="flex md:justify-between max-md:flex-col max-md: gap-y-8 mt-8">
        {/* contact ways */}
        <motion.div
          variants={slideFromSide("-100%")}
          initial="hidden"
          whileInView="show"
          className="flex flex-col md:gap-8 gap-y-6"
        >
          {/* email */}
          <div className="flex flex-col gap-y-3 items-center bg-violet-900 p-5 rounded-lg hover:bg-variant duration-300">
            <MdOutlineEmail className="text-3xl" />
            <h4>Email</h4>
            <h5 className="">gunduz.mammadli@hotmail.com</h5>
            <a target="_blank" href="mailto:gunduz.mammadli@hotmail.com">
              Send a message
            </a>
          </div>

          {/* whatsapp or mobile */}
          <div className="flex flex-col gap-y-3 items-center bg-violet-900 p-5 rounded-lg hover:bg-variant duration-300">
            <AiOutlineWhatsApp className="text-3xl" />
            <h4>WhatsApp</h4>
            <h5>+994707189628</h5>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone+994707189628"
            >
              Send a message
            </a>
          </div>

          {/* Linkedin */}
          <div className="flex flex-col gap-y-3 items-center bg-violet-900 p-5 rounded-lg hover:bg-variant duration-300">
            <SlSocialLinkedin className="text-3xl" />
            <h4>Linkedin</h4>
            <h5>Gündüz Mammadli</h5>
            <a
              target="_blank"
              href="https://linkedin.com/in/gunduz-mammadli-bb74a7149"
            >
              Send a message
            </a>
          </div>
        </motion.div>

        {/* contact form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={slideFromSide("100%")}
          initial="hidden"
          whileInView="show"
          className="flex flex-col md:w-[50%] gap-5 relative"
        >
          <input
            type="text"
            name="name"
            placeholder="Your full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            disabled={loading ? true : false}
            className={`btn btn-primary ${loading ? "opacity-[0.5]" : ""}`}
            type="submit"
          >
            Send Message
          </button>
          {/* loader */}
          <div className="absolute bottom-[80px] md:top-[58%] right-2">
            {loading && (
              <BallTriangle
                height={50}
                width={50}
                radius={5}
                color="#4db5ff"
                ariaLabel="ball-triangle-loading"
                visible={true}
              />
            )}
          </div>
          {/* pop-up message */}
          {status === 200 && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-green-400 text-white rounded-md font-bold text-center">
              Message was sent successfully! Thank you!
            </div>
          )}

          {error && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-red-400 text-white rounded-md font-bold text-center">
              {error}
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
