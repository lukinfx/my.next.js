import React from 'react';

function IndexPage({ allPosts }) {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      
    </div>
  );
}

// export async function getServerSideProps() {
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL;
//   const res = await fetch(apiUrl);
//   const allPosts = await res.json();

//   return {
//     props: { allPosts },
//   };
// }

export default IndexPage;