import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="fixed bottom-8 left-0 flex h-32 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          href="https://github.com/nextjsargentina/"
          className="flex items-center justify-center font-mono text-lg font-bold gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="rounded-xl"
            src="/nextjs-dark.svg"
            alt="NextJS Logo"
            width={40}
            height={40}
            priority
          />
          <span>Next.js Argentina</span>
        </a>
      </div>

      <div className="fixed left-0 top-0 flex w-full justify-center items-center gap-6 border-b bg-gradient-to-b from-neutral-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-neutral-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-neutral-100 lg:p-4 lg:dark:bg-neutral-800/30 lg:from-inherit lg:shadow-sm">
        <p className="font-mono">
          An AI chat-based interface to learn&nbsp;
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <code className="font-mono font-bold">Next.js</code>
          </a>
        </p>
        <ModeToggle />
      </div>
    </div>
  );
}
