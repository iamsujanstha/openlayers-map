import { useEffect, useRef } from 'react';
import { IconNav, SidebarWrapper, StyledNavLink } from './Sidebar.styled';
import { sidebarItems } from '@/constants/sidebar-items';


const Sidebar = () => {
  const tabRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    tabRefs.current[0]?.focus();
  }, []);

  return (
    <SidebarWrapper>
      <IconNav>
        {sidebarItems.map((item) => (
          <StyledNavLink
            to={item.path}
            key={item.path}
            aria-label={item.label}
          >
            <item.icon className="nav-icon" />
          </StyledNavLink>
        ))}
      </IconNav>
    </SidebarWrapper>
  );
};

export default Sidebar;
