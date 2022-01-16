// styles tagas
import { RecentOrdersContainer, Title, Table,
         Thead, Tr, Th, Tbody, ShowAll } from "./Style"
import { Data } from "./Data"
import Items from "./items/Items"

const RecentOrds = () => {
    return (
        <RecentOrdersContainer>
            <Title>Recent Orders</Title>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Poduct Id</Th>
                        <Th>Product Number</Th>
                        <Th>Payment</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Data?.map(({ id, productId, productName, payment, status}) => (
                        <Items
                            key={id}
                            id={id}
                            productId={productId}
                            productName={productName}
                            payment={payment}
                            status={status}
                        />
                    ))}
                </Tbody>
            </Table>
            <ShowAll>Show All</ShowAll>
        </RecentOrdersContainer>
    )
}

export default RecentOrds
