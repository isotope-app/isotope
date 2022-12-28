interface EntryProps {
  roomName?: string;
  joinRoom?: () => void;
}

export default ({ roomName, joinRoom }: EntryProps) => {
  return (
    <div class="p-2 hover:bg-dark-500 transition-colors rounded-sm flex items-center justify-between w-full">
      <span class="font-medium">{roomName}</span>
      <div class="flex items-center gap-x-2">
        <PlusIcon onClick={joinRoom} />
        <XIcon />
      </div>
    </div>
  );
};

interface IconProps {
  onClick?: () => void;
}

const PlusIcon = ({ onClick }: IconProps) => (
  <button onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 cursor-pointer">
      <path
        fill-rule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
);

const XIcon = ({ onClick }: IconProps) => (
  <button onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 cursor-pointer">
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  </button>
);
