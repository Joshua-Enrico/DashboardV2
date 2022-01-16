
import Homepage from '../pagescomp/home';
import { useRouter } from 'next/router';
import { useEffect} from 'react';
import { useAuth } from '../utils/auth1';
import PreloaderComp from '../components/preloader/preloaderComp';

export default function HomeDash() {

  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  useEffect(() => {
    if(!isLoading && !isAuthenticated) {
      router.push({
        pathname: "/",
      })
    }

  }, [isAuthenticated, isLoading])

  if (isLoading || !isAuthenticated) {
    return <PreloaderComp />
  };
  

  return (  
        <Homepage />
  )
}
