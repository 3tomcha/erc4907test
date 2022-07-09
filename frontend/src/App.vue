<script setup lang="ts">
import detectEthereumProvider from "@metamask/detect-provider";
const ethereum:any = window.ethereum;
ethereum.request({method: "eth_requestAccounts"});
const provider = await detectEthereumProvider();

</script>

<template>

</template>
