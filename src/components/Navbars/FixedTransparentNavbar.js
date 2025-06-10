import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #e2e2e2;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const Logo = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  color: #000;
  text-decoration: none;
`;

const Links = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    flex-direction: column;
    padding: 15px;
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #0078d4;
  }
`;

const Toggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header>
      <Nav>
        <Logo to="/"><Link to="/" className="brand">
                    <img src={require("assets/img/rcnegro.png")} height="100px" width="190px"/>
                  </Link>
                  </Logo>

        <Links open={isOpen}>
          <StyledLink to="/about-us">Conóceme</StyledLink>
          <StyledLink to="/blog-posts">Blog</StyledLink>
          <StyledLink to="/social">Labor Social</StyledLink>
        </Links>

        <Toggle onClick={() => setIsOpen(!isOpen)} aria-label="Menú">
          ☰
        </Toggle>
      </Nav>
    </Header>
  );
};

export default Navbar;