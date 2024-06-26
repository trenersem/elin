import { BottomGradient } from '@/components/ui/bottomGradient';
import React from 'react'

interface ITimeItem {
  time: string;
  handleTimeSelect: (time: string) => void;
  selectedTime?: boolean;
}

const TimeItem = ({time, handleTimeSelect, selectedTime}: ITimeItem) => {
  return (
     <div
        className="mb-4 w-max"
        onClick={() => handleTimeSelect(time)}
      >
        <div  
          className={`cursor-pointer flex justify-center items-center px-2 text-xs bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset ${selectedTime  ? "text-purple border-purple border-[1px] border-solid" : ""}`}
        >
            {time}
            <BottomGradient />
        </div>
     </div>
  )
}

export default TimeItem