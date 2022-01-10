import { Update, ProfileImg, Img, Message, P, B, Small } from "./Style"

const Item = ({id , Username, Name, LastName,  Msg ,Date, UsrImg}) => {
    return (
        <Update>
            <ProfileImg>
                <Img src={UsrImg} />
            </ProfileImg>
            <Message>
                <P><B>{Name} {LastName}</B> made a {Msg}</P>
                <Small>{Date} Minutes Ago</Small>
            </Message>
        </Update>
    )
}

export default Item
