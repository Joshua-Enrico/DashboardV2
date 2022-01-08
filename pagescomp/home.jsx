import Head from 'next/head'
import { useSelector } from 'react-redux'
import SideBar from '../components/sidebar/SideBar'
import { MainContainer } from '../styles/Style'
import { ThemeProvider } from 'styled-components';


const Homepage = () => {

    const theme = useSelector((state) => state.theme.theme)
    return (
        <ThemeProvider theme={theme}>
        <div style={{ background: theme.Cbackground}}>
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
      </ThemeProvider>
    )
}

export default Homepage
