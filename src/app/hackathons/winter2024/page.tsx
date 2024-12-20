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

import ContentSection from "@/components/ContentSection";
import {AccessibilityIcon, CodeIcon} from "lucide-react";

export default function Winter2024() {
    return (
        <>
            <ContentSection imageSrc={""} imageAlt={"test"} tagline={"Sunday, December 15th"} title={"Winter 2024 Hackathon"} description={""} content={"The annual 4934 Winter Hackathon is an online, single-day hackathon targeted towards beginners."} additionalContent={"This hackathon ended, with 2 submissions but ~20 entries."} features={[{icon: CodeIcon, title: "Python-based", description: "This hackathon is going to be in Python."}, {icon: AccessibilityIcon, title: "For beginners", description: "This hackathon was built for beginners to level-up their coding."}]} />
        </>
    );
}