// Styles clases for this component
import { ThemeProvider } from 'styled-components';
import {
    MainContainer, TopBar, Logo, Image, H2, Span, Close,
    SideBarNav, LinkPage, H3, Section, Pages, Page, RoutContainer,
    Nmessage
} from "./Style";
//icons
import { MdClose, MdSpaceDashboard } from 'react-icons/md';
import { BsCircle, BsPeopleFill } from 'react-icons/bs';
import { BiStats } from 'react-icons/bi';
import { AiOutlineMail, AiOutlineSetting } from 'react-icons/ai';
import { HiOutlineLogout } from 'react-icons/hi';

import { useClickAway } from 'react-use';

import { useSelector } from 'react-redux';
import { useRef } from 'react';

// nextjs link
import Link from 'next/link'


const SideBar = () => {

    // handle click outside of the sidebar
    const ref = useRef(null);
    useClickAway(ref, () => {
        const element = document.getElementById("SideBar");
        element.classList.remove("active");
    });

    const theme = useSelector((state) => state.theme.theme)

    const Toggle = (e, id) => {

        const element = document.getElementById(id);
        element.classList.remove("active");

    }

    return (
        <ThemeProvider theme={theme}>
            <MainContainer id="SideBar">
                <TopBar>
                    <Logo>
                        <Image src="dashboard.png" alt="" />
                        <H2>SIM<Span>PLE</Span></H2>
                    </Logo>
                    <Close>
                        <MdClose onClick={(e) => Toggle(e, "SideBar")} />
                    </Close>
                </TopBar>
                <SideBarNav ref={ref}>
                    <RoutContainer>
                        <Link href="/" >
                            <Section className="active">
                                <MdSpaceDashboard />
                                <H3>Dashboard</H3>
                            </Section>
                        </Link>
                        <Pages>
                            <Page>
                                <BsCircle />
                                <LinkPage>Home</LinkPage>
                            </Page>
                            <Page>
                                <BsCircle />
                                <LinkPage>Analytics</LinkPage>
                            </Page>
                            <Page>
                                <BsCircle />
                                <LinkPage>Sales</LinkPage>
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
                                <LinkPage>Users</LinkPage>
                            </Page>
                            <Page>
                                <BsCircle />
                                <LinkPage>Products</LinkPage>
                            </Page>
                            <Page>
                                <BsCircle />
                                <LinkPage>Transactions</LinkPage>
                            </Page>
                            <Page>
                                <BsCircle />
                                <LinkPage>Reports</LinkPage>
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
                                <LinkPage>Mail</LinkPage>
                            </Page>
                            <Page>
                                <BsCircle />
                                <LinkPage>Feedback</LinkPage>
                            </Page>
                            <Page>
                                <BsCircle />
                                <LinkPage>Messages</LinkPage>
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
                                <LinkPage>Manage</LinkPage>
                            </Page>
                            <Page>
                                <BsCircle />
                                <LinkPage>Analytics</LinkPage>
                            </Page>
                            <Page>
                                <BsCircle />
                                <LinkPage>Reports</LinkPage>
                            </Page>
                        </Pages>
                    </RoutContainer>
                    <RoutContainer>
                        <Link href="/settings" >
                        <Section >
                                <AiOutlineSetting />
                                <H3>Settings</H3>
                        
                        </Section>
                        </Link>
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
