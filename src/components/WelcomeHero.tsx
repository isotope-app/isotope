import Button from './Button';
import Link from './Link';

export default () => {
  return (
    <main class="p-8 max-w-screen-sm mx-auto mt-50 dark:text-white text-black animate-fade-in animate-duration-300">
      <h3 class="font-medium text-xl text-center font-alt">Project Isotope</h3>
      <h1 class="mt-2 font-semibold text-3xl text-center font-alt">Secure messaging, simplified</h1>
      <hr class="my-3 border-light-800" />
      <p class="text-sm text-gray-700 dark:text-gray-400 text-center">
        Project Isotope, which uses&nbsp;
        <Link to="https://github.com/isotope-app/hydrogen" external>
          hydrogen
        </Link>
        &nbsp;under the hood, is an implementation of the&nbsp;
        <Link to="https://github.com/isotope-app/deuterium" external>
          deuterium
        </Link>
        &nbsp;protocol. It aims to be a flexible, lightweight, and security-focused instant messaging protocol.
      </p>
      <div class="mt-4 flex flex-col md:flex-row gap-8">
        <Link to="/sign-in" className="w-full">
          <Button className="rounded-lg w-full shadow-xl dark:shadow-dark-200 dark:active:shadow-none">
            Get started
          </Button>
        </Link>
        <Link to="#" external className="w-full">
          <Button className="rounded-lg w-full shadow-xl dark:shadow-dark-200 dark:active:shadow-none">
            Read the paper
          </Button>
        </Link>
      </div>
    </main>
  );
};
