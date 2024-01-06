import Comments from '@/app/components/Comments';
import getPost from '@/lib/getPost';
import getPostComments from '@/lib/getPostComments';
import React, { Suspense } from 'react';

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }) {
  const { id } = params;
  const postPromise = getPost(id);
  const commentsPromise = await getPostComments(id);

  const post = await postPromise;

  return (
    <div className='mt-6'>
      <h2>Page Details</h2>

      <hr />
      <div className='mt-6'>
        <h2 className='text-blue-500 text-2xl'>{post.title}</h2>
        <p className='mt-3 text-xs'>{post.body}</p>
      </div>
      <hr />
      <Suspense fallback='<h1>Loading....</h1>'>
        <Comments commentsPromise={commentsPromise} />
      </Suspense>
    </div>
  );
}
