import { headerlogo } from "../asset/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className='padding-x py-4  z-20 w-full fixed bg-[#010409bb] backdrop-blur-[10px]'>
      <nav className='flex justify-center items-center max-container'>
        <a href='/'>
          <img
            src={headerlogo}
            alt='logo'
            width={150}
            height={40}
            className='m-0 w-[150px] h-[40px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden '>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-[#E6EDF3]'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg text-[#E6EDF3] leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
