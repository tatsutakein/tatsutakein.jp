import { CSSProperties } from 'react';

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const About = (props: Props): JSX.Element => {
  return (
    <svg
      width='269'
      height='72'
      viewBox='0 0 269 72'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
      style={props.style}
    >
      <path
        d='M28.664 2.84H34.328L62.648 71H55.544L46.712 49.688H16.088L7.352 71H0.152L28.664 2.84ZM45.176 44.408L31.448 10.712L17.528 44.408H45.176ZM95.555 71.96C91.651 71.96 88.035 70.968 84.707 68.984C81.379 66.936 78.787 64.376 76.931 61.304V71H71.075V0.919998H77.603V31.448C79.843 28.056 82.531 25.336 85.667 23.288C88.803 21.176 92.451 20.12 96.611 20.12C100.131 20.12 103.267 20.856 106.019 22.328C108.835 23.8 111.235 25.784 113.219 28.28C115.203 30.712 116.707 33.496 117.731 36.632C118.755 39.704 119.267 42.872 119.267 46.136C119.267 49.656 118.659 52.952 117.443 56.024C116.291 59.096 114.627 61.848 112.451 64.28C110.275 66.648 107.747 68.536 104.867 69.944C102.051 71.288 98.947 71.96 95.555 71.96ZM94.019 66.2C96.707 66.2 99.203 65.656 101.507 64.568C103.811 63.48 105.795 61.976 107.459 60.056C109.123 58.136 110.403 55.992 111.299 53.624C112.195 51.192 112.643 48.696 112.643 46.136C112.643 42.616 111.875 39.32 110.339 36.248C108.867 33.112 106.787 30.616 104.099 28.76C101.475 26.84 98.371 25.88 94.787 25.88C92.227 25.88 89.827 26.456 87.587 27.608C85.411 28.76 83.459 30.296 81.731 32.216C80.067 34.072 78.691 36.12 77.603 38.36V53.912C77.859 55.64 78.531 57.272 79.619 58.808C80.707 60.28 82.051 61.56 83.651 62.648C85.315 63.736 87.043 64.6 88.835 65.24C90.627 65.88 92.355 66.2 94.019 66.2ZM151.637 71.96C148.053 71.96 144.725 71.288 141.653 69.944C138.645 68.536 136.021 66.648 133.781 64.28C131.605 61.848 129.909 59.096 128.693 56.024C127.477 52.888 126.869 49.592 126.869 46.136C126.869 42.552 127.477 39.224 128.693 36.152C129.909 33.016 131.637 30.264 133.877 27.896C136.117 25.464 138.741 23.576 141.749 22.232C144.821 20.824 148.149 20.12 151.733 20.12C155.317 20.12 158.613 20.824 161.621 22.232C164.629 23.576 167.253 25.464 169.493 27.896C171.733 30.264 173.461 33.016 174.677 36.152C175.893 39.224 176.501 42.552 176.501 46.136C176.501 49.592 175.893 52.888 174.677 56.024C173.461 59.096 171.733 61.848 169.493 64.28C167.317 66.648 164.693 68.536 161.621 69.944C158.613 71.288 155.285 71.96 151.637 71.96ZM133.493 46.232C133.493 49.944 134.293 53.336 135.893 56.408C137.557 59.416 139.765 61.816 142.517 63.608C145.269 65.336 148.309 66.2 151.637 66.2C154.965 66.2 158.005 65.304 160.757 63.512C163.509 61.72 165.717 59.288 167.381 56.216C169.045 53.08 169.877 49.688 169.877 46.04C169.877 42.328 169.045 38.936 167.381 35.864C165.717 32.792 163.509 30.36 160.757 28.568C158.005 26.776 154.965 25.88 151.637 25.88C148.309 25.88 145.269 26.808 142.517 28.664C139.829 30.52 137.653 32.984 135.989 36.056C134.325 39.064 133.493 42.456 133.493 46.232ZM186.939 50.36V20.984H193.467V49.208C193.467 54.904 194.427 59.16 196.347 61.976C198.331 64.792 201.243 66.2 205.083 66.2C207.643 66.2 210.107 65.656 212.475 64.568C214.907 63.416 217.051 61.816 218.907 59.768C220.763 57.656 222.171 55.224 223.131 52.472V20.984H229.659V63.128C229.659 64.024 229.851 64.696 230.235 65.144C230.619 65.528 231.195 65.752 231.963 65.816V71C231.195 71.064 230.587 71.096 230.139 71.096C229.691 71.16 229.275 71.192 228.891 71.192C227.611 71.064 226.491 70.552 225.531 69.656C224.635 68.76 224.155 67.672 224.091 66.392L223.899 59.672C221.723 63.512 218.747 66.52 214.971 68.696C211.259 70.872 207.227 71.96 202.875 71.96C197.627 71.96 193.659 70.136 190.971 66.488C188.283 62.84 186.939 57.464 186.939 50.36ZM268.419 68.6C267.907 68.792 267.107 69.144 266.019 69.656C264.931 70.168 263.619 70.616 262.083 71C260.547 71.384 258.883 71.576 257.091 71.576C255.235 71.576 253.475 71.224 251.811 70.52C250.211 69.816 248.931 68.76 247.971 67.352C247.011 65.88 246.531 64.088 246.531 61.976V26.168H239.619V20.984H246.531V4.088H253.059V20.984H264.579V26.168H253.059V60.152C253.187 61.944 253.827 63.288 254.979 64.184C256.195 65.08 257.571 65.528 259.107 65.528C260.899 65.528 262.531 65.24 264.003 64.664C265.475 64.024 266.371 63.576 266.691 63.32L268.419 68.6Z'
        fill='none'
        className='fill-current'
      />
    </svg>
  );
};
