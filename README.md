# My Personal Portfolio
![protótipo v.1](/docs/page-preview.png "v.1")
Project contains the source code of my personal porfolio available
on: [https://snio.now.sh](https://snio.now.sh).

## Technologies
The website was built with:
- [Nextjs](https://nextjs.org)
- [TailwindCSS](https://tailwindcss.com/)
- [PurgeCSS](https://purgecss.com/)

## Development Environment
If you want to run this application locally, follow the steps.
### Cloning repository
```sh
$ git clone https://github.com/sineto/snio.portfolio
```
### Install dependencies
```sh
$ cd snio.portfolio
$ yarn install ## or npm install
```
### Configuring to retrieve github's user repost information
Open file .env.local and change GITHUBUSER for your github user
API_HOST=https://api.github.com/users/GITHUBUSER/repos to API_HOST=https://api.github.com/users/tscndev/repos

### Running the Nestjs server
```sh
## running dev server
$ yarn dev

## running build
$ yarn build
$ yarn start
```

## Acknowledgments
- This project was built during Fullstack Master class
by [DevPleno](https://devpleno.com/).
- The layout credits mainly go to [Logan Cee](https://dribbble.com/shots/11276631-DS-Personal-Developer-Portfolio).

## Self-Promotion
Do you like this project? Come on:
- Star and follow the repository on [GitHub](https://github.com/sineto/snio.portfolio).
- Follow me on
  - [GitHub](https://github.com/sineto)

## License
[MIT License](LICENSE)
