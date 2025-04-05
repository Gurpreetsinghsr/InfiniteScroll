import React from 'react';
import { AlertCircle } from 'lucide-react';

type Props = {
  message?: string;
}
export const ErrorMessage = ({ message ="No more items to load" }: Props) => {
  return (
    <div className="flex items-center justify-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg my-4">
      <AlertCircle className="w-5 h-5" />
      <span>{message}</span>
    </div>
  );
};