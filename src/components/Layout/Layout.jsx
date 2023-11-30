import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import PageLoader from '../PageLoader/PageLoader';
import { Container, ContentContainer } from './Layout.styled';

const Layout = () => {
  // const location = useLocation();
  // const { pathname } = location;

  // const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth < 1280);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobileOrTablet(window.innerWidth < 1280);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // const pageToRenderDesktop = ['/', '/register', '/login'];
  // const pageToRenderMobileTablet = ['/'];

  // const shouldRender =
  //   (isMobileOrTablet && pageToRenderMobileTablet.includes(pathname)) ||
  //   (!isMobileOrTablet && pageToRenderDesktop.includes(pathname));

  return (
    <>
      <Header />
      <Container>
        {/* {shouldRender && (
          <BgImageWrapperContainer>
            <BgImageWrapper />
          </BgImageWrapperContainer>
        )} */}
        <ContentContainer>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </ContentContainer>
      </Container>
    </>
  );
};

export { Layout };
