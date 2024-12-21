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

import { ArrowUpIcon, CodeIcon } from 'lucide-react';
import UnifiedSection from "@/components/UnifiedSection";

export default function Winter2024() {
    return (
        <>
            <UnifiedSection
                imageSrc={"https://4934.tech/Screenshots/PythonVSCode.png"}
                imageAlt={"PythonVSCode Screenshot"}
                tagline={"Sunday, December 15th, 2024"}
                title={"Winter Hackathon"}
                description={"This is an annual, beginner hackathon for beginners."}
                content={
                    "The time has arrived! This is our first time hosting a hackathon, so I wouldn't expect it to be anything grand or super cool, but just a little something. I know we won't get a lot of people to join, but it's going to be an experience for all of us eh? \n"
                }
                features={[
                    {
                        icon: <CodeIcon />,
                        title: "Python-based",
                        description: "This hackathon is going to be in Python."},
                    {
                        icon: <ArrowUpIcon />,
                        title: "For beginners",
                        description: "This hackathon was built for beginners to level-up their coding."
                    },
                ]}
                additionalContent={
                    "We're going to have a lot of fun, and I hope you can join us! If you can't join, don't worry. We'll do another one of these at some point."
                }
                topOfPage={true}
            />
            <h3 className="font-bold tracking-tight text-3xl text-white">R</h3>
        </>
    );
}

