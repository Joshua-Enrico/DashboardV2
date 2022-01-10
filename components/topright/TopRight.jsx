import { TopRightContainer, Button, ThemeToggle,
        Profile, Info, P, B, Small, UserPhoto ,Photo } from "./Style"
import { CgMenu } from 'react-icons/cg'
import { BiSun, BiMoon } from 'react-icons/bi'





const TopRight = () => {
    return (
        <TopRightContainer>
            <Button>
                <CgMenu />
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
