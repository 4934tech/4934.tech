/*
Copyright 2024 Olav "Olavorw" Sharma - 4934 Tech

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { FC } from 'react';
import Link from 'next/link';

interface HeaderSectionProps {
    Tagline?: string;
    Name: string;
    Description?: string;
    Stat1Name?: string;
    Stat2Name?: string;
    Stat3Name?: string;
    Stat4Name?: string;
    Stat1Value?: string;
    Stat2Value?: string;
    Stat3Value?: string;
    Stat4Value?: string;
    Link1Name?: string;
    Link2Name?: string;
    Link3Name?: string;
    Link4Name?: string;
    Link1Value?: string;
    Link2Value?: string;
    Link3Value?: string;
    Link4Value?: string;
}

const HeaderSection: FC<HeaderSectionProps> = ({
                                                   Tagline,
                                                   Name,
                                                   Description,
                                                   Stat1Name,
                                                   Stat2Name,
                                                   Stat3Name,
                                                   Stat4Name,
                                                   Stat1Value,
                                                   Stat2Value,
                                                   Stat3Value,
                                                   Stat4Value,
                                                   Link1Name,
                                                   Link2Name,
                                                   Link3Name,
                                                   Link4Name,
                                                   Link1Value,
                                                   Link2Value,
                                                   Link3Value,
                                                   Link4Value,
                                               }) => {
    const Links = [
        { name: Link1Name, href: Link1Value },
        { name: Link2Name, href: Link2Value },
        { name: Link3Name, href: Link3Value },
        { name: Link4Name, href: Link4Value },
    ].filter(link => link.name && link.href);

    const Stats = [
        { name: Stat1Name, value: Stat1Value },
        { name: Stat2Name, value: Stat2Value },
        { name: Stat3Name, value: Stat3Value },
        { name: Stat4Name, value: Stat4Value },
    ].filter(stat => stat.name && stat.value);

    return (
        <section className="py-24 sm:py-32 mt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    {Tagline && (
                        <p className="text-base/7 font-semibold text-transparent bg-gradient-to-r from-[#32b7b6] to-[#425389] bg-clip-text">
                            {Tagline}
                        </p>
                    )}
                    <h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">{Name}</h2>
                    {Description && (
                        <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
                            {Description}
                        </p>
                    )}
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    {Links.length > 0 && (
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            {Links.map((link) => (
                                <Link className={"text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text ease-in-out duration-300"} key={link.name} href={link.href || '#'}>
                                    {link.name} <span aria-hidden="true">&rarr;</span>
                                </Link>
                            ))}
                        </div>
                    )}
                    {Stats.length > 0 && (
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            {Stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse">
                                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeaderSection;

