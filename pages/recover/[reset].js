
import RcoverAccount from '../../pagescomp/recover/index';
import { store } from "../../redux/Store";
import { useAuth } from '../../utils/auth1';
import { useRouter } from 'next/router';
import { FaBullseye } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import PreloaderComp from '../../components/preloader/preloaderComp';
import { VerifyResetRqst } from '../../apiGraphql/Apicalls';
const jwt = require('jsonwebtoken');
const CryptoJS = require("crypto-js");
export default function Recover() {
  const router = useRouter();
  

  console.log(router.query.reset);
  async function VerifyReset(token) {
    const res = await VerifyResetRqst(token);
    console.log(res);
  }
  VerifyReset(router.query.reset)

  

  //   const { isAuthenticated, isLoading } = useAuth();

  //   useEffect(() => {
  //     if(!isLoading && isAuthenticated) {
  //       router.push({
  //         pathname: "/home",
  //       })
  //     }

  //   }, [isAuthenticated, isLoading])

  //   if (isLoading || isAuthenticated) {
  //     return <PreloaderComp />
  //   };
  // console.log(router.query.reset);
  // const DecodedToken = jwt.decode(router.query.reset);
  // console.log(DecodedToken);

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
