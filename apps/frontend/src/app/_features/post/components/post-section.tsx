import type { JSX, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const PostSection = (props: Props): JSX.Element => {
  return (
    <section className="relative rounded-lg border border-gray-100 bg-white p-6 text-sm leading-loose shadow-sm dark:border-zinc-800 dark:bg-zinc-800 md:p-8 lg:p-10">
      {props.children}
    </section>
  );
};
