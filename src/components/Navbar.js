import { Fragment } from 'react'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Plus', href: '#', current: true },
    { name: 'Enterprise', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="">
            {({ open }) => (
                <>
                    <div className="mx-auto pt-[1.5rem] max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                                <div className="flex w-full flex-shrink-0 justify-between  items-center">
                                    <img
                                        className="h-9 mq650:hidden inline-flex w-auto"
                                        src="/black-logo-png@2x.png"
                                        alt="Your Company"
                                    />
                                     <img
                                        className="h-9 mx-auto hidden mq650:inline-flex w-auto"
                                        src="/black-logo-png@2x.png"
                                        alt="Your Company"
                                    />
                                    <div className="w-[35rem] mq650:hidden inline-flex flex flex-row items-center justify-start gap-[25px] max-w-full mq825:w-[130px]">
                                        <nav className="m-0 flex-1 flex flex-row items-center justify-between max-w-full gap-[20px] text-left text-sm text-gray-300 font-nunito mq825:hidden">
                                            <div className="relative inline-block min-w-[28px]">Plus</div>
                                            <div className="relative inline-block min-w-[65px]">Enterprise</div>
                                            <div className="relative inline-block min-w-[42px]">Career</div>
                                            <div className="relative inline-block min-w-[30px]">Blog</div>
                                            <div className="relative inline-block min-w-[123px] whitespace-nowrap">{`Terms & Conditions`}</div>
                                            <Menu as="div" className="relative">
                                                <div>
                                                    <MenuButton className="cursor-pointer py-2 px-[6px] bg-[transparent] rounded-3xs flex flex-row items-center justify-start gap-[8px] border-[1px] border-solid border-darkslategray-100">
                                                        <img
                                                            className="h-6 w-6 relative overflow-hidden shrink-0"
                                                            alt=""
                                                            src="/mageglobe.svg"
                                                        />
                                                        <div className="relative text-sm font-nunito text-gray-300 text-left inline-block min-w-[25px]">
                                                            Eng
                                                        </div>
                                                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    </MenuButton>
                                                </div>

                                                <Transition
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div className="">
                                                            <MenuItem>
                                                                {({ focus }) => (
                                                                    <a
                                                                        href="#"
                                                                        className={classNames(
                                                                            focus ? 'bg-[#afafaf] text-white' : 'text-gray-700',
                                                                            'block px-4 py-2 rounded-md text-sm'
                                                                        )}
                                                                    >
                                                                        English
                                                                    </a>
                                                                )}
                                                            </MenuItem>


                                                        </div>
                                                    </MenuItems>
                                                </Transition>

                                            </Menu>
                                        </nav>

                                    </div>
                                </div>

                            </div>
                            {/* <div className="absolute  right-[-1.5rem] flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <DisclosureButton className="relative hidden mq650:inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none">
                                    <span className="absolute" />
                                    <span className="sr-only"></span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className=" block h-6 w-6" aria-hidden="true" />
                                    )}
                                </DisclosureButton>
                            </div> */}
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden">
                        <div className="space-y-1 px-6  pt-2">
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Plus</div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Enterprise</div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Career</div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Blog</div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{`Terms & Conditions`}</div>
                            <Menu as="div" className="relative">
                                <div>
                                    <MenuButton className="cursor-pointer ml-2 mt-3 py-2 px-[9px] bg-[transparent] rounded-3xs flex flex-row items-center justify-start gap-[8px] border-[1px] border-solid border-darkslategray-100">
                                        <img
                                            className="h-6 w-6 relative overflow-hidden shrink-0"
                                            alt=""
                                            src="/mageglobe.svg"
                                        />
                                        <div className="relative text-sm font-nunito text-gray-300 text-left inline-block min-w-[25px]">
                                            Eng
                                        </div>
                                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </MenuButton>
                                </div>

                                <Transition
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <MenuItems className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="">
                                            <MenuItem>
                                                {({ focus }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            focus ? 'bg-[#afafaf] text-white' : 'text-gray-700',
                                                            'block px-4 py-2 rounded-md text-sm'
                                                        )}
                                                    >
                                                        English
                                                    </a>
                                                )}
                                            </MenuItem>


                                        </div>
                                    </MenuItems>
                                </Transition>

                            </Menu>
                        </div>
                    </DisclosurePanel>


                </>
            )}
        </Disclosure>
    )
}
