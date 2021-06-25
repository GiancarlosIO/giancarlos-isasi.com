import * as React from 'react';

const MrN = () => {
  return (
    <svg
      width={223.49}
      height={122.021}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="138.255 13.989 223.49 122.021"
      style={{
        background: '0 0',
      }}
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <linearGradient
          id="prefix__editing-outline-gradient"
          x1={-0.414}
          x2={1.414}
          y1={0.093}
          y2={0.907}
        >
          <stop offset={0} stopColor="#ee4208" />
          <stop offset={1} stopColor="#4139ff" />
        </linearGradient>
        <filter
          id="prefix__editing-outline"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feMorphology
            in="SourceGraphic"
            operator="dilate"
            radius={1}
            result="outline"
          />
          <feComposite operator="out" in="outline" in2="SourceAlpha" />
        </filter>
      </defs>
      <g filter="url(#prefix__editing-outline)">
        <path
          d="M6.53 0H-.83l11.58-42.24h13.38l2.94 24.13 11.91-24.13h11.2l1.15 31.62q.25 6.27 3.33 8.19-.71 1.28-2.76 2.49-2.04 1.22-4.76 1.22-2.72 0-4.32-.77t-2.5-2.05q-1.6-2.3-1.6-6.72v-19.77L26.11 0h-7.93L13.7-28.74 6.53 0zm70.91-17.98q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.17 6.02L69.12 0 55.87 1.28l6.53-33.92 10.56-1.28-1.15 6.46q3.13-6.46 10.17-6.46 3.72 0 5.73 1.92 2.02 1.92 2.02 5.86 0 3.93-2.59 6.43-2.6 2.49-7.01 2.49-1.92 0-2.69-.76zM110.53 0h-7.04l7.68-42.24h13.76l9.98 29.06 5.31-29.06 7.11.06L139.52 0h-14.66l-9.21-27.97L110.53 0z"
          fill="url(#prefix__editing-outline-gradient)"
          transform="translate(175.875 96.752)"
        />
      </g>
      <style />
    </svg>
  );
};

export default MrN;
