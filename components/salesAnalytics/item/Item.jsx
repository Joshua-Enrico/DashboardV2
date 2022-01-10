import { ItemDiv, Icon, RightDiv, Info, H3, H5, Small, Qty } from "./Style"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiShoppingBag } from 'react-icons/gi'
import { IoIosPeople } from 'react-icons/io'



const Item = ({ id, Title, Percentage, Value  }) => {
    const Type = Title.split(/(\s+)/)
    const Val = Percentage.split("")
    let Name = ""

    if (Val[0] === "-"){
         Name = "negative"
    } else {
         Name = "positive"
    }
    
    return (
        <ItemDiv>
            <Icon className={Name + " " +  Type[0]}>
                {Type[0] === "ONLINE" && <AiOutlineShoppingCart />}
                {Type[0] === "OFFLINE" && <GiShoppingBag />}
                {Type[0] === "NEW" && <IoIosPeople />}
            </Icon>
            <RightDiv>
                <Info>
                    <H3>{Title}</H3>
                    <Small>Last 24 Hours</Small>
                </Info>
                {Val[0] === "-" ? <H5 className="negative">{Percentage}%</H5> : <H5 className="positive" >{Percentage}%</H5>}
                <Qty>{Value}</Qty>
            </RightDiv>
        </ItemDiv>
    )
}

export default Item
