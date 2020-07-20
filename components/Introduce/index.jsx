import React from 'react';
import { FaCode } from 'react-icons/fa';
import { AiOutlineApi, AiOutlineCloudServer } from 'react-icons/ai';

import ResumeCard from './ResumeCard';
import Resume from './Resume';

const resumeCards = [
	{
		title: 'Back-End',
		description: 'I can develop APIs with REST/GraphQL architecture',
		icon: () => <AiOutlineApi className='text-green-lighter' />
	},
	{
		title: 'Front-End',
		description: 'Front-end develop with React and Nextjs',
		icon: () => <FaCode className='text-green-lighter' />
	},
	{
		title: 'Deployment',
		description: 'Infrastructure with Google Cloud Platform and Vercel',
		icon: () => <AiOutlineCloudServer className='text-green-lighter' />
	}
];

const Introduce = () => {
	return (
		<div className='flex flex-wrap justify-center xm:p-12 bg-gray0'>
			<div className='flex flex-col order-first order-last w-full p-4 md:order-first md:w-1/2'>
				{resumeCards.map((card, i) => {
					return (
						<ResumeCard key={i} card={card} /> )}
					)
				}
			</div>
			<Resume />
		</div>
	);
};

export default Introduce;
