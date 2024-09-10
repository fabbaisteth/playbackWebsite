import Image from 'next/image'
import React from 'react';
import { Container } from './Container';

export default function Hero() {
    return (
        <section className=" bg-gray-50 py-12">
            <Container>
                <div className="relative z-10">
                    {/* Greeting Section */}
                    <h1 className="text-lg font-bold mb-6">Dear ████████,</h1>

                    {/* Text Blocks */}
                    <div className="space-y-4 mb-6">
                        <p className="text-lg text-black">
                            <span className="bg-black text-black p-1">███████████████ </span> █████████████████GPT
                            <span className="bg-black text-black p-1">████████ </span>████████with hands ████████████████
                            <span className="bg-black text-black p-1"> ████████████████ </span> - ████████.
                        </p>
                        <p className="text-lg text-black">
                            ███████████ is a new <span className="bg-black text-black p-1">███████████████████████████████</span>
                            <span className="bg-black text-black p-1">████████████████ ████████████████</span> zero knowledge ████████████████ redacted recordings ████████████████
                            ████████████████████████████████ █████████████████████████████
                        </p>
                        <p className="text-lg text-black">
                            ██████████████ Large Action Model (LAMs) █████████████████ decentralized <span className="bg-black text-black p-1">████████████████████</span>
                            <span className="bg-black text-black p-1">████</span> autonomous ████████████████████
                        </p>
                    </div>

                    <div className=" text-black inline-block font-bold mb-6">
                        ████████████████████████████████ early participation ███████████████████ own your data █████████████████████████████ .
                    </div>

                    {/* Final Call to Action and Date */}
                    <p className="text-lg font-semibold mb-6">
                        More <span className="bg-black text-black p-1">████████████████████████████████ </span> will be released soon.
                    </p>
                    <p className="text-gray-500 text-md font-semibold">
                        Oct 2024, 1700 CET
                    </p>
                </div>
                <div className="fixed top-[50vh] left-[25vw] w-32 h-32 transform -rotate-6 z-0">
                    <Image
                        src="/images/handwriting.png"
                        alt="Stamp"
                        layout="fill"
                        objectFit="contain"
                        className="pointer-events-none"
                    />
                </div>
                <div className="fixed top-[57vh] left-[27vw] w-12 h-12 transform -rotate-6 z-0">
                    <Image
                        src="/images/handwriting2.png"
                        alt="Stamp"
                        layout="fill"
                        objectFit="contain"
                        className="pointer-events-none"
                    />
                </div>
                <div className="fixed top-[25vh] left-[20vw] w-32 h-32 transform rotate-12 opacity-60 z-0">
                    <Image
                        src="/images/stamp.png"
                        alt="Stamp"
                        layout="fill"
                        objectFit="contain"
                        className="pointer-events-none"
                    />
                </div>
                <div className="fixed top-[38vh] left-[70vw] w-64 h-64 transform opacity-80 -rotate-12 z-0">
                    <Image
                        src="/images/sanitized.png"
                        alt="Stamp"
                        layout="fill"
                        objectFit="contain"
                        className="pointer-events-none"
                    />
                </div>
                <div className="fixed top-[5vh] left-[70vw] w-32 h-32 transform rotate-45 opacity-50 z-0">
                    <Image
                        src="/images/topsecret.png"
                        alt="Stamp"
                        layout="fill"
                        objectFit="contain"
                        className="pointer-events-none"
                    />
                </div>
                <div className="fixed top-[30vh] left-[40vw] w-64 h-64 transform rotate-6 opacity-5 z-0">
                    <Image
                        src="/images/US_senate.png"
                        alt="Stamp"
                        layout="fill"
                        objectFit="contain"
                        className="pointer-events-none"
                    />
                </div>
            </Container>
        </section>
    );
}
