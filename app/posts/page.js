import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';
import React from 'react';

const Posts = async () => {
  const posts = await getAllPosts();
  console.log(posts);
  return (
    <div className='mt-6'>
      <h1>All Posts</h1>
      <hr />
      <ul className='mt-6'>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
