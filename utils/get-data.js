const getData =  async (username) => {
	const responseData = await fetch(`https://api.github.com/users/${username}/repos`);
	const data = await responseData.json();

	const denyList = ['sineto/sineto'];

	const isNotFork = repository => !repository.fork;
	const denyFilter = repository => denyList.indexOf(repository.full_name) === -1;

	const repositories = data
		.filter(isNotFork)
		.filter(denyFilter)
		.map((repository) => {
			return {
				id: repository.id,
				name: repository.name,
				description: repository.description,
				html_url: repository.html_url,
				language: repository.language,
				stargazers_count: repository.stargazers_count,
				forks_count: repository.forks_count,
			}
		});

	return { repositories };
};

export default getData;
