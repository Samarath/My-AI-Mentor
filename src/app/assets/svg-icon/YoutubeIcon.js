import * as React from "react";

const YoutubeIcon = ({ height, width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ? width : 50}
    height={height ? height : 50}
    viewBox="0 -7 48 48"
  >
    <g id="Icons" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <g id="Color-" fill="#CE1312" transform="translate(-200 -368)">
        <path
          id="Youtube"
          d="m219.044 391.27-.002-13.582 12.97 6.814zm28.476-15.936s-.47-3.33-1.908-4.798c-1.826-1.926-3.871-1.935-4.809-2.047-6.717-.489-16.792-.489-16.792-.489h-.022s-10.075 0-16.792.49c-.939.111-2.983.12-4.81 2.046-1.439 1.467-1.907 4.798-1.907 4.798s-.48 3.913-.48 7.824v3.668c0 3.912.48 7.823.48 7.823s.468 3.331 1.907 4.798c1.827 1.926 4.225 1.866 5.293 2.067 3.84.371 16.32.486 16.32.486s10.086-.015 16.803-.505c.938-.113 2.983-.122 4.809-2.048 1.439-1.467 1.908-4.798 1.908-4.798s.48-3.91.48-7.823v-3.668c0-3.911-.48-7.824-.48-7.824"
        ></path>
      </g>
    </g>
  </svg>
);

export default YoutubeIcon;
