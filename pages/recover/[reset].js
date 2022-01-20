
import RcoverAccount from '../../pagescomp/recover/index';
import { useAuth } from '../../utils/auth1';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PreloaderComp from '../../components/preloader/preloaderComp';
import { VerifyResetRqst } from '../../apiGraphql/Apicalls';
export default function Recover() {
  const router = useRouter();
  const { isLoadingProtected, setAccess, allowed } = useAuth();


  const [id, setId] = useState('');
  const [name, setName] = useState('');

  useEffect(async () => {
    if (!router.isReady) {
      return;
    }
    if (allowed) {
      console.log("allowed")
      return;
    }
    const res = await VerifyResetRqst(router.query.reset)
      .then(res => {
        return res
      })
      .catch(err => {
      });
    if (res) {
      if (res.errors) {
        console.log("error")
        setAccess(false);
        router.push({
          pathname: '/',
        });

      } else {
        console.log(res.data.resetValidate)
        setId(res.data.resetValidate.id);
        setName(res.data.resetValidate.name);
        setAccess(true);
      }
    } else {
      router.push({
        pathname: '/',
      });
    }



    // setAccess(true);

  }, [router.isReady, setAccess, allowed]);



  if (isLoadingProtected || !allowed) {
    return <PreloaderComp />
  }

  return (
    <RcoverAccount
      name={name}
      id={id}

    />
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
