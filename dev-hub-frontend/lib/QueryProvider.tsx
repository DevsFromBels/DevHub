import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { IQueryProvider } from "../types/type";

const queryClient = new QueryClient();

const QueryProvider: FC<IQueryProvider> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
