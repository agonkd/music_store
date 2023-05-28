import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function UseDynamicTitle(pageTitle) {
  const location = useLocation();

  useEffect(() => {
    document.title = `${pageTitle} | Soundspace`;
  }, [pageTitle]);

  useEffect(() => {
    if (location.pathname === '/') {
      document.title = `Home | Soundspace`;
    }
  }, [location]);
}

export default UseDynamicTitle;