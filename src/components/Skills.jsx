import { motion } from "framer-motion";
import { BsCodeSlash } from "react-icons/bs";
import { slideFromSide } from "../helpers/motion";
import DBImg from "/icons/database.png";
import UxImg from "/icons/ux.svg";
import WebImg from "/icons/web.svg";

const MySkills = () => {
  return (
    <section id="skills" className="flex my-10">
      <div className="w-full p-8">
        <div className="text-center">
          <motion.h1
            variants={slideFromSide(0, 0, "-100%", "0")}
            initial="hidden"
            whileInView="show"
            className="text-3xl font-bold text-primary"
          >
            My Skills
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-12 auto-rows-auto">
          <motion.div
            variants={slideFromSide(0, 0, "100%", 0, 0.1, 3)}
            initial="hidden"
            whileInView="show"
            className="bg-violet-900 rounded-lg shadow-md hover:rotate-3"
          >
            <div className="p-4">  
              <img
                src={WebImg}
                alt="web image"
                className="w-32 h-auto mx-auto py-6"
              />
              <h3 className="text-xl font-bold text-primary text-center italic mb-4">
                Frontend Development
              </h3>
              <ul className="flex justify-around">
                <div className="flex flex-col gap-4">
                  <li className="flex items-center text-white">
                    <BsCodeSlash className="mr-2" fill="#4db5ff" />
                    HTML
                  </li>
                  <li className="flex items-center text-white">
                    <BsCodeSlash className="mr-2" fill="#4db5ff" />
                    CSS / SCSS
                  </li>
                  <li className="flex items-center text-white">
                    <BsCodeSlash className="mr-2" fill="#4db5ff" />
                    Bootstrap
                  </li>
                  <li className="flex items-center text-white">
                    <BsCodeSlash className="mr-2" fill="#4db5ff" />
                    TailwindCSS
                  </li>
                </div>

                <div className="flex flex-col gap-4">
                  <li className="flex items-center text-white">
                    <BsCodeSlash className="mr-2" fill="#4db5ff" />
                    Jquery
                  </li>
                  <li className="flex items-center text-white">
                    <BsCodeSlash className="mr-2" fill="#4db5ff" />
                    JavaScript
                  </li>
                  <li className="flex items-center text-white">
                    <BsCodeSlash className="mr-2" fill="#4db5ff" />
                    React
                  </li>
                </div>
              </ul>
            </div>
          </motion.div>
          <motion.div
            className="bg-violet-900 rounded-lg shadow-md"
            variants={slideFromSide(0, 0, "100%", 0, 0.3, 3.5)}
            initial="hidden"
            whileInView="show"
          >
            <div className="p-4">
            <img
                src={UxImg}
                alt="ux img"
                className="w-32 h-auto mx-auto py-4"
              />
              <h3 className="text-xl font-bold text-primary text-center italic mb-4">
                Other Skills
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center text-white">
                  <BsCodeSlash className="mr-2" fill="#4db5ff" />
                  Git
                </li>
                <li className="flex items-center text-white">
                  <BsCodeSlash className="mr-2" fill="#4db5ff" />
                  Responsive Web Design
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            variants={slideFromSide(0, 0, "100%", 0, 0.35, 5)}
            initial="hidden"
            whileInView="show"
            className="bg-violet-900 rounded-lg shadow-md duration-300"
          >
            <div className="p-4">
            <img
                src={DBImg}
                alt="database img"
                className="w-32 h-auto mx-auto py-4"
              />
              <h3 className="text-xl font-bold text-primary text-center italic mb-4">
                Database
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center text-white">
                  <BsCodeSlash className="mr-2" fill="#4db5ff" />
                  MongoDB
                </li>
                <li className="flex items-center text-white">
                  <BsCodeSlash className="mr-2" fill="#4db5ff" />
                  Firebase
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
