import { copper1 } from "../asset/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col text-[#E6EDF3]'>
        <h2 className='font-palanquin  capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-[#B4975A]'> Super </span>
          <span className='text-[#B4975A]'>Quality </span> Watches
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Ensuring timeless style and enduring comfort, our meticulously crafted watches are designed to elevate your everyday.  
        Experience unmatched quality, innovative features, and a touch of elegance on your wrist. 
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        Our commitment to precision engineering and meticulous craftsmanship guarantees lasting performance and enduring satisfaction.        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={copper1}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
