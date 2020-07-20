import React from 'react';

import PageHead from '../components/PageHead';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Introduce from '../components/Introduce';
import Repositories from '../components/Repositories';

import getData from '../utils/get-data';

const Index = ({ repositories }) => {
	return (
		<>
			<PageHead />
			<Header />
			<Hero />
			<Introduce />
			<Repositories repositories={repositories} />
			<div className="group bg-white hover:bg-blue-500 ...">
				<p className="text-gray-900 group-hover:text-white ...">New Project</p>
				<p className="text-gray-700 group-hover:text-white ...">Create a new project from a variety of starting templates.</p>
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
