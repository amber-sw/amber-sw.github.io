import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait-self.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-lime-700 dark:text-zinc-200 dark:hover:text-lime-600"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-lime-700" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'Here to create the perfect UI/UX experience for you',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Amber Swevers
          </h1>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">Here to create the perfect UI/UX experience for you</h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I started my career as a fullstack developer in 2020, working with AngularJS and PHP. Since then, I have had hands-on experience with many different technologies, such as Angular, AngularJS,
              ReactJS and REACT on the frontend, and PHP and Java on the backend.
            </p>
            <p>
              Over these past few years, I have learned that I love working on user-facing applications. While I have experience with fullstack development, frontend is where my skillset truly shines. 
              I love nothing more than building the bridge between design and functionality.
            </p>
            <p>
              I’ve worked in both Dutch and English-speaking environments, often in multicultural teams. My projects have ranged from fully independent builds to close-knit team collaborations. 
              I adapt easily to different setups but especially enjoy the energy of a team working together toward a shared goal.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/amber-sw" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/amber-swevers/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:amber.swevers@hotmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              amber.swevers@hotmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
