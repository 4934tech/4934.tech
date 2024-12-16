import { PopoverGroup } from '@headlessui/react';
import { NavItem } from './NavItem';
import { PopoverMenu } from './PopoverMenu';
import { type MenuProps } from '@/types/navbar';

export function DesktopMenu({ solutions, solutionsCTA, hackathons, hackathonsCTA, projects }: MenuProps) {
    return (
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <PopoverMenu label="Solutions" items={solutions} ctaItems={solutionsCTA} />
            <NavItem label="Gallery" href="#" />
            <PopoverMenu label="Hackathons" items={hackathons} ctaItems={hackathonsCTA} />
            <NavItem label="About" href="#" />
            <PopoverMenu label="Projects" items={projects} />
        </PopoverGroup>
    );
}

