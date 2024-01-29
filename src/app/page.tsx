import { Button } from "@/components/button"
import Link from "next/link"
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Landing Page w/ Login</div>
      <Link href='/api/auth/signin'>
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            {/* <PowerIcon className="w-6" /> */}
            <div className="hidden md:block">Log In</div>
          </button>
        </Link>
    </main>
  )
}
