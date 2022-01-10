import { Tr, Td } from "./Style"

const Items = ({ id, productId, productName, payment, status}) => {
    return (
        <Tr>
            <Td>{productId}</Td>
            <Td>{productName}</Td>
            <Td>{payment}</Td>
            <Td status={status} className={status}>{status}</Td>
            <Td >Details</Td>
        </Tr>
    )
}

export default Items
