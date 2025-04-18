import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useRedirectOnBasePath = (basePath: string, redirectTo: string) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === basePath) {
      navigate(redirectTo);
    }
  }, [location.pathname, navigate, basePath, redirectTo]);
};
