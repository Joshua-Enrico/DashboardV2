// styles tagas
import { RecentOrdersContainer, Title, Table,
         Thead, Tr, Th, Tbody, ShowAll } from "./Style"
import { Data } from "./Data"
import Items from "./items/User"

const UserList = () => {
    return (
        <RecentOrdersContainer>
            <Title>Recent Orders</Title>
            <Table>
                <Thead>
                    <Tr>
                        <Th>User</Th>
                        <Th>Email</Th>
                        <Th>Role</Th>
                        <Th>Status</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Data?.map(({ id, firstName, lastName, email, role, status}) => (
                        <Items
                            key={id}
                            id={id}
                            firstName={firstName}
                            lastName={lastName}
                            email={email}
                            role={role}
                            status={status}
                        />
                    ))}
                </Tbody>
            </Table>
            <ShowAll>Show All</ShowAll>
        </RecentOrdersContainer>
    )
}

export default UserList
