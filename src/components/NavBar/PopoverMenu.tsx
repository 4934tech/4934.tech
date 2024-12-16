import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { MenuItem, MenuCTAItem } from '@/types/navbar';
import { NavItem } from './NavItem';

interface PopoverMenuProps {
    label: string;
    items: MenuItem[];
    ctaItems?: MenuCTAItem[];
    opacity: number;
    blur: number;
}

export function PopoverMenu({ label, items, ctaItems, opacity, blur }: PopoverMenuProps) {
    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <PopoverButton as="div">
                        <NavItem label={label} isOpen={open} hasDropdown />
                    </PopoverButton>

                    <PopoverPanel
                        transition
                        className={`absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in`}
                        style={{ backdropFilter: `blur(${blur}px)`, WebkitBackdropFilter: `blur(${blur}px)`, backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
                    >
                        <div className="p-4">
                            {items.map((item: MenuItem) => (
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
                        {ctaItems && (
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-black">
                                {ctaItems.map((item: MenuCTAItem) => (
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
                        )}
                    </PopoverPanel>
                </>
            )}
        </Popover>
    );
}

