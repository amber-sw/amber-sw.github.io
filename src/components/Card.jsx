import Link from 'next/link'
import clsx from 'clsx'

export function Card({ as, className, children }) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(className, 'group relative flex flex-col items-start')}
    >
      {children}
    </Component>
  )
}

Card.Link = function CardLink({ children, ...props }) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

Card.Title = function CardTitle({ as, href, children }) {
  let Component = as ?? 'h2'

  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

Card.Description = function CardDescription({ children }) {
  return (
    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  )
}

Card.Subtitle = function CardSubtitle({ children }) {
  return (
    <p className="relative italic z-10 mt-2 text-sm text-zinc-500 dark:text-zinc-500">
      {children}
    </p>
  )
}

Card.Footer = function CardFooter({ children }) {
  return (
    <p className="relative mt-6 inset-x-0 bottom-0 text-xs text-zinc-500 dark:text-zinc-500">
      {children}
    </p>
  )
}
