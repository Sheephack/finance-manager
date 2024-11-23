import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

export const QueryProvider = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);