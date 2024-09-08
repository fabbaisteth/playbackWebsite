import { UserGroupIcon, CurrencyDollarIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Growth from '../public/images/GrowthLines.svg'

const features = [
    {
        name: 'Get rewarded',
        description:
            "Just run the app, contribute your actions and collect points.",
        icon: CurrencyDollarIcon,
    },
    {
        name: 'Federated model',
        description:
            'Use a model that is trained by thousands of experts.',
        icon: UserGroupIcon,
    },
    {
        name: 'Decentralized model',
        description:
            "Use a model that is owned by the public.",
        icon: GlobeAltIcon,
    },
]

export function Grow() {
    return (
        <div id="founder" className="relative isolate overflow-hidden bg-white py-24 sm:py-24 ring-1 ring-black/10">
            <svg className="absolute inset-0 -z-10 h-full w-full stroke-slate-900/20 [mask-image:radial-gradient(100%_60%_at_top_left,white,transparent)]"
                aria-hidden="true">
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
                <svg x="50%" y={-1} className="overflow-visible fill-gray-400/20">
                    <path
                        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
            </svg>
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-black/20 [mask-image:radial-gradient(70%_60%_at_bottom,white,transparent)]"
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
                <svg x="50%" y={-1} className="overflow-visible fill-gray-400/20">
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
                    className="aspect-[1108/632] w-[63.25rem] bg-gradient-to-r from-[#0faf1b] to-[#1b33ff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-green-600">LAMs are f*** awesome</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Focus on growing</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                With every task fulfilled you'll grow <br />
                                Get faster and build the next big thing.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-green-600" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="flex items-start justify-end lg:order-first">
                        <Image
                            src={Growth}
                            alt="Product screenshot"
                            className="w-[48rem] max-w-none sm:w-[57rem] opacity-80"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </div>
        </div >

    )
}
