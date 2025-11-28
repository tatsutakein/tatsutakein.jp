import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { JSX } from "react";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  className?: string;
}

export const TwitterIcon = ({ className }: Props): JSX.Element => {
  return <FontAwesomeIcon icon={faTwitter as IconProp} className={className} />;
};
