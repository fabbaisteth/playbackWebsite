
import circles from '../public/images/CirclesHeader.svg'
import Image from 'next/image'
import Link from 'next/link'
import Newsletter from './Newsletter'

export default function Hero2() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-slate-900/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#1b33ff] to-[#0faf1b] opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 sm:pb-32 lg:flex lg:px-8 lg:py-30">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">

          <h1 className="mt-10 text-4xl tracking-tight text-slate-900 sm:text-6xl">
            Give ChatGPT hands
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-800">
            You are looking for the next AI thing. <br />
            We are building it. <br />
            Let AI work for you today.
          </p>
          <div className="mt-8 flex justify-left gap-x-6">
            <Newsletter />
            <Link className='btn-outline'
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              <svg
                aria-hidden="true"
                className="h-3 w-3 flex-none fill-green-800 group-active:fill-current"
              >
                <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
              </svg>
              <span className="ml-3">Watch video</span>
            </Link>
          </div>

        </div>
        <div className="mx-auto mt-8 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-24">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image className="w-[35rem] rounded-md"
              src={circles}

              alt="circles"

              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  )
}
