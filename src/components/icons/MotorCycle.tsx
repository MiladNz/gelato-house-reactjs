import * as React from "react";
import type { SVGProps } from "react";
const SvgMotorCycle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 36 36"
    {...props}>
    <path
      stroke="#231F20"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.35}
      d="M21 28.5v2.625C21 32.16 20.16 33 19.125 33h-2.25A1.875 1.875 0 0 1 15 31.125V28.5"
    />
    <path
      stroke="#231F20"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.35}
      d="M15.18 10.5h5.64a6.016 6.016 0 0 1 5.962 5.322c.29 2.443.29 4.913 0 7.356A6.016 6.016 0 0 1 20.82 28.5h-5.64a6.016 6.016 0 0 1-5.963-5.322 31.2 31.2 0 0 1 0-7.357A6.016 6.016 0 0 1 15.18 10.5"
      clipRule="evenodd"
    />
    <path
      stroke="#231F20"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.35}
      d="M13.5 28.26V25.5a4.5 4.5 0 1 1 9 0v2.76M27 6h-5.325M14.325 6H9M18 21V10.5M18 10.5A3.75 3.75 0 1 0 18 3a3.75 3.75 0 0 0 0 7.5"
    />
  </svg>
);
export default SvgMotorCycle;
