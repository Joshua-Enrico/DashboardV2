
import Index from '../pagescomp/Index/index';
import { store } from "../redux/Store";
import { useAuth   } from '../utils/auth1';
import { useRouter } from 'next/router';
import { FaBullseye } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import PreloaderComp from '../components/preloader/preloaderComp';


export default function Home() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if(!isLoading && isAuthenticated) {
      router.push({
        pathname: "/home",
      })
    }

  }, [isAuthenticated, isLoading])

  if (isLoading || isAuthenticated) {
    return <PreloaderComp />
  };

  return (
    <Index />
  )
}

// export async function getInitialProps () {
//   console.log("hello world")
  // const res = IndexValidation()
  // const state = store.getState();
  // console.log(state)
  // if (res.auth === true) {
  //   return res.response
  // }
  // return {
  //   props: {},
  // }
  

//  }

// Home.getInitialProps = async () => {
//   console.log("Hello world")
//   const state = store.getState();
//   console.log(state.user)
//   return {
//     props: {},
//   }
// }


 // unsued useEffect
  // const router = useRouter();
  // const {} = IndexValidation();
  // useLayoutEffect(() => {
  //   if (res.auth) {
  //     router.push({
  //       pathname: "/home",
  //   })
  //   }
  // }, [router])
  // if (isLoading || !res.auth) {
  //   return <div>Loading...</div>
  // }