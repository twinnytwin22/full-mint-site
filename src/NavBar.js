import React from "react";

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
     <div>
         {/* Left Side - Social Media Icons */}
         <div>Back to Main Site</div>
         <div>Twitter</div>
         <div>Discord</div>

         {/* Right Side - Social Media Icons */}

        {/* Connect */}
        {isConnected ? (
            <p>Connected</p>
        ) : ( 
            <button onClick={connectAccount}>Connect</button>
        )}
     </div>
 )
}

export default NavBar;