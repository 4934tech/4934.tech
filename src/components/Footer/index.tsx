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

import Link from "next/link"
import {Logo} from "@/components/Logo"
import { Facebook, Instagram, Twitter, Github, Youtube } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="px-6 py-12 md:py-16" style={{ backgroundColor: `rgba(0, 0, 0, 0.6)`, backdropFilter: `blur(20px)`, WebkitBackdropFilter: `blur(20px)` }}>
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
                    {/* Index and Description Column */}
                    <div className="col-span-full lg:col-span-4">
                        <div className="text-blue-400 mb-6">
                            {/* Replace with your actual logo SVG */}
                            <Logo />
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
                            A transparent, open source, friendly community organization for makers.
                        </p>
                        <div className="mt-6 flex gap-6">
                            <Link href="#" className="text-slate-400 hover:text-slate-300">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-slate-300">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-slate-300">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-slate-300">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-slate-300">
                                <Youtube className="h-5 w-5" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                        </div>
                    </div>

                    {/* Solutions Column */}
                    <div className="sm:col-span-1 lg:col-span-2 lg:col-start-5">
                        <h3 className="text-sm font-semibold text-white">Solutions</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-slate-400 hover:text-slate-300">
                                    Marketing
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-slate-400 hover:text-slate-300">
                                    Analytics
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-slate-400 hover:text-slate-300">
                                    Automation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-slate-400 hover:text-slate-300">
                                    Commerce
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-slate-400 hover:text-slate-300">
                                    Insights
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div className="sm:col-span-1 lg:col-span-2">
                        <h3 className="text-sm font-semibold text-white">Support</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-slate-400 hover:text-slate-300">
                                    Submit ticket
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-slate-400 hover:text-slate-300">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-slate-400 hover:text-slate-300">
                                    Guides
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="sm:col-span-1 lg:col-span-2">
                        <h3 className="text-sm font-semibold text-white">Company</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-slate-400 hover:text-slate-300">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-slate-400 hover:text-slate-300">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-slate-400 hover:text-slate-300">
                                    Jobs
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-slate-400 hover:text-slate-300">
                                    Press
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div className="sm:col-span-1 lg:col-span-2">
                        <h3 className="text-sm font-semibold text-white">Legal</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link href="https://4934.tech/policies/tos" className="text-sm text-slate-400 hover:text-slate-300">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="https://4934.tech/policies/privacy" className="text-sm text-slate-400 hover:text-slate-300">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="https://4934.tech/policies/copyright" className="text-sm text-slate-400 hover:text-slate-300">
                                    Copyright Information
                                </Link>
                            </li>
                            <li>
                                <Link href="http://www.apache.org/licenses/LICENSE-2.0" className="text-sm text-slate-400 hover:text-slate-300">
                                    Apache 2.0 License
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 border-t border-slate-800 pt-8">
                    <a href="https://4934.tech/policies/copyright" className="text-sm text-slate-400">
                        © 2024 4934 Tech All rights reserved.
                    </a>
                </div>
            </div>
        </footer>
    )
}

