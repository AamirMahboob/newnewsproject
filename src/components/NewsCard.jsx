import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for animation

const NewsCard = ({ data }) => {
  return (
    <motion.article
      className="overflow-hidden rounded-lg shadow transition-all duration-300 hover:shadow-xl hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div className="bg-white p-4 sm:p-6">
        <time datetime={data?.date} className="block text-xs text-gray-500">
          {new Date(data?.date).toLocaleDateString()}
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900 font-semibold hover:text-blue-600 transition duration-200">
            {data?.name}
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm text-gray-500">
          {data?.description}
        </p>
        
        <Link to={data?.link} target="_blank" className="mt-4 inline-block text-blue-500 hover:underline">
          Read More
        </Link>
      </div>
    </motion.article>
  );
};

export default NewsCard;
