import React from 'react';
import { FaStar } from 'react-icons/fa';

const Repositories = ({ repositories }) => {
	return (
		<div className='p-4 sm:p-12 md:grid xl:grid-cols-3 md:grid-cols-2 bg-gray1'>
			<div className='md:m-4 sm:mx-8 sm:mb-8 xs:mb-8'>
				<h3 className='text-2xl'>Tech Contributions</h3>
				<p className='text-xs text-gray2'>My public repositories on Github</p>
			</div>
			 {repositories.map((repository) => {
				return (
					<div
						className='p-6 my-2 border-b-2 border-transparent md:m-2 lg:m-1 hover:border-solid hover:border-green-lighter rounded-md bg-gray0'
						key={repository.id}>
						<a href={repository.html_url} className='font-bold hover:text-green-lighter'>{repository.name}</a>
						<p className='flex items-center gap-1 text-green-lighter'>
							<FaStar className='inline' size={16} />
							{repository.stargazers_count}
						</p>
					</div>
				)
			 })}
		</div>
	);
};

export default Repositories;
