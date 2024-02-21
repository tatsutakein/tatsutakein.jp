import type { JSX } from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  className?: string;
}

export const InstagramIcon = ({ className }: Props): JSX.Element => {
  return <FontAwesomeIcon icon={faInstagram} className={className} />;
};
