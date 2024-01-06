'use client';
const Button = () => {
  return (
    <div className='mt-5'>
      <button className='bg-green-500 rounded-sm  px-4 py-1' onClick={() => alert('I Have Clicked Here...!')}>
        Click Here
      </button>
    </div>
  );
};

export default Button;
