import styled from 'styled-components';
import { homeImages } from 'images/home/home-images';

const { img1Desk, img2Desk, img1Mob, img2Mob, img1Tab, img2Tab } = homeImages;

export const StyledBgImageWrapper = styled.div`
  width: 335px;
  height: 381px;
  margin-top: 40px;

  border-radius: 20px;

  background-color: var(--gray-text-60);
  background-image: url(${img1Mob});

  @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    background-image: url(${img2Mob});
  }

  @media (min-width: 768px) {
    width: 704px;
    height: 482px;
    margin-top: 36px;

    background-image: url(${img1Tab});
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${img2Tab});
    }
  }

  @media (min-width: 1280px) {
    width: 611px;
    height: 568px;
    margin-top: 40px;
    margin-left: 100px;

    background-image: url(${img1Desk});
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${img2Desk});
    }
  }

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
