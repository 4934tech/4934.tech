import { ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/20/solid';

interface NavItemProps {
    label: string;
    href?: string;
    isOpen?: boolean;
    hasDropdown?: boolean;
    hasArrow?: boolean;
    onClick?: () => void;
}

export function NavItem({ label, href = '#', isOpen, hasDropdown, hasArrow, onClick }: NavItemProps) {
    const baseClasses = "flex items-center gap-x-1 text-sm/6 font-semibold transition-colors duration-200 ease-in-out group";
    const activeClasses = "text-transparent bg-gradient-to-r from-[#32b7b6] to-[#425389] bg-clip-text";
    const inactiveClasses = "text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text";

    return (
        <a href={href} className={`${baseClasses} ${isOpen ? activeClasses : inactiveClasses}`} onClick={onClick}>
            <svg width="0" height="0" className="absolute">
                <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#32b7b6" />
                    <stop offset="100%" stopColor="#425389" />
                </linearGradient>
            </svg>
            {label}
            {hasDropdown && (
                <ChevronDownIcon
                    aria-hidden="true"
                    className={`size-5 flex-none transition-transform duration-300 ease-in-out ${
                        isOpen ? 'rotate-180 text-[#425389]' : 'text-gray-300 group-hover:text-[#425389]'
                    }`}
                />
            )}
            {hasArrow && (
                <ArrowRightIcon
                    aria-hidden="true"
                    className="size-4 flex-none text-gray-300 group-hover:fill-[url(#arrow-gradient)] transition-colors duration-200 ease-in-out"
                />
            )}
        </a>
    );
}

