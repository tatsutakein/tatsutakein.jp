import { CSSProperties } from 'react';
import Image from 'next/image';

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProfileImage: (props: Props) => JSX.Element = ({ className, style }) => {
  return (
    <Image
      src='/profile_256.webp'
      width={256}
      height={256}
      alt=''
      className={className}
      style={style}
    />
  );
};
