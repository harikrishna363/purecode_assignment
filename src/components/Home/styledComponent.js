import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  width: 100%;
  background-color: #16171a;
  display: flex;
  padding: 10px;
  justify-content: space-between;
`
export const HeaderLogo = styled.img`
  width: 160px;
`
export const BuyNowBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  background-color: #8abf3b;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    height: 40px;
  }
`
export const HomeContainer = styled.div`
  width: 75vw;
  @media screen and (max-width: 768px) {
    width: 100vw;
    padding-left: 10px;
    padding-right: 10px;
  }
`
export const Logo = styled.img`
  width: 130px;
  @media screen and (max-width: 768px) {
    width: 100px;
  }
`
export const NavbarIconsContainer = styled.div`
  display: flex;
`
export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`
export const CustomerInfoContainer = styled.div`
  width: 60%;
  flex-grow: 1;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const ContactInfoContainer = styled.div`
  border: 1px solid #afb5a7;
  padding: 20px;
  padding-top: 25px;
  padding-bottom: 25px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
    margin: 5px;
    margin-bottom: 10px;
  }
`
export const Changebtn = styled.button`
  align-self: center;
  padding: 7px;
  border: none;
  border-radius: 5px;
  background-color: #ebe8e8;
  transition: border 1s;
  &:hover {
    border: 1px solid #b1b5b2;
  }
`
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ShippingAddressContainer = styled.div`
  border: 1px solid #afb5a7;
  padding: 20px;
  border-radius: 10px;
  margin: 15px;
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
    margin: 5px;
    margin-bottom: 10px;
  }
`
export const InfoInputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
export const InputContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin: 15px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 10px;
  }
`
export const TextInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #afb5a7;
`
export const SelectInput = styled.select`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #afb5a7;
`
export const RadioInputContainer = styled.div`
  display: flex;
  margin: 15px;
`
export const SavePaymentBtn = styled.button`
  border: none;
  padding: 7px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #161a17;
  border-radius: 20px;
  color: #ffffff;
  transition: background-color 0.3s;
  &:hover {
    background-color: #404240;
  }
`
export const CancelBtn = styled.button`
  margin-left: 20px;
  border: none;
  background-color: transparent;
  border-radius: 20px;
`
export const CartContainer = styled.div`
  width: 35%;
  flex-grow: 1;
  text-align: center;
  border: 1px solid #afb5a7;
  padding: 15px;
  border-radius: 10px;
  margin: 15px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0px;
    padding: 10px;
  }
`
export const CartUlContainer = styled.ul`
  padding-left: 0px;
  list-style: none;
`
export const DiscountCodeInput = styled.input`
  height: 40px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #afb5a7;
  flex-grow: 1;
`
export const ApplyBtn = styled.button`
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 10px;
  border: none;
  border-radius: 20px;
  background-color: #ebe8e8;
`
export const ConfirmOrderButton = styled.button`
  border: none;
  width: 90%;
  padding: 10px;
  background-color: #161a17;
  border-radius: 20px;
  color: #ffffff;
  transition: background-color 0.3s;
  &:hover {
    background-color: #404240;
  }
`
export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`
export const FooterHeading = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  color: #1c1e1f;
  font-weight: bold;
`
export const FooterSection = styled.div`
  margin: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 0px;
  }
`
