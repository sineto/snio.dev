import React from 'react';

import { FaNodeJs, FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';

const Hero = () => {
	return (
		<div className='flex flex-wrap items-center justify-center p-3 m-auto md:px-10 md:py-5'>

			<div className='flex flex-col items-start p-4 leading-snug lg:w-1/2 lg:p-12 space-y-5'>
				<span className='inline-block w-auto px-2 py-1 text-xs text-center rounded-sm text-gray1 bg-green-lighter'>Web Developer</span>
				<h2 className='text-3xl'>Hello, I’m Sinésio Neto, a freelance Fullstack Developer</h2>
				<p className='text-sm text-gray2'>I enjoy building web solutions.</p>
				<a className='px-4 py-2 mt-5 border-2 rounded-sm hover:bg-green-lighter hover:text-gray1 text-green-lighter border-green-lighter' href='mailto:sineto.dev@gmail.com'>Say hi!</a>
			</div>

			<div className='flex items-center justify-end px-2 py-4 lg:-mt-10 lg:w-1/2 space-x-8 xl:p-12'>
				<DiJavascript1 className='text-6xl opacity-25 xm:text-8xl' />
				<FaNodeJs className='text-6xl opacity-25 xm:text-8xl' />
				<FaReact className='text-6xl opacity-25 xm:text-8xl' />
			</div>

		</div>
	);
};

// button 'say hi'
// <a className='px-4 py-2 mt-5 border-2 rounded-sm hover:bg-green-lighter hover:text-gray1 text-green-lighter border-green-lighter' href='#'>Say hi!</a>

export default Hero;
