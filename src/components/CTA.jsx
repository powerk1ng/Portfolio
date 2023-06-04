import React from 'react'
import CV from '../assets/CV.pdf';
import { btnsMotion } from '../helpers/motion';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <div className='flex gap-x-2 mt-10 justify-center'>
        <motion.a
          variants={btnsMotion}
          initial="hidden"
          whileInView="show" 
          href={CV} className="btn" download>Download CV
          </motion.a>

        <motion.a 
          variants={btnsMotion}
          initial="hidden"
          whileInView="show"
          href="/#contact" className='btn-primary btn'>Let's Talk</motion.a>
    </div>
  )
}

export default CTA