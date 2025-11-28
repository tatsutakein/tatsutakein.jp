import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { JSX } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  className?: string;
}

export const GitHubIcon = ({ className }: Props): JSX.Element => {
  return <FontAwesomeIcon icon={faGithub as IconProp} className={className} />;
};
