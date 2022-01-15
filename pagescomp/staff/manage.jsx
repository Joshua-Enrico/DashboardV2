import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { Main, MainContainer, Title, RightSide, GlobalStyle } from '../../styles/Style'
import { ThemeProvider } from 'styled-components';
import TopRight from '../../components/topright/TopRight'
import { useEffect } from 'react'
import { SafeActiveId, SafeSectId } from '../../redux/HandleRedux'
import { useRouter } from 'next/router'
import { VerifiSession } from '../../utils/auth'





const Manage = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  // VerifiSession(router)

  const theme = useSelector((state) => state.theme.theme)
  const SectId = useSelector((state) => state.handleactive.SectId);
  const activeId = useSelector((state) => state.handleactive.activeId);



  useEffect(() => {
    if (SectId !== undefined && SectId !== "Sect4") {
      console.log("removing active class")
      document.getElementById(SectId).classList.remove("active");
    }
    if (activeId !== undefined) {
      document.getElementById(activeId).classList.remove('active')
    }
    document.getElementById("Sect4").classList.add('active')
    document.getElementById("Manage").classList.add('active')

    dispatch(SafeSectId("Sect4"))
    dispatch(SafeActiveId("Manage"))
      
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
            MANAGE
          </Main>
          <RightSide>
            <TopRight />

          </RightSide>
        </MainContainer>
      </div>
    </ThemeProvider>
  )
}

export default Manage
