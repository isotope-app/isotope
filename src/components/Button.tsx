interface ButtonProps {
  onClick?: () => void;
  children?: any;
  className?: string;
}

export default ({ onClick, children, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      class={`${className} bg-white dark:bg-black border-light-900 border rounded-md p-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all`}
    >
      {children}
    </button>
  );
};
