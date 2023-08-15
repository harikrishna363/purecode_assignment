import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {
  BsSearch,
  BsCart2,
  BsFacebook,
  BsYoutube,
  BsTelegram,
  BsInfoCircle,
  BsCreditCard,
} from 'react-icons/bs'
import {VscAccount} from 'react-icons/vsc'
import {CiDeliveryTruck} from 'react-icons/ci'
import {FaTwitterSquare} from 'react-icons/fa'

import CartItem from '../CartItem'
import {
  AppContainer,
  Header,
  HeaderLogo,
  BuyNowBtn,
  HomeContainer,
  Logo,
  NavbarIconsContainer,
  InfoContainer,
  FlexContainer,
  CustomerInfoContainer,
  ContactInfoContainer,
  Changebtn,
  ShippingAddressContainer,
  InfoInputsContainer,
  InputContainer,
  TextInput,
  SelectInput,
  RadioInputContainer,
  SavePaymentBtn,
  CancelBtn,
  CartContainer,
  CartUlContainer,
  DiscountCodeInput,
  ApplyBtn,
  ConfirmOrderButton,
  Footer,
  FooterHeading,
  FooterSection,
} from './styledComponent'

const cartItems = [
  {
    id: 1,
    name: 'Rey Nylon Backpack',
    price: 74,
    totalPrice: 74,
    quantity: 1,
    imageUrl:
      'https://monumental-ganache-c14cf0.netlify.app/static/media/hoodie.7701cf9446a6b588de67.png',
  },
  {
    id: 2,
    name: 'Waffle Knit Beanie',
    price: 132,
    totalPrice: 132,
    quantity: 1,
    imageUrl:
      'https://monumental-ganache-c14cf0.netlify.app/static/media/beanie.5ed8bd8a65af67fd6c5c.png',
  },
  {
    id: 3,
    name: 'Travel Pet Carrier',
    price: 28,
    totalPrice: 28,
    quantity: 1,
    imageUrl:
      'https://monumental-ganache-c14cf0.netlify.app/static/media/purse.7342ded3cf1426f3ce5e.png',
  },
]
class Home extends Component {
  state = {cartList: cartItems}

