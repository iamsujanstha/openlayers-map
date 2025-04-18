import {
  Layout,
  MapWrapper,
  TabContent,
} from './MainLayout.styled';
import { useRedirectOnBasePath } from '@/hooks/useRedirectToBasePath';
import { NavigationPath } from '@/routes/navigation-path';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
  useRedirectOnBasePath(NavigationPath.base, NavigationPath.map);

  return (
    <Layout>
      <MapWrapper>
        <TabContent>
          <Outlet />
        </TabContent>
      </MapWrapper>
    </Layout>
  );
};

export default MainLayout;
