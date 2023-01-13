<template>
  <blog title="What is Bitcoin?" img="/static/img/articles/what-is-bitcoin.jpg" :date="new Date('3 Jan 2023')">
    <p>
      Bitcoin is an experimental system for transferring and verifying property based on a peer-to-peer network without any central authority.
    </p>

    <p>
      The initial application and main innovation of the Bitcoin network is a decentralized digital currency whose unit of account is the Bitcoin.
    </p>
    <p>
      Bitcoin operates with software and a protocol that allows participants to issue Bitcoins and manage transactions collectively and automatically. As a free (open source) protocol, it also allows for interoperability of the software and services that use it. As a currency, Bitcoin is both a payment intermediary and a store of value.
    </p>

    <p>
      Bitcoin is designed to be self-regulating. The limited inflation of the Bitcoin system is distributed evenly by computing power across the network, and will be limited to 21 million divisible units to the eighth decimal place. The smooth operation of the exchanges is guaranteed by a general organization that everyone can examine, because everything is public: the basic protocols, the cryptographic algorithms used, the programs that make them operational, the account data and the developers' discussions.
    </p>

    <p>
      The possession of bitcoins is materialized by a sequence of numbers and letters that constitute a virtual key allowing the spending of bitcoins associated with it on the register. A person can hold several keys collected in a "Bitcoin Wallet", a web, software or hardware "keychain" that allows access to the network in order to perform transactions. The keychain allows one to view the Bitcoin balance and public keys for receiving payments. It also contains (often encrypted) the private keys associated with these public keys. These private keys must remain secret, as the holder can spend the bitcoins associated with them on the registry. Any medium (key ring) is suitable to keep the sequence of symbols constituting your key ring: paper, USB key, memory, etc. With appropriate software, you can manage your holdings on your computer or phone.
    </p>

    <p>
      To have Bitcoins in an account, you must either have been given Bitcoins by a Bitcoin holder, for example in exchange for a good or service, or you must have gone through a currency exchange platform that converts traditional currencies into Bitcoins, or you must have earned them by participating in currency control operations.
    </p>

    <p>
      Bitcoin's source code has been released under an MIT open source license that permits the use, copying, modification, merging, publication, distribution, sublicensing and/or sale of copies of the software, provided that a copyright notice is included in all copies.
    </p>

    <p>
      Bitcoin's creator, Satoshi Nakamoto, described his invention in this document.
    </p>

    <pcash-summary/>

  </blog>
</template>

<script>
import Blog from "./blog";
import PcashSummary from "./sections/pcash-summary";
import Meta from "../../../meta";

export default {
  components: {PcashSummary, Blog},

  beforeCreate(){
    Meta.SetTitle("What is Bitcoin")
    Meta.SetDescription("What is Bitcoin? Bitcoin is the first a digital cryptocurrency. What is bitcoin mining ? It serves several functions. What is Bitcoin cash worth?")
    Meta.SetKeywords("what is bitcoin, bitcoin, cryptocurrency, crypto, bit coin, blockchain")
    Meta.SetImage("/static/img/articles/what-is-bitcoin.jpg")
    Meta.SetUrl("/what-is-bitcoin")
    Meta.SetType("article")
  }
}
</script>