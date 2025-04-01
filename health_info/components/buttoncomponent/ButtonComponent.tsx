import React from 'react'
import Link from 'next/link'

type ButtonComponentProps = {
  href?: string
  children?: React.ReactNode
}

export default function ButtonComponent({children, href}: ButtonComponentProps) {
    
  return (
    <Link href={href ? href : '/'} className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        {children}
    </Link>
  )
}
