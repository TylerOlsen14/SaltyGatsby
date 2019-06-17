import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from '../components/logo'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`}}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header style={{display: 'flex', flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}}>
      <h3>Salty Rogue Real Estate</h3>        
      {/* <h3 style={{ display: `inline`}}>Salty Rogue Real Estate</h3>         */}
    </Link>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about">About</ListLink>
      <ListLink to="/contact">Contact</ListLink>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
