import clsx from 'clsx'
import NextLink from 'next/link'
import { ComponentProps } from 'react'

export type LinkProps = Omit<ComponentProps<typeof NextLink>, 'style'> & {
  /**
   * Link style.
   *
   * Defaults to 'underline'.
   */
  style?: 'underline' | 'none'
}

export const Link = ({
  style = 'underline',
  className,
  ...props
}: LinkProps) => {
  return (
    <NextLink
      {...props}
      className={clsx(
        'block',
        {
          'underline transition-opacity hover:opacity-60 active:opacity-50':
            style === 'underline',
        },
        className
      )}
    />
  )
}
