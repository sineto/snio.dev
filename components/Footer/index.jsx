import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { MdPhonelinkRing } from 'react-icons/md';

const Footer = () => {
	return (
		<>
			<div className='flex flex-wrap items-center justify-center p-8 sm:justify-between xm:p-12 bg-gray0'>
				<div className='flex flex-col items-center order-last p-5 sm:p-0 space-y-3 xm:order-first'>
					<a href='https://snio.now.sh' className='block'>
						<img className='max-w-vs' src='/images/snio-logo.svg' />
					</a>
					<ul className='flex space-x-4'>
						<li>
							<FaGithub />
						</li>
						<li>
							<FaLinkedinIn />
						</li>
						<li>
							<FaTelegramPlane />
						</li>
					</ul>
				</div>
				<div className=''>
					<span className='block mb-3 text-gray2 text-tiny'>
						Information
					</span>
					<span className='block mb-1 text-sm text-gray2'>
						Want to hire me? Let's take a chat.
					</span>
					<ul>
						<li className='flex items-center sm:text-xl space-x-2'>
							<FaEnvelope className='inline-block'/>
							<a href='#' target='_blank'>sineto.dev@gmail.com</a>
						</li>
						<li className='flex items-center sm:text-xl space-x-2'>
							<MdPhonelinkRing />
							<a href='#' target='_blank'>+55 00 0 0000-0000</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Footer;
