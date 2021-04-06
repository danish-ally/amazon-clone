import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'


function Product(props) {

    const addToCart = () =>{
        const cartItem = db.collection("cartItems").doc(props.id)
        cartItem.get()
        .then((doc)=>{
            console.log(doc);
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else{
                db.collection("cartItems").doc(props.id).set({
                    name: props.title,
                    image: props.image,
                    price: props.price,
                    quantity: 1
                })
            }
        })

    }

    console.log(props)
    return (
        <Container>
            <Title>
                {props.title}
            </Title>
            <Price>
                ${props.price}
            </Price>
            <Rating>
                {
                    Array(props.rating)
                    .fill()
                    .map(rating=> <p>★</p>)

                }
            </Rating>
            <Image src={props.image} />
            <ActionSection>
                <AddToCartButton
                    onClick={ addToCart}
                >
                    Add to Cart
                </AddToCartButton>
            </ActionSection>
        </Container>
    )
}

export default Product

const Container = styled.div`
    background-color: white;
    z-index: 100;
    flex:1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    display:flex;
    flex-direction: column;

`
const Title = styled.span`
    

`
const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;


`
const Rating = styled.div`
    color: #FFDF00;
    display: flex;
`
const Image = styled.img`
    max-height:200px;
    object-fit: contain;

`
const ActionSection = styled.div`
    
    margin-top: 12px;
    display: grid;
    place-items: center;
`

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color:  #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    cursor: pointer;

`
