import React from 'react';
import { Controller } from 'react-hook-form';

interface InputProps {
  name: string;
  control: any;
  label?: string;
  type?: string;
  rules?: any;
  helperText?: string;
  error?: string;
  [x: string]: any;
}

export const Input: React.FC<InputProps> = ({
  name,
  control,
  label,
  type = 'text',
  rules,
  helperText,
  error,
  ...rest
}) => (
  <div className={`field${error ? ' field--error' : ''}`} data-field={name}>
    {label && <label className="field__label" htmlFor={name}>{label}</label>}
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <input
          type={type}
          className="field__input"
          {...field}
          value={field.value || ''}
          {...rest}
        />
      )}
    />
    {helperText && <div className="field__helper">{helperText}</div>}
    {error && <div className="field__error">{error}</div>}
  </div>
); 