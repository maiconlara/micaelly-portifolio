import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export const SuspenseProvider = ({ children }: ProvidersProps) => {
  return <div className="flex w-full flex-col">{children}</div>;
};
