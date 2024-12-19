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

import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

interface Feature {
    icon: typeof ArrowRightIcon
    title: string
    description: string
}

interface ContentSectionProps {
    tagline: string
    title: string
    description: string
    imageSrc: string
    imageAlt: string
    content: string
    features: Feature[]
    additionalContent: string
    finalTitle: string
    finalContent: string
}

export default function ContentSection({
                                           tagline = "Tagline",
                                           title = "Title",
                                           description = "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.",
                                           imageSrc = "https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png",
                                           imageAlt = "",
                                           content = "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.",
                                           features = [
                                               {
                                                   icon: ArrowRightIcon,
                                                   title: "Feature 1",
                                                   description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
                                               },
                                               {
                                                   icon: ArrowRightIcon,
                                                   title: "Feature 2",
                                                   description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."
                                               },
                                               {
                                                   icon: ArrowRightIcon,
                                                   title: "Feature 3",
                                                   description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
                                               }
                                           ],
                                           additionalContent = "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.",
                                           finalTitle = "Final Title",
                                           finalContent = "Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam."
                                       }: ContentSectionProps) {
    return (
        <div
            className="relative overflow-hidden bg-transparent px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
            style={{ background: 'none' }}
        >
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base/7 font-semibold text-transparent bg-gradient-to-r from-[#32b7b6] to-[#425389] bg-clip-text">{tagline}</p>
                            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                {title}
                            </h1>
                            <p className="mt-6 text-xl/8 text-gray-400 text-pretty font-medium">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <Image
                        alt={imageAlt}
                        src={imageSrc}
                        width={1824}
                        height={1080}
                        className="w-[48rem] max-w-none rounded-xl bg-white shadow-xl ring-1 bg-clip-border/10 sm:w-[57rem]"
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-lg text-pretty text-gray-300 lg:max-w-lg">
                            <p>{content}</p>
                            <ul role="list" className="mt-8 space-y-8 text-pretty text-gray-400">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex gap-x-3">
                                        <feature.icon aria-hidden="true" className="mt-1 size-5 flex-none text-[#32b7b6]" />
                                        <span>
                      <strong className="font-semibold bg-gradient-to-r from-[#32b7b6] to-[#425389] bg-clip-text text-transparent">{feature.title}</strong> {feature.description}
                    </span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8">{additionalContent}</p>
                            <h2 className="mt-16 text-2xl font-semibold tracking-tight text-white">{finalTitle}</h2>
                            <p className="mt-6">{finalContent}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

