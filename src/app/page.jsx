import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import logoPT from '@/images/logos/talent_planet_logo.jpeg'
import logoOsoc from '@/images/logos/open_summer_of_code_logo.jpeg'
import logoUP from '@/images/logos/up-logo.png'
import logoDruva from '@/images/logos/druva_logo.png'
import image1 from '@/images/photos/copenhagen.jpg'
import image2 from '@/images/photos/computerscreen.png'
import image3 from '@/images/photos/osoc_group.jpeg'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-white dark:stroke-zinc-900"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-900"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}


function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime
  
  let endLabel;
  let endDate;
  if(role.end){
    endLabel = typeof role.end === 'string' ? role.end : role.end.label
    endDate = typeof role.end === 'string' ? role.end : role.end.dateTime
  }

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7 rounded-full" unoptimized />
      </div>
      <div className='w-full'>
        <dl className="flex justify-between w-full flex-auto flex-wrap gap-x-2">
          <dt className="sr-only">Company</dt>
          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {role.company}
          </dd>
          <dt className="sr-only">Role</dt>
          <dd className="text-xs text-zinc-500 dark:text-zinc-300">
            {role.title}
          </dd>
          <dt className="sr-only">Date</dt>
          <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-300">
            <time dateTime={startDate}>{startLabel}</time>{' '}
            {endDate &&
              <>
                <span aria-hidden="true">—</span>{' '}
                <time  dateTime={endDate}>{endLabel}</time>
              </>
            }
          </dd>
        </dl>


        <ol className='ml-2 italic'>
          {role.subRoles?.map((subRole, roleIndex) => (
            <li key={roleIndex}>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-[12px] font-sm text-zinc-900 dark:text-zinc-100">
                  {subRole.company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-[12px] text-zinc-500 dark:text-zinc-300">
                  {subRole.title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd className="ml-auto text-[12px] text-zinc-400 dark:text-zinc-300">
                  <time dateTime={subRole.start}>{subRole.start}</time>{' '}
                  {subRole.end &&
                    <>
                      <span aria-hidden="true">—</span>{' '}
                      <time  dateTime={subRole.end}>{subRole.end}</time>
                    </>
                  }
                </dd>
              </dl>
            </li>
          ))}
        </ol>
      </div>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'UniPartners',
      title: 'Frontend developer - IT consultant',
      logo: logoUP,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
      subRoles: [
        {
          company: 'Toyota Motor Europe',
          title: 'Frontend developer, UI/UX designer',
          start: '2024',
          end: 'Present'
        },
        {
          company: 'Intern project',
          title: 'Frontend developer, team lead',
          start: '2023',
          end: '2024'
        },
        {
          company: 'Athora',
          title: 'Full stack developer',
          start: '2022',
          end: '2023'
        },
      ]
    },
    {
      company: 'Planet Talent',
      title: 'PHP/AngularJS developer - IT Development Topstarter',
      logo: logoPT,
      start: '2020',
      end: '2022',
      subRoles: [
        {
          company: 'Cebir nv',
          title: 'Fullstack developer',
          start: '2020',
          end: '2022'
        }
      ]
    },
    {
      company: 'Druva',
      title: 'Software Engineer Intern',
      logo: logoDruva,
      start: '2020',
    },
    {
      company: 'Open Summer of Code',
      title: 'Frontend developer - Student',
      logo: logoOsoc,
      start: '2019',
    }
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 bg-white dark:bg-zinc-600">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="primary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-white transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3].map((image) => (
          <div
            key={image.src}
            className='relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800'
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-full">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Frontend developer and UI/UX designer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hi! I’m Amber, a frontend developer and UI/UX designer based in Vlaams-Brabant, Belgium. I have a background as a consultant and been part of varying projects, each with their own approach and technologies. 
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/amber-sw"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/amber-swevers/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none">
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
