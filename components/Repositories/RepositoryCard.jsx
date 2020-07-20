import React from 'react';
import { FaStar } from 'react-icons/fa';
import { GoRepoForked } from 'react-icons/go';

const RepositoryCard = ({ repository }) => {
	return (
		<div
			className='p-6 my-2 border-b-2 border-transparent space-y-2 md:m-2 lg:m-1 hover:border-solid hover:text-green-lighter hover:border-green-lighter rounded-md bg-gray0'>
			<a href={repository.html_url} className='font-bold hover:text-green-lighter'>{repository.name}</a>
			<span className='block text-xs text-gray2'>{repository.description}</span>
			<div className='flex space-x-5'>
				<p className='flex items-center gap-1 text-green-lighter'>
					<FaStar className='inline' size={16} />
					{repository.stargazers_count}
				</p>
				<p className='flex items-center gap-1 text-green-lighter'>
					<GoRepoForked className='inline' size={16} />
					{repository.forks_count}
				</p>
			</div>
		</div>
	);
};

export default RepositoryCard;
