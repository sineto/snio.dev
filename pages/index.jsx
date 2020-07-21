import React from 'react';

import PageHead from '../components/PageHead';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Introduce from '../components/Introduce';
import Repositories from '../components/Repositories';
import Footer from '../components/Footer';

const Index = ({ repositories }) => {
	return (
		<>
			<PageHead />
			<Header />
			<Hero />
			<Introduce />
			<Repositories repositories={repositories} />
			<Footer />
		</>
	);
};

export const getServerSideProps = async (context) => {
	const request = await fetch(`${process.env.API_HOST}/api/getUser`);
	const { repositories } = await request.json();
	return {
		props: {
			repositories
		}
	};
};

export default Index;
