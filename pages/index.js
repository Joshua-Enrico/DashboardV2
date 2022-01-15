
import Index from '../pagescomp/Index/index';
import { store } from "../redux/Store";
import { IndexValidation } from '../utils/auth';
import { useRouter } from 'next/router';
import { FaBullseye } from 'react-icons/fa';
import { useState } from 'react';

export default function Home() {

  const res = IndexValidation();
  const router = useRouter();
  if (res.auth) {
    router.push({
      pathname: "/home",
  })
    
  }  
  return (
    <Index />
  )
}

// export async function getServerSideProps() {
//   const res = IndexValidation()
//   const state = store.getState();
//   console.log(state.user)
//   if (res.auth === true) {
//     return res.response
//   }
//   return {
//     props: {},
//   }
  

// }