# CONSERVE(Insurance but with DEFI)

> ## Table of Contents

-   [Project Details](#project-description)
-   [Problem Statement](#problem-statement)
-   [Solution](#solution)
-   [Technologies Used](#technologies-used)
    -   [Moralis](#moralis)
    -   [Crosschain Anycall](#crosschain-anycall)
    -   [Binance](#binance-testnet)
    -   [Smart Contract](#solidity-smart-contracts)
    -   [Polygon](#polygon-mumbai-testnet)
    -   [Fantom](#fantom-testnet)
-   [Important Live Links](#importantlive-hosted-project-links)
-   [Team Members](#contributors)
-   [Project Features](#project-features)
-   [Why Conserv](#why-conserv)
-   [Features We Couldn't Complete](#features-we-couldnt-complete)
-   [Future Project Plans](#future-project-plans)

#

> ## Project Description

<p><b style="color:orange">Decentralised insurance and regulatory platform</b> built to insure after-use liability of plastics to ensure sustainability of ocean and aquatic animals.
<b style="color:orange">Conserv</b> is a decentralised insurance platform built on Binance/FTM/Polygon chain with multichain function/interoperability,to unify plastic manufacturing companies and control ocean pollution caused by plastic after use dumping,which was estimated to be over 8 million tons found in the ocean, our platform registers plastic producing company and shares the license fee paid ($2000) into 2 automatically in a smart contract call,uses 50% as company insurance security(put in a staking platform) and 50% as an after use liability tax used to fund projects on ocean cleaning,plastic in ocean recycling and plastic waste control .  </p>

#

## Important/Live Hosted Project Links

-   **Hosted URL** > [https://conserve.on.fleek.co/](https://conserve.on.fleek.co/)

-   **Github** > [https://github.com/Godhanded/crosschain_insure](https://github.com/Godhanded/crosschain_insure)

-   **Contract** >

    -   Binance [0xE4e85a3Ba248F4a58961FdaB27D484Ce6910362e](https://testnet.bscscan.com/address/0xE4e85a3Ba248F4a58961FdaB27D484Ce6910362e#code)

    -   Fantom [0xD088e93c5934D19b5440c89216D51B5AB70e437b](https://testnet.ftmscan.com/address/0xD088e93c5934D19b5440c89216D51B5AB70e437b#code)

    -   polygon [0xE9bdB979287Fc773a895fa86653E9B38f550F8A0](https://mumbai.polygonscan.com/address/0xE9bdB979287Fc773a895fa86653E9B38f550F8A0#code)

-   **Crosschain** > [see here](#crosschain-anycall)

#

> ## Problem Statement

plastics in ocean is a threatening environmental issue as its pollution rises by the day as over 8 million tones of plastics after use end up in the ocean endangering aquatic animals leading to their hostage and death,some other consequences of plastics in ocean are ;

-   Physical impact on marine life: entanglement, ingestion, starvation.
-   Chemical impact: the buildup of persistent organic pollutants like PCBs and DDT.
-   Transport of invasive species and pollutants from polluted rivers to remote areas in the ocean.
-   Economic impact: damage to fisheries, shipping, and tourism.

Currently we do not have enough legislation on after use act for plastic producing companies as the ought to take complete responsibility of how this plastics are disposed and recycled after use for environmental sustainability. [see solution here](#solution)

#

> ## Contributors

-   Godhanded(Blockchain Dev)
    -   [Twitter, @Godand](https://twitter.com/Godand_)
    -   [Github, @Godhanded](https://github.com/Godhanded) <br>
-   Miraclemenikelechi(Front-End dev)
    -   [Twitter, @trinityandtruth](https://twitter.com/trinityandtruth?s=20&t=ZIj6s8ImLoDYIqEpV-qfKw)
    -   [Github, @miraclemenikelechi](https://github.com/miraclemenikelechi)<br>
-   Nuelvations(Product Manager)
    -   [Twitter, @defiprince\_](https://twitter.com/defiprince_)
    -   [Github, @nuelvations](https://github.com/nuelvations) <br>

#

> ## Technologies Used

| <b><u>Stack</u></b>  | <b><u>UsageSummary</u></b>                           |
| :------------------- | :--------------------------------------------------- |
| **`Solidity`**       | Smart contract                                       |
| **`Vanilla JS`**     | Frontend                                             |
| **`Anycall`**        | Crosschain functionalities                           |
| **`Moralis`**        | contract calls & DB                                  |
| **`Binance Chain`**  | Main contract deployed/performs call to other chains |
| **`Polygon Mumbai`** | Deployed child on Polygon Testnet                    |
| **`Fantom Chain`**   | deployed child on ftm test net                       |

-   ### **Solidity smart contracts**

    Conserve makes use of two smart contracts see [2 contracts](hhttps://github.com/Godhanded/crosschain_insure/tree/main/contracts)

    -   **DefiInsure** The main or home contract through which calls to other chains are made possible
    -   **CDefiInsure** the same contract but with an execute function which is called by another contract from a different chain to peform an internal contract call
    -   <b style="color: orange">The two contracts communicate with each other through crosschain-anycall protocol and are deployed on three different chains</b>

-   ### **Crosschain Anycall**

    -   <b style="color: orange">The crosschain-anycall protocol is phenominal</b>, we used it to perform crosschain functions like call our withdraw function on our three contracts deployed on three different chains(BINANCE, FTM, POLYGON) see [code here](https://github.com/Godhanded/crosschain_insure/blob/main/contracts/insure.sol#L78) and [here](https://github.com/Godhanded/crosschain_insure/blob/main/contracts/calledContracts/cinsure.sol#L62)

-   ### **Moralis**

    -   The Moralis vanilla js SDK was used in this project for all smart contract calls, see [one of the functions](https://github.com/Godhanded/crosschain_insure/blob/main/frontend/js/script.js)

    -   Moralis was also used to connect and communicate with A web3 provider like Metamask. see [handleAuth function](https://github.com/Godhanded/crosschain_insure/blob/main/frontend/js/script.js#L25)

-   ### **Binance Testnet**

    -   The contract on this chain was used as <b style="color: orange">the Home or main </b>through which calls to two other chains can be made, The contract was deployed and verified, see [Contract here](https://testnet.bscscan.com/address/0xE4e85a3Ba248F4a58961FdaB27D484Ce6910362e#code)

-   ### **Fantom Testnet**

    -   <b style="color: orange">A crosschain enabled</b> smart contract was deployed and Verified on the FTM Test net
        see [Contract here](https://testnet.ftmscan.com/address/0xD088e93c5934D19b5440c89216D51B5AB70e437b#code)

-   ### **Polygon Mumbai Testnet**

    -   <b style="color: orange">The crosschain enabled</b> smart contract was deployed and Verified on the Polygon Mumbai Testnet.
        see [Contract here](https://mumbai.polygonscan.com/address/0xE9bdB979287Fc773a895fa86653E9B38f550F8A0#code)

    -   insurance is payed by calling the payInsurance function on the contract

#

> ## Solution

<p>it is our responsibility to keep our ocean clean to sustain aqua life and humanity also,we wish to control plastics in ocean,conserv is doing this by increasing producer responsibility,improve plastic waste management by taxing producing companies to fund ocean clean-up projects as an after use liability on plastics,50% of the license tax payed by insured companies is used to fund projects on plastic waste clean-up,recycle projects,and 50% is staked on the Binance/FTM/polygon network as security for our insured companies.</p>
<p><b style="color: orange">Blockchain adoption - </b>
Conserv is not just an insurance service but a decentralised platform built on multichain network, we are decentralised because our insured companies funds are secured in a TVL token yield pool which has total transparency not just that,our insured companies have the rights to outvote any after use plastic clean up project we wish to sponsor,as the have voting power in our decision making,our plans with time is to build a strong DAO which oversees the decision making and project mapping of our product as we are just executives, our vision is to exploit decentralised Finance on Binance network by insuring after-use liability of plastics to promote sustainability of ocean and aquatic animals .</p>
<p><b style="color:orange">Conserv - </b>if we all focus insurance on manufacturing assets,technology and property what now happens to the after use liability of this plastics? Our insurance covers plastic after use liability which is a producer responsibility and this shields you from any form of lawsuit on plastic afteruse disposal and ocean dumping. As we also use 50% of your insurance fee to fund a staking pool as security to your companies general asset insurance,and 50% to fund ocean clean up projects and plastic recycle,Conserv is a game changer </p>

#

> ## Product -

<p><b style="color:orange">Conserv</b> is a decentralised insurance platform built on Binance/FTM/Polygon chain with multichain function,to unify plastic manufacturing companies and control ocean pollution caused by plastic after use dumping,which was estimated to be over 8 million tons found in the ocean, our platform registers plastic producing company and shares the license fee paid ($2000) into 2 automatically in a smart contract call,uses 50% as company insurance security and 50% as an after use liability tax used to fund projects on ocean cleaning,plastic in ocean recycling and plastic waste control . </p>

#

> ## Why Conserv -

<p><b style="color:orange">We understand the Defi game</b> and we are building on the most reliable networks,
We are the first insurance platform to leverage on defi by using the binance/ftm/polygon staking pool as our value lock vault,all our transactions are transparent and trusted,our core focus is on after-use liability of plastics as this is an arising environmental issue and we have the best metrics to solve it.</p>

#

## Project features

-   Insurance & Security
-   Staking
-   Multichain
-   uses crosschain-anycall, Moralis, Binance, Polygon, Fantom chains

#

## Features we couldn't complete

-   we could not find a Staking platform on the Testnets
    > we wanted to immediately use an external call to call the stake function on any reputable
    > Staking platform on the chain, so as to earn APR, unfortunately we coulnt find any and lacked time and resources to bild our own. <b style="color:orange">Thankfully there are many on MainNet</b>

#

## Future Project Plans

We plan to push this project further after the hackathon, and integrate some stacks we weren’t able to complete due to time lapse .

-   <b style="color:orange">Firstly</b> we propose to double down and build more on our crosschain functionalities and make the contracts as smooth and interrelatable as possible using <b style="color:orange">Crosschain-Anycall protocol.</b>
-   <b style="color:orange">Improved Analytics to track and provide easily data concerning all companies insured, total money in/out flow , deadlines and net APY</b>
