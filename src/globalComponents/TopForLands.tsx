import { FC, useState } from "react";
import { dataSocials } from "../components/AccountPanel/Exchange/exchange.data";
import { Link } from "react-router-dom";

export const TopForLands: FC = () => {
  const [isActiveList, setActiveList] = useState(false);
  const [selectSocial, setSelectSocial] = useState<null | number>(null);

  const selectHandler = (idx: number) => {
    setActiveList(false);
    setSelectSocial(idx);
  };

  return (
    <div className="exchange__top">
      <div
        className="saleplace__general-trial saleplace__general-trial-select exchange__select"
        style={{ maxWidth: 290 }}
      >
        <div
          className="saleplace__general-trial-inputbox saleplace__general-select"
          onClick={() => setActiveList(true)}
        >
          <span
            className={
              isActiveList || selectSocial
                ? "addwallet__span addwallet__span--active"
                : "addwallet__span"
            }
          >
            Select the Land
          </span>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3625 14.3L8.76251 11.7C8.44585 11.3833 8.37518 11.021 8.55051 10.613C8.72585 10.205 9.03818 10.0007 9.48751 10H14.6375C15.0875 10 15.4002 10.2043 15.5755 10.613C15.7508 11.0217 15.6798 11.384 15.3625 11.7L12.7625 14.3C12.6625 14.4 12.5542 14.475 12.4375 14.525C12.3208 14.575 12.1958 14.6 12.0625 14.6C11.9292 14.6 11.8042 14.575 11.6875 14.525C11.5708 14.475 11.4625 14.4 11.3625 14.3Z"
              fill="#29ABE2"
            />
          </svg>
          {!!selectSocial && (
            <div className="addwallet__select-title">
              {dataSocials[selectSocial].item}
            </div>
          )}
        </div>
        {isActiveList && (
          <ul className="saleplace__general-select-list addwallet__list exchange__list">
            {dataSocials.map((el, idx) => (
              <li
                className={
                  selectSocial === idx
                    ? "saleplace__general-select-item saleplace__general-select-item--active"
                    : "saleplace__general-select-item"
                }
                onClick={() => selectHandler(idx)}
                key={idx}
              >
                {el.item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Link className="exchange__top-btn" to="/account/exchange/fulltable">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 21.5H5C4.45 21.5 3.979 21.304 3.587 20.912C3.195 20.52 2.99934 20.0493 3 19.5V5.5C3 4.95 3.196 4.479 3.588 4.087C3.98 3.695 4.45067 3.49934 5 3.5H20C20.55 3.5 21.021 3.696 21.413 4.088C21.805 4.48 22.0007 4.95067 22 5.5V19.5C22 20.05 21.804 20.521 21.412 20.913C21.02 21.305 20.5493 21.5007 20 21.5ZM5 8.5H20V5.5H5V8.5ZM8 10.5H5V19.5H8V10.5ZM17 10.5V19.5H20V10.5H17ZM15 10.5H10V19.5H15V10.5Z"
            fill="#29ABE2"
          />
        </svg>
        <div className="exchange__top-btn-title">Full Table</div>
      </Link>
      <div className="lands__top-title">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.1 22.05C12.2333 22.1 12.3667 22.125 12.5 22.125C12.6333 22.125 12.7667 22.1 12.9 22.05C13.0333 22 13.15 21.9333 13.25 21.85C15.6833 19.7 17.5 17.7043 18.7 15.863C19.9 14.021 20.5 12.3 20.5 10.7C20.5 8.2 19.6957 6.20833 18.087 4.725C16.479 3.24167 14.6167 2.5 12.5 2.5C10.3833 2.5 8.521 3.24167 6.913 4.725C5.30433 6.20833 4.5 8.2 4.5 10.7C4.5 12.3 5.1 14.021 6.3 15.863C7.5 17.7043 9.31667 19.7 11.75 21.85C11.85 21.9333 11.9667 22 12.1 22.05Z"
            fill="white"
          />
          <path
            d="M12.5 15.5C13.4333 15.5 14.275 15.2707 15.025 14.812C15.775 14.354 16.3667 13.75 16.8 13C16.2167 12.5167 15.5583 12.1457 14.825 11.887C14.0917 11.629 13.3167 11.5 12.5 11.5C11.6833 11.5 10.9083 11.629 10.175 11.887C9.44167 12.1457 8.78333 12.5167 8.2 13C8.63333 13.75 9.225 14.354 9.975 14.812C10.725 15.2707 11.5667 15.5 12.5 15.5ZM12.5 10.5C13.05 10.5 13.521 10.304 13.913 9.912C14.3043 9.52067 14.5 9.05 14.5 8.5C14.5 7.95 14.3043 7.47933 13.913 7.088C13.521 6.696 13.05 6.5 12.5 6.5C11.95 6.5 11.4793 6.696 11.088 7.088C10.696 7.47933 10.5 7.95 10.5 8.5C10.5 9.05 10.696 9.52067 11.088 9.912C11.4793 10.304 11.95 10.5 12.5 10.5ZM12.5 22.125C12.3667 22.125 12.2333 22.1 12.1 22.05C11.9667 22 11.85 21.9333 11.75 21.85C9.31667 19.7 7.5 17.7043 6.3 15.863C5.1 14.021 4.5 12.3 4.5 10.7C4.5 8.2 5.30433 6.20833 6.913 4.725C8.521 3.24167 10.3833 2.5 12.5 2.5C14.6167 2.5 16.479 3.24167 18.087 4.725C19.6957 6.20833 20.5 8.2 20.5 10.7C20.5 12.3 19.9 14.021 18.7 15.863C17.5 17.7043 15.6833 19.7 13.25 21.85C13.15 21.9333 13.0333 22 12.9 22.05C12.7667 22.1 12.6333 22.125 12.5 22.125Z"
            fill="#29ABE2"
          />
        </svg>
        Germany, Berlin
      </div>
    </div>
  );
};
