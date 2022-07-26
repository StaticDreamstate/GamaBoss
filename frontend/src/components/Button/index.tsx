interface IButtonProps {
  buttonLabel: string;
  className?: string;
  type?: string;
  onClick?: () => any;
}

export default function Button(props: IButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`bg-primary-blue-1 hover:bg-primary-blue-2 text-white font-700 py-2 px-4 rounded transition-colors ${props.className}`}
    >
      {props.buttonLabel}
    </button>
  );
}
