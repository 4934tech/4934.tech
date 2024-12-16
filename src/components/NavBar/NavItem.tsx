import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface NavItemProps {
    label: string;
    href?: string;
    isOpen?: boolean;
    hasDropdown?: boolean;
    onClick?: () => void;
}

export function NavItem({ label, href = '#', isOpen, hasDropdown, onClick }: NavItemProps) {
    const baseClasses = "flex items-center gap-x-1 text-sm/6 font-semibold transition-colors duration-200 ease-in-out group";
    const activeClasses = "text-transparent bg-gradient-to-r from-[#32b7b6] to-[#425389] bg-clip-text";
    const inactiveClasses = "text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text";

    return (
        <a href={href} className={`${baseClasses} ${isOpen ? activeClasses : inactiveClasses}`} onClick={onClick}>
            {label}
            {hasDropdown && (
                <ChevronDownIcon
                    aria-hidden="true"
                    className={`size-5 flex-none transition-transform duration-300 ease-in-out ${
                        isOpen ? 'rotate-180 text-[#425389]' : 'text-gray-300 group-hover:text-[#425389]'
                    }`}
                />
            )}
        </a>
    );
}

