interface IboxProps {
  children?: JSX.Element;
}

function Box(props: IboxProps) {
  return (
    <section className="my-5 h-20 rounded-2xl border-solid border-2 border-slate-100 bg-slate-50">
      {props.children}
    </section>
  );
}

export default Box;
