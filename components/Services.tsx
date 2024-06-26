"use client";
import React, { useState } from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { ServiceType } from "@/types";
import { ServiceTitles } from "@/utils/serviceUtils";


export interface ContentItem {
  id: number;  
  serviceType: ServiceType,
  title: string;
  description: string;
  content: JSX.Element | React.ReactNode | string;
  className?: string;
  thumbnail: string;
  
}

const content1 = [
  {
    id: 1,
    serviceType: ServiceType.CLASSIC,
    title: ServiceTitles[ServiceType.CLASSIC],
    description:
      "Achieve an elegant and natural look with classic eyelash extensions. Perfect for those who want to enhance their natural lashes without too much volume.",
    content: (
      <motion.div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white transition duration-1000"
      >
        Classic (1D)
      </motion.div>
    ),
    thumbnail: 'https://images.unsplash.com/photo-1719032168861-994a74306944?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    serviceType: ServiceType.HYBRID,
    title: ServiceTitles[ServiceType.HYBRID],
    description:
      "Combine classic and volume extensions to create a fuller yet natural look. Ideal for those who want a bit more volume without going overboard.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    thumbnail: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    serviceType: ServiceType.TWO_D,
    title: ServiceTitles[ServiceType.TWO_D],
    description:
      "Enjoy a natural yet fuller appearance with Natural eyelash extensions. Perfect for everyday wear, providing a soft and natural effect.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Natural (2D)
      </div>
    ),
    thumbnail: 'https://images.unsplash.com/photo-1629309118282-b084f2d69e1e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    serviceType: ServiceType.THREE_D,
    title: ServiceTitles[ServiceType.THREE_D],
    description:
      "Add some volume with Light Volume 3D eyelash extensions. Ideal for special occasions when you need to look sophisticated.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Light volume (3D)
      </div>
    ),
    thumbnail: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    serviceType: ServiceType.FOUR_D,
    title: ServiceTitles[ServiceType.FOUR_D],
    description:
      "Create a dramatic and voluminous look with 4-5D eyelash extensions. Perfect for those who want to make a bold statement.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Volume (4-5D)
      </div>
    ),
    thumbnail: 'https://images.unsplash.com/photo-1545235618-936882574fe9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 6,
    serviceType: ServiceType.MEGA_VOLUME,
    title: ServiceTitles[ServiceType.MEGA_VOLUME],
    description:
      "Achieve maximum volume with Mega Volume eyelash extensions. Perfect for those who love to stand out and want the fullest lashes possible.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Mega volume (6D+)
      </div>
    ),
    thumbnail: 'https://images.unsplash.com/photo-1513791057-0a2d61813053?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 7,
    serviceType: ServiceType.LASHES_REMOVAL,
    title: ServiceTitles[ServiceType.LASHES_REMOVAL],
    description:
      "Safely and effectively remove your eyelash extensions with our removal service. Ensures gentle care and the health of your natural lashes.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Lashes removal
      </div>
    ),
    thumbnail: 'https://images.unsplash.com/photo-1605995076810-c9a99aefbb30?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 8,
    serviceType: ServiceType.EXPRESS_LASHES,
    title: ServiceTitles[ServiceType.EXPRESS_LASHES],
    description:
      "Get quick and high-quality eyelash extensions with our Express service. Perfect for those with limited time who still want to look flawless.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Express lashes
      </div>
    ),
    thumbnail: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 9,
    serviceType: ServiceType.BOTTOM_LASHES,
    title: ServiceTitles[ServiceType.BOTTOM_LASHES],
    description:
      "Enhance your lower lashes with our Bottom Lashes service. Adds extra accent and completes your look with a finishing touch.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Bottom lashes
      </div>
    ),
    thumbnail: 'https://images.unsplash.com/photo-1513791057-0a2d61813053?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];


const browContent = [
  {
    id: 1,
    serviceType: ServiceType.BROW_SHAPING,
    title: ServiceTitles[ServiceType.BROW_SHAPING],
    description: "Enhance your brows with professional shaping for a defined and polished look.",
    content: (
      <motion.div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--brown-500),var(--beige-500))] flex items-center justify-center text-white transition duration-1000"
      >
        Brow Shaping
      </motion.div>
    ),
    thumbnail: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    serviceType: ServiceType.BROW_TINTING,
    title: ServiceTitles[ServiceType.BROW_TINTING],
    description: "Get beautiful and natural-looking tinted brows that perfectly frame your face.",
    content: (
      <motion.div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--brown-500),var(--beige-500))] flex items-center justify-center text-white transition duration-1000"
      >
        Brow Tinting
      </motion.div>
    ),
    thumbnail: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    serviceType: ServiceType.BROW_LAMINATION,
    title: ServiceTitles[ServiceType.BROW_LAMINATION],
    description: "Achieve fuller and well-groomed brows with our brow lamination service.",
    content: (
      <motion.div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--brown-500),var(--beige-500))] flex items-center justify-center text-white transition duration-1000"
      >
        Brow Lamination
      </motion.div>
    ),
    thumbnail: 'https://images.unsplash.com/photo-1586281380345-d5013a25d8a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const kindOfServices =[
    {
        id: 1,
        title: 'Eyebrow'
    },
    {
        id: 2,
        title: 'Eyelash'
    },
]
export function Services () {
    const [activeService, setActiveService] = useState('Eyelash');

  return (
    <div className=''>
        <div className="flex justify-between items-center p-4">
            <h2
                className="text-white text-2xl md:text-4xl font-bold text-center"
            >
                Services
            </h2>
            <div className='flex items-center md:gap-3 gap-6'>
                    {kindOfServices.map((service) => (
                    <div
                        key={service.id}
                        onClick={() => setActiveService(service.title)}
                        className={`h-10 cursor-pointer flex justify-center items-center  px-4 backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300
                        ${activeService === service.title && 'border-purple'}`}
                    >
                        {service.title}
                    </div>
                    ))}
            </div>
        </div>
      <StickyScroll content={activeService === 'Eyelash' ? content1 : browContent} />
    </div>
  );
}