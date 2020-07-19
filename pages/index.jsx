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
