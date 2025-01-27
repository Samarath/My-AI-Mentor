import * as React from "react";

const GraphIcon = ({ height, width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Capa_1"
    version="1.1"
    height={height ? height : 50}
    width={width ? width : 50}
    viewBox="0 0 60 60"
  >
    <path fill="#7ED09E" d="M3 42.5h10v14H3z"></path>
    <path fill="#71C285" d="M18 33.5h10v23H18z"></path>
    <path fill="#4FBA6F" d="M33 25.5h10v31H33z"></path>
    <path fill="#24AE5F" d="M48 17.5h10v39H48z"></path>
    <path fill="#556080" d="M59 57.5H1a1 1 0 1 1 0-2h58a1 1 0 1 1 0 2"></path>
    <path
      fill="#BDC3C7"
      d="M8.03 27.83a1 1 0 0 1-.501-1.866L46.5 3.464a1 1 0 1 1 1 1.732l-38.971 22.5a1 1 0 0 1-.499.134"
    ></path>
    <path
      fill="#BDC3C7"
      d="M47.001 5.33a1 1 0 0 1-.098-.005l-8.562-.83a1 1 0 0 1-.898-1.092.995.995 0 0 1 1.092-.898l8.562.83a1 1 0 0 1-.096 1.995"
    ></path>
    <path
      fill="#BDC3C7"
      d="M43.437 13.16a1 1 0 0 1-.91-1.414l3.562-7.83a1 1 0 1 1 1.82.828l-3.562 7.83a1 1 0 0 1-.91.586"
    ></path>
  </svg>
);

export default GraphIcon;
