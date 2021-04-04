import React from 'react'
import styled from 'styled-components'
import Cart from './Cart'


function CartItem() {
    return (
        <Container>
            <ImageContainer>
                <img src={"https://m.media-amazon.com/images/I/71ZXj1QEE0L._AC_UY327_FMwebp_QL65_.jpg"} />
            </ImageContainer>
            
            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Grey (Latest Model, 8th Generation)</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantityContainer>5</CartItemQuantityContainer>
                    <CartItemDeleteContainer>Delete</CartItemDeleteContainer>
                </CartItemInfoBottom>
            </CartItemInfo>
            <CartItemPrice>
                $1449
            </CartItemPrice>
        </Container>
    )
}

export default CartItem

const Container = styled.div`
   padding-top: 12px;
   padding-bottom: 12px;
   display: flex;
`
const ImageContainer = styled.div`
   width: 180px;
   height: 180px;
   flex-shrink: 0;
   flex-grow:0;
   margin-right:16px;
   img{
        object-fit: contain;
        height: 100%;
        width: 100%;


   }

`
const CartItemInfo = styled.div`
   

`
const CartItemInfoTop = styled.div`
   color: #48b4e0;
   h2{
       font-size: 18px;
   }

`
const CartItemInfoBottom = styled.div`
   display: flex;
   margin-top:4px;

`
const CartItemQuantityContainer = styled.div`
   

`
const CartItemDeleteContainer = styled.div`
    color: #48b4e0;
    margin-left: 16px;
    cursor:pointer;

`
const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;

`
