import Head from 'next/head'
// style classes
import { Main, MainContainer, Title, RightSide, GlobalStyle } from '../styles/Style'
// persist store and reducers
import { useDispatch, useSelector } from 'react-redux'
import { SafeActiveId, SafeSectId } from '../redux/HandleRedux'
// react lib
import { useEffect } from 'react'
// components
import Insights from '../components/insights/Insights'
import { ThemeProvider } from 'styled-components';
import Date from '../components/date/Date';
import RecentOrds from '../components/recentOrders/RecentOrds'
import TopRight from '../components/topright/TopRight'
import RecentUpdates from '../components/recentUpdates/RecentUpdates'
import SalesAnalytics from '../components/salesAnalytics/SalesAnalytics'



const Homepage = () => {




  const dispatch = useDispatch();
  const SectId = useSelector((state) => state.handleactive.SectId);
  const activeId = useSelector((state) => state.handleactive.activeId);


  // if (user === null) {
  //   console.log("need to login")
  //   router.push({
  //     pathname: "/",
  //     query: { returnUrl: router.asPath }
  //   })
  // } 

  

  useEffect(() => {
    if (SectId !== undefined && SectId !== "Sect1") {
      document.getElementById(SectId).classList.remove("active");
    }
    if (activeId !== undefined) {
      document.getElementById(activeId).classList.remove('active')
    }
    document.getElementById("Sect1").classList.add('active')
    document.getElementById("Home").classList.add('active')

    dispatch(SafeSectId("Sect1"))
    dispatch(SafeActiveId("Home"))
      
  }, [])

  const theme = useSelector((state) => state.theme.theme)

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head >
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
          <title>Home</title>
          <meta name="description" content="Home" />
          <link rel="icon" href="/IconPage.png" />
        </Head>
        <GlobalStyle />
        <MainContainer>
          <div></div>
          <Main>
            <Title>Dashboard</Title>
            <Date />
            <Insights />
            <RecentOrds />
          </Main>
          <RightSide>
            <TopRight />
            <RecentUpdates />
            <SalesAnalytics />
          </RightSide>
        </MainContainer>
      </div>
    </ThemeProvider>
  )
}

export default Homepage

// Homepage.getInitialProps = async (context) => {
   

// }

// export async function getStaticProps() {
//   // Code will go here

// }