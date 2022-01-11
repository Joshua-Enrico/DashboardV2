import { TopRightContainer, Button, ThemeToggle,
        Profile, Info, P, B, Small, UserPhoto ,Photo } from "./Style"
import { CgMenu } from 'react-icons/cg'
import { BiSun, BiMoon } from 'react-icons/bi'





const TopRight = () => {

    const Toggle = (e, id) => {

        const element = document.getElementById(id);
        element.classList.add("active");
        
    }

    return (
        <TopRightContainer>
            <Button>
                <CgMenu onClick={(e) => Toggle(e, "SideBar")}/>
            </Button>
            <ThemeToggle>
                <BiSun className="active"/>
                <BiMoon />
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
