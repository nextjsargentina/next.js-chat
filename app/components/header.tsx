import Image from "next/image";

export default function Header() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-neutral-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-neutral-200 lg:p-4 lg:dark:bg-zinc-800/30">
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
      <div className="fixed bottom-8 left-0 flex h-32 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          href="https://github.com/nextjsargentina/"
          className="flex items-center justify-center font-nunito text-lg font-bold gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Next.js Argentina</span>
          <Image
            className="rounded-xl"
            src="/nextjs-dark.svg"
            alt="NextJS Logo"
            width={40}
            height={40}
            priority
          />
        </a>
      </div>
    </div>
  );
}
