import { Outlet } from 'react-router-dom';

import useScrollToTop from '@/hooks/use-scroll-to-top';

const Content = () => {
  useScrollToTop();
  return (
    <main className="min-h-screen container">
      <Outlet />
    </main>
  );
};

export default Content;
