
import RcoverAccount from '../../pagescomp/recover/index';
import { useAuth } from '../../utils/auth1';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PreloaderComp from '../../components/preloader/preloaderComp';
import { VerifyResetRqst } from '../../apiGraphql/Apicalls';
export default function Recover() {
  const router = useRouter();
  const { isLoadingProtected, setAccess, allowed } = useAuth();



  useEffect(async () => {
    if (!router.isReady) {
      return;
    }
    const res = await VerifyResetRqst(router.query.reset);
    if(res.errors){
      setAccess(false);
      router.push({
        pathname: '/',
      });

    } else {
      setAccess(true);
    }

    
    // setAccess(true);

  }, [router.isReady, setAccess]);



    if (isLoadingProtected || !allowed) {
      return <PreloaderComp />
    }

  return (
    <RcoverAccount />
  )
}

// export const getServerSideProps = async (context) => {
//   const token = context.query.reset;
//   console.log(token);
//   console.log(context);

//   const res = await VerifyResetRqst(token);

//   const res = await VerifyResetRqst();




//   return { props: { res: "test" } };
// };
