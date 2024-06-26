"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Button from "./button";
import { useBookService } from "@/hooks/useBookService";
import { ContentItem } from "../Services";
import { useRouter } from "next/navigation";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: ContentItem[];
  contentClassName?: string;
}) => {
  const router = useRouter();
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  const {handleSelectService} = useBookService();


  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const handleBookCurrentService = () => {
    handleSelectService(content[activeCard].serviceType);
    router.push(`/book`);
  }

  return (
    <div className="relative">
        <motion.div
        // animate={{
        //     backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        // }}
        className="h-[30rem] lg:h-[35rem] overflow-y-auto flex justify-center relative  rounded-md md:p-10 p-0 "
        //absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50
        ref={ref}
        >
        <div className="div relative flex items-start px-4">
            <div className="max-w-2xl">
            {content.map((item, index) => (
                <div key={item.title + index} className="my-10  bg-zinc-50 dark:bg-zinc-800/50 rounded-md px-2  py-4">
                    <motion.h2
                        initial={{
                        opacity: 0,
                        }}
                        animate={{
                        opacity: activeCard === index ? 1 : 0.3,
                        }}
                        className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
                    >
                        {item.title}
                    </motion.h2>
                    <motion.p
                        initial={{
                        opacity: 0,
                        }}
                        animate={{
                        opacity: activeCard === index ? 1 : 0.3,
                        }}
                        className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400 text-kg max-w-sm mt-10"
                    >
                        {item.description}
                    </motion.p>
                </div>
            ))}
            <div className="h-40" />
            </div>
        </div>
        
        <motion.div
            style={{ background: backgroundGradient }}
            className={cn(
            "lg:block h-[50%] w-full lg:w-[60%] lg:h-[60%] rounded-md bg-white m-4 ml-auto sticky top-10 overflow-hidden",
            contentClassName,
            )}
        >
            {content[activeCard].content ?? null}
            
        </motion.div>
        
        </motion.div>

        <Button
            handleClick={handleBookCurrentService}
            title={`Book ${content[activeCard].title}`}
            position='left'
            otherClasses='!absolute bottom-8 right-4 w-[45%]'
        />
    </div>
  );
};
