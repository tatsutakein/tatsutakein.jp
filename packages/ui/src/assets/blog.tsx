import type { CSSProperties, JSX } from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const Blog = (props: Props): JSX.Element => {
  return (
    <svg
      width="192"
      height="93"
      viewBox="0 0 192 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      style={props.style}
    >
      <path
        d="M51.808 53.432C51.808 56.824 50.944 59.864 49.216 62.552C47.488 65.176 45.152 67.256 42.208 68.792C39.328 70.264 36.16 71 32.704 71H0.544V2.84H33.376C36.576 2.84 39.328 3.704 41.632 5.432C44 7.096 45.792 9.272 47.008 11.96C48.288 14.584 48.928 17.336 48.928 20.216C48.928 23.608 48.064 26.744 46.336 29.624C44.608 32.504 42.208 34.648 39.136 36.056C43.04 37.208 46.112 39.352 48.352 42.488C50.656 45.624 51.808 49.272 51.808 53.432ZM45.088 52.28C45.088 49.976 44.576 47.864 43.552 45.944C42.528 43.96 41.12 42.36 39.328 41.144C37.6 39.928 35.616 39.32 33.376 39.32H7.264V65.144H32.704C35.008 65.144 37.088 64.536 38.944 63.32C40.8 62.104 42.272 60.536 43.36 58.616C44.512 56.632 45.088 54.52 45.088 52.28ZM7.264 8.696V33.848H30.688C32.928 33.848 34.912 33.272 36.64 32.12C38.368 30.904 39.744 29.336 40.768 27.416C41.792 25.496 42.304 23.448 42.304 21.272C42.304 18.968 41.824 16.888 40.864 15.032C39.904 13.112 38.592 11.576 36.928 10.424C35.264 9.272 33.376 8.696 31.264 8.696H7.264ZM63.4255 0.919998H69.9535V59.672C69.9535 62.168 70.4015 63.8 71.2975 64.568C72.1935 65.336 73.2815 65.72 74.5615 65.72C75.7135 65.72 76.8655 65.592 78.0175 65.336C79.1695 65.08 80.1615 64.824 80.9935 64.568L82.1455 69.848C80.9295 70.36 79.4255 70.776 77.6335 71.096C75.9055 71.416 74.4015 71.576 73.1215 71.576C70.1775 71.576 67.8095 70.712 66.0175 68.984C64.2895 67.256 63.4255 64.888 63.4255 61.88V0.919998ZM110.606 71.96C107.022 71.96 103.694 71.288 100.622 69.944C97.6138 68.536 94.9898 66.648 92.7498 64.28C90.5738 61.848 88.8778 59.096 87.6618 56.024C86.4458 52.888 85.8378 49.592 85.8378 46.136C85.8378 42.552 86.4458 39.224 87.6618 36.152C88.8778 33.016 90.6058 30.264 92.8458 27.896C95.0858 25.464 97.7098 23.576 100.718 22.232C103.79 20.824 107.118 20.12 110.702 20.12C114.286 20.12 117.582 20.824 120.59 22.232C123.598 23.576 126.222 25.464 128.462 27.896C130.702 30.264 132.43 33.016 133.646 36.152C134.862 39.224 135.47 42.552 135.47 46.136C135.47 49.592 134.862 52.888 133.646 56.024C132.43 59.096 130.702 61.848 128.462 64.28C126.286 66.648 123.662 68.536 120.59 69.944C117.582 71.288 114.254 71.96 110.606 71.96ZM92.4618 46.232C92.4618 49.944 93.2618 53.336 94.8618 56.408C96.5258 59.416 98.7338 61.816 101.486 63.608C104.238 65.336 107.278 66.2 110.606 66.2C113.934 66.2 116.974 65.304 119.726 63.512C122.478 61.72 124.686 59.288 126.35 56.216C128.014 53.08 128.846 49.688 128.846 46.04C128.846 42.328 128.014 38.936 126.35 35.864C124.686 32.792 122.478 30.36 119.726 28.568C116.974 26.776 113.934 25.88 110.606 25.88C107.278 25.88 104.238 26.808 101.486 28.664C98.7978 30.52 96.6218 32.984 94.9578 36.056C93.2938 39.064 92.4618 42.456 92.4618 46.232ZM166.452 71.672C163.06 71.672 159.924 70.968 157.044 69.56C154.164 68.152 151.668 66.264 149.556 63.896C147.508 61.464 145.908 58.712 144.756 55.64C143.604 52.568 143.028 49.4 143.028 46.136C143.028 42.616 143.572 39.32 144.66 36.248C145.812 33.112 147.412 30.328 149.46 27.896C151.572 25.464 154.036 23.576 156.852 22.232C159.668 20.824 162.804 20.12 166.26 20.12C170.548 20.12 174.26 21.208 177.396 23.384C180.596 25.56 183.284 28.248 185.46 31.448V20.984H191.316V71.192C191.316 75.8 190.196 79.672 187.956 82.808C185.78 86.008 182.804 88.408 179.028 90.008C175.316 91.608 171.252 92.408 166.836 92.408C161.14 92.408 156.532 91.384 153.012 89.336C149.492 87.288 146.612 84.536 144.372 81.08L148.404 77.912C150.388 81.048 153.012 83.384 156.276 84.92C159.604 86.456 163.124 87.224 166.836 87.224C170.1 87.224 173.076 86.616 175.764 85.4C178.516 84.248 180.692 82.488 182.292 80.12C183.956 77.752 184.788 74.776 184.788 71.192V61.304C182.868 64.44 180.244 66.968 176.916 68.888C173.588 70.744 170.1 71.672 166.452 71.672ZM168.276 66.2C170.26 66.2 172.148 65.848 173.94 65.144C175.796 64.44 177.492 63.512 179.028 62.36C180.564 61.144 181.844 59.8 182.868 58.328C183.892 56.856 184.532 55.352 184.788 53.816V38.36C183.828 35.928 182.452 33.784 180.66 31.928C178.868 30.008 176.82 28.536 174.516 27.512C172.276 26.424 169.94 25.88 167.508 25.88C164.692 25.88 162.164 26.488 159.924 27.704C157.748 28.856 155.892 30.424 154.356 32.408C152.884 34.328 151.732 36.504 150.9 38.936C150.068 41.368 149.652 43.8 149.652 46.232C149.652 48.92 150.132 51.48 151.092 53.912C152.052 56.28 153.364 58.424 155.028 60.344C156.756 62.2 158.74 63.64 160.98 64.664C163.284 65.688 165.716 66.2 168.276 66.2Z"
        fill="none"
        className="fill-current"
      />
    </svg>
  );
};