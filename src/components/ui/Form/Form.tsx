import React from 'react';
import './Form.scss';
import type { FormProps } from './types';

export const Form: React.FC<FormProps> = ({
  variant = 'desktop',
  onSubmit,
  className,
  children,
  ...rest
}) => (
  <form
    className={`form form--${variant} ${className || ''}`}
    onSubmit={onSubmit}
    noValidate
    {...rest}
  >
    {children}
  </form>
);
