import { getCurrentOrganization } from '@/requests/organizations.requests';
import { IOrganization } from '@/utils/interfaces/organization.interface';
import { useQuery } from '@tanstack/react-query';
import { createContext, ReactNode, useContext } from 'react';

interface IInitDataContext {
  organization: IOrganization | undefined;
}

export const InitDataContext = createContext<IInitDataContext | null>(null);

export const InitDataProvider = ({ children }: { children: ReactNode }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['init-data'],
    queryFn: () => getCurrentOrganization(),
  });

  if (isLoading) {
    return null;
  }

  return (
    <InitDataContext.Provider value={{ organization: data?.data }}>
      {children}
    </InitDataContext.Provider>
  );
};

export const useInitData = () => {
  const context = useContext(InitDataContext);
  if (!context) {
    throw new Error('useInitData must be used within a InitDataProvider');
  }
  return context;
};
