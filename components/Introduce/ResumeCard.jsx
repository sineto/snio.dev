import React from 'react';

const ResumeCard = ({ card }) => {
	return (
		<div className='px-8 py-6 my-1 hover:shadow-3xl hover:text-green-lighter rounded-md bg-gray1'>
			<div className='flex items-center justify-between'>
				<h3 className='text-lg'>{card.title}</h3>
				{card.icon()}
			</div>
			<p className='mb-4 text-xs text-gray2'>{card.description}</p>
			<a className='inline-block text-white uppercase border-transparent border-dotted text-tiny border-b-1 hover:border-white' href="http://www.url.com" target="_blank">Clients</a>
		</div>
	);
};

export default ResumeCard;
