import { PopoverGroup } from '@headlessui/react';
import { NavItem } from './NavItem';
import { PopoverMenu } from './PopoverMenu';

interface DesktopMenuProps {
    solutions: any[];
    solutionsCTA: any[];
    hackathons: any[];
    hackathonsCTA: any[];
    projects: any[];
}

export function DesktopMenu({ solutions, solutionsCTA, hackathons, hackathonsCTA, projects }: DesktopMenuProps) {
    return (
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <PopoverMenu label="Solutions" items={solutions} ctaItems={solutionsCTA} />
            <NavItem label="Gallery" />
            <PopoverMenu label="Hackathons" items={hackathons} ctaItems={hackathonsCTA} />
            <NavItem label="About" />
            <PopoverMenu label="Projects" items={projects} />
        </PopoverGroup>
    );
}

