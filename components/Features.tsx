import { CurrencyDollarIcon, LockClosedIcon, GiftIcon, ChevronDoubleUpIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Make money by doing what you do',
        description:
            "We're constantly on the lookout for new tasks and different ways to achieve them. We are waiting for you to discover them.",
        icon: CurrencyDollarIcon,
    },
    {
        name: 'Bring your experience',
        description:
            'We reward you for doing what you do best, whatever that might be',
        icon: GiftIcon,
    },
    {
        name: 'Privacy first',
        description:
            "Your data stays on lock down and it will always be like that. We can ZK proof that.",
        icon: LockClosedIcon,
    },
    {
        name: '10x your work',
        description:
            'We\'ll increase your output ten times than GPT did. Maybe 100x more. ',
        icon: ChevronDoubleUpIcon,
    },
]

export default function Features() {
    return (
        <div id="investor" className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-slate-900/20 [mask-image:radial-gradient(100%_100%_at_bottom_right,white,transparent)]"
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
                <svg x="50%" y={-1} className="overflow-visible fill-white/10">
                    <path
                        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
            </svg>
            <div
                className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                aria-hidden="true"
            >
                <div
                    className="aspect-[632/1108] w-[69.25rem] bg-gradient-to-l from-[#1b33ff] to-[#0faf1b] opacity-20"
                    style={{
                        clipPath:
                            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-xl font-bold leading-7 text-green-600">Contribute your work</h2>
                    <p className="mt-2 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                        Experience the future of AI
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Let's build this together.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-black">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg align-middle bg-green-600">
                                        <feature.icon className=" h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
