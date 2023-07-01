import React from 'react';

function IndexPage({ allPosts }) {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const allPosts = await res.json();

  return {
    props: { allPosts },
  };
}

export default IndexPage;