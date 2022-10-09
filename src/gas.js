var methodSignature = web3.eth.abi.encodeFunctionSignature(func);
    var encodedParameter = web3.eth.abi.encodeParameter("string", "ABCDEFGH");

    var data = methodSignature //method signature
        + encodedParameter.substring(2); //hex of input string without '0x' prefix

    let gas = await provider.estimateGas({
                                           from: owner.address,
                                           to: addr2.address,
                                           data: data,
                                           value: 1000000000000000,
                                           function(estimatedGas, err) {
                                               console.log("estimatedGas: " + estimatedGas);
                                               console.log("Err:" + err);
                                           }
                                         });
    console.log("Gas: " + gas);