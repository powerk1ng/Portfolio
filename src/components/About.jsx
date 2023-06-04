import { GiRibbonMedal } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { AiFillFolderOpen } from "react-icons/ai";
import { motion } from "framer-motion";
import { container, item, rotation, slideFromSide } from "../helpers/motion";
import profileImg from "/img/img2.jpg";

const About = () => {
  return (
    <section id="about" className="container pt-20">
      {/* title */}
      <motion.div
        variants={slideFromSide(0, 0, "-100%", "0")}
        initial="hidden"
        whileInView="show"
        className="text-center"
      >
        <h5 className="text-white/70">Get to Know</h5>
        <h1 className="text-primary">About Me</h1>
      </motion.div>

      <div className="mt-10 grid grid-cols-2 max-lg:grid-cols-1 gap-5 max-lg:gap-y-20">
        {/* left-col*/}
        <div className="flex max-lg:w-[85%] w-[400px] h-[350px] max-lg:h-[450px] max-[500px]:h-[300px] max-lg:mx-auto rounded-xl relative">
          <motion.div
            variants={rotation}
            initial="hidden"
            whileInView="show"
            className="w-full h-auto bg-primary rounded-xl absolute -z-[1]"
          ></motion.div>
          <motion.img
            variants={rotation}
            initial="hidden"
            whileInView="show"
            className="transitioning rounded-xl rotate-12 h-full hover:rotate-0 z-[12]"
            src={profileImg}
            alt="profile-img"
          />
        </div>

        {/* right-col */}
        <motion.div
          variants={slideFromSide("100%", "0")}
          initial="hidden"
          whileInView="show"
        >
          {/* cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="flex max-sm:flex-col max-lg:justify-around max-lg:gap-y-5 gap-x-5 text-center"
          >
            {/* Experience*/}
            <motion.div
              variants={item}
              className="flex flex-col gap-y-4 items-center bg-violet-900 p-5 rounded-lg"
            >
              <GiRibbonMedal fill="#4db5ff" size={35} />
              <h2>Experience</h2>
              <h5>1 Year Working</h5>
            </motion.div>

            {/* Clients*/}
            <motion.div
              variants={item}
              className="flex flex-col gap-y-4 items-center bg-violet-900 p-5 rounded-lg"
            >
              <IoIosPeople fill="#4db5ff" size={35} />
              <h2>Clients</h2>
              <h5>200+ Worldwide</h5>
            </motion.div>

            {/*Projects*/}
            <motion.div
              variants={item}
              className="flex flex-col gap-y-4 items-center bg-violet-900 p-5 rounded-lg"
            >
              <AiFillFolderOpen fill="#4db5ff" size={35} />
              <h2>80+</h2>
              <h5>Projects completed</h5>
            </motion.div>
          </motion.div>

          {/* text */}
          <p className="lg:mt-5 mt-10 max-lg:mx-auto font-sans md:w-[85%] lg:w-full">
            As a Frontend developer, I have experience creating and maintaining
            user-facing web applications using HTML, CSS, JavaScript and React.
            I have a strong understanding of responsive design, cross-browser
            compatibility, and web accessibility standards. I have worked
            collaboratively with other developers, designers, and stakeholders
            to ensure that websites meet client and user requirements. I am
            committed to writing clean, efficient, and well-documented code, and
            staying up-to-date with the latest frontend development technologies
            and trends.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
