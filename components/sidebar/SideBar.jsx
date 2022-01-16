
// Styles clases for this component
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

// importing reducers
import { ThemeProvider } from 'styled-components';
import { handleActive, RemoveId, SafeActiveId, SafeSectId } from "../../redux/HandleRedux"

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


    // handle active pages container vars
    const idList = useSelector((state) => state.handleactive.idList);
    const [user , setUser] = useState(null);
    const currentUser = useSelector((state) => state.user.currentUser);
    useEffect(() => {

        if (currentUser) {
            setUser(true);
        }

        if (user === null) {
            const element = document.getElementById("SideBar");
            element.classList.add("hide");
        } else {
            const element = document.getElementById("SideBar");
            element.classList.remove("hide");
        }
    




        if (idList != {} && idList != undefined) {
            let key;
            for (key in idList) {
                let element = document.getElementById(key);
                element.classList.add("active");
            }
        };


    }, [user]);
    // handle active pages container func
    const HandleActive = (e, id) => {
        let dictl = false;
        if (idList !== undefined) {
            dictl = Object.keys(idList).length
        }
        const element = document.getElementById(id);
        if (element.classList.contains("active")) {

            const element = document.getElementById(id);
            element.classList.remove("active");
            dispatch(RemoveId(id))

        } else {
            if ((idList != {} && idList != undefined) && (dictl !== false && dictl > 1)) {
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



    // handle active page func
    const ActivePage = (e, id, sectionId) => {
        // if ( activeId !== id && SectId !== undefined) {
        //     if (sectionId !== SectId) {
        //         const prevActSect = document.getElementById(SectId); // get previous active section
        //         prevActSect.classList.remove("active"); // remove active class from previous section
        //     }
        //     if (undefined !== activeId) {
        //     const prevActiveElement = document.getElementById(activeId); // get previos  active element
        //     prevActiveElement.classList.remove("active"); // remove the active class from the prevActive element
        //     }
        // }
        // // set the new active section
        // const activeStc = document.getElementById(sectionId);
        // activeStc.classList.add("active");
        // dispatch(SafeSectId(sectionId))
        // // set the new active element
        // const activeElement = document.getElementById(id); // get the active element
        // activeElement.classList.add("active"); // add the active class to the active element
        // dispatch(SafeActiveId(id))
    }
    const SpecialLink = (e, sectionId) => {
        //activeId
        // if ((sectionId !== SectId &&  SectId !== undefined) && activeId !== undefined) {
        //     const prevActSect = document.getElementById(SectId) // get previous active section
        //     prevActSect.classList.remove("active"); // remove active class from previous section
        //     const prevActiveElement = document.getElementById(activeId)
        //     prevActiveElement.classList.remove("active") // remove the active class from the prevActive element
        // }
        // // set the new active section
        // const activeStc = document.getElementById(sectionId)
        // activeStc.classList.add("active")
        // console.log(sectionId)
        // dispatch(SafeSectId(sectionId))
        // dispatch(SafeActiveId(undefined))
    }



    return (
        <ThemeProvider theme={theme}>
            <MainContainer id="SideBar" className="Sdbr">
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
                        <Section id="Sect1" onClick={(e) => HandleActive(e, "Dashboard")}>
                            <MdSpaceDashboard />
                            <H3>Dashboard</H3>
                        </Section>

                        <Pages id="Dashboard">
                            <Link href="/home">
                                <Page id="Home" onClick={(e) => ActivePage(e, "Home", "Sect1")}>
                                    <FiHome />
                                    <LinkPage>Home</LinkPage>
                                </Page>
                            </Link>
                            <Page id="Analytics" onClick={(e) => ActivePage(e, "Analytics", "Sect1")}>
                                <MdOutlineAnalytics />
                                <LinkPage>Analytics</LinkPage>
                            </Page>
                            <Page id="Sales" onClick={(e) => ActivePage(e, "Sales", "Sect1")}>
                                <MdOutlineAttachMoney />
                                <LinkPage>Sales</LinkPage>
                            </Page>
                        </Pages>
                    </RoutContainer>
                    <RoutContainer>
                        <Section id="Sect2" onClick={(e) => HandleActive(e, "Quick")}>
                            <BiStats />
                            <H3>Quick Menu</H3>
                        </Section>
                        <Pages id="Quick">
                            <Page id="Users" onClick={(e) => ActivePage(e, "Users", "Sect2")}>
                                <RiUserSettingsFill />
                                <LinkPage>Users</LinkPage>
                            </Page>
                            <Page id="Products" onClick={(e) => ActivePage(e, "Products", "Sect2")}>
                                <BsShop />
                                <LinkPage>Products</LinkPage>
                            </Page>
                            <Page id="Transactions" onClick={(e) => ActivePage(e, "Transactions", "Sect2")}>
                                <RiSecurePaymentFill />
                                <LinkPage>Transactions</LinkPage>
                            </Page>
                            <Page id="Reports" onClick={(e) => ActivePage(e, "Reports", "Sect2")}>
                                <HiDocumentReport />
                                <LinkPage>Reports</LinkPage>
                            </Page>
                        </Pages>
                    </RoutContainer>
                    <RoutContainer>
                        <Section id="Sect3" onClick={(e) => HandleActive(e, "Notifications")}>
                            <FaMailBulk />
                            <H3>Notifications</H3>
                            <Nmessage>3</Nmessage>
                        </Section>
                        <Pages id="Notifications">
                            <Page id="Mail" onClick={(e) => ActivePage(e, "Mail", "Sect3")}>
                                <AiOutlineMail />
                                <LinkPage>Mail</LinkPage>
                            </Page>
                            <Page id="Feedback" onClick={(e) => ActivePage(e, "Feedback", "Sect3")}>
                                <VscFeedback />
                                <LinkPage>Feedback</LinkPage>
                            </Page>
                            <Page id="Messages" onClick={(e) => ActivePage(e, "Messages", "Sect3")}>
                                <SiGooglechat />
                                <LinkPage>Messages</LinkPage>
                            </Page>
                        </Pages>
                    </RoutContainer>
                    <RoutContainer>
                        <Section id="Sect4" onClick={(e) => HandleActive(e, "Staff")}>
                            <BsPeopleFill />
                            <H3>Staff</H3>
                        </Section>
                        <Pages id="Staff">
                            <Link href="/staff/manage" >
                                <Page id="Manage" onClick={(e) => ActivePage(e, "Manage", "Sect4")}>
                                    <MdManageAccounts />
                                    <LinkPage>Manage</LinkPage>
                                </Page>
                            </Link>
                            <Page id="Anltcs" onClick={(e) => ActivePage(e, "Anltcs", "Sect4")}>
                                <SiGoogleanalytics />
                                <LinkPage>Analytics</LinkPage>
                            </Page>
                            <Page id="Rep" onClick={(e) => ActivePage(e, "Rep", "Sect4")}>
                                <GoReport />
                                <LinkPage>Reports</LinkPage>
                            </Page>
                        </Pages>
                    </RoutContainer>
                    <RoutContainer>
                        <Link href="/settings" >
                            <Section id="Sect5" onClick={(e) => SpecialLink(e, "Sect5")}>
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
