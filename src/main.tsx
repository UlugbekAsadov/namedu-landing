import { createRoot } from 'react-dom/client';
import { Toaster } from './components/ui/sonner.tsx';
import Router from './routes/index.routes.tsx';
import { ReactQueryLayout } from './layouts/react-query-layout.tsx';

import './styles/index.css';
import { InitDataProvider } from './contexts/init-data.context.tsx';

const Main = () => {
  return (
    <ReactQueryLayout>
      <InitDataProvider>
        <Router />
        <Toaster theme="light" richColors />
      </InitDataProvider>
    </ReactQueryLayout>
  );
};

createRoot(document.getElementById('root')!).render(<Main />);
