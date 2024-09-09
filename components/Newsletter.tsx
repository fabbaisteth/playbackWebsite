import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Newsletter({ }: React.ComponentPropsWithoutRef<"div">) {
    let [isOpen, setIsOpen] = useState(false);
    let [username, setUsername] = useState('');
    let [email, setEmail] = useState('');
    let [twitterUrl, setTwitterUrl] = useState('');

    const toggleDialog = () => {
        setIsOpen(!isOpen);
    }

    async function submit(event) {
        event.preventDefault();
        try {
            const response = await fetch('/api/airtableWebhook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, twitterUrl }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            setUsername('');
            setEmail('');
            setTwitterUrl('');

            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error("An error has occured while submitting", error)
        }
    }



    return (
        <>
            <button
                className='btn-slate btn-solid'
                onClick={toggleDialog}
                color="slate">
                Request Early Access
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={toggleDialog}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left justify-center align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h2"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Subscribe
                                    </Dialog.Title>
                                    <div className="w-full max-w-md">
                                        <div className="px-8 pt-2 pb-2">

                                        </div>
                                        <form onSubmit={submit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                            <div className="mb-4">
                                                <label
                                                    className="block text-gray-700 text-sm font-bold mb-2"
                                                    htmlFor="username"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="username"
                                                    type="text"
                                                    placeholder="Your Name"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}

                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    className="block text-gray-700 text-sm font-bold mb-2"
                                                    htmlFor="email"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="email"
                                                    type="email"
                                                    placeholder="Example@playback.network"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    className="block text-gray-700 text-sm font-bold mb-2"
                                                    htmlFor="x.com profile"
                                                >
                                                    X/Twitter
                                                </label>
                                                <input
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="x.com profile"
                                                    type="url"
                                                    placeholder="https://x.com/playbacknet"
                                                    value={twitterUrl}
                                                    onChange={(e) => setTwitterUrl(e.target.value)}
                                                />
                                            </div>
                                            <button type="submit" className='btn-slate btn-solid'
                                            >Get notified</button>
                                        </form>
                                        <p className="text-center text-gray-500 text-xs">
                                            &copy;2024 Playback Network. All rights reserved.
                                        </p>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div >
                </Dialog >
            </Transition >
        </>
    );
}


