// import { useRouter } from 'next/router';
// import { groq } from 'next-sanity';
// import { getClient, usePreviewSubscription } from '../lib/sanity';
import Home from '../src/pages/Home';

const Index = (): JSX.Element => {
  return <Home />;
};

// const query = groq`*[_type == "header"]{headerBadge, headerTitle, headerSubTitle}`;

// export async function getStaticProps({ params, preview = false }) {
//   const teste = await getClient(preview).fetch(query);
//   console.log('sanity:', teste);

//   return {
//     props: {
//       teste,
//       preview
//     }
//   };
// }

export default Index;
