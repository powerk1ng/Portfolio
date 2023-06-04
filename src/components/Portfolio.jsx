import React from "react";
import PortfolioItem from "./PortfolioItem";
import portfolioData from "../helpers/portfolioData";
import { motion } from "framer-motion";
import { container, slideFromSide } from "../helpers/motion";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-10">
      <motion.div
        className="text-center"
        variants={slideFromSide(0, 0, "-100%", "0")}
        initial="hidden"
        whileInView="show"
      >
        <h5 className="text-white/70">Check my recent works</h5>
        <h1 className="text-primary">Portfolio</h1>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 container gap-x-6 gap-y-8 mt-10"
      >
        {portfolioData.map((item) => (
          <PortfolioItem key={item.title} {...item} />
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
