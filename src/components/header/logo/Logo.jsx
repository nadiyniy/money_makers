import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none">
          <g clipPath="url(#clip0_25_434)">
            <path
              d="M18.57 11.3809C18.5176 11.2404 13.8751 2.00221 13.8053 1.86171C13.561 1.26456 13.1246 0.755229 12.5487 0.403966C11.1001 -0.439063 9.25003 0.0527039 8.41228 1.51044C7.83633 2.51154 7.87123 3.68827 8.42973 4.61911C8.48209 4.74206 12.9152 13.5939 13.0025 13.7344C13.0548 13.8749 13.1246 13.9978 13.1944 14.1383C13.4388 14.7355 13.8751 15.2448 14.4511 15.5961C15.8997 16.4391 17.7497 15.9649 18.5875 14.5071C19.1809 13.5061 19.1285 12.3118 18.57 11.3809Z"
              fill="#0EF387"
            />
            <path
              d="M13.212 5.12843C13.7182 4.58397 14.0323 3.84632 14.0323 3.03842C14.0323 1.36992 12.6884 0 11.0129 0C9.98319 0 9.07563 0.50933 8.53458 1.29967C8.42986 1.40505 0.907563 10.7486 0.820297 10.8716C0.314156 11.416 0 12.1537 0 12.9616C0 14.6476 1.36134 16 3.01939 16C4.04913 16 4.95669 15.4907 5.49774 14.7003C5.60246 14.5774 13.1422 5.25137 13.212 5.12843Z"
              fill="#FAFAFA"
            />
            <path
              d="M26.1795 5.12843C26.6857 4.58397 26.9998 3.84632 26.9998 3.03842C26.9998 1.35236 25.6385 0 23.9805 0C22.9507 0 22.0432 0.50933 21.5021 1.29967C21.3974 1.40505 13.8576 10.7486 13.7704 10.8716C13.2642 11.416 12.9501 12.1537 12.9501 12.9616C12.9501 14.6476 14.3114 16 15.9695 16C16.9992 16 17.9068 15.4907 18.4478 14.7003C18.57 14.5774 26.0923 5.25137 26.1795 5.12843Z"
              fill="#FAFAFA"
            />
          </g>
          <defs>
            <clipPath id="clip0_25_434">
              <rect width="27" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p>ExpenseTracker</p>
      </Link>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    p {
      color: #fafafa;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.4px;
      text-transform: uppercase;
    }
  }
`;

export default Logo;
