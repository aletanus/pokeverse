import Select, { ActionMeta, Props as SelectProps } from "react-select";
import styles from "../styles/select.module.css";
import { FieldError, UseFormRegisterReturn, Merge, FieldErrorsImpl, Controller } from "react-hook-form";

export type InputType = "text" | "search" | "textarea" | "select" | "select-searchable";
export type ActionTypes = | "clear" | "create-option" | "deselect-option" | "pop-value" | "remove-value" | "select-option" | "set-value"

export type InputProps = {
  type?: InputType;
  name: string;
  label?: string;
  value?: string | OptionsType;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  id?: string;
  children?: React.ReactNode;
  selectProps?: SelectProps;
  actionTypes?: ActionTypes;
  disabled?: boolean;
  options?: string[] | OptionsType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: Merge<FieldError, (Merge<FieldError, FieldErrorsImpl<{ [x: string]: any; }>> | undefined)[]> | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: ((newValue: any, actionMeta: ActionMeta<any>) => void) | undefined
}

export type OptionType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type OptionsType = OptionType[];

export default function Input(props: InputProps) {

  const defaultStyle = "px-4 py-2 text-grey-1 rounded-[4px] border-2 border-grey-7 input-placeholder hover:border-grey-8 focus:border-brand-1 resize-none";
  let inputElement: React.ReactNode;

  switch (props.type) {

  default:
    inputElement = <input disabled={props.disabled} type={props.type} name={props.name} id={props.name} className={defaultStyle} placeholder={props.placeholder ?? props.label} {...props.register} />;
    break;

  case "textarea":
    inputElement = <textarea disabled={props.disabled} name={props.name} id={props.name} className={defaultStyle} placeholder={props.placeholder ?? props.label} {...props.register} />;
    break;

  case "select":
    inputElement = (
      <select value={props.value as string} disabled={props.disabled} name={props.name} id={props.name} className={`${defaultStyle} capitalize`} placeholder={props.placeholder ?? props.label} {...props.register}>
        {props.children}
      </select>
    );
    break;

  case "select-searchable":
    inputElement = (
      <Controller
        name={props.name}
        control={props.control}
        render={({ field, fieldState, }) => (
          <div className={styles.container}>
            <Select
              {...field}
              key={props.name}
              className={styles.firstElement}
              isMulti
              {...props.selectProps}
              placeholder={props.placeholder}
              id={props.id}
              name={props.name}
              isClearable={props.selectProps?.isClearable}
              isDisabled={props.selectProps?.isDisabled}
              classNamePrefix={props.selectProps?.classNamePrefix}
              options={props.options}
              noOptionsMessage={props.selectProps?.noOptionsMessage}
              value={field.value}
              onChange={(value) => field.onChange(value)}
            />
            { !field.value && fieldState.error && fieldState.error.message && (
              <span id={props.id} className="text-red-500 text-sm">{fieldState.error.message}</span>
            )}
          </div>
        )}
      />
    );
    break;
  }

  return (
    <fieldset className="flex flex-col w-full h-full">
      <label htmlFor={props.name} className="input-label">
        {props.label}
      </label>
      {inputElement}
      { props.errors && (
        <span className="text-red-500 text-sm">{props.errors.message}</span>
      )}
    </fieldset>
  );
}
