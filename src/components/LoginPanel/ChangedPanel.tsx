import React, { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChangedPanelType } from "../../types/LoginPanelTypes";

export const ChangedPanel: FC<ChangedPanelType> = ({ isOpenAside }) => {

  return (
    <div
      className={
        isOpenAside
          ? "popup-wrapper popup-wrapper__loginpanel popup-wrapper--active"
          : "popup-wrapper popup-wrapper__loginpanel"
      }
    >
      <Link className="popup-wrapper__close" to="/">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3002 0.70998C13.2077 0.617276 13.0978 0.543728 12.9768 0.493547C12.8559 0.443366 12.7262 0.417535 12.5952 0.417535C12.4643 0.417535 12.3346 0.443366 12.2136 0.493547C12.0926 0.543728 11.9827 0.617276 11.8902 0.70998L7.00022 5.58998L2.11022 0.699979C2.01764 0.607397 1.90773 0.533957 1.78677 0.483852C1.6658 0.433747 1.53615 0.407959 1.40522 0.407959C1.27429 0.407959 1.14464 0.433747 1.02368 0.483852C0.902716 0.533957 0.792805 0.607397 0.700223 0.699979C0.607642 0.792561 0.534202 0.902472 0.484097 1.02344C0.433992 1.1444 0.408203 1.27405 0.408203 1.40498C0.408203 1.53591 0.433992 1.66556 0.484097 1.78652C0.534202 1.90749 0.607642 2.0174 0.700223 2.10998L5.59022 6.99998L0.700223 11.89C0.607642 11.9826 0.534202 12.0925 0.484097 12.2134C0.433992 12.3344 0.408203 12.464 0.408203 12.595C0.408203 12.7259 0.433992 12.8556 0.484097 12.9765C0.534202 13.0975 0.607642 13.2074 0.700223 13.3C0.792805 13.3926 0.902716 13.466 1.02368 13.5161C1.14464 13.5662 1.27429 13.592 1.40522 13.592C1.53615 13.592 1.6658 13.5662 1.78677 13.5161C1.90773 13.466 2.01764 13.3926 2.11022 13.3L7.00022 8.40998L11.8902 13.3C11.9828 13.3926 12.0927 13.466 12.2137 13.5161C12.3346 13.5662 12.4643 13.592 12.5952 13.592C12.7262 13.592 12.8558 13.5662 12.9768 13.5161C13.0977 13.466 13.2076 13.3926 13.3002 13.3C13.3928 13.2074 13.4662 13.0975 13.5163 12.9765C13.5665 12.8556 13.5922 12.7259 13.5922 12.595C13.5922 12.464 13.5665 12.3344 13.5163 12.2134C13.4662 12.0925 13.3928 11.9826 13.3002 11.89L8.41022 6.99998L13.3002 2.10998C13.6802 1.72998 13.6802 1.08998 13.3002 0.70998Z"
            fill="#29ABE2"
          />
        </svg>
      </Link>
      <div className="loginpanel">
        <div className="loginpanel__top">
          <div className="loginpanel__top-item loginpanel__top-item--active">
            Password Changed!
          </div>
        </div>
        <svg
          className="loginpanel__success-svg"
          width="300"
          height="125"
          viewBox="0 0 300 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.8104 36.5838C33.5754 36.0167 30.2528 39.2486 29.2114 40.2721C27.4003 42.0517 24.5293 45.5095 23.2206 47.6487C17.8381 56.4546 16.7137 59.4928 12.6215 66.5513C10.0685 70.9543 7.7874 75.5093 5.24823 79.9215C4.51551 81.1893 3.39569 83.5821 2.94408 86.376C2.30353 90.341 2.9533 93.536 3.40491 94.6747C4.10998 96.4589 6.07772 99.7969 9.85652 101.59C14.9625 104.011 20.4464 100.977 21.8381 100.207C23.0547 99.5341 25.5063 97.9804 30.133 90.9864C32.9625 86.708 33.4971 85.1036 37.5063 77.6163C41.8842 69.4467 44.0731 65.3619 45.8012 62.402C48.6676 57.5012 49.9395 55.6893 50.4095 52.2591C50.6584 50.4657 51.1883 46.1273 48.5662 42.1163C48.0501 41.3233 45.9856 38.2712 42.1146 37.0449C41.7551 36.9342 40.9072 36.6852 39.8104 36.5838Z"
            fill="url(#paint0_linear_354_20974)"
            stroke="#29ABE2"
            strokeMiterlimit="10"
          />
          <path
            d="M75.7565 74.7484C74.8349 74.7484 69.4939 85.9378 67.0008 89.5017C63.775 94.1121 61.8165 96.7031 60.5492 97.8004C58.3879 99.6768 56.0192 100.7 54.5584 101.028C52.3602 101.521 49.9501 101.604 47.1851 100.567C44.3418 99.497 42.8026 97.3854 42.116 96.4173C40.2773 93.8216 39.9547 91.2398 39.8118 89.9627C39.4201 86.4772 40.2819 83.6419 41.1943 81.203C43.2036 75.8365 45.1344 73.227 48.5676 67.3718C51.0238 63.181 53.8026 58.4369 56.8625 52.1575C58.8764 48.022 59.9824 45.3295 62.8533 42.0146C66.1436 38.2157 68.8118 36.9985 70.2266 36.4822C71.0469 36.1825 73.2727 35.4495 76.2174 35.5601C77.0699 35.5924 79.9547 35.7676 83.1298 37.4043C86.1022 38.9395 88.0284 41.088 90.0423 43.8588C93.8395 49.0824 94.8349 51.5997 98.798 59.0731C102.319 65.7121 105.71 71.9822 105.71 71.9822C107.259 74.5041 110.78 82.125 111.24 83.5082C111.881 85.4353 112.162 88.1185 112.162 89.5017C112.162 90.7419 112.457 93.4897 110.78 96.4173C110.134 97.5422 108.199 100.115 105.25 101.489C101.397 103.287 97.5031 102.346 95.1114 101.489C89.9271 99.6261 87.0008 95.5274 85.8948 94.1121C84.6275 92.4938 84.5123 91.3458 81.7473 86.2744C80.9501 84.8129 76.351 74.7484 75.7565 74.7484Z"
            fill="url(#paint1_linear_354_20974)"
            stroke="url(#paint2_linear_354_20974)"
            strokeMiterlimit="10"
          />
          <path
            d="M122.419 68.1041C123.613 67.3157 125.207 66.6749 127.203 66.1862C129.198 65.6975 130.903 65.4531 132.318 65.4531C139.696 65.4531 143.387 69.8238 143.387 78.5605V97.3847H136.065V92.8481H135.968C134.171 96.3796 131.539 98.1454 128.074 98.1454C125.576 98.1454 123.576 97.3063 122.074 95.6235C120.571 93.9407 119.82 91.654 119.82 88.7586C119.82 82.7836 122.834 79.3073 128.862 78.3299L136.115 77.1727C136.115 73.549 134.516 71.7325 131.318 71.7325C128.171 71.7325 125.203 72.8574 122.419 75.1165V68.1041ZM131.124 83.2677C128.341 83.701 126.949 85.1856 126.949 87.7213C126.949 88.8877 127.286 89.8236 127.963 90.5383C128.641 91.2529 129.548 91.6079 130.696 91.6079C132.272 91.6079 133.567 90.9486 134.585 89.6346C135.604 88.3207 136.111 86.684 136.111 84.7292V82.5023L131.124 83.2677Z"
            fill="#F2F2F2"
          />
          <path
            d="M157.701 93.6364V111.732H149.996V66.2138H157.701V70.9764H157.798C159.816 67.2927 162.674 65.4531 166.36 65.4531C169.715 65.4531 172.337 66.8409 174.231 69.6117C176.125 72.3825 177.07 76.1538 177.07 80.9256C177.07 86.1307 175.973 90.3031 173.78 93.4382C171.586 96.5779 168.706 98.1454 165.144 98.1454C161.913 98.1454 159.466 96.6424 157.798 93.6364H157.701ZM157.581 83.6042C157.581 85.8218 158.088 87.6337 159.107 89.0445C160.125 90.4553 161.443 91.156 163.065 91.156C164.987 91.156 166.489 90.2709 167.563 88.5051C168.637 86.7393 169.171 84.2405 169.171 81.0086C169.171 75.2963 167.286 72.4425 163.517 72.4425C161.766 72.4425 160.342 73.2309 159.236 74.8122C158.13 76.389 157.577 78.4175 157.577 80.8979V83.6042H157.581Z"
            fill="#F2F2F2"
          />
          <path
            d="M180.959 81.9399C180.959 76.8085 182.259 72.779 184.858 69.8514C187.457 66.9192 190.954 65.4531 195.341 65.4531C199.586 65.4531 202.959 66.8962 205.457 69.7777C207.954 72.6638 209.203 76.5365 209.203 81.4051C209.203 86.518 207.922 90.5844 205.365 93.6088C202.802 96.6332 199.337 98.1454 194.964 98.1454C190.669 98.1454 187.263 96.6931 184.742 93.7932C182.222 90.8933 180.959 86.9422 180.959 81.9399ZM188.761 81.8292C188.761 88.0486 190.908 91.156 195.203 91.156C199.323 91.156 201.383 87.961 201.383 81.5757C201.383 75.4899 199.309 72.4425 195.157 72.4425C193.139 72.4425 191.567 73.2585 190.447 74.8952C189.318 76.5319 188.761 78.8417 188.761 81.8292Z"
            fill="#F2F2F2"
          />
          <path
            d="M213.068 81.9399C213.068 76.8085 214.368 72.779 216.967 69.8514C219.566 66.9192 223.064 65.4531 227.451 65.4531C231.695 65.4531 235.068 66.8962 237.566 69.7777C240.064 72.6638 241.313 76.5365 241.313 81.4051C241.313 86.518 240.032 90.5844 237.474 93.6088C234.912 96.6332 231.446 98.1454 227.073 98.1454C222.778 98.1454 219.373 96.6931 216.852 93.7932C214.331 90.8933 213.068 86.9422 213.068 81.9399ZM220.866 81.8292C220.866 88.0486 223.013 91.156 227.308 91.156C231.428 91.156 233.488 87.961 233.488 81.5757C233.488 75.4899 231.414 72.4425 227.262 72.4425C225.243 72.4425 223.672 73.2585 222.552 74.8952C221.428 76.5319 220.866 78.8417 220.866 81.8292Z"
            fill="#F2F2F2"
          />
          <path
            d="M267.36 97.3857H243.908V93.6928L257.411 73.006H245.245V66.2148H267.286V70.6132L254.383 90.5946H267.36V97.3857Z"
            fill="#F2F2F2"
          />
          <path
            d="M295.271 84.3649H277.903C278.175 89.192 280.64 91.6079 285.299 91.6079C288.212 91.6079 290.778 90.7642 293.004 89.0721V95.7526C290.603 97.3478 287.456 98.15 283.557 98.15C279.359 98.15 276.096 96.7484 273.765 93.9499C271.433 91.1514 270.271 87.251 270.271 82.2534C270.271 77.2742 271.511 73.2309 273.995 70.1188C276.474 67.0114 279.594 65.4531 283.345 65.4531C287.083 65.4531 290.004 66.7901 292.11 69.4688C294.216 72.1474 295.271 75.8265 295.271 80.5014V84.3649ZM288.092 78.6711C288.092 74.01 286.493 71.6818 283.295 71.6818C281.972 71.6818 280.806 72.3226 279.788 73.5997C278.769 74.8768 278.133 76.5688 277.88 78.6711H288.092Z"
            fill="#F2F2F2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_354_20974"
              x1="10.231"
              y1="39.5192"
              x2="34.6626"
              y2="84.3295"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A8F3" />
              <stop offset="0.3392" stopColor="#0AA9EF" />
              <stop offset="0.9115" stopColor="#24ABE4" />
              <stop offset="1" stopColor="#29ABE2" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_354_20974"
              x1="135.724"
              y1="69.029"
              x2="208.191"
              y2="69.029"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A8F3" />
              <stop offset="0.3392" stopColor="#0AA9EF" />
              <stop offset="0.9115" stopColor="#24ABE4" />
              <stop offset="1" stopColor="#29ABE2" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_354_20974"
              x1="39.4839"
              y1="69.029"
              x2="112.412"
              y2="69.029"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A8F3" />
              <stop offset="0.3392" stopColor="#0AA9EF" />
              <stop offset="0.9115" stopColor="#24ABE4" />
              <stop offset="1" stopColor="#29ABE2" />
            </linearGradient>
          </defs>
        </svg>
        <NavLink
          className="loginpanel__button loginpanel__button-link"
          to="../login"
        >
          Back to Login
        </NavLink>
      </div>
    </div>
  );
};
