import * as React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { PatternFormat } from 'react-number-format';

import { cn } from '@/utils/utils';
import { InputProps } from '@/utils/interfaces/input.interface';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      hasError,
      style,
      className,
      label,
      type = 'text',
      placeholder,
      onChange,
      value,
      pattern,
      required,
      ...props
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);

    const togglePasswordVisibility = () =>
      setIsPasswordVisible(!isPasswordVisible);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const inputClassNames = cn(
      'px-4 py-2 w-full h-[50px] lg:h-[55px] placeholder-grayLight text-grayLight bg-transparent  border1 rounded-12 shadow-none focus:outline-none focus:ring-0 text-base transition-all placeholder:font-extralight placeholder:text-[14px] flex font-light',
      hasError
        ? 'focus:border-red focus:shadow-errorInput'
        : 'focus:ring-0 focus:outline-none focus:border-primary-gradient focus:shadow-activeInput',
      className
    );

    const labelClassNames = cn(
      'absolute left-5 px-1 transition-all text-sm bg-primaryBackground z-10 flex items-center gap-1 -top-[10px] text-secondary-strong',
      hasError && isFocused ? 'text-red' : 'text-secondary-strong'
    );

    return (
      <div className="flex flex-col relative">
        {label && (
          <label htmlFor={label} className={labelClassNames}>
            {label}
            {required && <span className="text-red text-md ">*</span>}
          </label>
        )}

        <div className="relative">
          {type === 'tel' ? (
            <PatternFormat
              format="+998 (##) ### ## ##"
              mask="_"
              value={value}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              pattern={pattern}
              placeholder={placeholder || '+998 (__) ___ __ __'}
              className={inputClassNames}
              style={style}
              {...props}
            />
          ) : (
            <input
              autoComplete="off"
              type={
                type === 'password'
                  ? isPasswordVisible
                    ? 'text'
                    : 'password'
                  : type
              }
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              ref={ref}
              onFocus={handleFocus}
              onBlur={handleBlur}
              pattern={pattern}
              className={inputClassNames}
              style={style}
              {...props}
            />
          )}

          {/* Password Toggle Icon */}
          {type === 'password' && isFocused && (
            <div
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {isPasswordVisible ? (
                <FaEyeSlash className="w-5 h-5 text-secondary-strong" />
              ) : (
                <FaEye className="w-5 h-5 text-secondary-strong" />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
