import React from 'react';
import { Loader2 } from 'lucide-react';

type Props = {
  message?: string;
}

export const LoadingThrobber = ({ 
  message = 'Loading...'
}: Props) => {
  return (
    <div className="flex items-center justify-center gap-2 text-gray-600 py-8">
      <Loader2 className="animate-spin" />
      <span>{message}</span>
    </div>
  );
};