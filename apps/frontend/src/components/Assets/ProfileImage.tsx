import Image from 'next/image';
import { CSSProperties } from 'react';

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProfileImage: (props: Props) => JSX.Element = ({
  className,
  style,
}) => {
  return (
    <Image
      src='/images/profile-zoom.webp'
      width={256}
      height={256}
      alt=''
      className={className}
      style={style}
    />
  );
};
