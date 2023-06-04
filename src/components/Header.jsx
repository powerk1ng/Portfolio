import React from "react";
import CTA from "./CTA";
import Socials from "./Socials";
import Nav from "./Nav";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { slideFromSide, LetterContainer, item } from "../helpers/motion";
import Me from '/img/prof-img.png';

const Header = () => {
  const animateWords = ["Hello I'm", "Gündüz Mammadli", "Front-End Developer"];

  const animateText = (text) => {
    return (
      text.split("").map((char, index) => (
        <motion.span key={char + "-" + index} variants={item}>
          {char}
        </motion.span>
      ))
    )
  }

  return (
    <header className="h-screen overflow-hidden" id="home">
      <div className="container h-full relative">
        {/* top */}
        <motion.div
          className="text-center mt-4"
          variants={slideFromSide("0%", "0", "-100%")}
          initial="hidden"
          whileInView="show"
        >
          <motion.h5
            variants={LetterContainer(0, 0.05)}>
            {animateText(animateWords[0])}
          </motion.h5>

          <motion.h1
            variants={LetterContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="show"
            className="max-sm:text-3xl text-[rgba(95,178,211,0.5)]"
          >
            {animateText(animateWords[1])}
          </motion.h1>

          <motion.h5 
            variants={LetterContainer(0.2, 0.05)}
            initial="hidden"
            whileInView="show"
            className="text-white/60">
              {animateText(animateWords[2])}
            </motion.h5>
        </motion.div>

        {/* call to actions buttons */}
        <CTA />

        {/* socials */}
        <Socials />

        {/* img */}
        <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          className="bg-gradient-to-br from-primary via-blue-700 to-transparent w-[22rem] h-[28rem] absolute left-1/2 -translate-x-1/2 mt-20 rounded-t-full">
          <motion.img 
            variants={item}
            initial="hidden"
            whileInView="show"
            className="w-full h-full absolute bottom-0" src={Me}  alt="img" />
        </motion.div>

        {/* scroll btn */}
        <motion.div
          variants={slideFromSide("0", "0", "0", "75vh")}
          initial="hidden"
          animate="show"
        >
          <Link
            to="contact"
            smooth={true}
            spy={true}
            duration={300}
            className="absolute right-5 bottom-[145px] rotate-[90deg] font-light show-link cursor-pointer"
          >
            Scroll Down
          </Link>
        </motion.div>
      </div>

      <Nav />
    </header>
  );
};

export default Header;
