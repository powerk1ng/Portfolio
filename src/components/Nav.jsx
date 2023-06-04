import { AiOutlineHome, AiOutlineBook, AiOutlineUser } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { navMotion } from "../helpers/motion";

const Nav = () => {
  return (
    <motion.nav
      variants={navMotion}
      initial="hidden"
      animate="show"
      className="bottom-2 left-1/2 -translate-x-1/2 z-50 fixed flex sm:gap-x-8 gap-x-6 bg-black/30 py-2 sm:px-5 px-2 rounded-full backdrop-blur-lg"
    >
    {/* home */}
      <Link
        to="home"
        smooth={true}
        spy={true}
        duration={300}
        className="nav-rounded group"
        activeClass="active"
      >
        <AiOutlineHome fill="white" size={20} />
        <span className="links-text">Home</span>
      </Link>

      {/* about */}
      <Link
        to="about"
        smooth={true}
        spy={true}
        duration={300}
        className="nav-rounded group"
        activeClass="active"
      >
        <AiOutlineUser fill="white" size={20} />
        <span className="links-text">About</span>
      </Link>

      {/* skills */}
      <Link
        to="skills"
        smooth={true}
        spy={true}
        duration={300}
        className="nav-rounded group"
        activeClass="active"
      >
        <AiOutlineBook fill="white" size={20} />
        <span className="links-text">Skills</span>
      </Link>

      {/* portfolio */}
      <Link
        to="portfolio"
        smooth={true}
        spy={true}
        duration={300}
        className="nav-rounded group"
        activeClass="active"
      >
        <FaHandshake fill="white" size={20} />
        <span className="links-text">Works</span>
      </Link>

      {/* contact */}
      <Link
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        className="nav-rounded group"
        activeClass="active"
      >
        <BsChatDots fill="white" />
        <span className="links-text">Contact</span>
      </Link>
    </motion.nav>
  );
};

export default Nav;
