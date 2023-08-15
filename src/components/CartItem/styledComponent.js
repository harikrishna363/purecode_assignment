import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`
export const CountBtn = styled.button`
  border: 1px solid #373a40;
  border-radius: 50px;
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #373a40;
    color: #ffffff;
  }
`
export const ProductImageContainer = styled.div`
  background-color: #cbe9f2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 7px;
  height: 120px;
  width: 100px;
`
export const ProductImage = styled.img`
  width: 80px;
`
export const Quantity = styled.p`
  margin-left: 15px;
  margin-right: 15px;
`
export const Price = styled.p`
  cursor: pointer;
  border: 1px solid #0f8999;
  border-radius: 5px;
  padding: 5px;
  padding-left: 8px;
  padding-right: 8px;
  text-align: center;
  color: #0f8999;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: #ffffff;
    background-color: #118218;
  }
`
