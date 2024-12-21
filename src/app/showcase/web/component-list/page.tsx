/*
Copyright 2024 Olav "Olavorw" Sharma, Sahil Chopra - 4934 Tech

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

import UnifiedSection from '@/components/UnifiedSection';
import Banner from '@/components/Banner';
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";
import EmailSignup from "@/components/EmailSignup";


/* TODO: Implement & show off these components.
import BentoGrid from '@/components/BentoGrid';
import HomeHero from "@/components/HomeHero";
import Stats from "@/components/Stats";
*/

export default function WebComponentListShowcase() {
    return (
        <>
                    <UnifiedSection
                                    tagline={"Showcase"}
                                   title={"Web Components"}
                                   description={"This page is intended to showcase some of our favorite components we've built."}
                                   content={"We've built a lot of components, and we wanted to showcase our favorites! You might find some" +
                                       " on this website, some not. This page doesn't include all of our components, just the on" +
                                       "es we're the most proud of. If you would like to see all of our components, check" +
                                       " out the source code. \n If you contributed to the site and wanted to showcase your components, feel free!" +
                                       "This is a community anyways! <3 \n Some components, like the NavBar and Footer, they're not displayed here," +
                                       " because they're on every page. Just look up and down for those.\n"}
                                   links={[
                                        {name: "GitHub", href: "https://github.com/4934tech/" },
                                        {name: "Source Code", href: "https://github.com/4934tech/4934.tech/" },
                                        {name: "Contributors", href: "https://github.com/4934tech/4934.tech/Contributors.md" },
                                   ]}
                                    centered={true}
                    />
                    <UnifiedSection title={"Banner"} description={"A banner component that can be used to display important information."} topOfPage={false} />
                    <Banner
                        mainTitle={"Important Information"}
                        subtitle={"This is an important message that you should read."}
                        buttonText={"Read More"}
                        buttonHref={"#"}
                        showCased={true}
                    />
                    <UnifiedSection title={"Call To Action"} rightAligned={true} description={"A cool notification-style call to action which wants you to do something cool."} topOfPage={false} />
                    <CallToAction
                        tagline={"Check It Out!"}
                        description={"Doesn't this look cool? This is some epic body text to try to convince you to do stuff."}
                        buttonText={"Click This!"}
                        buttonLink={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
                        imageSource={'https://4934.tech/Screenshots/PythonVSCode.png'}
                        imageWidth={1000}
                        imageHeight={1000}
                        showCase={true}
                    />
                    <UnifiedSection title={"Contact Section"} description={"A contact form you can use to talk to us!"} topOfPage={false} />
                    <ContactForm
                        showTitle={false}
                    />
                    <UnifiedSection title={"Email Signup"} description={"A cool looking newsletter form! Doesn't work yet though. But it still looks cool!"} topOfPage={false} rightAligned={true}/>
                    <EmailSignup
                        showcase={true}
                    />
        </>
    );
}