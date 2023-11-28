import { userImages } from 'images/users/user-images.js';
import { Amount, Description, OverlappingImages, Wrapper } from './AllUsersTab.styled';

const { img1Desk, img1Desk2x, img2Desk, img2Desk2x, img3Desk, img3Desk2x } = userImages;

const AllUsersTab = () => {
  return (
    <Wrapper>
      <OverlappingImages>
        <img srcSet={`${img1Desk} 1x, ${img1Desk2x} 2x`} src="img-1_desk.png" alt="User" />
        <img srcSet={`${img2Desk} 1x, ${img2Desk2x} 2x`} src="img-2_desk.png" alt="User" />
        <img srcSet={`${img3Desk} 1x, ${img3Desk2x} 2x`} src="img-3_desk.png" alt="User" />
      </OverlappingImages>
      <div>
        <Amount>1000 users +</Amount>
        <Description>Trusted by users for reliable expense tracking!</Description>
      </div>
    </Wrapper>
  );
};

export default AllUsersTab;
