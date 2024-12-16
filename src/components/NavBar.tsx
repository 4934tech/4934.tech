'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon, ShieldCheckIcon,
    SquaresPlusIcon,
    XMarkIcon,
    BeakerIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

// This component is made by Olav "Olavorw" Sharma.

const projects = [
    { name: 'UltraAgent', description: 'A powerful AI powered agent with real-world capabilities.', href: '/projects/ultraagent', icon: BeakerIcon },
    { name: 'malware.4934.tech', description: 'A massive malware repository with a focus on security.', href: '/projects/malware', icon: ShieldCheckIcon },
]

const hackathons = [
    { name: 'Winter 2024', description: 'An online single-day hackathon', href: 'hackathons/winter2024', icon: Bars3Icon },
    { name: 'PwnPointed', description: 'A security themed online hackathon.', href: 'hackathons/pwnpointed', icon: ShieldCheckIcon },
    { name: 'XAutomation', description: 'A multi-day in-person automation themed hackathon.', href: 'hackathons/summer2024', icon: XMarkIcon },
]

const hackathonsCTA = [
    { name: 'View Upcoming', href: 'hackathons/upcoming', icon: ArrowPathIcon },
    { name: 'View All', href: 'hackathons', icon: ArrowPathIcon },
]

const solutions = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const solutionsCTA = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-black">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5 group">
                        <span className="sr-only">4934</span>
                        <img
                            alt=""
                            src="../4934sqw.png"
                            className="h-14 w-auto group-hover:hidden"
                        />
                        <img
                            alt=""
                            src="../4934sqg.png"
                            className="h-14 w-auto hidden group-hover:block"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        {({ open }) => (
                            <>
                                <PopoverButton
                                    className={`flex items-center gap-x-1 text-sm/6 font-semibold ${
                                        open
                                            ? 'text-transparent bg-gradient-to-r from-[#32b7b6] to-[#425389] bg-clip-text'
                                            : 'text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text'
                                    } transition-colors duration-200 ease-in-out group`}
                                >
                                    Solutions
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className={`size-5 flex-none transition-transform duration-300 ease-in-out ${
                                            open ? 'rotate-180 text-[#425389]' : 'text-gray-300 group-hover:text-[#425389]'
                                        }`}
                                    />
                                </PopoverButton>

                                <PopoverPanel
                                    transition
                                    className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="p-4">
                                        {solutions.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-900 transition-colors duration-200 ease-in-out"
                                            >
                                                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-900 group-hover:bg-black">
                                                    <item.icon aria-hidden="true" className="size-6 text-gray-300 group-hover:text-[#32b7b6] transition-colors duration-200 ease-in-out" />
                                                </div>
                                                <div className="flex-auto">
                                                    <a href={item.href} className="block font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#32b7b6] group-hover:to-[#425389] group-hover:bg-clip-text transition-colors duration-200 ease-in-out">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-500">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-black">
                                        {solutionsCTA.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-white hover:bg-gray-900 hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text transition-colors duration-200 ease-in-out"
                                            >
                                                <item.icon aria-hidden="true" className="size-5 flex-none bg-black" />
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </PopoverPanel>
                            </>
                        )}
                    </Popover>

                    <a href="#" className="text-sm/6 font-semibold text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text transition-colors duration-200 ease-in-out">
                        Gallery
                    </a>
                    <Popover className="relative">
                        {({ open }) => (
                            <>
                                <PopoverButton
                                    className={`flex items-center gap-x-1 text-sm/6 font-semibold ${
                                        open
                                            ? 'text-transparent bg-gradient-to-r from-[#32b7b6] to-[#425389] bg-clip-text'
                                            : 'text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text'
                                    } transition-colors duration-200 ease-in-out group`}
                                >
                                    Hackathons
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className={`size-5 flex-none transition-transform duration-300 ease-in-out ${
                                            open ? 'rotate-180 text-[#425389]' : 'text-gray-300 group-hover:text-[#425389]'
                                        }`}
                                    />
                                </PopoverButton>

                                <PopoverPanel
                                    transition
                                    className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="p-4">
                                        {hackathons.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-900 transition-colors duration-200 ease-in-out"
                                            >
                                                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-900 group-hover:bg-black">
                                                    <item.icon aria-hidden="true" className="size-6 text-gray-300 group-hover:text-[#32b7b6] transition-colors duration-200 ease-in-out" />
                                                </div>
                                                <div className="flex-auto">
                                                    <a href={item.href} className="block font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#32b7b6] group-hover:to-[#425389] group-hover:bg-clip-text transition-colors duration-200 ease-in-out">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-500">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-black">
                                        {hackathonsCTA.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-white hover:bg-gray-900 hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text transition-colors duration-200 ease-in-out"
                                            >
                                                <item.icon aria-hidden="true" className="size-5 flex-none bg-black" />
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </PopoverPanel>
                            </>
                        )}
                    </Popover>
                    <a href="#" className="text-sm/6 font-semibold text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text transition-colors duration-200 ease-in-out">
                        About
                    </a>
                    <Popover className="relative">
                        {({ open }) => (
                            <>
                                <PopoverButton
                                    className={`flex items-center gap-x-1 text-sm/6 font-semibold ${
                                        open
                                            ? 'text-transparent bg-gradient-to-r from-[#32b7b6] to-[#425389] bg-clip-text'
                                            : 'text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text'
                                    } transition-colors duration-200 ease-in-out group`}
                                >
                                    Projects
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className={`size-5 flex-none transition-transform duration-300 ease-in-out ${
                                            open ? 'rotate-180 text-[#425389]' : 'text-gray-300 group-hover:text-[#425389]'
                                        }`}
                                    />
                                </PopoverButton>

                                <PopoverPanel
                                    transition
                                    className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="p-4">
                                        {projects.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-900 transition-colors duration-200 ease-in-out"
                                            >
                                                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-900 group-hover:bg-black">
                                                    <item.icon aria-hidden="true" className="size-6 text-gray-300 group-hover:text-[#32b7b6] transition-colors duration-200 ease-in-out" />
                                                </div>
                                                <div className="flex-auto">
                                                    <a href={item.href} className="block font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#32b7b6] group-hover:to-[#425389] group-hover:bg-clip-text transition-colors duration-200 ease-in-out">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-500">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </PopoverPanel>
                            </>
                        )}
                    </Popover>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm/6 font-semibold text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text transition-colors duration-200 ease-in-out">
                        Join Us <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog
                as="div"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
            >
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ease-in-out">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">4934</span>
                            <img
                                alt=""
                                src="../4934sqw.png"
                                className="h-14 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold transition-all duration-300 ease-in-out ${
                                                open
                                                    ? 'text-transparent bg-gradient-to-r from-[#32b7b6] to-[#425389] bg-clip-text'
                                                    : 'text-white hover:bg-gray-950 hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text'
                                            }`}
                                            >
                                                Solutions
                                                <ChevronDownIcon
                                                    aria-hidden="true"
                                                    className={`size-5 flex-none transition-transform duration-300 ease-in-out ${open ? 'rotate-180' : ''} ${open ? 'text-[#32b7b6]' : 'group-hover:text-[#32b7b6]'}`}
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2 transition-all duration-300 ease-in-out">
                                                {[...solutions, ...solutionsCTA].map((item) => (
                                                    <DisclosureButton
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white hover:bg-gray-950 hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text transition-colors duration-200 ease-in-out"
                                                    >
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold transition-all duration-300 ease-in-out ${
                                                open
                                                    ? 'text-transparent bg-gradient-to-r from-[#32b7b6] to-[#425389] bg-clip-text'
                                                    : 'text-white hover:bg-gray-950 hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text'
                                            }`}
                                            >
                                                Hackathons
                                                <ChevronDownIcon
                                                    aria-hidden="true"
                                                    className={`size-5 flex-none transition-transform duration-300 ease-in-out ${open ? 'rotate-180' : ''} ${open ? 'text-[#32b7b6]' : 'group-hover:text-[#32b7b6]'}`}
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2 transition-all duration-300 ease-in-out">
                                                {[...hackathons, ...hackathonsCTA].map((item) => (
                                                    <DisclosureButton
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white hover:bg-gray-950 hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text transition-colors duration-200 ease-in-out"
                                                    >
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-950 hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text transition-colors duration-200 ease-in-out"
                                >
                                    Gallery
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-950 hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text transition-colors duration-200 ease-in-out"
                                >
                                    About
                                </a>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold transition-all duration-300 ease-in-out ${
                                                open
                                                    ? 'text-transparent bg-gradient-to-r from-[#32b7b6] to-[#425389] bg-clip-text'
                                                    : 'text-white hover:bg-gray-950 hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text'
                                            }`}
                                            >
                                                Projects
                                                <ChevronDownIcon
                                                    aria-hidden="true"
                                                    className={`size-5 flex-none transition-transform duration-300 ease-in-out ${open ? 'rotate-180' : ''} ${open ? 'text-[#32b7b6]' : 'group-hover:text-[#32b7b6]'}`}
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2 transition-all duration-300 ease-in-out">
                                                {projects.map((item) => (
                                                    <DisclosureButton
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white hover:bg-gray-950 hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text transition-colors duration-200 ease-in-out"
                                                    >
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-950 hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text transition-colors duration-200 ease-in-out"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

