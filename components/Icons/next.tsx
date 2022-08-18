import * as React from 'react';

export const Next = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        fill="#222"
        fillRule="evenodd"
        d="M15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0zm-1.882 9.005a.556.556 0 00-.733.047l-.046.052a.556.556 0 00.046.733L17.547 15l-5.162 5.163-.046.052a.556.556 0 00.832.733l5.555-5.555.046-.053a.556.556 0 00-.046-.733l-5.555-5.555-.053-.047z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};