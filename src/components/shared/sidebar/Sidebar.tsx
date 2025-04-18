import { useEffect, useRef } from 'react';
import { IconNav, SidebarWrapper, StyledNavLink } from './Sidebar.styled';
import { sidebarItems } from '@/constants/sidebar-items';
import { KeyboardKeys } from '@/constants/keyboard-keys';


const { ArrowUp, ArrowDown } = KeyboardKeys;

const Sidebar = () => {
  const tabRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    tabRefs.current[0]?.focus();
  }, []);


  const handleKeyDown = (index: number) => (e: React.KeyboardEvent) => {
    if (e.key === ArrowDown) {
      e.preventDefault();
      const nextIndex = (index + 1) % sidebarItems.length;
      tabRefs.current[nextIndex]?.focus();
    } else if (e.key === ArrowUp) {
      e.preventDefault();
      const prevIndex = (index - 1 + sidebarItems.length) % sidebarItems.length;
      tabRefs.current[prevIndex]?.focus();
    }
  };


  return (
    <SidebarWrapper>
      <IconNav>
        {sidebarItems.map((item,index) => (
          <StyledNavLink
            to={item.path}
            key={item.path}
            ref={(el) => { tabRefs.current[index] = el }}
            tabIndex={index}
            onKeyDown={handleKeyDown(index)}
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
