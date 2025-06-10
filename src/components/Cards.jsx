import React, { useState } from "react";
import { motion } from "framer-motion";
// import skip data
import { skipData, itemVariants, fadeIn, containerVariants, } from "../data/data";

export const Cards = () => {
  const [selectedSkip, setSelectedSkip] = useState(null);

  return (
    <div className="bg-[#121212] px-4 md:px-6 pb-24">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex items-center justify-center flex-col gap-6 py-4 md:py-10"
      >
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 md:py-10 gap-6">
          {skipData.map((skip) => (
            <motion.div
              variants={itemVariants}
              key={skip.id}
              whileHover={{ y: -8 }}
              className="flex flex-col justify-between bg-[#1c1c1c] rounded-xl shadow-xl p-6 space-y-2 md:space-y-4 border border-[#333333] hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <motion.div variants={fadeIn}>
                <div className="flex justify-end">
                  <p className="text-white font-semibold py-0.7 px-2 bg-blue-500 rounded-full text-center w-20">
                    {skip.size} yards
                  </p>
                </div>
                {/* img */}
                <img
                  src={skip.icon}
                  alt={`${skip.size} Yard Skip`}
                  className="img-fluid h-48 mx-auto flex items-center"
                />
                {/* size */}
                <h2 className="text-base md:text-[16px] font-semibold font-serif text-gray-300 tracking-wider mb-2 pb-2 uppercase">
                  {skip.size} Yard Skip
                </h2>
                <div className="flex flex-row gap-2 border-b border-[#333333] mb-4 py-2">
                  {/* prices */}
                  {/* font-serif */}
                  <p className="text-xl md:text-4xl font-bold text-blue-500 mb-4">
                    £{skip.price_before_vat}{" "}
                    <span className="text-base text-gray-400 font-medium">
                      {" "}
                      (ex. VAT)
                    </span>
                  </p>
                  {/* hire_period */}
                  <div className="flex items-center text-gray-300 mb-2 ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{skip.hire_period} Days Hire</span>
                  </div>
                </div>
                {/* roadworthy || !roadworthy */}
                <div className="flex items-center text-gray-100 mb-2">
                  {skip.allowed_on_road ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586l-1.293-1.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  <span>
                    {skip.allowed_on_road
                      ? "On-Road Placement"
                      : "Off-Road Placement Only"}
                  </span>
                </div>
                {/* heavy_waste */}
                <div className="flex items-center text-gray-100 border-b border-[#333333] space-y-2 md:space-y-4 mb-4">
                  {skip.allows_heavy_waste ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586l-1.293-1.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  <span className="mb-4">
                    {skip.allows_heavy_waste
                      ? "Heavy Waste Allowed"
                      : "No Heavy Waste"}
                  </span>
                </div>
              </motion.div>
              {/* cta */}
              <motion.div className="flex items-center justify-center">
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1.3 },
                  }}
                  whileTap={{ scale: 0.9, rotate: 3 }}
                  className={`w-64 capitalize font-semibold text-base py-3 px-4 rounded-md ${selectedSkip && selectedSkip.id === skip.id
                    ? "bg-green-500 text-white"
                    : "bg-blue-500 text-white hover:bg-indigo-700"
                    }`}
                  onClick={() => setSelectedSkip(skip)}
                >
                  {selectedSkip && selectedSkip.id === skip.id
                    ? "Selected"
                    : "Select this skip"}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
        {/* selected skip details */}
        {selectedSkip && (
          <div
            className="w-full bg-[#232323] border-t border-[#333333] py-4 z-40 px-4 flex justify-center"
            style={{
              position: "fixed",
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: "none",
            }}
          >
            <div
              style={{ pointerEvents: "auto" }}
              className="flex flex-col md:flex-row items-center justify-center w-full max-w-3xl gap-12"
            >
              <div className="flex flex-col items-center md:items-start">
                <span className="text-lg text-white font-bold mr-4">
                  {selectedSkip.size} Yard Skip
                </span>
                <p className="flex flex-row gap-2">
                  <span className="text-lg text-blue-500 font-bold">
                    £{selectedSkip.price_before_vat}{" "}
                  </span>
                  <span className="text-gray-400 text-base font-medium">
                    for a{" "}
                  </span>
                  <span className="text-base text-gray-400 font-medium">
                    {selectedSkip.hire_period} Day Hire
                  </span>
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center mr-4 md:mr-14">
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1.3 },
                  }}
                  whileTap={{ scale: 0.9, rotate: 3 }}
                  className="bg-gray-700 text-white font-semibold px-6 py-2 rounded-md"
                  onClick={() => setSelectedSkip(null)}
                >
                  Back
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1.3 },
                  }}
                  whileTap={{ scale: 0.9, rotate: 3 }}
                  className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md"
                >
                  Continue
                </motion.button>
              </div>
            </div>
          </div>
        )}
      </motion.section>
    </div>
  );
};

export default Cards;
