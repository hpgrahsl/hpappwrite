import type { ReactNode } from 'react'

export const navItems: Array<{
  label: string
  href: string
  type?: 'button' | 'link'
}> = [
  {
    label: 'About me',
    href: '/#about',
  },
  {
    label: 'Contact me',
    href: '/contact',
    type: 'button',
  },
]

export const experiences: Array<{
  title: string
  company: string
  years: string
  description: ReactNode
}> = []
