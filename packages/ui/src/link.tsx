import NextLink from "next/link";

import { isExternalLink } from "./utils/link";

export const Link = ({ href = "#", ...rest }) => {
  const isExternal = isExternalLink(href);
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="link break-words after:mx-2 after:content-['_↗']"
        {...rest}
      />
    );
  }

  return <NextLink href={href} className="link" {...rest} />;
};
