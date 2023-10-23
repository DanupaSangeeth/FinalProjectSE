import E1 from '../../assets/e31.png'
import { Disclosure, Menu, Transition } from '@headlessui/react'


const navigation = [
  { name: 'Dashboard', href: '#', current: true },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Head() {
  return (
    <Disclosure as="nav" className="bg-indigo-300">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
             
              <div id='navb1' className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ml-96 pl-40">
              <a href='/'> <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-10 w-44 "
                  src={E1}
                    alt="Your Company"
                  />
                </div></a>
               
              </div>
              
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}