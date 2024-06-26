import React from 'react'
import { BackgroundGradient } from './ui/background-gradient';


const About = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
       <p className="mt-6 mb-8 text-base font-bold text-zinc-600 dark:text-zinc-400">
            Subtitle
       </p>
      <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
        <div className="md:w-1/2">
         
          <p className="mt-6 mb-6 text-base text-zinc-600 dark:text-zinc-400">
            Hi, I&apos;m Alina, a professional lashmaker with over eight years of experience. I am passionate about creating beautiful, customized eyelash extensions that enhance your natural beauty. My commitment to excellence ensures that every client leaves with a stunning and flawless look.
          </p>
        </div>
        <div className="md:w-1/2">
            <BackgroundGradient
                className="rounded-full bg-white dark:bg-zinc-900 p-0 overflow-hidden"
                containerClassName='rounded-full md:w-[70%] w-full mx-auto md:mr-0 p-1  overflow-hidden '
            >
            <img
                src="/about.jpeg"
                alt="Alina, Lashmaker"
                className="w-full h-auto rounded-full shadow-md" />
            </BackgroundGradient>
        </div>
      </div>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
         <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <p>With over eight years of experience, I bring a wealth of knowledge and skill to every appointment.</p>
        </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <h3 className="text-xl font-semibold mb-2">Attention to Detail</h3>
          <p>I meticulously craft each set of lashes to ensure they perfectly complement your unique features.</p>
        </BackgroundGradient>
         <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <h3 className="text-xl font-semibold mb-2">Professionalism</h3>
          <p>My commitment to professionalism ensures a high-quality service and a comfortable, enjoyable experience.</p>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default About;
