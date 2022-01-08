import Head from 'next/head'
import Image from 'next/image'
import SideBar from '../components/sidebar/SideBar';
import styles from '../styles/Home.module.css'
import { MainContainer } from "../styles/Style";
import { GlobalCssVr } from "../styles/Colors";

export default function Home() {
  return (
    <div style={{ background: GlobalCssVr.Cbackground}}>
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <SideBar />
      </MainContainer>
    </div>
  )
}
