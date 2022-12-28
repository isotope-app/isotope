interface ButtonProps {
  onClick?: () => void;
  // rome-ignore lint/suspicious/noExplicitAny: children can be anything
  children?: any;
  className?: string;
}

export default ({ onClick, children, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      class={`${className} rounded-md bg-white dark:bg-black border-light-900 border-2 p-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all`}
    >
      {children}
    </button>
  );
};
