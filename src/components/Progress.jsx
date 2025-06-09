import React from 'react'
import {steps} from '../data/data';

export const Progress = () => {
  return (
    <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-[#0037c2] scrollbar-track-transparent bg-[#1c1c1c] border-b border-[#333333] shadow-2xl">
      <ol className="flex items-center justify-center min-w-max text-md md:text-xl font-medium text-white text-center py-6 md:py-8 gap-6 px-4">
        {steps.map((step, idx) => (
          <li
            key={step.label}
            className={
              `progress-hover flex items-center text-white font-semibold` +
              (idx !== steps.length - 1
                ? (idx === 0
                  ? " after:content-[''] after:w-[64px] after:h-px after:bg-[#0037c2] after:inline-block after:mx-4 xl:after:mx-10"
                  : " after:content-[''] after:w-[64px] after:h-px after:bg-[#757575] after:inline-block after:mx-4 xl:after:mx-10")
                : "")
              + (idx === 0 ? ' pl-2' : '')
              + (idx === steps.length - 1 ? ' pr-2' : '')
              + (['Permit Check', 'Choose Date', 'Payment'].includes(step.label) ? ' cursor-not-allowed' : ' cursor-pointer')
            }
          >
            <span className={`flex items-center whitespace-nowrap${idx > 2 ? ' text-[#757575] font-bold' : ''}` +
              (['Permit Check', 'Choose Date', 'Payment'].includes(step.label) ? '' : ' progress-shadow')
            }>
              <img src={step.icon} alt={step.label + ' icon'} className="w-6 h-6 me-2.5" />
              {step.label}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Progress