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
const setUser = async () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowTimestamp = tomorrow.getTime();
    await ERC4907Demo.methods.setUser(1, "0x3D896D141dC4eEe51E829CcA7003939be20c280A", tomorrowTimestamp).send({
        from: accounts[0],
    });
}
const userOf = async () => {
    const user = await ERC4907Demo.methods.userOf(1).call();
    console.log(user);
}
</script>


<template>
    <div>
        <button @click="mint">Mintする</button>
        <button @click="setUser">setUserする</button>
        <button @click="userOf">Userを取得する</button>
    </div>
</template>
