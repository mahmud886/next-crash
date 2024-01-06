import React from 'react';

const Comments = async ({ commentsPromise }) => {
  const comments = await commentsPromise;
  return (
    <div className='mt-6'>
      <h2>Comments</h2>

      <ul className='mt-6'>
        {comments.map((comment) => (
          <li className='text-sm mt-3' key={comment.id}>
            {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
