// Styles clases for this component
import { ThemeProvider } from 'styled-components';


import {
    MainContainer, TopBar, Logo, Image, H2, Span, Close,
    SideBarNav, LinkPage, H3, Section, Pages, Page, RoutContainer,
    Nmessage
} from "./Style";
//icons
import { MdClose, MdSpaceDashboard, MdOutlineAttachMoney, MdOutlineAnalytics, MdManageAccounts } from 'react-icons/md';
import { BsCircle, BsPeopleFill } from 'react-icons/bs';
import { BiStats } from 'react-icons/bi';
import { AiOutlineMail, AiOutlineSetting } from 'react-icons/ai';
import { HiOutlineLogout, HiDocumentReport } from 'react-icons/hi';
import { RiUserSettingsFill, RiSecurePaymentFill } from 'react-icons/ri';
import { BsShop } from 'react-icons/bs';
import { GoReport } from 'react-icons/go';
import { FiHome } from 'react-icons/fi';
import { FaMailBulk } from 'react-icons/fa';
import { VscFeedback } from 'react-icons/vsc';
import { SiGooglechat, SiGoogleanalytics } from 'react-icons/si';

//

// importing reducers
import { handleActive, RemoveId } from "../../redux/HandleRedux"


//handle click outside of the sidebar
import { useClickAway } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

// nextjs link
import Link from 'next/link'


const SideBar = () => {
    const dispatch = useDispatch();
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


    // handle active pages container

    const idList = useSelector((state) => state.handleactive.idList);

    useEffect(() => {
        if (idList != {} && idList != undefined) {
            let key;
            for (key in idList) {
                let element = document.getElementById(key);
                element.classList.add("active");
            }
        }
    }, []);

    const HandleActive = (e, id) => {

        const dictl = Object.keys(idList).length
        const element = document.getElementById(id);
        if (element.classList.contains("active")) {

            const element = document.getElementById(id);
            element.classList.remove("active");
            dispatch(RemoveId(id))
        } else {
            if ((idList != {} && idList != undefined) && dictl > 1) {
                let key;

                for (let k in idList) {
                    key = k;
                    break
                }
                const prev = document.getElementById(key);
                prev.classList.remove("active");
                dispatch(RemoveId(key))
            }
            const element1 = document.getElementById(id);
            element1.classList.add("active");
            dispatch(handleActive(id))


        }

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
                        <Section onClick={(e) => HandleActive(e, "Dashboard")}>
                            <MdSpaceDashboard />
                            <H3>Dashboard</H3>
                        </Section>

                        <Pages id="Dashboard">
                            <Page>
                                <FiHome />
                                <LinkPage>Home</LinkPage>
                            </Page>
                            <Page>
                                <MdOutlineAnalytics />
                                <LinkPage>Analytics</LinkPage>
                            </Page>
                            <Page>
                                <MdOutlineAttachMoney />
                                <LinkPage>Sales</LinkPage>
                            </Page>
                        </Pages>
                    </RoutContainer>
                    <RoutContainer>
                        <Section onClick={(e) => HandleActive(e, "Quick")}>
                            <BiStats />
                            <H3>Quick Menu</H3>
                        </Section>
                        <Pages id="Quick">
                            <Page>
                                <RiUserSettingsFill />
                                <LinkPage>Users</LinkPage>
                            </Page>
                            <Page>
                                <BsShop />
                                <LinkPage>Products</LinkPage>
                            </Page>
                            <Page>
                                <RiSecurePaymentFill />
                                <LinkPage>Transactions</LinkPage>
                            </Page>
                            <Page>
                                <HiDocumentReport />
                                <LinkPage>Reports</LinkPage>
                            </Page>
                        </Pages>
                    </RoutContainer>
                    <RoutContainer>
                        <Section onClick={(e) => HandleActive(e, "Notifications")}>
                            <FaMailBulk />
                            <H3>Notifications</H3>
                            <Nmessage>3</Nmessage>
                        </Section>
                        <Pages id="Notifications">
                            <Page>
                                <AiOutlineMail />
                                <LinkPage>Mail</LinkPage>
                            </Page>
                            <Page>
                                <VscFeedback />
                                <LinkPage>Feedback</LinkPage>
                            </Page>
                            <Page>
                                <SiGooglechat />
                                <LinkPage>Messages</LinkPage>
                            </Page>
                        </Pages>
                    </RoutContainer>
                    <RoutContainer>
                        <Section onClick={(e) => HandleActive(e, "Staff")}>
                            <BsPeopleFill />
                            <H3>Staff</H3>
                        </Section>
                        <Pages id="Staff">
                            <Page>
                                <MdManageAccounts />
                                <LinkPage>Manage</LinkPage>
                            </Page>
                            <Page>
                                <SiGoogleanalytics />
                                <LinkPage>Analytics</LinkPage>
                            </Page>
                            <Page>
                                <GoReport />
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
