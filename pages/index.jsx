import React from 'react';

import { FaCode, FaStar } from 'react-icons/fa';
import { AiOutlineApi, AiOutlineCloudServer } from 'react-icons/ai';

import PageHead from '../components/PageHead';
import Header from '../components/Header';
import Hero from '../components/Hero';
import getData from '../utils/get-data';

const Index = ({ repositories }) => {
	return (
		<>
			<PageHead />
			<Header />
			<Hero />

			<div className='flex flex-wrap p-10 bg-gray0'>
				<div className='flex flex-col flex-wrap order-first p-4 xl:order-first lg:order-first md:order-first sm:order-last xl:p-12 lg:p-12 md:w-1/2'>

					<div className='z-20 px-8 py-6 my-1 hover:shadow-3xl rounded-md bg-gray1'>
						<div className='flex items-center justify-between'>
							<h3 className='text-lg hover:text-green-lighter'>Back-End</h3>
							<AiOutlineApi className='text-green-lighter' />
						</div>
						<p className='mb-4 text-xs text-gray2'>I can develop APIs with REST/GraphQL architecture</p>
						<a className='inline-block text-xs hover:border-b-1' href="http://www.url.com" target="_blank">Clients</a>
					</div>

					<div className='z-10 px-8 py-6 my-1 hover:shadow-3xl rounded-md bg-gray1'>
						<div className='flex items-center justify-between'>
							<h3 className='text-lg hover:text-green-lighter'>Front-End</h3>
							<FaCode className='text-green-lighter' />
						</div>
						<p className='mb-4 text-xs text-gray2'>Front-end develop with React and Nextjs</p>
						<a className='inline-block text-xs hover:border-b-1' href="http://www.url.com" target="_blank">Clients</a>
					</div>

					<div className='z-0 px-8 py-4 my-1 hover:shadow-3xl rounded-md bg-gray1'>
						<div className='flex items-center justify-between'>
							<h3 className='text-lg hover:text-green-lighter'>Deployment</h3>
							<AiOutlineCloudServer className='text-green-lighter' />
						</div>
						<p className='mb-4 text-xs text-gray2'>Infrastructure with Google Cloud Platform and Vercel</p>
						<a className='inline-block text-xs hover:border-b-1' href="http://www.url.com" target="_blank">Clients</a>
					</div>

				</div>

				<div className='p-4 xl:p-12 lg:p-12 md:w-1/2'>
					<span className='text-xs text-gray2'>Introduce</span>
					<h2 className='text-3xl'>Hi! My name is <span className='border-b-1'>Sinésio Neto</span></h2>
					<p className='my-5 text-justify text-xm text-gray2'>
						A freelance developer with main focus on building web solutions	with a <span className='text-green-lighter'>JavaScript</span> and <span className='text-green-lighter'>Nodejs</span> stack.
						Beyond <span className='text-green-lighter'>HTML</span> and <span className='text-green-lighter'>CSS</span>, I'm familiar with the <span className='text-green-lighter'>Express</span> micro-framework on back-end and
						the <span className='text-green-lighter'>React</span> library on front-end, including <span className='text-green-lighter'>Nextjs</span> and <span className='text-green-lighter'>Gatsby</span> frameworks.
						I'm also learning how to develop <span className='text-green-lighter'>GraphQL</span> APIs and how this amazing architecture works.
					</p>
					<p className='text-justify text-xm text-gray2'>
						I'm able to delivery developed web applications with a great infrastructure of
						deployment, mainly hosted on <span className='text-green-lighter'>Google Cloud Platform</span> and <span className='text-green-lighter'>Vercel Platform</span>.
					</p>
				</div>
			</div>
			<div className='p-12 md:grid xl:grid-cols-3 md:grid-cols-2 bg-gray1'>
				<div className='md:m-4 sm:m-8'>
					<h3 className='text-2xl'>Tech Contributions</h3>
					<p className='text-xs text-gray2'>My public repositories on Github</p>
				</div>
				 {repositories.map((repository) => {
					return (
						<div
							className='p-6 border-b-2 border-transparent hover:border-solid hover:border-green-lighter md:m-1 sm:m-2 rounded-md bg-gray0'
							key={repository.id}>
							<a href={repository.html_url} className='font-bold hover:text-green-lighter'>{repository.name}</a>
							<p className='flex items-center gap-1 text-green-lighter'><FaStar className='inline' size={16} /> {repository.stargazers_count}</p>
						</div>
					)
				 })}
			</div>
		</>
	);
};

export const getServerSideProps = async (context) => {
	const { repositories } = await getData('sineto');
	return {
		props: {
			repositories
		}
	};
};

export default Index;
