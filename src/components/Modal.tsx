import { Accessor, Setter } from "solid-js";
import Button from "./Button";

interface ModalProps {
	visible: Accessor<boolean>;
	// rome-ignore lint/suspicious/noExplicitAny: children can be any type
	children: any;
}

export default ({ visible, children }: ModalProps) => {
	return (
		<div
			class={`${
				visible() ? "absolute animate-fade-in" : "hidden animate-fade-out"
			} top-0 left-0 z-50 w-screen h-screen flex items-center justify-center animate-duration-300 bg-transparent backdrop-filter backdrop-blur-md`}
		>
			<div class="bg-white dark:bg-black border shadow-light-500 dark:shadow-dark-200 shadow-lg max-w-screen-sm w-full rounded-md p-8">
				{children}
			</div>
		</div>
	);
};
