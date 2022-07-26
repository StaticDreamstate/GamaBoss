interface IButtonProps {
  buttonLabel: string;
  type?: string;
}

export default function Button(props: IButtonProps) {
  return (
    <button className="bg-primary-blue-1 hover:bg-primary-blue-2 text-white font-libre font-700 py-2 px-4 rounded transition-colors">
      {props.buttonLabel}
    </button>
  );
}
