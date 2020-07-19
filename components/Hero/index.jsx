import React from 'react';

import { FaNodeJs, FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';

const Hero = () => {
	return (
		<div className='flex flex-wrap items-center justify-center px-10 py-5 m-auto'>

			<div className='flex flex-col items-start p-4 leading-snug md:w-1/2 gap-4 xl:p-12 lg:p-12'>
				<span className='inline-block w-auto px-2 py-1 text-xs text-center rounded-sm text-gray1 bg-green-lighter'>Web Developer</span>
				<h2 className='text-3xl'>Hello, I’m Sinésio Neto, a freelance Fullstack Developer</h2>
				<p className='text-sm text-gray2'>I enjoy building web solutions.</p>
				<a className='px-4 py-2 mt-5 border-2 rounded-sm hover:bg-green-lighter hover:text-gray1 text-green-lighter border-green-lighter' href='#'>Say hi!</a>
			</div>

			<div className='flex items-center justify-end p-4 md:-mt-10 md:w-1/2 gap-8 xl:p-12 lg:p-12'>
				<DiJavascript1 size={130} className='opacity-25' />
				<FaNodeJs size={130} className='opacity-25' />
				<FaReact size={130} className='opacity-25' />
			</div>

		</div>
	);
};

// button 'say hi'
// <a className='px-4 py-2 mt-5 border-2 rounded-sm hover:bg-green-lighter hover:text-gray1 text-green-lighter border-green-lighter' href='#'>Say hi!</a>

export default Hero;
