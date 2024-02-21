import type { JSX } from "react";
import Image from "next/image";

export default function HomePage(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-center gap-16 p-24">
      <Image src="/images/profile-zoom.webp" width={256} height={256} alt="" className={"mx-auto rounded-full"} />
      <h1 className="mx-auto text-4xl">Ryo Takeuchi</h1>
    </main>
  );
}
