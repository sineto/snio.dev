import React from 'react';

const ResumeCard = ({ card }) => {
	return (
		<div className='z-20 px-8 py-6 my-1 hover:shadow-3xl rounded-md bg-gray1'>
			<div className='flex items-center justify-between'>
				<h3 className='text-lg hover:text-green-lighter'>{card.title}</h3>
				{card.icon()}
			</div>
			<p className='mb-4 text-xs text-gray2'>{card.description}</p>
			<a className='inline-block text-xs hover:border-b-1' href="http://www.url.com" target="_blank">Clients</a>
		</div>
	);
};

export default ResumeCard;
