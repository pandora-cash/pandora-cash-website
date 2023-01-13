<template>
  <blog title="History of Bitcoin" img="/static/img/articles/history-of-bitcoin.jpg" :date="new Date('3 Jan 2023')">

    <p>
      Why and when was it created? Bitcoin is a now famous crypto-currency. But why and when was it created? Here's a quick look at the history of Bitcoin.
    </p>

    <h2 class="heading --h3">
      The genesis of the Bitcoin story: The Cypherpunk movement
    </h2>

    <p>
      The concept of crypto-currency was born long before Bitcoin appeared, with the Cypherpunk movement. This collective brings together activists from all over the world who share a common goal. They want to defend online privacy with the help of cryptography and computers. This grouping had already put its finger on a major problem at the end of the 80s: the surveillance and exploitation of personal data by a government or a private company, without the user's consent.
    </p>

    <p>
      In order to overcome the influence of institutions, the Cypherpunks theorize the idea of an independent, decentralized currency. The latter would escape traditional bank or state control and would thus guarantee the respect of individual liberties. This payment system would allow not only commercial exchanges, but also transactions between individuals.
    </p>

    <p>
      In 1989, David Chaum founded the DigiCash company, a company that wanted to create a virtual electronic currency that everyone could use. Unfortunately, the company was not as successful as expected and went bankrupt in 1998. Indeed, the system still used the services of a centralized bank. In addition, its use was too vulnerable to sybil attacks, in which a single user can take control of the entire network, creating many false identities.
    </p>

    <p>
      In 1997, HashCash uses the proof-of-work system for the first time. The verification of transactions is now done by a computer and not by a centralized bank.
    </p>

    <p>
      In 1998, the second most notable crypto-currency, B-Money, was created by Wei Dei. In the same year, Nick Szabo announced the launch of Bit Gold. This last currency is the most interesting: it has many features in common with Bitcoin. Unfortunately, Bit Gold will forever remain a paper project and will never be developed. 2008: The beginning of the Bitcoin story
    </p>

    <p>
      Ten years after Nick Szabo's theory, Satoshi Nakamoto launched Bitcoin. In the midst of the economic crisis, the crypto-currency found fertile ground to develop.
    </p>

    <p>
      Indeed, the years 2007 and 2008 are marked by the subprime crisis. The markets collapsed and with them the confidence that investors had placed in them. The idea of a currency free of state and banking influences is becoming more and more attractive.
    </p>

    <p>
      The origins of Bitcoin remain very mysterious, but it is possible to find traces of it still visible on the Internet. In October 2008, Cypherpunks received an email containing the Bitcoin White Paper, sent by Satoshi himself. That same year, the developer reserved the domain name Bitcoin.org and published the first content on the website, where he announced the Alpha version of Bitcoin.
    </p>

    <h2 class="heading --h3">
      Satoshi Nakamoto
    </h2>

    <p>
      Satoshi's identity is still unknown today and is the subject of the wildest theories. The people who are the subject of these theories deny them every time, like Adam Back or Elon Musk. Indeed, the latter launched Paypal a year before, in 2007, which is enough to fuel the rumor.
    </p>

    <p>
      The most popular theory remains that it is Hal Finney, a very active member of the Cypherpunk community. Hal is an early user of Bitcoin and has traded extensively with Satoshi. He was also the first person to receive the first Bitcoin transaction from Nakamoto himself.
    </p>

    <p>
      On January 3, 2009, Satoshi created and mined the first block, called the genesis block, in which he discreetly inserted the title of The Financial Times newspaper. In October 2009, an article estimated the value of Bitcoin for the first time at 0.001 USD, or about 0.00071€. This price was the cost of producing a Bitcoin, which is the value of the electricity consumed to mine it. The years 2010-2013: The legitimization of Bitcoin
    </p>

    <p>
      When it was launched, Bitcoin was mainly used by members of the Cypherpunk movement, like Hal Finney. Only technophiles were interested in this electronic currency for the moment. This date marks a turning point in the history of Bitcoin.
    </p>

    <p>
      In 2010, the first commercial transaction was made with Bitcoin. An American developer, Lazlo Hayneck, bought two pizzas for 10,000 Bitcoins by posting a message on a forum.
    </p>

    <p>
      In February 2011, Bitcoin reached parity with the dollar: 1 Bitcoin was worth 1 dollar. It was also this year that Wikileaks, a platform that publishes and disseminates confidential documents, was embargoed by the U.S. government.
    </p>

    <p>
      The website run by Julien Assange can no longer receive payments through traditional channels. He then turns to Bitcoin, which finds itself at the center of a conflict that exceeds him.
    </p>

    <h2 class="heading --h3">
      History of Bitcoin Silk road
    </h2>

    <p>
      The same year, Silk Road, an online drug sales platform, appeared. The marketplace imposes the use of Bitcoin as a means of payment. The crypto-currency guarantees a certain anonymity for its users. Bitcoin continues to be used for illicit transactions: however, these exchanges are marginal and represent barely 1% of all transfers made in 2020.
    </p>

    <p>
      The closure of the Silk Road platform in 2013 reassures investors and the market. Bitcoin reaches the value of $1,000 for the first time, before falling back. The crypto-currency does not exceed this ceiling until 2016, before soaring to nearly $20,000 in 2017.
    </p>

    <p>
      It was also in 2013 that the city of Vancouver, Canada, opened its first Bitcoin ATM and Germany gave the crypto-currency legal status.
    </p>

    <h2>
      Bitcoin post-2013 years:
    </h2>

    <p>
      From this point on, Bitcoin gains real legitimacy and the crypto-currency is seen as a different currency than others. Many physical stores accept payment in Bitcoin, as well as public institutions. It is quite possible to pay tuition at many universities in Bitcoin.
    </p>


    <p>
      For example, in May 2020, Centrapay, a New Zealand payment platform, announced a partnership with the Coca-Cola Company. It is now possible to buy cans from the brand's vending machines.
    </p>

    <p>
      Bitcoin is far from mature, and so is its use. What is certain is that the crypto-currency offers possibilities unimaginable with traditional currencies. The future of the currency is very promising, both economically and socially, and has no end of surprises in store for us.
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
    Meta.SetTitle("History of Bitcoin")
    Meta.SetDescription("The history of Bitcoin starts before 2008. The history of Bitcoin, is constantly evolving. inventor and history of Bitcoin remains a mystery.")
    Meta.SetKeywords("history of bitcoin, history, bitcoin, price history, launch, cryptocurrency, btc")
    Meta.SetImage("/static/img/articles/history-of-bitcoin.jpg")
    Meta.SetUrl("/history-of-bitcoin")
    Meta.SetType("article")
  }
}
</script>
