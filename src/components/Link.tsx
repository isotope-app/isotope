import { A } from '@solidjs/router';

interface LinkProps {
  to: string;
  // rome-ignore lint/suspicious/noExplicitAny: children can be any type
  children?: any;
  external?: boolean;
  className?: string;
}

export default ({ to, children, external, className }: LinkProps) => {
  return external ? (
    <a href={to} class={`${className} cursor-pointer text-gray-900 dark:text-gray-200`}>
      {children}
    </a>
  ) : (
    <A href={to} class={`${className} cursor-pointer text-gray-900 dark:text-gray-200`}>
      {children}
    </A>
  );
};
