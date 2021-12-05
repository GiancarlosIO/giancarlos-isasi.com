import { useState, useEffect } from 'react';

const useIsclient = () => {
  const [isClient, setIsClient] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

export default useIsclient;
