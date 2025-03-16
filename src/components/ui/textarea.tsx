import * as React from 'react';

import { cn } from '@/utils/utils';

type TextareaProps = React.ComponentProps<'textarea'> & {
  label?: string;
  hasError?: boolean;
  required?: boolean;
  labelClassname?: string;
};

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps & React.ComponentProps<'textarea'>
>(
  (
    {
      hasError,
      style,
      label,
      className,
      placeholder,
      onChange,
      value,
      required,
      labelClassname,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col relative">
        {label && (
          <label
            htmlFor={label}
            className={`text-sm font-extralight ${labelClassname}`}
          >
            {label}
            {required && <span className="text-red text-md ">*</span>}
          </label>
        )}

        <textarea
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          style={style}
          className={cn(
            ` font-light  p-4  w-full h-[100px] rounded-12 bg-transparent   flex    border1 resize-none   ${
              hasError ? 'focus:border-red-500' : 'focus:shadow-activeInput'
            }  focus:outline-none placeholder:text-gray placeholder:text-[12px] placeholder:font-extralight `,
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
