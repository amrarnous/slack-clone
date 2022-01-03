import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          alt={user?.displayName}
          src={user?.photoURL}
          onClick={() => auth.signOut()}
        />
        <AccessTimeOutlinedIcon />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search Channel" />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background: #421f44;
  text-align: center;
  padding: 0 24px;
  color: gray;
  border: 1px solid gray;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: #fff;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background: var(--slack-color);
  color: white;
  z-index: 1;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
