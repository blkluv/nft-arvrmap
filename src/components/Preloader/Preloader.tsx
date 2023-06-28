import { FC } from "react";

export const Preloader: FC = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 16px)",
        backgroundColor: "#000",
      }}
    >
      <div
        className="preloader__img"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <svg
          style={{ width: "200px" }}
          width="300"
          height="89"
          viewBox="0 0 300 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_363_20298)">
            <path
              d="M39.8112 0.583814C33.5761 0.0167359 30.2536 3.24862 29.2121 4.27213C27.401 6.05174 24.5301 9.50953 23.2213 11.6487C17.8388 20.4546 16.7144 23.4928 12.6222 30.5513C10.0692 34.9543 7.78813 39.5093 5.24896 43.9215C4.51624 45.1893 3.39643 47.5821 2.94481 50.376C2.30426 54.341 2.95403 57.536 3.40564 58.6747C4.11071 60.4589 6.07845 63.7969 9.85726 65.5903C14.9632 68.0108 20.4471 64.9771 21.8388 64.2072C23.0554 63.5341 25.507 61.9804 30.1338 54.9864C32.9632 50.708 33.4978 49.1036 37.507 41.6163C41.8849 33.4467 44.0738 29.3619 45.802 26.402C48.6683 21.5012 49.9402 19.6893 50.4103 16.2591C50.6591 14.4657 51.1891 10.1273 48.5669 6.11628C48.0508 5.32329 45.9863 2.27122 42.1153 1.04485C41.7559 0.934203 40.9079 0.685242 39.8112 0.583814Z"
              fill="url(#paint0_linear_363_20298)"
              stroke="#29ABE2"
              strokeMiterlimit="10"
            />
            <path
              d="M75.7558 38.7484C74.8342 38.7484 69.4931 49.9378 67.0001 53.5017C63.7742 58.1121 61.8157 60.7031 60.5484 61.8004C58.3872 63.6768 56.0185 64.7003 54.5577 65.0276C52.3595 65.521 49.9494 65.6039 47.1844 64.5666C44.3411 63.497 42.8019 61.3854 42.1153 60.4173C40.2766 57.8216 39.954 55.2398 39.8111 53.9627C39.4194 50.4772 40.2812 47.6419 41.1936 45.203C43.2028 39.8365 45.1337 37.227 48.5669 31.3718C51.0231 27.181 53.8019 22.4369 56.8618 16.1575C58.8756 12.022 59.9816 9.32952 62.8526 6.01465C66.1429 2.21569 68.8111 0.998543 70.2259 0.48218C71.0461 0.182504 73.2719 -0.550548 76.2166 -0.439898C77.0692 -0.407626 79.954 -0.232431 83.1291 1.40426C86.1014 2.93952 88.0277 5.08796 90.0415 7.8588C93.8388 13.0824 94.8342 15.5997 98.7973 23.0731C102.318 29.7121 105.71 35.9822 105.71 35.9822C107.258 38.5041 110.779 46.125 111.24 47.5082C111.88 49.4353 112.161 52.1185 112.161 53.5017C112.161 54.7419 112.456 57.4897 110.779 60.4173C110.134 61.5422 108.198 64.1148 105.249 65.4887C101.396 67.2867 97.5024 66.3462 95.1107 65.4887C89.9263 63.6261 87.0001 59.5274 85.8941 58.1121C84.6268 56.4938 84.5116 55.3458 81.7466 50.2744C80.9494 48.8129 76.3503 38.7484 75.7558 38.7484Z"
              fill="url(#paint1_linear_363_20298)"
              stroke="url(#paint2_linear_363_20298)"
              strokeMiterlimit="10"
            />
            <path
              d="M122.419 32.1041C123.613 31.3157 125.207 30.6749 127.203 30.1862C129.198 29.6975 130.903 29.4531 132.318 29.4531C139.696 29.4531 143.387 33.8238 143.387 42.5605V61.3847H136.065V56.8481H135.968C134.171 60.3796 131.539 62.1454 128.074 62.1454C125.576 62.1454 123.576 61.3063 122.074 59.6235C120.571 57.9407 119.82 55.654 119.82 52.7586C119.82 46.7836 122.834 43.3073 128.862 42.3299L136.115 41.1727C136.115 37.549 134.516 35.7325 131.318 35.7325C128.171 35.7325 125.203 36.8574 122.419 39.1165V32.1041ZM131.124 47.2677C128.341 47.701 126.949 49.1856 126.949 51.7213C126.949 52.8877 127.286 53.8236 127.963 54.5383C128.641 55.2529 129.548 55.6079 130.696 55.6079C132.272 55.6079 133.567 54.9486 134.585 53.6346C135.604 52.3207 136.111 50.684 136.111 48.7292V46.5023L131.124 47.2677Z"
              fill="#F2F2F2"
            />
            <path
              d="M157.7 57.6364V75.7322H149.995V30.2138H157.7V34.9764H157.797C159.816 31.2927 162.673 29.4531 166.359 29.4531C169.714 29.4531 172.336 30.8409 174.23 33.6117C176.124 36.3825 177.069 40.1538 177.069 44.9256C177.069 50.1307 175.972 54.3031 173.779 57.4382C171.585 60.5779 168.705 62.1454 165.143 62.1454C161.912 62.1454 159.465 60.6424 157.797 57.6364H157.7ZM157.581 47.6042C157.581 49.8218 158.088 51.6337 159.106 53.0445C160.124 54.4553 161.442 55.156 163.064 55.156C164.986 55.156 166.488 54.2709 167.562 52.5051C168.636 50.7393 169.17 48.2405 169.17 45.0086C169.17 39.2963 167.286 36.4425 163.516 36.4425C161.765 36.4425 160.341 37.2309 159.235 38.8122C158.129 40.389 157.576 42.4175 157.576 44.8979V47.6042H157.581Z"
              fill="#F2F2F2"
            />
            <path
              d="M180.958 45.9399C180.958 40.8085 182.258 36.779 184.857 33.8514C187.456 30.9192 190.954 29.4531 195.341 29.4531C199.585 29.4531 202.958 30.8962 205.456 33.7777C207.954 36.6638 209.203 40.5365 209.203 45.4051C209.203 50.518 207.922 54.5844 205.364 57.6088C202.802 60.6332 199.336 62.1454 194.963 62.1454C190.668 62.1454 187.263 60.6931 184.742 57.7932C182.221 54.8933 180.958 50.9422 180.958 45.9399ZM188.76 45.8292C188.76 52.0486 190.908 55.156 195.203 55.156C199.323 55.156 201.382 51.961 201.382 45.5757C201.382 39.4899 199.309 36.4425 195.157 36.4425C193.138 36.4425 191.567 37.2585 190.447 38.8952C189.318 40.5319 188.76 42.8417 188.76 45.8292Z"
              fill="#F2F2F2"
            />
            <path
              d="M213.069 45.9399C213.069 40.8085 214.369 36.779 216.968 33.8514C219.567 30.9192 223.064 29.4531 227.452 29.4531C231.696 29.4531 235.069 30.8962 237.567 33.7777C240.064 36.6638 241.313 40.5365 241.313 45.4051C241.313 50.518 240.032 54.5844 237.475 57.6088C234.912 60.6332 231.447 62.1454 227.074 62.1454C222.779 62.1454 219.373 60.6931 216.853 57.7932C214.332 54.8933 213.069 50.9422 213.069 45.9399ZM220.866 45.8292C220.866 52.0486 223.014 55.156 227.309 55.156C231.429 55.156 233.488 51.961 233.488 45.5757C233.488 39.4899 231.415 36.4425 227.263 36.4425C225.244 36.4425 223.673 37.2585 222.553 38.8952C221.429 40.5319 220.866 42.8417 220.866 45.8292Z"
              fill="#F2F2F2"
            />
            <path
              d="M267.36 61.3847H243.908V57.6918L257.41 37.005H245.244V30.2139H267.286V34.6122L254.383 54.5936H267.36V61.3847Z"
              fill="#F2F2F2"
            />
            <path
              d="M295.272 48.3649H277.903C278.175 53.192 280.641 55.6079 285.3 55.6079C288.212 55.6079 290.779 54.7642 293.005 53.0721V59.7526C290.604 61.3478 287.456 62.15 283.558 62.15C279.36 62.15 276.097 60.7484 273.765 57.9499C271.433 55.1514 270.272 51.251 270.272 46.2534C270.272 41.2742 271.512 37.2309 273.995 34.1188C276.475 31.0114 279.595 29.4531 283.346 29.4531C287.083 29.4531 290.005 30.7901 292.111 33.4688C294.217 36.1474 295.272 39.8265 295.272 44.5014V48.3649ZM288.092 42.6711C288.092 38.01 286.493 35.6818 283.295 35.6818C281.972 35.6818 280.807 36.3226 279.788 37.5997C278.77 38.8768 278.134 40.5688 277.88 42.6711H288.092Z"
              fill="#F2F2F2"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_363_20298"
              x1="10.2318"
              y1="3.51916"
              x2="34.6633"
              y2="48.3295"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00A8F3" />
              <stop offset="0.3392" stop-color="#0AA9EF" />
              <stop offset="0.9115" stop-color="#24ABE4" />
              <stop offset="1" stop-color="#29ABE2" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_363_20298"
              x1="135.723"
              y1="33.029"
              x2="208.19"
              y2="33.029"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00A8F3" />
              <stop offset="0.3392" stop-color="#0AA9EF" />
              <stop offset="0.9115" stop-color="#24ABE4" />
              <stop offset="1" stop-color="#29ABE2" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_363_20298"
              x1="39.4831"
              y1="33.029"
              x2="112.411"
              y2="33.029"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00A8F3" />
              <stop offset="0.3392" stop-color="#0AA9EF" />
              <stop offset="0.9115" stop-color="#24ABE4" />
              <stop offset="1" stop-color="#29ABE2" />
            </linearGradient>
            <clipPath id="clip0_363_20298">
              <rect width="300" height="89" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};
