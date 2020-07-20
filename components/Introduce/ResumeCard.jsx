import React from 'react';

const ResumeCard = ({ index, card }) => {
	return (
		<div className={`px-8 py-6 my-1 hover:shadow-3xl hover:text-green-lighter rounded-md bg-gray1 z-${50 - (index * 10)}`}>
			<div className='flex items-center justify-between'>
				<h3 className='text-lg'>{card.title}</h3>
				{card.icon()}
			</div>
			<p className='mb-4 text-xs text-gray2'>{card.description}</p>
			<a className='inline-block text-xs text-white hover:border-b-1' href="http://www.url.com" target="_blank">Clients</a>
		</div>
	);
};

export default ResumeCard;
