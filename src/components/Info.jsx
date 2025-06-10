import React from 'react';
import { motion } from "framer-motion";
// import skip data
import { itemVariants, fadeIn, containerVariants, } from "../data/data";

export const Info = () => {
    return (
        <div className="bg-[#121212] px-4 md:px-6">
            <motion.section
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex items-center justify-center flex-col gap-6 py-4 md:py-10"
            >
                <motion.div
                    variants={itemVariants}
                    className="text-center space-y-4 md:space-y-6"
                >
                    <motion.h2
                        variants={fadeIn}
                        className="font-bold text-xl md:text-[60px] bg-gradient-to-r from-white via-blue-500 to-[#d6b027] bg-clip-text text-transparent"
                    >
                        Choose Your Skip Size
                    </motion.h2>
                    <motion.p
                        variants={fadeIn}
                        className="text-[#757575] font-semibold text-base md:text-xl"
                    >
                        Select the skip size that best suits your needs
                    </motion.p>

                    <div className="flex items-center gap-2 mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                            />
                        </svg>
                        <h2 className="text-2xl font-bold text-white">
                            What You Need to Know Before Booking
                        </h2>
                    </div>
                    <div className="space-y-4 text-start">
                        <div className="bg-red-900/40 border-l-4 border-red-500 p-4 rounded">
                            <h3 className="text-lg font-semibold text-red-400 mb-1">Road Placement Not Available</h3>
                            <p className="text-gray-300">
                                These can not be placed on public roads due to road safety regulations. Please ensure you have adequate private space or choose a different skip size.
                            </p>
                        </div>
                        <div className="bg-blue-900/40 border-l-4 border-blue-500 p-4 rounded">
                            <h3 className="text-lg font-semibold text-blue-400 mb-1">Permit Required</h3>
                            <p className="text-gray-300">
                                A permit is required when placing a skip on a public road. We'll handle the permit application process for you.
                            </p>
                        </div>
                        <div className="bg-yellow-900/40 border-l-4 border-yellow-500 p-4 rounded">
                            <h3 className="text-lg font-semibold text-yellow-400 mb-1">Pricing & Delivery</h3>
                            <p className="text-gray-300">
                                All prices include  <span className='font-bold'>VAT at 20%.</span> Delivery to <span className='font-bold'>NR32 area.</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.section>
        </div>
    );
};
export default Info;