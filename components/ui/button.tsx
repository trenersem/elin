import React from 'react'

const Button = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string, icon?: React.ReactNode, position: string,
    handleClick?: () => void, otherClasses?: string
}) => {

  return (
        <button
            className={`bg-slate-800  md:w-60 md:mt-10 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-md p-px text-xs font-semibold leading-6  text-white inline-block
             ${otherClasses}`}
            onClick={handleClick}
        >
            <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex h-12 w-full space-x-2 items-center z-10 rounded-md bg-zinc-950  ring-1 ring-white/10 ">
                <span 
                className={`inline-flex h-full w-full cursor-pointer rounded-md items-center justify-center bg-slate-950 px-5 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
                >
                    {position === 'left' && icon}
                    {title}
                    {position === 'right' && icon}
                </span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
  )
}

export default Button;
