'use client'

import { Fragment, useState } from 'react';
import { IAdminNavigation } from '../page';
import Image from 'next/image';


interface INavProps {
  navigation: IAdminNavigation[];
  setActiveTab: (tabName: string) => void;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Nav: React.FC<INavProps> = ({ navigation, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

  return (
        <nav className="bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image src="/logo.png" alt="Your Company" width={10} height={10}/>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <div
                        key={item.name}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        onClick={() => setActiveTab(item.name)}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>
  )
}

export default Nav;