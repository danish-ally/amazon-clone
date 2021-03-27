import React from 'react'
import styled from 'styled-components'
import Logo from './img/amzn.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Header() {
    return (
        <Container>
            <HeaderLogo>
                <img src={Logo} />
            </HeaderLogo>
            <HeaderOptionAddress>

                <LocationOnIcon />
                <HeaderOption>
                    <optionLineOne>Hello<br /></optionLineOne>
                    <optionLineTwo className="Linetwo">Select your address</optionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>
            <HeaderSearch>
                <HeaderSearchInput type='text' />
                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>
            <HeaderNavItems>
                <HeaderOption>
                    <optionLineOne>Hello, Danish<br /></optionLineOne>
                    <optionLineTwo className="Linetwo" >Account & Lists</optionLineTwo>
                </HeaderOption>
                <HeaderOption>
                    <optionLineOne>Returns<br /></optionLineOne>
                    <optionLineTwo className="Linetwo">& Orders</optionLineTwo>
                </HeaderOption>
                <HeaderOptionCart>
                    <ShoppingBasketIcon />
                    <CartCount>4</CartCount>
                </HeaderOptionCart>
            </HeaderNavItems>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 60px;
    background-color: #0f1111;
    display: flex;
    align-items: center;
    justify-content:space-between;
    color: white;
    .Linetwo{
        font-weight: 700;
    }

`
const HeaderLogo = styled.div`
    img {
        width: 100px;
        margin-left: 11px;
    }

`
const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display:flex;
    align-items:center;

`
const optionLineOne = styled.div`


`
const optionLineTwo = styled.div`
    font-weight: 700;

`
const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius:4px;
    overflow:hidden;
    margin-left: 4px;
    background-color:white;
    :focus-within{
        box-shadow:  0 0 0 3px #F90;
    }

`
const HeaderSearchInput = styled.input`
   flex-grow: 1;
   :focus{
       outline:none;
   }

`
const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width:45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;

`
const HeaderNavItems = styled.div`
    display: flex;
    

`
const HeaderOption = styled.div`
     ${'' /* TRouBLE */}
    padding: 10px 9px 10px 9px;
    ${'' /* padding-left: 9px;
    padding-right: 9px;
    padding-top: 10px;
    padding-bottom: 10px; */}

`
const HeaderOptionCart = styled.div`
    display: flex;
    align-items: center;
    padding-right: 9px;
    

`
const CartCount = styled.div`
    padding-left: 4px;

`