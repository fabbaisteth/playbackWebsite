import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";

export default function SignIn({
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  let [isOpen, setIsOpen] = useState(false);
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  }

  async function authenticate(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3002/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password },),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      console.log(data)
      console.log("Log in succesful!");
    } catch (error) {
      console.error("An error has occured while logging in", error)
    }
  }



  return (
    <>
      <div className={clsx(className)}>
        <button
          onClick={toggleDialog}
          color="slate">
          Sign In
        </button>
      </div>

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
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Sign In
                  </Dialog.Title>
                  <div className="w-full max-w-md">
                    <div className="px-8 pt-4 pb-2">
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                      >
                        Connect Wallet
                      </button>
                    </div>

                    <div className="px-8 pt-2 pb-8">
                      <button className="max-w-md px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-gray-800 dark:text-slate-800 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                        <img
                          className="w-6 h-6"
                          src="https://www.svgrepo.com/show/475656/google-color.svg"
                          loading="lazy"
                          alt="google logo"
                        ></img>
                        <span>Login with Google</span>
                      </button>
                    </div>

                    <div className="px-8 pt-2 pb-2">
                      <div className="border-t border-slate-800 w-full max-w-md"></div>
                    </div>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="username"

                        >
                          Username
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="username"
                          type="text"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}

                        />
                      </div>
                      <div className="mb-6">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          id="password"
                          type="password"
                          placeholder="******************"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                          onClick={authenticate}
                        >
                          Sign In
                        </button>
                        <a
                          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                          href="#"
                        >
                          Forgot Password?
                        </a>
                      </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                      &copy;2024 Build Different. All rights reserved.
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

