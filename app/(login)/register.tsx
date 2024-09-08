import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";


export default function SignUpModal({
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  className = clsx(className);



  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (email === '' || password === '' || username === '') {
    //   alert('Please fill in all fields');
    //   return;
    // }
    // else if (password.length < 8) {
    //   alert('Password must be at least 8 characters');
    //   return;
    // }
    // else if (username.length < 3) {
    //   alert('Username must be at least 3 characters');
    //   return;
    // }
    // else if (!email.includes('@')) {


    const createdAt = new Date().toISOString();
    const changedAt = new Date().toISOString();
    const response = await fetch('http://localhost:3002/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email, createdAt, changedAt },),
    });

    const data = await response.json();
    console.log(data);

  }

  return (
    <>
      <div className={clsx(className)}>
        <button
          onClick={openModal}

          color="blue"
        >
          Sign Up
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="Email"
                        >
                          Email
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="Email"
                          type="text"
                          placeholder="example@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                        <p className="text-red-500 text-xs italic">
                          Please type your password.
                        </p>

                      </div>
                      <div className="flex items-center justify-between">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="submit"
                          onClick={handleSubmit}
                        >
                          Sign Up
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
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


