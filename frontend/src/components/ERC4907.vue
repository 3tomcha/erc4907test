<script setup lang="ts">
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3/dist/web3.min.js";
import ERC4907DemoAbi from "@/abi/ERC4907Demo.json";

const ethereum: any = window.ethereum;
const accounts = await ethereum.request({method: "eth_requestAccounts"});
const provider = await detectEthereumProvider();
const web3 = new Web3(provider as any);
const ERC4907Demo = new web3.eth.Contract(ERC4907DemoAbi, "0xd238FcEF8d58EC0DFe411ba48034eCd908fd3cCa");
const name = await ERC4907Demo.methods.name().call();
// alert(name);
const mint = async () => {
    console.log(accounts);
    await ERC4907Demo.methods.mint(1, accounts[0]).send({
        from: accounts[0]
    });
}
</script>


<template>
    <div>
        <button @click="mint">Mintする</button>
    </div>
</template>
