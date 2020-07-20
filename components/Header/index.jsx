import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
	return (
		<div className='flex flex-wrap items-center justify-center p-6 bg-transparent xm:justify-between gap-8'>
			<div className='flex flex-wrap space-y-10'>
				<a href='https://snio.now.sh' className='block'>
					<img className='max-w-vs' src='/images/snio-logo.svg' />
				</a>
			</div>
			<div>
				<ul className='flex space-x-6'>
					<li className='flex items-center text-xs space-x-2 text-gray2'>
						<FaLinkedin className='inline-block text-white'/>
						<a className='hover:text-green-lighter' href='https://www.linkedin.com/in/sndev/' target='_blank'>
							LinkedIn
						</a>
					</li>
					<li className='flex items-center text-xs space-x-2 text-gray2'>
						<FaGithub className='inline-block text-white'/>
						<a className='hover:text-green-lighter' href='https://github.com/sineto' target='_blank'>
							GitHub
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
