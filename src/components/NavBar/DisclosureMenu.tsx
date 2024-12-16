import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface MenuItem {
    name: string;
    href: string;
}

interface DisclosureMenuProps {
    label: string;
    items: MenuItem[];
}

export function DisclosureMenu({ label, items }: DisclosureMenuProps) {
    return (
        <Disclosure as="div" className="-mx-3">
            {({ open }) => (
                <>
                    <DisclosureButton className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold transition-all duration-300 ease-in-out ${
                        open
                            ? 'text-transparent bg-gradient-to-r from-[#32b7b6] to-[#425389] bg-clip-text'
                            : 'text-white hover:bg-gray-950 hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text'
                    }`}
                    >
                        {label}
                        <ChevronDownIcon
                            aria-hidden="true"
                            className={`size-5 flex-none transition-transform duration-300 ease-in-out ${open ? 'rotate-180' : ''} ${open ? 'text-[#32b7b6]' : 'group-hover:text-[#32b7b6]'}`}
                        />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2 transition-all duration-300 ease-in-out">
                        {items.map((item) => (
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
    );
}

