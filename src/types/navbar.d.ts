import { type IconType } from "@heroicons/react/24/outline"

export interface MenuItem {
    name: string;
    description: string;
    href: string;
    icon: IconType;
}

export interface MenuCTAItem {
    name: string;
    href: string;
    icon: IconType;
}

export interface MenuProps {
    solutions: MenuItem[];
    solutionsCTA: MenuCTAItem[];
    hackathons: MenuItem[];
    hackathonsCTA: MenuCTAItem[];
    projects: MenuItem[];
}

