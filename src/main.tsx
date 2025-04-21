import { createRoot } from 'react-dom/client';
import { Toaster } from './components/ui/sonner.tsx';
import Router from './routes/index.routes.tsx';
import { ReactQueryLayout } from './layouts/react-query-layout.tsx';

import './styles/index.css';
import { InitDataProvider } from './contexts/init-data.context.tsx';
import { LocaleContextProvider } from './contexts/locale.context.tsx';
import { Suspense } from 'react';

const Main = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReactQueryLayout>
        <LocaleContextProvider>
          <InitDataProvider>
          <Router />
          <Toaster theme="light" richColors />
        </InitDataProvider>
        </LocaleContextProvider>
      </ReactQueryLayout>
    </Suspense>
  );
};

createRoot(document.getElementById('root')!).render(<Main />);
