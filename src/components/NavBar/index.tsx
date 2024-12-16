'use client'

import { useState } from 'react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    ShieldCheckIcon,
    SquaresPlusIcon,
    XMarkIcon,
    BeakerIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Logo } from './Logo'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'
import { NavItem } from './NavItem'
import { type MenuItem, type MenuCTAItem } from '@/types/navbar';

// This component is made by Olav "Olavorw" Sharma.

const projects: MenuItem[] = [
    { name: 'UltraAgent', description: 'A powerful AI powered agent with real-world capabilities.', href: '/projects/ultraagent', icon: BeakerIcon },
    { name: 'malware.4934.tech', description: 'A massive malware repository with a focus on security.', href: '/projects/malware', icon: ShieldCheckIcon },
]

const hackathons: MenuItem[] = [
    { name: 'Winter 2024', description: 'An online single-day hackathon', href: 'hackathons/winter2024', icon: Bars3Icon },
    { name: 'PwnPointed', description: 'A security themed online hackathon.', href: 'hackathons/pwnpointed', icon: ShieldCheckIcon },
    { name: 'XAutomation', description: 'A multi-day in-person automation themed hackathon.', href: 'hackathons/summer2024', icon: XMarkIcon },
]

const hackathonsCTA: MenuCTAItem[] = [
    { name: 'View Upcoming', href: 'hackathons/upcoming', icon: ArrowPathIcon },
    { name: 'View All', href: 'hackathons', icon: ArrowPathIcon },
]

const solutions: MenuItem[] = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const solutionsCTA: MenuCTAItem[] = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-black">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Logo />
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
                <DesktopMenu
                    solutions={solutions}
                    solutionsCTA={solutionsCTA}
                    hackathons={hackathons}
                    hackathonsCTA={hackathonsCTA}
                    projects={projects}
                />
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <NavItem label="Join Us" href="#" hasArrow />
                </div>
            </nav>
            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                solutions={solutions}
                solutionsCTA={solutionsCTA}
                hackathons={hackathons}
                hackathonsCTA={hackathonsCTA}
                projects={projects}
            />
        </header>
    )
}

