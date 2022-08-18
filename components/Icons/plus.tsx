import * as React from 'react';

export const Plus = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect width="12" height="2" x="6" y="11" fill="#292929" rx="1"></rect>
      <path
        fill="#292929"
        fillRule="evenodd"
        d="M13 6.75v10.5c0 .414-.448.75-1 .75s-1-.336-1-.75V6.75c0-.414.448-.75 1-.75s1 .336 1 .75z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};