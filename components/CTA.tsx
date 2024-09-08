export function CTA() {
    return (
        <div className="relative isolate overflow-hidden bg-white ring-1 ring-slate-900/10 ">
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-slate-900/20 [mask-image:radial-gradient(200%_200%_at_top_right,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                        width={200}
                        height={200}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-200/20">
                    <path
                        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
            </svg>
            <div
                className="absolute left-[calc(50%-rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-10 lg:bottom-[calc(50%-50)] xl:left-[calc(50%-24rem)]"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#1b33ff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl py-20 sm:px-6 sm:py-20 lg:px-8">
                <div className="relative isolate overflow-hidden bg-slate-100 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 ">
                    <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-black sm:text-4xl">
                        10x yourself with Playback.
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 ">
                        It’s time to take control of your time. <br />
                        Join Playback Network <br />
                        you'll doing something GREAT.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href='https://t.me/+N7dfFtbVx0JmOWI6'
                            className="btn-slate rounded-md  px-3.5 py-2.5 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Get started
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-black">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-3/4 top-1 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                        aria-hidden="true"
                    >
                        <circle cx={600} cy={600} r={700} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.5" />
                        <defs>
                            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                <stop stopColor="#1b33ff" />
                                <stop offset={1} stopColor="#0faf1b" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1 top-1 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                        aria-hidden="true"
                    >
                        <circle cx={600} cy={600} r={700} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.6" />
                        <defs>
                            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                <stop stopColor="#1b33ff" />
                                <stop offset={1} stopColor="#0faf1b" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}
