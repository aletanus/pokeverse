import React, { forwardRef, Ref, SelectHTMLAttributes, useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputType = "text" | "textarea" | "select" | "autocomplete";

type InputProps = {
  id?: string;
  type?: InputType;
  name: string;
  label: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  children?: React.ReactNode;
  errors?: FieldError;
  disabled?: boolean;
  options?: string[];
};

const Input = forwardRef<HTMLSelectElement, InputProps>(({ id, type, name, label, placeholder, register, children, errors, disabled, options, ...rest }: InputProps, ref) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const defaultStyle = "bg-grey-8 w-full px-4 py-2 text-grey-1 rounded-t-none rounded-b-none rounded-tl-[8px] rounded-l-[8px] border-2 border-brand-0 input-placeholder hover:border-brand-0 focus:border-brand-3 resize-none";
  const selectStyle = "appearance-none pr-4 capitalize";
  const selectSvgClasses = `h-5 w-5 text-gray-500 mr-2 transition-transform duration-500 ease-in-out ${ isOpen ? "scale-y-[-1]" : "" }`;

  let inputElement: React.ReactNode;

  switch (type) {
  case "text":
    inputElement = (<input disabled={disabled} name={name} id={id || name} className={defaultStyle} placeholder={placeholder || label} {...register}/>);
    break;
  case "textarea":
    inputElement = (<textarea disabled={disabled} name={name} id={id || name} className={defaultStyle} placeholder={placeholder || label} {...register}/>);
    break;
  case "select":
    inputElement = (
      <div className="relative w-full">
        <select
          ref={ref}
          disabled={disabled}
          name={name}
          id={id || name}
          className={`${defaultStyle} ${selectStyle} h-full  border-2 border-brand-0 input-placeholder hover:border-brand-0 hover:border-2 focus:border-2 focus:border-brand-3`}
          placeholder={placeholder || label}
          onClick={handleSelectClick}
          {...register}
          {...rest as SelectHTMLAttributes<HTMLSelectElement>}
        >
          {children}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
          <svg className={selectSvgClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    );
    break;
  case "autocomplete":
    inputElement = (
      <>
        <input ref={ref as Ref<HTMLInputElement>} type="text" name={name} id={id || name} className={defaultStyle} placeholder={placeholder || label} autoComplete="off" list={`${name}-datalist`} {...register}/>
        {options && (<datalist id={`${name}-datalist`}>{options.map((option) => (<option key={option} value={option} />))}</datalist>)}
      </>
    );
    break;
  default:
    inputElement = (<input disabled={disabled} type={type} name={name} id={id || name} className={defaultStyle} placeholder={placeholder || label} {...register} ref={ref as Ref<HTMLInputElement>}/>);
    break;
  }

  return (
    <fieldset className="flex h-full w-full">
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      {inputElement}
      {errors && (
        <span className="text-red-500 text-sm">{errors.message}</span>
      )}
    </fieldset>
  );
});

export default Input;
