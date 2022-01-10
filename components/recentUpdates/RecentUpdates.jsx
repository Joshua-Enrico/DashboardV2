import Item from "./item/Item"
import { RecentUpdatesContainer, Title, Updates} from "./Style"
import { Data } from "./Data"

const RecentUpdates = () => {
    console.log(Data)
    return (
        <RecentUpdatesContainer>
            <Title>Recent Updates</Title>
            <Updates>
                {Data?.map(({id , Username, Name, LastName,  Msg ,Date, UsrImg}) => (
                    <Item
                    key={id}
                    Username={Username}
                    Name={Name}
                    LastName={LastName}
                    Msg={Msg}
                    Date={Date}
                    UsrImg={UsrImg}
                    />
                ))}
            </Updates>
        </RecentUpdatesContainer>
    )
}

export default RecentUpdates
