import Link from "next/link"
import SignupForm from "@/src/components/signup-form"

import { buttonVariants } from "../components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid h-full items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col h-full max-w-[980px] items-center justify-center mx-auto">
        <h1 className="text-3xl text-center font-extrabold leading-tight tracking-tighter md:text-4xl mb-5">
          Get news and awesome stuff to your inbox!
        </h1>
        <SignupForm />

        <h1 className=" mt-11 text-3xl text-center font-bold leading-tight tracking-tighter md:text-4xl mb-5">
          Go back to main website
        </h1>
        <Link href="https://arhammastery.dev" rel="preload">
          <button className={buttonVariants()}>Main Website</button>
        </Link>
      </div>
    </section>
  )
}
