import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import twinnyKiku from './TwinnyKiku.json';

const ContractAddy = "0xbAf0007B7129ed3E151DBa406340841b5a95216d";

const Minter = ({ accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                ContractAddy,
                twinnyKiku.abi,
                signer
            );
            try {
                const response = await contract.publicPurchase(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.03 * mintAmount).toString()),
                });
                console.log('response: ', response);
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }
    const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1)
};
const handleIncrement = () => {
    if (mintAmount >= 100) return;
    setMintAmount(mintAmount + 1);
};

return (
<div>
    <h1>SUPER!</h1>
    <o> SUPER! | 2022 Twinny x Kiku's World by Sabet</o>
    {isConnected ? (
        <div>
            <div>
                <button onClick={handleDecrement}>-</button>
                <input type="number" value={mintAmount}/>
                <button onClick={handleIncrement}>+</button>
             </div>
            <button onClick={handleMint}>MINT NOW</button>
        </div>
    ) : (
        <p>You must be connected to Mint.</p>
    )}
</div>


);
    };

    export default Minter;
