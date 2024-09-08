import Link from "next/link";
import { Container } from "./Container";
import { Logomark } from "./Logo";
import { NavLinks } from "./NavLinks";
import { SocialLinks } from "./SocialLinks";

export default function Footer() {
  return (
    <>
      <footer className="w-full ring-1 ring-black/10 rounded-md py-2">
        <Container>
          <div className="relative flex items-center justify-between gap-y-12 pb-6 pt-10 lg:items-center lg:py-12">
            <div className="">
              <div className="flex items-center text-gray-900 ">
                <Link href="/">
                  <Logomark className="h-10 w-10 flex-none fill-cyan-500" />
                </Link>
                <div className="ml-4">
                  <p className="text-base font-semibold">Build different</p>
                  <p className="mt-1 text-sm">Invest at the perfect time.</p>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-900 mt-3">© 2024, Built with love by <a href="https://www.fabbaist.com" className="underline">fabbaist.eth</a></p>
              <div className="relative flex items-center">
                <nav className="mt-11 flex gap-8">
                  <NavLinks />
                </nav>
              </div>
            </div>
            <SocialLinks className="float-right flex self-end" />
          </div>
        </Container>
      </footer >
    </>
  );
}
