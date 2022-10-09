import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react'

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts", 
            })
            setAccounts(accounts);
        }
    }
 return (
     <div className="navbar">
     <Flex justity="space-around" align="center" padding="30px">
         {/* Left Side - Social Media Icons */}
         <Flex justity="space-around" align="40%" padding="0 75px">
         <Link href="https://twinnytwin.io">
        <h4>Back to Main Site</h4> </Link>
        </Flex>
         {/* Right Side - Social Media Icons */}
        <Flex
            justify="space-between"
            align="center"
            width="50%"
           padding="30px 30px 30px 30px"></Flex>
           <Image></Image>
                           <Spacer />

        {/* Connect */}
        {isConnected ? (
            <></>
        ) : ( 
            
            <Flex justify="space-around" 
            width="20%"
            align="right">
            <Button
                backgroundColor="red"
                borderRadius="30"
                color="white"
                cursor="pointer"
                fontFamily="Montserrat"
                fontWeight="bold"
                padding="12px"
                margin="0 30px"
                onClick={connectAccount}>CONNECT WALLET</Button> </Flex>
        )}
     
     </Flex>
     </div>
 )
}

export default NavBar;