import { createSignal } from "solid-js";
import Button from "./Button";

export default () => {
  const [processing, setProcessing] = createSignal(false);

  const signIn = () => {
    setProcessing(true);
    (window as any).ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts: string[]) => {
        console.log(accounts);
        setProcessing(false);
      });
  };

  return (
    <main class="w-screen h-screen flex justify-center items-center p-4">
      <div class="bg-white border shadow-light-500 shadow-lg w-1/3 rounded-md p-8">
        {processing() ? (
          <div class="flex flex-col items-center gap-y-2">
            <CogIcon />
            <h1 class="text-2xl font-medium">Processing...</h1>
          </div>
        ) : (
          <div>
            <div class="flex items-center gap-2">
              <LockIcon />
              <h1 class="text-2xl font-medium">Sign In Methods</h1>
            </div>
            <hr class="my-3 border-light-600" />
            <div class="flex flex-col gap-2">
              <Button onClick={signIn}>Continue with MetaMask</Button>
            </div>
            <hr class="my-3 border-light-600" />
            <p class="text-sm text-gray-700">
              After you sign in, you will be prompted to sign a message and
              provide your public key. If you do not have the MetaMask
              extension, you can download it&nbsp;
              <a
                href="https://metamask.io/download/"
                class="text-gray-900 visited:text-gray-500"
              >
                here.
              </a>
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

const LockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
    />
  </svg>
);

const CogIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-8 h-8"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
    />
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
