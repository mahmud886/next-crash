import { notFound } from 'next/navigation';
import React from 'react';

const BlogPage = ({ params }) => {
  const { id } = params;

  if (id === '3') {
    notFound();
  }
  return <div className='mt-5'>The blog ID is : {id}</div>;
};

export default BlogPage;
