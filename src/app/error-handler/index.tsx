import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const errorHandler = (error: Error, info: { componentStack: string }) => {
  // Do something with the error
  // E.g. log to an error logging client here
};

const resetHandler = () => {
  // reset the state of your app so the error doesn't happen again
};

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

interface ErrorHandlerProps {
  children: React.ReactNode;
}

export function ErrorHandler({ children }: ErrorHandlerProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler} onReset={resetHandler}>
      {children}
    </ErrorBoundary>
  );
}
