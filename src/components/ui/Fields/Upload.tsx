import React, { useRef } from 'react';
import { Controller } from 'react-hook-form';

interface UploadProps {
  name: string;
  control: any;
  label?: string;
  rules?: any;
  helperText?: string;
  error?: string;
  onFileSelect?: (file: File) => void;
  [x: string]: any;
}

export const Upload: React.FC<UploadProps> = ({
  name,
  control,
  label,
  rules,
  helperText,
  error,
  onFileSelect,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className={`field-upload${error ? ' field-upload--error' : ''}`}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, ...field } }) => {
          const { ref: _ref, ...fieldProps } = field;
          const { value, ...safeFieldProps } = fieldProps;
          return (
            <div className="field-upload__custom-wrapper">
              <button
                type="button"
                className="field-upload__button"
                onClick={() => inputRef.current?.click()}
              >
                Upload
              </button>
              <span className="field-upload__placeholder">{field.value?.name || 'Upload your file'}</span>
              <input
                ref={el => {
                  inputRef.current = el;
                  if (field.ref) {
                    if (typeof field.ref === 'function') {
                      field.ref(el);
                    } else {
                      (field.ref as React.RefObject<HTMLInputElement | null>).current = el;
                    }
                  }
                }}
                id={name}
                type="file"
                style={{ display: 'none' }}
                onChange={e => {
                  const file = e.target.files?.[0];
                  onChange(file);
                  if (file && onFileSelect) onFileSelect(file);
                }}
                {...safeFieldProps}
                {...rest}
              />
            </div>
          );
        }}
      />
      {helperText && <div className="field-upload__helper">{helperText}</div>}
      {error && <div className="field-upload__error">{error}</div>}
    </div>
  );
}; 