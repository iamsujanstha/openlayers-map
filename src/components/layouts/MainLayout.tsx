import {
  Layout,
  MapWrapper,
  TabContent,
} from './MainLayout.styled';
import Sidebar from '@components/shared/sidebar/Sidebar';
import { useRedirectOnBasePath } from '@hooks/useRedirectToBasePath';
import { NavigationPath } from '@routes/navigation-path';
import { MapView } from '@components/map/map-view';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
  useRedirectOnBasePath(NavigationPath.base, NavigationPath.map);

  return (
    <Layout>
      <Sidebar />
      <MapWrapper>
        <TabContent>
          <Outlet />
        </TabContent>
        <MapView />
      </MapWrapper>
    </Layout>
  );
};

export default MainLayout;
