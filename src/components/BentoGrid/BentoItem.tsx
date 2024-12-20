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

/* Example Usage:
<BentoGrid
              heading="Deploy faster"
              subheading="Everything you need to deploy your app"
              items={{
                col1: {
                  title: "Mobile friendly",
                  description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
                  imageSrc: "https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png",
                  imageAlt: "Mobile friendly illustration"
                },
                  col2: {
                  title: "Performance",
                  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.",
                  imageSrc: "https://tailwindui.com/plus/img/component-images/bento-03-performance.png",
                },
                  col4: {
                    title: "Powerful APIs",
                    description: "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.",
                    codeSnippet: `
function NotificationSetting({ title, enabled, setEnabled }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">{title}</span>
        <span className="text-sm text-gray-500">
          {enabled ? 'Enabled' : 'Disabled'}
        </span>
      </div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={\`\${
          enabled ? 'bg-indigo-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2\`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={\`\${
            enabled ? 'translate-x-5' : 'translate-x-0'
          } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out\`}
        />
      </Switch>
    </div>
  )
}
                        `
                  }
              }}
          />
 */

import { BentoItemProps } from '@/types/bentogrid';

export default function BentoItem({
                                      title,
                                      description,
                                      imageSrc,
                                      imageAlt,
                                      className = '',
                                      imageWrapperClassName = '',
                                      imageClassName = '',
                                      children,
                                  }: BentoItemProps) {
    if (!title && !description && !imageSrc && !children) {
        return null;
    }

    return (
        <div className={`${className} ${!imageSrc ? 'col-span-1 row-span-1' : ''}`}>
            <div
                style={{ backdropFilter: `blur(10px)`, WebkitBackdropFilter: `blur(10px)` }}
                className="absolute inset-px rounded-lg bg-black/40"
            ></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                {(title || description) && (
                    <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                        {title && (
                            <h3 className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">{title}</h3>
                        )}
                        {description && (
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">{description}</p>
                        )}
                    </div>
                )}
                {(imageSrc || children) && (
                    <div className={imageWrapperClassName}>
                        {imageSrc && <img className={imageClassName} src={imageSrc} alt={imageAlt || ''} />}
                        {children}
                    </div>
                )}
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
        </div>
    );
}

