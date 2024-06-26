"use client";

import { cn } from "@/utils/cn";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher({className} : {className: string}) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    theme === 'light' ? (
        <div
            onClick={() => setTheme('dark')}
            className={cn(
                'group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20',
                className
            )}
    >
        <img
            src='/sun.svg'
            alt='sun'
            width={20}
            height={20}            
        />
    </div>
    ) : (
        <div
            onClick={() => setTheme('light')}
            className={cn(
                'group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20',
                className
            )}
        >
            <img
                src='/moon.svg'
                alt='sun'
                width={20}
                height={20}    
            />
        </div>
    )
  )
};