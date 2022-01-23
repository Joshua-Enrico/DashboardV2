import { Tr, Td } from "./Style"
import { BsThreeDotsVertical } from 'react-icons/bs';


const Items = ({ id, firstName, lastName, email,role, status}) => {


    
    return (
        <Tr>
            <Td>{firstName} {lastName}</Td>
            <Td>{email}</Td>
            <Td>{role}</Td>
            <Td status={status} className={status}>{status}</Td>
            <Td ><BsThreeDotsVertical/></Td>
        </Tr>
    )
}

export default Items
