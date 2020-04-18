import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Flex, Image } from 'rebass';
import MenuIcon from '../images/menu.svg';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,
      width: '100%',
    }}
  >
    <Flex
      justifyContent="space-between"
      sx={{
        margin: `0 auto`,
        maxWidth: 1024,
        padding: `3rem 1.0875rem`,
      }}
    >
      <div>
        <img src={MenuIcon} />
      </div>
      <div>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `line-through`,
            margin: '0 10px',
          }}
        >
          HOME
        </Link>
        <Link
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: '0 10px',
          }}
        >
          ABOUT
        </Link>
        <Link
          to="/portfolio"
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: '0 10px',
          }}
        >
          PORTFOLIO
        </Link>
      </div>
    </Flex>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
