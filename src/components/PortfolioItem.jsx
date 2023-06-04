import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { item as motionItem } from '../helpers/motion';

const PortfolioItem = (item) => {
  return (
    <motion.div 
      variants={motionItem}
      className='p-5 rounded-xl bg-variant hover:-translate-y-2 duration-500'>
        <img className='rounded-xl h-64 object-cover' src={item.img} alt={item.title} />
        <div>
            <h2 className='text-2xl text-center my-5'>{item.title}</h2>
            
            {/* buttons */}
            <div className='flex gap-x-2 justify-between'>
                <Link target="_blank" to={item.github} className='btn bg-bg'>Github</Link>
                <Link target="_blank" to={item.web} className='btn btn-primary'>Live Demo</Link>
            </div>
        </div>
    </motion.div>
  )
}

export default PortfolioItem