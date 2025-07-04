import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoKetchUP from '@/images/logos/ketchup_logo.png'
import logoDungeonRS from '@/images/logos/dungeon_rs_logo.png'
import logoPersonalSite from '@/images/logos/personalsite_logo.png'

const projects = [
  {
    name: 'dungeon_rs',
    description:
      'Map building software for TTRPGs.',
    technologies: 'Rust',
    role: 'Developer',
    link: { href: 'https://github.com/dealloc/dungeon_rs', label: 'github.com' },
    logo: logoDungeonRS,
  },
  {
    name: 'KetchUP',
    description:
      'Intranet application to manage timesheets, read newsletters, access documentation and more.',
    technologies: 'REACT, Node.js',
    role: 'Team lead, frontend developer',
    link: null,
    logo: logoKetchUP,
  },
  {
    name: 'This very website',
    description:
      'Personal resume website built with the goal to learn new techologies.',
      technologies: 'REACT, next.js, TailwindCSS',
      role: 'Developer',
    link: { href: 'https://github.com/amber-sw/amber-sw.github.io', label: 'github.com' },
    logo: logoPersonalSite,
  }
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made that I’m proud of.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made that I’m proud of."
      intro="I’ve worked on varying projects over the years, here are the ones I feel I truly left my mark on. Many of them are work-related, so unfortunately no repositories can be linked. Not to worry, there are more projects in the work! You can always check them out on my GitHub."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8 rounded-full"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link?.href || '#'}>{project.name}</Card.Link>
            </h2>

            <Card.Subtitle>{project.role}</Card.Subtitle>
            <Card.Description>{project.description}</Card.Description>
            
            <Card.Footer>{project.technologies}</Card.Footer>
            { project.link ? (
              <p className="relative z-10 flex text-sm font-medium text-zinc-400 transition group-hover:text-lime-600 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            ) : (<></>)}
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
