import {
  CSSProperties,
  FocusEvent,
  FunctionComponent
} from 'react';
import { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';

export interface InputProps extends UseFormRegisterReturn {
  variant?: 'primary' | 'success' | 'error';
  type?: 'text' | 'password' | 'email' | 'tel' | 'date' | 'number';
  label: string;
  value?: string;
  feedback?: string;
  disabled?: boolean;
  className?: string;
  inputStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  autocomplete?: boolean;
  readonly?: boolean;
  register: UseFormRegister<string | any>;
}

export const Input: FunctionComponent<InputProps> = ({
  variant = 'primary',
  type = 'text',
  name,
  label,
  value,
  disabled = false,
  className,
  feedback,
  inputStyle,
  labelStyle,
  onFocus,
  autocomplete = true,
  readonly = false,
  register
}) => {
  return (
    <div className={`${className ?? ''} relative`}>
      <input
        id={name}
        type={type}
        className={`
            block h-14 w-full p-4 pt-8 bg-transparent text-base
            rounded-lg border
            ${
              disabled
                ? 'text-gray-300 border-gray-300'
                : `${
                    feedback || variant === 'error'
                      ? `border-primary`
                      : 'border-gray-600'
                  }`
            }
            focus:outline-none
            placeholder-transparent
            peer
          `}
        style={inputStyle}
        placeholder={label}
        value={value}
        disabled={disabled}
        onFocus={onFocus}
        data-testid={name}
        autoComplete={autocomplete ? 'on' : 'off'}
        readOnly={readonly}
        {...register(name)}
      />
      <label
        htmlFor={name}
        className={`
            absolute top-[6px] left-3 px-1
            text-xs whitespace-nowrap
            text-gray-600
            ${disabled ? 'text-gray-300' : ''}
            ${
              feedback || variant === 'error' ? `text-primary` : 'text-gray-600'
            }
            pointer-events-none
            transition-all
  
            peer-placeholder-shown:top-[15px]
            peer-placeholder-shown:left-4
            peer-placeholder-shown:text-gray
            peer-placeholder-shown:text-base
            peer-placeholder-shown:truncate
  
            peer-focus:w-auto
            peer-focus:top-[6px]
            peer-focus:left-3
            peer-focus:translate-y-0
            peer-focus:px-1
            peer-focus:text-xs
            peer-focus:text-${variant}
          `}
        style={labelStyle}
      >
        {label}
      </label>
      {feedback && (
        <small
          className={`block pl-4 pt-[3px] text-xs text-${variant} whitespace-pre`}
        >
          {feedback}
        </small>
      )}
    </div>
  );
};
