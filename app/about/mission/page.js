import Button from '@/app/components/Button';
import Image from 'next/image';
import nextThumb from '@/public/images/nextjs-icon.png';

const page = () => {
  return (
    <main>
      <div>About Mission</div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae maxime recusandae dolor harum consequatur, quos
        impedit optio incidunt saepe eos totam unde velit laborum consequuntur reiciendis odio animi consectetur enim!
      </p>

      <div className='w-[100px]'>
        <Image src={nextThumb} alt='Thumb Image' />
      </div>

      <Button />
    </main>
  );
};

export default page;
