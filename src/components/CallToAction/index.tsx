import { forwardRef } from 'react';
import Image from 'next/image';

interface CallToActionProps {
    Tagline: string;
    Description: string;
    ButtonText: string;
    ButtonLink: string;
    GradientStartColor?: string;
    GradientStopColor?: string;
    ImageSource: string;
    ImageWidth: number;
    ImageHeight: number;
    ImageSizing?: string;
}

const CallToAction = forwardRef<HTMLDivElement, CallToActionProps>(
    (
        { Tagline, Description, ButtonText, ButtonLink, GradientStartColor = "#32b7b6", GradientStopColor = "#425389", ImageSource, ImageWidth, ImageHeight, ImageSizing = "60rem" },
        ref
    ) => {
        return (
            <div ref={ref}>
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div style={{backdropFilter: `blur(10px)`, WebkitBackdropFilter: `blur(10px)`}} className="relative isolate overflow-hidden bg-black/60 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg
                            viewBox="0 0 1024 1024"
                            aria-hidden="true"
                            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                        >
                            <circle
                                r={512}
                                cx={512}
                                cy={512}
                                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                                fillOpacity="0.7"
                            />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor={GradientStartColor} />
                                    <stop offset={1} stopColor={GradientStopColor} />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                {Tagline}
                            </h2>
                            <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                                {Description}
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <a
                                    href={ButtonLink}
                                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    {ButtonText}
                                </a>
                            </div>
                        </div>
                        <div className="relative mt-24 h-80 lg:mt-20">
                            <Image
                                alt="App screenshot"
                                src={ImageSource}
                                width={ImageWidth}
                                height={ImageHeight}
                                className={`absolute left-0 top-0 w-${ImageSizing} max-w-none rounded-md bg-white/5 ring-1 ring-white/10`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

CallToAction.displayName = 'CallToAction';

export default CallToAction;
