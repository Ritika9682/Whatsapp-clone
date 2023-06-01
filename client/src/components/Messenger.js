import React from 'react'
import LoginDialog from './account/LoginDialog'
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import ChatDialog from './chat/ChatDialog';


const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;


const Header = styled(AppBar)`
    background-color: #00A884;
    height: 125px;
    box-shadow: none;
`;


const LoginHeader = styled(AppBar)`
    background-color: #00A884;
    height: 220px;
    box-shadow: none;
`;

export default function Messenger() {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {
        account ? <>
          <Header>
            <Toolbar>
              
            </Toolbar>
          </Header>
          <ChatDialog />
        </>
          : <>
            <LoginHeader>
              <Toolbar>

              </Toolbar>
            </LoginHeader>
            <LoginDialog />
          </>
      }

    </Component>
  )
}
