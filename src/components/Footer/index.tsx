import Link from "next/link"
import {Logo} from "@/components/Logo"
import { Facebook, Instagram, Twitter, Github, Youtube } from 'lucide-react'

const baseClasses = "flex items-center gap-x-1 text-sm/6 font-semibold transition-colors duration-200 ease-in-out group";
const hoverClasses = "hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text";

export default function Footer() {
    return (
        <footer className="px-6 py-12 md:py-16 mt-auto" style={{ backgroundColor: `rgba(0, 0, 0, 0.6)`, backdropFilter: `blur(20px)`, WebkitBackdropFilter: `blur(20px)` }}>
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
                    {/* Logo and Description Column */}
                    <div className="col-span-full lg:col-span-4">
                        <div className="text-blue-400 mb-6">
                            <Logo />
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
                            A transparent, open source, friendly community organization for makers.
                        </p>
                        <div className="mt-6 flex gap-6">
                            <Link href="#" className="group">
                                <Facebook className="h-5 w-5 text-slate-400 transition-colors duration-200 ease-in-out group-hover:text-[#32b7b6]" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="group">
                                <Instagram className="h-5 w-5 text-slate-400 transition-colors duration-200 ease-in-out group-hover:text-[#32b7b6]" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="group">
                                <Twitter className="h-5 w-5 text-slate-400 transition-colors duration-200 ease-in-out group-hover:text-[#32b7b6]" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="group">
                                <Github className="h-5 w-5 text-slate-400 transition-colors duration-200 ease-in-out group-hover:text-[#32b7b6]" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="#" className="group">
                                <Youtube className="h-5 w-5 text-slate-400 transition-colors duration-200 ease-in-out group-hover:text-[#32b7b6]" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                        </div>
                    </div>

                    {/* Solutions Column */}
                    <div className="sm:col-span-1 lg:col-span-2 lg:col-start-5">
                        <h3 className="text-sm font-semibold text-white">Solutions</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                    Marketing
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                    Analytics
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                    Automation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                    Commerce
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
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
                                <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                    Submit ticket
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                    Guides
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Community Column */}
                    <div className="sm:col-span-1 lg:col-span-2">
                        <h3 className="text-sm font-semibold text-white">Community</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                    Join Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
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
                                <Link href="https://4934.tech/policies/tos" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="https://4934.tech/policies/privacy" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="https://4934.tech/policies/copyright" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                    Copyright Information
                                </Link>
                            </li>
                            <li>
                                <Link href="http://www.apache.org/licenses/LICENSE-2.0" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                    Apache 2.0 License
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 border-t border-slate-800 pt-8">
                    <Link href="https://4934.tech/policies/copyright" className={`${baseClasses} ${hoverClasses} text-sm text-slate-400`}>
                        © {new Date().getFullYear()} 4934 Tech All rights reserved.
                    </Link>
                </div>
            </div>
        </footer>
    )
}