  decreaseQuantity = id =>
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachItem => {
        if (eachItem.id === id) {
          if (eachItem.quantity !== 1) {
            return {
              ...eachItem,
              quantity: eachItem.quantity - 1,
              totalPrice: eachItem.price * (eachItem.quantity - 1),
            }
          }
        }
        return eachItem
      }),
    }))

  increaseQuantity = id =>
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachItem => {
        if (eachItem.id === id) {
          return {
            ...eachItem,
            quantity: eachItem.quantity + 1,
            totalPrice: eachItem.price * (eachItem.quantity + 1),
          }
        }
        return eachItem
      }),
    }))

  render() {
    const {cartList} = this.state
    let subTotal = 0
    cartList.forEach(eachItem => {
      subTotal += eachItem.totalPrice
    })

    return (
      <AppContainer>
        <Header>
          <HeaderLogo src="https://monumental-ganache-c14cf0.netlify.app/static/media/logo.f6121fbbfec25dbc851a3e5aea13c8ad.svg" />
          <BuyNowBtn>Buy Now</BuyNowBtn>
        </Header>
        <HomeContainer>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand>
                <Logo
                  alt="logo"
                  src="https://monumental-ganache-c14cf0.netlify.app/static/media/logo1.95d47bbac8db6c1e8f997bbf26ca05cf.svg"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link href="#home">Men</Nav.Link>
                  <Nav.Link href="#link">Women</Nav.Link>
                  <Nav.Link href="#link">Beauty</Nav.Link>
                  <Nav.Link href="#link">Sport</Nav.Link>
                  <NavDropdown title="Templates" id="basic-nav-dropdown">
                    <NavDropdown.Item>Template 1</NavDropdown.Item>
                    <NavDropdown.Item>Template 2</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Explore" id="basic-nav-dropdown">
                    <NavDropdown.Item>Explore 1</NavDropdown.Item>
                    <NavDropdown.Item>Explore 2</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
              <NavbarIconsContainer>
                <BsSearch size="20" style={{marginRight: '15px'}} />
                <VscAccount size="20" style={{marginRight: '15px'}} />
                <BsCart2 size="20" style={{marginRight: '10px'}} />
              </NavbarIconsContainer>
            </Container>
          </Navbar>
          <hr className="mt-0" />
          <h1>Checkout</h1>
          <p>
            Homepage / Clothing Categories /
            <span style={{textDecorationLine: 'underline'}}>Checkout</span>
          </p>
          <InfoContainer>
            <CustomerInfoContainer>
              <ContactInfoContainer>
                <FlexContainer>
                  <VscAccount className="me-3" size="20" />
                  <div>
                    <p className="mb-0">CONTACT INFO</p>
                    <p className="mb-0" style={{fontWeight: 'bold'}}>
                      Enrico Smith +855-666-7744
                    </p>
                  </div>
                </FlexContainer>
                <Changebtn>Change</Changebtn>
              </ContactInfoContainer>
              <ShippingAddressContainer>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <CiDeliveryTruck size="23" className="me-3" />
                    <div>
                      <p className="mb-0">SHIPPING ADDRESS</p>
                      <p style={{fontWeight: 'bold'}} className="mb-0">
                        St. Paul Road, Norris, SD 57560, Dakota, USA
                      </p>
                    </div>
                  </div>
                  <Changebtn>Change</Changebtn>
                </div>
                <hr className="mt-3" />
                <InfoInputsContainer>
                  <InputContainer>
                    <label htmlFor="firstname">First Name</label>
                    <TextInput id="firstname" placeholder="First Name" />
                  </InputContainer>
                  <InputContainer>
                    <label htmlFor="lastname">Last Name</label>
                    <TextInput id="lastname" placeholder="Last Name" />
                  </InputContainer>
                  <InputContainer>
                    <label htmlFor="address">Address</label>
                    <TextInput id="address" placeholder="Address" />
                  </InputContainer>
                  <InputContainer>
                    <label htmlFor="apt">Apt, Suite *</label>
                    <TextInput id="apt" placeholder="Apt" />
                  </InputContainer>
                  <InputContainer>
                    <label htmlFor="city">City</label>
                    <TextInput id="city" placeholder="City" />
                  </InputContainer>
                  <InputContainer>
                    <label htmlFor="country">Country</label>
                    <SelectInput id="country">
                      <option>Select Country</option>
                      <option>Country 1</option>
                      <option>Country 2</option>
                    </SelectInput>
                  </InputContainer>
                  <InputContainer>
                    <label htmlFor="state">State/Province</label>
                    <TextInput id="state" placeholder="State" />
                  </InputContainer>
                  <InputContainer>
                    <label htmlFor="postalcode">Postal code</label>
                    <TextInput id="postalcode" placeholder="Postal code" />
                  </InputContainer>
                </InfoInputsContainer>
                <p className="mb-0" style={{fontWeight: 'bold'}}>
                  Address Type
                </p>
                <div className="d-flex flex-wrap">
                  <RadioInputContainer>
                    <input id="homedelivery" type="radio" className="me-2" />
                    <label htmlFor="homedelivery">
                      Home (All day Delivery)
                    </label>
                  </RadioInputContainer>
                  <RadioInputContainer>
                    <input id="officedelivery" type="radio" className="me-2" />
                    <label htmlFor="officedelivery">
                      Office (Delivery 9 AM - 5 PM)
                    </label>
                  </RadioInputContainer>
                </div>
                <div className="d-flex">
                  <SavePaymentBtn>Save and next to payment</SavePaymentBtn>
                  <CancelBtn>Cancel</CancelBtn>
                </div>
              </ShippingAddressContainer>
              <ContactInfoContainer>
                <FlexContainer>
                  <BsCreditCard size="20" className="me-3" />
                  <div>
                    <p className="mb-0">PAYMENT METHOD</p>
                    <p className="mb-0" style={{fontWeight: 'bold'}}>
                      Google / Apple Wallet xxx-xxx-xx55
                    </p>
                  </div>
                </FlexContainer>
                <Changebtn>Change</Changebtn>
              </ContactInfoContainer>
            </CustomerInfoContainer>
            <CartContainer>
              <div style={{textAlign: 'left'}}>
                <p style={{fontWeight: 'bold', fontSize: '18px'}}>
                  Order Summary
                </p>
              </div>
              <CartUlContainer>
                {cartList.map(eachItem => (
                  <CartItem
                    key={eachItem.id}
                    item={eachItem}
                    decreaseQuantity={this.decreaseQuantity}
                    increaseQuantity={this.increaseQuantity}
                  />
                ))}
              </CartUlContainer>
              <div style={{textAlign: 'left'}}>
                <p>Discount code</p>
              </div>
              <div className="d-flex align-items-center mb-2">
                <DiscountCodeInput />
                <ApplyBtn>Apply</ApplyBtn>
              </div>
              <div className="d-flex justify-content-between">
                <p>Subtotal</p>
                <p>${subTotal}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Shipping estimate</p>
                <p>$5.00</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Tax estimate</p>
                <p>$24.90</p>
              </div>
              <div className="d-flex justify-content-between">
                <p style={{fontWeight: 'bold'}}>Order total</p>
                <p>${subTotal + 29.9}</p>
              </div>
              <ConfirmOrderButton className="mb-1">
                Confirm Order
              </ConfirmOrderButton>
              <div className="d-flex justify-content-center">
                <BsInfoCircle className="mt-1" />
                <p>
                  Learn more <a href="#taxes">Taxes</a> and{' '}
                  <a href="#shopping">Shipping</a> information
                </p>
              </div>
            </CartContainer>
          </InfoContainer>
          <hr />
          <Footer>
            <FooterSection>
              <img
                className="mb-3"
                alt="logo"
                src="https://monumental-ganache-c14cf0.netlify.app/static/media/logo1.95d47bbac8db6c1e8f997bbf26ca05cf.svg"
              />
              <FlexContainer>
                <BsFacebook
                  size="20"
                  color="#325adb"
                  className="mb-3 me-2 ms-2"
                />
                <p>Facebook</p>
              </FlexContainer>
              <FlexContainer>
                <BsYoutube
                  size="20"
                  color="#db1d36"
                  className="mb-3 me-2 ms-2"
                />
                <p>Youtube</p>
              </FlexContainer>
              <FlexContainer>
                <BsTelegram
                  size="20"
                  color="#38c0c7"
                  className="mb-3 me-2 ms-2"
                />
                <p>Telegram</p>
              </FlexContainer>
              <div className="d-flex align-items-center">
                <FaTwitterSquare
                  size="20"
                  color="#1981bd"
                  className="mb-3 me-2 ms-2"
                />
                <p>Twitter</p>
              </div>
            </FooterSection>
            <FooterSection>
              <FooterHeading>Getting Started</FooterHeading>
              <p>Release Notes</p>
              <p>Upgrade Guide</p>
              <p>Browser Support</p>
              <p>Dark Mode</p>
            </FooterSection>
            <FooterSection>
              <FooterHeading>Explore</FooterHeading>
              <p>Prototyping</p>
              <p>Design Systems</p>
              <p>Pricing</p>
              <p>Security</p>
            </FooterSection>
            <FooterSection>
              <FooterHeading>Resources</FooterHeading>
              <p>Best Practices</p>
              <p>Support</p>
              <p>Developers</p>
              <p>Learn design</p>
            </FooterSection>
            <FooterSection>
              <FooterHeading>Community</FooterHeading>
              <p>Discussion Forums</p>
              <p>Code of Conduct</p>
              <p>Contributing</p>
              <p>API Reference</p>
            </FooterSection>
          </Footer>
        </HomeContainer>
      </AppContainer>
    )
  }
}

export default Home
