import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiMenuAlt3 } from 'react-icons/hi';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '@/components/shared/Button';
import { NAVLINKS_STATIC } from '@/utils/static-resources/navlinks.static';
import { scrollTo } from '@/utils/scroll-to';
import preventScrolling from '@/utils/prevent-scrolling';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    preventScrolling(!isOpen);
  };
  const handleNavigation = (to: string) => {
    const isInternalLink = to.startsWith('/');
    const targetId = to.includes('#') ? to.split('#')[1] : to;

    if (isInternalLink) {
      navigate(to);
    } else if (window.location.pathname !== '/') {
      navigate('/');
    }

    setTimeout(() => scrollTo({ targetId }), 300);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="flex justify-between items-center w-full ">
        {/* Logo */}
        <Link to="/">
          <img src="/assets/icons/logo.svg" alt="Logo" loading="lazy" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-8 text-white text-lg h-full">
          {NAVLINKS_STATIC.map((link) => {
            return (
              <li
                key={link.title}
                className=" h-full flex items-center justify-center  group relative"
              >
                <button
                  className="hover:text-[#ffffff]/50 duration-300  cursor-pointer font-extralight"
                  onClick={() => handleNavigation(link.to)}
                >
                  {link.title}
                </button>
                {link.subItems?.length ? (
                  <ul className="group-hover:block hidden absolute w-full py-2 space-y-2 top-[50px] left-0">
                    {link.subItems.map((subItem) => {
                      return (
                        <li
                          key={subItem.title}
                          className="cursor-pointer hover:text-[#ffffff]/50 duration-300 font-extralight group relative"
                        >
                          <button
                            className="hover:text-[#ffffff]/50 duration-300  cursor-pointer text-start font-extralight text-nowrap"
                            onClick={() => handleNavigation(subItem.to)}
                          >
                            {subItem.title}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>

        {/* Call Button */}
        <div></div>
        {/* Mobile Menu Toggle */}
        <div className="xl:hidden">
          <Button
            variant="icon"
            className="text-white text-3xl"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <HiMenuAlt3 /> : <HiMenu />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-20 bg-black/50 flex justify-center items-start pt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMenu}
          >
            <motion.div
              className="bg-[#122F4C] rounded-2xl py-10 px-6 m-6 w-[90%] max-h-screen overflow-y-auto"
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col justify-center items-center gap-4 text-white text-lg">
                {NAVLINKS_STATIC.map(({ title, to, subItems }) => (
                  <>
                    <li
                      key={title}
                      className="cursor-pointer hover:text-[#ffffff]/50 duration-300 font-extralight"
                    >
                      <button
                        onClick={() => {
                          handleNavigation(to);
                          toggleMenu();
                        }}
                      >
                        {title}
                      </button>
                    </li>
                    {subItems?.length ? (
                      <>
                        {subItems.map((item) => (
                          <li
                            key={title}
                            className="cursor-pointer hover:text-[#ffffff]/50 duration-300 font-extralight"
                          >
                            <button
                              onClick={() => {
                                handleNavigation(item.to);
                                toggleMenu();
                              }}
                            >
                              {item.title}
                            </button>
                          </li>
                        ))}
                      </>
                    ) : null}
                  </>
                ))}
                <Button
                  onClick={() => {
                    window.location.href = 'tel:1006';
                  }}
                  size="icon"
                  variant="icon"
                  className="bg-secondary-soft w-auto py-[10px] px-4 rounded-12 border-tintBlue text-tintBlue font-normal"
                >
                  <img
                    src="/assets/icons/call.svg"
                    alt="Call icon"
                    loading="lazy"
                  />
                  <span>1006</span>
                </Button>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
