import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-[#121212] px-4 md:px-6 border-t border-[#333333] shadow-2xl'>
      <div className='flex items-center justify-center text-gray-300 text-base py-4 md:py-10'>
        <p className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M8.257 3.099c.764-1.36 2.722-1.36 3.486 0l6.518 11.614c.75 1.338-.213 3.037-1.742 3.037H3.48c-1.53 0-2.492-1.7-1.742-3.037L8.257 3.1zm1.743 2.401a1 1 0 00-.894.553l-6.518 11.614A1 1 0 003.48 17h13.04a1 1 0 00.892-1.433L9.894 5.953a1 1 0 00-.894-.553zm.007 4.5a1 1 0 00-.993.883l-.007.117v3a1 1 0 001.993.117l.007-.117v-3a1 1 0 00-1-1zm.007 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
        </p>
      </div>
    </div>
  )
}

export default Footer;