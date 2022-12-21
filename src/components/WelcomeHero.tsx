import Button from "./Button";
import { A } from "@solidjs/router";

export default () => {
  return (
    <main class="p-4 w-screen-md mx-auto mt-50">
      <h3 class="font-medium text-xl text-center font-alt">Project Isotope</h3>
      <h1 class="mt-2 font-semibold text-3xl text-center font-alt">
        Secure messaging, simplified
      </h1>
      <hr class="my-3 border-light-800" />
      <p class="text-sm text-gray-700 text-center">
        Project Isotope, which uses&nbsp;
        <a
          class="cursor-pointer text-gray-900 visited:text-gray-500"
          href="https://github.com/isotope-app/hydrogen"
        >
          hydrogen
        </a>
        &nbsp;under the hood, is an implementation of the&nbsp;
        <a
          class="cursor-pointer text-gray-900 visited:text-gray-500"
          href="https://github.com/isotope-app/deuterium"
        >
          deuterium
        </a>
        &nbsp;protocol. It aims to be a flexible, lightweight, and
        security-focused instant messaging protocol.
      </p>
      <div class="mt-4 flex gap-x-8">
        <A href="/sign-in" class="w-full">
          <Button className="rounded-lg w-full">Get started</Button>
        </A>
        <A href="#" class="w-full">
          <Button className="rounded-lg w-full">Read the paper</Button>
        </A>
      </div>
    </main>
  );
};
