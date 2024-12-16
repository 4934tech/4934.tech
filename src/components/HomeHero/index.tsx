'use client'

export default function HomeHero() {

    return (
        <div>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing 4934 UltraAgent.{' '}
                            <a href="#" className="font-semibold bg-gradient-to-tr from-[#32b7b6] to-[#425389] bg-clip-text text-transparent">
                                <span aria-hidden="true" className="absolute inset-0" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                            AI with{" "}
                            <span
                                className="bg-gradient-to-tr from-[#32b7b6] to-[#425389] bg-clip-text text-transparent">
                                real world
                            </span>
                            {" "}
                            capabilities.
                        </h1>

                        <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                            4934 UltraAgent is a powerful AI agent to tightly integrate with your existing systems. It&#39;s designed to be a seamless extension of your life, with power to control whatever you want it to.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="https://github.com/4934tech/ultraagent"
                                className="relative inline-block rounded-md bg-gradient-to-br from-[#1d6a69] to-[#1d243c] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 ease-in-out before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-br before:from-[#32b7b6] before:to-[#425389] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
                            >
                                <span className="relative">Get started</span>
                            </a>

                            <a href="#" className="text-sm/6 font-semibold text-white">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
