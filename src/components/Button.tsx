
type ButtonProps = {
    onClick?: () => void;
    type?: "button" | "submit"
    style?: "start" | "searchAll" | "search" | undefined;
    width?: number | string;
    details?: string
    size?: "start" | "big" | "medium" | undefined;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

export default function Button(props: ButtonProps) {

  const size = () => {
    switch (props.size) {
    case "start":
      return "text-lg rounded-full px-10 font-bold transition-all duration-250 ease-in-out";
    case "big":
      return "px-7 button-big-text";
    case "medium":
      return "px-5 button-medium-text";
    default:
      return "px-7 button-big-text";
    }
  };

  const style = () => {
    switch (props.style) {
    case "start":
      return "h-[55px] text-grey-whiteFixed bg-brand-0 border-brand-4 hover:bg-brand-3 hover:border-brand-4";
    case "searchAll":
      return "flex rounded-[6px] text-grey-whiteFixed bg-brand-0 border-brand-0 font-medium";
    case "search":
      return "flex rounded-t-[8px] rounded-b-[8px] rounded-tl-none rounded-l-none text-grey-whiteFixed bg-brand-0 border-brand-0 font-medium";
    }
  };

  return (
    <button onClick={props.onClick} disabled={props.disabled} type={props.type} className={`border rounded flex items-center  ${size()} ${style()} ${props.details} ${props.disabled && "cursor-not-allowed"} transition-all duration-300 ease-in-out`} style={{ width: props.width, }}>
      {props.children}
    </button>
  );
}
