import './Button.scss';
import type { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  variant = 'normal',
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`button button--${variant} ${className || ''}`}
      disabled={variant === 'disabled' || disabled}
      {...props}>
      {children}
    </button>
  );
};
