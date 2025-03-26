import Image from 'next/image';
import ThemeToggle from '@/ui/ThemeToggle';

export default function Home() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-16 px-8">
      <Header />
      <Contact />
      <AboutMe />

    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="relative h-12 w-12">
        <Image
          alt="Logo"
          className="rounded-full"
          layout="fill"
          objectFit="contain"
          src="/static/images/logo.png"
        />
        <div className="absolute -bottom-2 -right-2 rounded-full bg-white px-1 py-0.5 text-sm dark:bg-gray-900">
          ⚡
        </div>
      </div>
      <div className="flex flex-col">
        <h1>rlutolli</h1>
        <p className="text-quaternary">Computer Science Student</p>
      </div>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-tertiary">About me</p>
      <div className="text-secondary flex flex-col gap-4">
        <p>
          Once I start working on a project, I simply can&apos;t let the{' '}
          <i>work</i> go unfinished. I am dedicated to trying out various codes and making things
          magically work - literally!
        </p>
        <p>
          I am open to exploring various opportunities when it comes to ideas, projects,
          and new ventures. I am in love with anything that has to do with technology,
          whether it&apos;s retro or something beyond my understanding.
        </p>
        <p>
          I experiment a lot with not only code but also editing, designing, photographing,
          and reverse engineering things that seem beyond my comprehension. Currently studying
          Computer Science, however, that doesn&apos;t stop me from diving into newer, better opportunities.
        </p>

      </div>
    </div>
  );
}

function ContactLink({
  href,
  title,
  website,
  email,
}: {
  email?: string;
  href?: string;
  title: string;
  website?: string;
}) {
  return (
    <span className="block items-center gap-4">
      {website && <p className="text-quaternary">{website}</p>}
      {href && (
        <a
          className="text-secondary hover:text-primary transition-opacity duration-150"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {title}{' '}
          <svg
            className=" inline-block h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      )}
      {email && (
        <p className="text-secondary hover:text-primary transition-opacity duration-150">
          {title}
        </p>
      )}
    </span>
  );
}

function Contact() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-tertiary">Links</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <ContactLink
          href="https://x.com/rlutolli23"
          title="rlutolli23"
          website="X"
        />
        <ContactLink
          href="https://github.com/rlutolli"
          title="rlutolli"
          website="GitHub"
        />
        <ContactLink
          href="https://www.instagram.com/rlutolli/"
          title="rlutolli"
          website="Instagram"
        />
        <ContactLink
          href="mailto:rlutolli@tutamail.com"
          title="rlutolli@tutamail.com"
          website="Email"
        />
      </div>
    </div>
  );
}


