import styled from 'styled-components';

export const Header = styled.header`
  min-height: 50px;
  padding: 10px 0;
  width: 100%;
  background-color: var(--dark-color);
  position: fixed;
  z-index: 1000;
`;

export const Nav = styled.nav`
  padding: 10px 15px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1000;
  img{
    position: relative;
    z-index: 1000;
    height: 50px;
    display: inline-block;
    text-indent: -9999px;
    margin-left: 30px;
    margin-right: 25px;
  }

  a{
    color: #fff;
  }

  button{
    border: 0;
    color: #fff;
    text-transform: uppercase;
    &:hover{
      color: #fff;
    }
  }

  ul{
    list-style: none;
    display: flex;
    width: 100%;
    margin: auto;
    position: relative;
    z-index: 998;
    li{
      margin: auto;
      a:hover{
        color: var(--primary-color);
      }
    }
  }

  .menu-icon{
    display: none;
    color: #fff;
    font-size: 20px;
    margin-right: 30px;
    position: relative;
    z-index: 1000;
  }

  @media(max-width: 900px){
    .menu-icon{
      display: block;
    }


    .menu{
      position: fixed;
      z-index: 999;
      display: block;
      margin-top: 70px;
      top: 0;
      left: 0;
      background-color: var(--dark-color);
      transition: .5s;
      transform: translateY(0%);
      li{
        margin: 10px 0;
      }
    }
    .menu.hide{
      transform: translateY(-150%);
    }
  }
`;
