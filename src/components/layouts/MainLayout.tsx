import { Sidebar } from '@/components/shared/sidebar';
import {
  Layout,
  MapWrapper,
  TabContent,
} from './MainLayout.styled';
import { useRedirectOnBasePath } from '@/hooks/useRedirectToBasePath';
import { NavigationPath } from '@/routes/navigation-path';
import { Outlet } from 'react-router-dom';
import { MapView } from '@/components/core/map';


const MainLayout = () => {
  useRedirectOnBasePath(NavigationPath.base, NavigationPath.map);

  return (
    <Layout>
      <MapWrapper>
        <Sidebar />
        <TabContent>
          <Outlet />
        </TabContent>
        <MapView />
      </MapWrapper>
    </Layout>
  );
};

export default MainLayout;
