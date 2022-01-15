import {
    TopRightContainer, Button, ThemeToggle,
    Profile, Info, P, B, Small, UserPhoto, Photo, DropDown, Items, DropDownContainer
} from "./Style"
import { CgMenu } from 'react-icons/cg'
import { BiSun, BiMoon } from 'react-icons/bi'
import { SwitchTheme } from '../../redux/ThemeRedux';
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineLogout } from 'react-icons/hi';
import { AiOutlineSetting } from 'react-icons/ai';
import { GiSettingsKnobs } from 'react-icons/gi';
import { useRef } from "react";
import { useClickAway } from 'react-use';
import { useRouter } from 'next/router';
import { Logout } from "../../utils/auth"
// nextjs link
import Link from 'next/link'


const TopRight = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const thememode = useSelector((state) => state.theme.theme.mode);
    const user =  useSelector((state) => state.user.currentUser);
    const Toggle = (e, id) => {

        const element = document.getElementById(id);
        element.classList.add("active");

    };

    // handle dropdown
    let active = false;
    const DropDownTgl = (e, id) => {
        const element = document.getElementById(id);
        if (active) {
            element.classList.remove("active");
            active = false;
        } else {
            element.classList.add("active");
            active = true;
        }

    }
    // handle click outside of down menu
    const ref = useRef(null);
    useClickAway(ref, () => {
        const element = document.getElementById("DropCt");
        element.classList.remove("active");
        active = false;
    });

    return (
        <TopRightContainer>
            <Button>
                <CgMenu onClick={(e) => Toggle(e, "SideBar")} />
            </Button>
            <ThemeToggle onClick={() => dispatch(SwitchTheme())}>
                {thememode === "light" ? <BiSun className="active" /> : <BiSun />}
                {thememode === "dark" ? <BiMoon className="active" /> : <BiMoon />}

            </ThemeToggle>
            <Profile ref={ref}>
                <Info>
                    <P>He, {user?.firstName}<B></B></P>
                    <Small>{user?.role}</Small>
                </Info>
                <UserPhoto onClick={(e) => DropDownTgl(e, "DropCt")}>
                    <Photo src="ProfileImg.png" />
                </UserPhoto>
                <DropDownContainer ref={ref} id="DropCt">
                    <DropDown>
                        <Items>
                            <GiSettingsKnobs />
                            Theme
                        </Items>
                        <Link href="/settings">
                        <Items>
                            <AiOutlineSetting />
                            Setting
                        </Items>
                        </Link>
                            <Items onClick={() => Logout(dispatch, router)}>
                                <HiOutlineLogout />
                                Logout
                            </Items>
                    </DropDown>
                </DropDownContainer>
            </Profile>
        </TopRightContainer>
    )
}

export default TopRight
