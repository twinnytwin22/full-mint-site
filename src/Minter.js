import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import twinnyKiku from './TwinnyKiku.json';
import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import Big_superlogo1100 from './assets/Big_superlogo1100.png';

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
                const response = await contract.publicPurchase(accounts.toString(), BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.03 * mintAmount).toString()),
                });
                console.log('response: ', response);
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }
    async function handleClaim() {
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                ContractAddy,
                twinnyKiku.abi,
                signer
            );
            try {
                const response = await contract.twinesisPurchase(accounts.toString(), BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.0 * mintAmount).toString()),
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
<Flex justify="center" align='center' height='100vh' paddingBottom="150px">
    <Box width="520px">
   <div>
    <Box boxSize='sm'>
  <Image width="100%" minWidth="200px" src={Big_superlogo1100} alt='Dan Abramov' />
</Box>
    <Text fontWeight="700" fontSize="30px"  letterSpacing="-5.50" fontFamily="lekton" textShadow="0 2px 2px #∂0000000">
        2022 Twinny x Kiku's World by Sabet</Text></div>
    {isConnected ? (
        <div>
        
            <Flex align="center" justify='center'>
                <Button
                backgroundColor="red"
                color='white'
                borderRadius='5px'
                fontWeight={"bold"}
                fontSize="18px"

                cursor='pointer'
                fontFamily='Montserrat'
                padding='15px'
                marginTop='10px'
                 onClick={handleDecrement}>
                     -
                     </Button>

                <Input 
                readOnly
                fontFamily='lekton'
                width='100px'
                padding='15px'
                fontWeight={"bold"}
                fontSize="24px"
                height='40px'
                textAlign={'center'}
                marginTop='10px'
                type="number" value={mintAmount}/>
                <Button
                    backgroundColor="red"
                    color='white'
                    borderRadius='5px'
                    cursor='pointer'
                    fontFamily='Montserrat'
                    fontWeight={"bold"}
                    fontSize="18px"

                    padding='15px'
                    marginTop='10px'onClick={handleIncrement}>+</Button>
             </Flex>
            <Button
                    backgroundColor="red"
                    color='white'
                    borderRadius='5px'
                    cursor='pointer'
                    fontFamily='Montserrat'
                    fontWeight={"bold"}
                    padding='15px'
                    marginTop='10px'
                    marginRight='10px'
                    onClick={handleMint}>MINT</Button>
            <Button
                    backgroundColor="red"
                    color='white'
                    borderRadius='5px'
                    cursor='pointer'
                    fontFamily='Montserrat'
                    fontWeight={"bold"}
                    padding='15px'
                    marginTop='10px'onClick={handleClaim}>CLAIM</Button>
        </div>
    ) : (
        <p>You must be connected to Mint.</p>
    )}
    </Box>
</Flex>


);
    };

    export default Minter;