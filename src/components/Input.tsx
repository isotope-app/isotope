interface InputProps {
	type?: string;
	placeholder?: string;
	className?: string;
	onInput?: (ev: Event & { currentTarget: HTMLInputElement }) => void;
	ref?: HTMLInputElement;
	label?: string;
}

export default ({
	type,
	placeholder,
	className,
	onInput,
	ref,
	label,
}: InputProps) => {
	return (
		<label class="flex flex-col gap-y-2 group">
			<span
				class={`${
					label ? "block" : "hidden"
				} text-gray-700 dark:text-gray-400 group-hover:text-black group-hover:dark:text-white transition-colors`}
			>
				{label}
			</span>
			<input
				type={type || "text"}
				class={`${className} rounded-md bg-white dark:bg-black border-2 p-2`}
				placeholder={placeholder}
				onChange={onInput}
				ref={ref}
			/>
		</label>
	);
};
