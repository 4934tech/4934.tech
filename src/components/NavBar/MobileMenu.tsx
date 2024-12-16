import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Logo } from './Logo';
import { DisclosureMenu } from './DisclosureMenu';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    solutions: any[];
    solutionsCTA: any[];
    hackathons: any[];
    hackathonsCTA: any[];
    projects: any[];
}

export function MobileMenu({ isOpen, onClose, solutions, solutionsCTA, hackathons, hackathonsCTA, projects }: MobileMenuProps) {
    return (
        <Dialog
            as="div"
            open={isOpen}
            onClose={onClose}
            className="lg:hidden"
        >
            <div className="fixed inset-0 z-10" />
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ease-in-out">
                <div className="flex items-center justify-between">
                    <Logo />
                    <button
                        type="button"
                        onClick={onClose}
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            <DisclosureMenu label="Solutions" items={[...solutions, ...solutionsCTA]} />
                            <DisclosureMenu label="Hackathons" items={[...hackathons, ...hackathonsCTA]} />
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
                            <DisclosureMenu label="Projects" items={projects} />
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
    );
}

