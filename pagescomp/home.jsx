import Head from 'next/head'
import { useSelector } from 'react-redux'
import SideBar from '../components/sidebar/SideBar'
import Insights from '../components/insights/Insights'
import { Main, MainContainer, Title, RightSide } from '../styles/Style'
import { ThemeProvider } from 'styled-components';
import Date from '../components/date/Date';
import RecentOrds from '../components/recentOrders/RecentOrds'
import  TopRight  from '../components/topright/TopRight'
import RecentUpdates from '../components/recentUpdates/RecentUpdates'
import SalesAnalytics from '../components/salesAnalytics/SalesAnalytics'


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
          <Main>
            <Title>Dashboard</Title>
            <Date/>
            <Insights/>
            <RecentOrds/>
          </Main>
          <RightSide>
              <TopRight/>
              <RecentUpdates/>
              <SalesAnalytics/>
          </RightSide>
        </MainContainer>
      </div>
      </ThemeProvider>
    )
}

export default Homepage
