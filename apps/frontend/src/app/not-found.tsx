import type { JSX } from "react";
import Link from "next/link";
import { PagePath } from "@/lib/router";

export default function NotFoundPage(): JSX.Element {
  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-4xl font-bold tracking-tight text-violet-500 sm:text-5xl">404</p>

          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Page not found</h1>

              <p className="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>
            </div>
          </div>
        </main>

        <div className="mt-14 text-center">
          <Link href={PagePath.root()} className="font-medium text-violet-500 hover:opacity-50">
            Go back home
            <span> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
