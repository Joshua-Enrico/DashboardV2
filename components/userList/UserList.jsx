import React from 'react';
import { Amount, Info, ItemsContainer, Logo, MainContainer, Title } from './Style';
import { BsFillPersonCheckFill, BsFillPersonFill, BsFillPersonPlusFill, BsFillPersonXFill } from 'react-icons/bs';

const UserList = () => {
    return (
    <MainContainer>
        <ItemsContainer>
            <Title>
                <Amount>3200</Amount>
                <Info>Total Users</Info>
            </Title>
            <Logo className='total'>
                <BsFillPersonFill/>
            </Logo>
        </ItemsContainer>
        <ItemsContainer>
            <Title>
                <Amount>1200</Amount>
                <Info>Paid Users</Info>
            </Title>
            <Logo className='paid'>
                <BsFillPersonPlusFill/>
            </Logo>
        </ItemsContainer>
        <ItemsContainer>
            <Title>
                <Amount>200</Amount>
                <Info>Active Users</Info>
            </Title>
            <Logo className='activeusrs'>
                <BsFillPersonCheckFill/>
            </Logo>
        </ItemsContainer>
        <ItemsContainer>
            <Title>
                <Amount>2200</Amount>
                <Info>Pending Users</Info>
            </Title>
            <Logo className='pendings'>
                <BsFillPersonXFill/>
            </Logo>
        </ItemsContainer>


    </MainContainer>
    )
};

export default UserList;
