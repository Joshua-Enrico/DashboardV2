import { TopRightContainer, Button, ThemeToggle,
        Profile, Info, P, B, Small, UserPhoto ,Photo } from "./Style"
import { CgMenu } from 'react-icons/cg'
import { BiSun, BiMoon } from 'react-icons/bi'
import { SwitchTheme } from '../../redux/ThemeRedux';
import { useDispatch, useSelector } from "react-redux";




const TopRight = () => {
    const dispatch = useDispatch();
    const thememode = useSelector((state) => state.theme.theme.mode);
    console.log(thememode)
    const Toggle = (e, id) => {

        const element = document.getElementById(id);
        element.classList.add("active");
        
    };

    return (
        <TopRightContainer>
            <Button>
                <CgMenu onClick={(e) => Toggle(e, "SideBar")}/>
            </Button>
            <ThemeToggle onClick={() => dispatch(SwitchTheme())}>
                {thememode === "light" ? <BiSun className="active"/> : <BiSun/>}
                {thememode === "dark" ? <BiMoon className="active"/> : <BiMoon/>}

            </ThemeToggle>
            <Profile>
                <Info>
                    <P>He, <B>Joshua</B></P>
                    <Small>Admin</Small>
                </Info>
                <UserPhoto>
                    <Photo src="ProfileImg.png" />
                </UserPhoto>
            </Profile>
        </TopRightContainer>
    )
}

export default TopRight
