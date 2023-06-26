import React, { forwardRef, Ref } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputType = "text" | "textarea";

type InputProps = {
  id?: string,
  type?: InputType;
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  control?: unknown;
  children?: React.ReactNode;
  errors?: FieldError;
  disabled?: boolean;
}

const Input = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {

  const defaultStyle = "bg-grey-8 w-full px-4 py-2 text-grey-1 rounded-t-none rounded-b-none rounded-tl-[8px] rounded-l-[8px] border-2 border-brand-0 input-placeholder hover:border-grey-8 focus:border-brand-1 resize-none";

  let inputElement: React.ReactNode;

  switch (props.type) {
  case "text":
    inputElement = <input disabled={props.disabled} name={props.name} id={props.name} className={defaultStyle} placeholder={props.placeholder ?? props.label} {...props.register}/>;
    break;
  case "textarea":
    inputElement = <textarea disabled={props.disabled} name={props.name} id={props.name} className={defaultStyle} placeholder={props.placeholder ?? props.label} {...props.register} />;
    break;
  default:
    inputElement = <input disabled={props.disabled} type={props.type} name={props.name} id={props.name} className={defaultStyle} placeholder={props.placeholder ?? props.label} {...props.register} ref={ref}/>;
    break;
  }

  return (
    <fieldset className="flex flex-col gap-y-1.5">
      <label htmlFor={props.name} className="input-label">{props.label}</label>
      {inputElement}
      {props.errors && <span className="text-red-500 text-sm">{props.errors.message}</span>}
    </fieldset>
  );
});

export default Input;
