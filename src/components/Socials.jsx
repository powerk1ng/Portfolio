import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slideFromSide } from '../helpers/motion';

const Socials = () => {
  return (
    <motion.div 
      variants={slideFromSide('0', '0', '-75vh', '0')}
      initial="hidden"
      animate="show"
      className='show-link flex-col gap-[2.5rem] absolute left-5 bottom-20 items-center z-10'>
        <Link target="_blank" to="https://github.com/powerk1ng"><BsGithub/></Link>
        <Link target="_blank" to="https://linkedin.com"><BsLinkedin/></Link>
        <div className='bg-primary h-8 w-[2px]'></div>
    </motion.div>
  )
}   

export default Socials