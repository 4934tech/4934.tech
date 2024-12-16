import { PopoverGroup } from '@headlessui/react';
import { NavItem } from './NavItem';
import { PopoverMenu } from './PopoverMenu';
import { MenuProps } from '@/types/navbar';

interface DesktopMenuProps extends MenuProps {
    opacity: number;
    blur: number;
}

export function DesktopMenu({ solutions, solutionsCTA, hackathons, hackathonsCTA, projects, opacity, blur }: DesktopMenuProps) {
    return (
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <PopoverMenu label="Solutions" items={solutions} ctaItems={solutionsCTA} opacity={opacity} blur={blur} />
            <NavItem label="Gallery" href="#" />
            <PopoverMenu label="Hackathons" items={hackathons} ctaItems={hackathonsCTA} opacity={opacity} blur={blur} />
            <NavItem label="About" href="#" />
            <PopoverMenu label="Projects" items={projects} opacity={opacity} blur={blur} />
        </PopoverGroup>
    );
}

