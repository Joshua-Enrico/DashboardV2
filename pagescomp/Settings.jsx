import Head from 'next/head'
// style classes
import { Main, MainContainer, Title, RightSide, GlobalStyle } from '../styles/Style'
// persist store and reducers
import { useDispatch, useSelector } from 'react-redux'
import { SafeActiveId, SafeSectId } from '../redux/HandleRedux'
// react lib
import { useEffect } from 'react'
// components
import { ThemeProvider } from 'styled-components';
import TopRight from '../components/topright/TopRight'






const Settings = () => {
  const dispatch = useDispatch();


  const theme = useSelector((state) => state.theme.theme)
  const SectId = useSelector((state) => state.handleactive.SectId);
  const activeId = useSelector((state) => state.handleactive.activeId);



  useEffect(() => {
    if (SectId !== undefined && SectId !== "Sect5") {
      document.getElementById(SectId).classList.remove("active");
      document.getElementById(activeId).classList.remove('active')
    }
    if (activeId !== undefined) {
      document.getElementById(activeId).classList.remove('active')
    }
    document.getElementById("Sect5").classList.add('active')
    dispatch(SafeSectId("Sect5"))
    dispatch(SafeActiveId(undefined))
      
  }, [])

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
            <Title>Settings</Title>
          </Main>
          <RightSide>
            <TopRight />

          </RightSide>
        </MainContainer>
      </div>
    </ThemeProvider>
  )
}

export default Settings
