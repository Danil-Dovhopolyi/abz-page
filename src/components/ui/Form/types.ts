export type FormVariant = 'desktop';

import type { FormEventHandler } from 'react';

export interface FormProps {
  variant?: FormVariant;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  className?: string;
  children: React.ReactNode;
}