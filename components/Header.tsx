import Link from "next/link";
import { useState } from "react";
import { Popover } from "@headlessui/react";
import { Container } from "./Container";
import { NavLinks } from "./NavLinks";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Newsletter from "./Newsletter";

function MenuIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof Popover.Button<typeof Link>>,
    "as" | "className"
  >
) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    />
  );
}

export default function Header() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const openNewsletter = () => {
    setIsNewsletterOpen(true);
  };

  const closeNewsletter = () => {
    setIsNewsletterOpen(false);
  };

  return (
    <>
      <nav>
        <Container className="relative w-full z-50 flex justify-between py-4">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Image src="/images/logo_copy.jpg" alt="logo" width={160} height={80} />
            </Link>
          </div>
          <div className="hidden lg:flex ml-auto items-center text-left lg:gap-10 self-center">
            <NavLinks />
            <button onClick={openNewsletter} className="hidden lg:block btn-newsletter btn-red">
              Join Waitlist
            </button>
          </div>

          <div className="flex items-center gap-10">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="fixed inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-8">
                            <MobileNavLink href="https://x.com/playbacknet">
                              ██ X.com █
                            </MobileNavLink>
                            <MobileNavLink href="https://github.com/playback-network">
                              Github ████
                            </MobileNavLink>
                            <MobileNavLink href="/#">
                              <button onClick={openNewsletter} className="mt-8 btn-newsletter btn-red">
                                Join Waitlist
                              </button>
                            </MobileNavLink>
                          </div>

                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence >
                </>
              )
              }
            </Popover >

          </div >
        </Container >
      </nav >

        {isNewsletterOpen && (
        <Newsletter isOpen={isNewsletterOpen} closeModal={closeNewsletter} />
      )}      
    </>
  );
}
