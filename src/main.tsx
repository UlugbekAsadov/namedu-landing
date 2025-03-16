import { createRoot } from 'react-dom/client';
import { Toaster } from './components/ui/sonner.tsx';
import Router from './routes/index.routes.tsx';
import { ReactQueryLayout } from './layouts/react-query-layout.tsx';

import './styles/index.css';

const Main = () => {
  return (
    <ReactQueryLayout>
      <Router />
      <Toaster theme="light" richColors />
    </ReactQueryLayout>
  );
};

createRoot(document.getElementById('root')!).render(<Main />);
