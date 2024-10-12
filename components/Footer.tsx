import Link from "next/link";
import { Container } from "./Container";
import Image from "next/image";
import { NavLinks } from "./NavLinks";

export default function Footer() {
  return (
    <>
      <footer className="w-full absolute bottom-0 ring-1 ring-black/10 bg-gray-50 rounded-md py-2">
        <Container>
          <div className="relative flex flex-col items-center justify-between gap-y-8 pb-6 pt-8 lg:flex-row lg:gap-y-12 lg:items-center lg:py-12">
            <div className="">
              <div className="flex flex-col items-center lg:flex-row lg:items-center text-gray-900">
                <Link href="/">
                  <Image src="/images/logo2_copy.jpg" alt="logo" width={100} height={100} />
                </Link>
                <div className="lg:ml-4 text-center lg:text-left">
                  <p className="text-base font-semibold">Playback Network</p>
                  <p className="mt-1 text-sm">Let's create ████ ██████.</p>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-900 mt-4 lg:mt-3">© 2024, Built ██ ████ 🖤</p>
            </div>
            <div className="float-right flex self-end items-center">
              <nav className="mt-11 flex gap-8">
                <NavLinks />
              </nav>
            </div>
          </div>
        </Container>
      </footer >
    </>
  );
}
