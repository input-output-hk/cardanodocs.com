---
layout: default
title: Ouroboros Proof of Stake Algorithm
permalink: /cardano/proof-of-stake/
group: cardano
visible: true
---
<!-- Reviewed at c4c45ce9a7a8f4aa6d88a32829755196a017f6a1 -->

# Ouroboros Proof of Stake Algorithm

Ouroboros Proof of Stake Algorithm is the most important part of the protocol. It defines the
way nodes reach consensus about the state of ledger.

Ouroboros is unique as it is the first blockchain protocol based on proof of
stake that is scientifically proved to be secure.

## Why Proof of Stake?

The most important thing about picking proof of stake algorithm over proof of
work — the one adopted by Bitcoin — is the energy consumption considerations.
Running the Bitcoin protocol is a tremendously expensive endeavor. It is
estimated that 3.8 American households can be powered for a day by the energy
spent to generate one Bitcoin transaction. These energy requirements for running
the Bitcoin protocol only grow as more and more Bitcoin miners sink money into
mining, and the difficulty of the problems that their computers (mining rigs)
are cracking increases. This is why researchers did their best to investigate
alternative ways to reach consensus — such as using the so-called BFT (Byzantine
Fault Tolerant) consensus algorithms and proof of stake algorithms.

## What is Proof of Stake?

In this section we explain what “proof” and “stake” mean, and then put it all
together, explaining what “proof of stake” means.

### Proof

The “proof” part of "proof of stake" is about having evidence that blocks of
transactions are legitimate.

### Stake

“Stake” means “the relative value held by addresses on the node”. By “relative
value” we mean “all value held by wallets on a particular node divided by total
value in the system”. Please read [Balance and Stake in Cardano SL](/cardano/balance-and-stake/)
for more information.

## Proof of Stake

Rather than saying that miners are pouring money into mining rigs running the
protocol, in order to participate in running the protocol in proof of stake
environment, we say that slot leaders generate blocks for the blockchain. Anyone
can become a slot leader if the coin selection algorithm would select a coin
they own. We say that this blockchain is self-referential, which means that
maintaining the blockchain depends on the network participants themselves and on
the network state. Nothing except for the network state and network participants
being online matters for the sake of proof of stake.

## Follow the Satoshi

Let's elaborate a little bit on how a slot leader gets selected. The smallest,
atomic piece of value is called a “coin”. In Bitcoin, atomic piece is called
“Satoshi”, honoring Satoshi Nakamoto, the creator of Bitcoin. Fundamentally, we
can say that the ledger produces distribution of coins. "Follow the Satoshi" is
an algorithm that verifiably picks a coin, providing randomness. When your coin
gets selected, you become a slot leader and can listen to transactions announced
by others, make a block of those transactions, sign it with your secret key and
publish it to the network. Of course, you don't have to do it manually — your
node will take care of everything.

## Multi Party Computation

The matter of fueling Follow the Satoshi with randomness is another problem in
itself. We are using Multi Party Computation approach: select nodes provide
the so-called “commitments”, and then those get “revealed”, producing a random
value generated independently by participants of the network.

<!-- TODO PVSS -->
