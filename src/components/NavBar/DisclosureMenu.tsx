import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { MenuItem } from '../../types/navbar';

interface DisclosureMenuProps {
    label: string;
    items: MenuItem[];
}

export function DisclosureMenu({ label, items }: DisclosureMenuProps) {
    return (
        <Disclosure as="div" className="w-full">
            {({ open }) => (
                <>
                    <Disclosure.Button className={`group flex w-full items-center justify-between rounded-lg py-2 text-base/7 font-semibold transition-all duration-300 ease-in-out ${
                        open
                            ? 'text-transparent bg-gradient-to-r from-[#32b7b6] to-[#425389] bg-clip-text'
                            : 'text-white hover:bg-gray-900/50 hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text'
                    }`}
                    >
                        {label}
                        <ChevronDownIcon
                            aria-hidden="true"
                            className={`size-5 flex-none transition-transform duration-300 ease-in-out ${open ? 'rotate-180' : ''} ${open ? 'text-[#32b7b6]' : 'group-hover:text-[#32b7b6]'}`}
                        />
                    </Disclosure.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Disclosure.Panel className="mt-2 space-y-2">
                            {items.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white hover:bg-gray-900/50 hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text transition-colors duration-200 ease-in-out"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
}
