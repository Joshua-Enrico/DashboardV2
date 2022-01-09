// Styles clases for this component
import { ThemeProvider } from 'styled-components';
import { MainContainer, TopBar, Logo, Image, H2, Span, Close,
         SideBarNav, Link, H3, Section, Pages, Page, RoutContainer,
          Nmessage } from "./Style";
//icons
import { MdClose, MdSpaceDashboard } from 'react-icons/md';
import { BsCircle, BsPeopleFill } from 'react-icons/bs';
import { BiStats } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineLogout } from 'react-icons/hi';

// handle theme with redux
import { useSelector, useDispatch } from 'react-redux';
import { lightTheme, darkTheme } from '../../styles/Theme';
import { SwitchTheme } from '../../redux/ThemeRedux';


const SideBar = () => {
    const theme = useSelector((state) => state.theme.theme)
    const dispatch = useDispatch()



    return (
        <ThemeProvider theme={theme}>
            <MainContainer>
                <TopBar>
                    <Logo onClick={() => dispatch(SwitchTheme())}>
                        <Image src="dashboard.png" alt="" />
                        <H2>SIM<Span>PLE</Span></H2>
                    </Logo>
                    <Close>
                        <MdClose />
                    </Close>
                </TopBar>
                <SideBarNav>
                    <RoutContainer>
                        <Section className="active">
                            <MdSpaceDashboard />
                            <H3>Dashboard</H3>
                        </Section>
                        <Pages>
                            <Page>
                                <BsCircle />
                                <Link>Home</Link>
                            </Page>
                            <Page>
                                <BsCircle />
                                <Link>Analytics</Link>
                            </Page>
                            <Page>
                                <BsCircle />
                                <Link>Sales</Link>
                            </Page>
                        </Pages>
                    </RoutContainer>
                    <RoutContainer>
                        <Section >
                            <BiStats />
                            <H3>Quick Menu</H3>
                        </Section>
                        <Pages>
                            <Page>
                                <BsCircle />
                                <Link>Users</Link>
                            </Page>
                            <Page>
                                <BsCircle />
                                <Link>Products</Link>
                            </Page>
                            <Page>
                                <BsCircle />
                                <Link>Transactions</Link>
                            </Page>
                            <Page>
                                <BsCircle />
                                <Link>Reports</Link>
                            </Page>
                        </Pages>
                    </RoutContainer>
                    <RoutContainer>
                        <Section >
                            <AiOutlineMail />
                            <H3>Notifications</H3>
                            <Nmessage>3</Nmessage>
                        </Section>
                        <Pages>
                            <Page>
                                <BsCircle />
                                <Link>Mail</Link>
                            </Page>
                            <Page>
                                <BsCircle />
                                <Link>Feedback</Link>
                            </Page>
                            <Page>
                                <BsCircle />
                                <Link>Messages</Link>
                            </Page>
                        </Pages>
                    </RoutContainer>
                    <RoutContainer>
                        <Section >
                            <BsPeopleFill />
                            <H3>Staff</H3>
                        </Section>
                        <Pages>
                            <Page>
                                <BsCircle />
                                <Link>Manage</Link>
                            </Page>
                            <Page>
                                <BsCircle />
                                <Link>Analytics</Link>
                            </Page>
                            <Page>
                                <BsCircle />
                                <Link>Reports</Link>
                            </Page>
                        </Pages>
                    </RoutContainer>
                    <RoutContainer>
                        <Section >
                            <HiOutlineLogout />
                            <H3>Lgout</H3>
                        </Section>
                    </RoutContainer>
                </SideBarNav>
            </MainContainer>
        </ThemeProvider>
    )
}

export default SideBar
