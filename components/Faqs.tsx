import { Disclosure } from '@headlessui/react'
import { Container } from './Container'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [

    {
        question: 'What is Build Different?',
        answer:
            'Build Different is a capital formation platform designed to bridge the gap between value-add investors and high-quality founders. Our platform facilitates meaningful connections, providing tools and resources to both parties to ensure successful partnerships.',
    },
    {
        question: 'How does the matching algorithm work?',
        answer: 'Our matching algorithm considers various factors such as industry focus, investment stage preference, geographical location, and specific founder or investor requirements. This approach ensures that founders are matched with investors who have a genuine interest in their business model and growth stage.',
    },
    {
        question: 'What kind of investors can I find on Build Different?',
        answer:
            'Build Different hosts a diverse range of investors, including angel investors, venture capitalists, and investment firms, all looking for unique and promising startups to invest in. Our platform also attracts individuals and entities interested in value-add investments across various industries.',
    },


    {
        question: 'How can I ensure my startup stands out to investors?',
        answer:
            'Ensure your startup profile is complete and compelling, including a clear value proposition, market analysis, business model, team background, and any traction or milestones achieved. Utilizing our resources and tools for creating engaging pitches can also significantly increase your visibility.',
    },
    {
        question:
            'Can investors directly contact founders?',
        answer:
            'Yes, investors can directly contact founders through our secure messaging system once they express interest in a startup. This facilitates open communication and the potential for meaningful collaborations.',
    },
    {
        question:
            'What resources are available for founders?',
        answer:
            'Founders have access to a wide range of resources, including pitch preparation tools, token sale code templates, legal templates and guidlines, token economics database, and educational content on fundraising strategies and business growth.',
    },


    {
        question: 'How does Build Different ensure the privacy and security of its users?',
        answer: 'We prioritize the privacy and security of our users by employing state-of-the-art encryption for data transmission, rigorous data protection policies, and transparent privacy practices. Users have control over their personal information and sharing preferences.',
    },
    {
        question: 'Can I invest or seek investment from outside my home country?',
        answer:
            'Absolutely. Build:Different supports cross-border investments, recognizing the global nature of the startup ecosystem. Founders and investors can specify their geographical preferences and constraints in their profiles.',
    },
    {
        question: 'How do I get started with Build:Different?',
        answer:
            'Getting started is simple. For founders, sign up, complete your startup profile, and begin creating your pitch. For investors, sign up, set your investment criteria, and start browsing curated startup profiles. Utilize our resources and tools to maximize your experience on our platform.',
    },

]

export function Faqs() {
    return (
        <div id="faqs" className="relative isolate overflow-hidden bg-white ring-1 ring-slate-900/10" >
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-slate-900/20 [mask-image:radial-gradient(200%_100%_at_top_left,white,transparent)]"
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
                className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                    style={{
                        clipPath:
                            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }}
                />
            </div>
            <section
                id="faqs"
                aria-label="faq-title"
                className="relative overflow-hidden py-20 sm:py-32"
            >

                <Container className="relative bg-slate-50 rounded-xl ring-1 ring-slate-200 py-10 sm:py-10">
                    <div className="mx-auto max-w-2xl lg:mx-0 ">
                        <h2
                            id="faq-title"
                            className="font-display font-bold text-3xl tracking-tight text-slate-900 sm:text-4xl"
                        >
                            Frequently asked questions
                        </h2>
                        <p className="mt-4 text-lg tracking-tight text-slate-700">
                            If you can’t find what you’re looking for, email our support team
                            and if you’re lucky someone will get back to you.
                        </p>
                    </div>
                    <dl className="mt-10 space-y-2 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-2">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 p-4 rounded-md hover:bg-slate-200">
                                                <span className="text-base font-medium leading-7">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </Container>
            </section>
        </div >
    )
}
