interface ButtonProps {
  onClick?: () => void;
  children?: any;
  className?: string;
}

export default ({ onClick, children, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      class={`${className} bg-white border-light-900 border rounded-md p-2 hover:bg-black hover:text-white transition-colors`}
    >
      {children}
    </button>
  );
};
