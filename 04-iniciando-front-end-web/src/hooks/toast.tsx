import { createContext, useContext, ReactNode, useCallback } from 'react';
import { ToastContainer } from '../components/ToastContainer';

interface IToastProviderProps {
  children: ReactNode;
}

interface IToastContextData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<IToastContextData>({} as IToastContextData);

export function ToastProvider({ children }: IToastProviderProps) {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}

      {/* Usa o componente de toast aqui mesmo, ao invés de colocá-lo no App */}
      <ToastContainer />
    </ToastContext.Provider>
  );
}

export function useToast(): IToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
