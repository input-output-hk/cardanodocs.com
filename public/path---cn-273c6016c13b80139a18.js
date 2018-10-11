webpackJsonp([29311135075861],{397:function(e,a){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"/Users/robinclark/iohk-sites/cardanodocs.com/src/pages/cn/content/welcome-text.en.md absPath of file >>> MarkdownRemark",excerpt:"亲爱的读者，本文档的目的是让您对于 Cardano 平台技术栈第一层即结算层有所了解。如果您理解了结算层是什么，我们建议您先阅读论文和实现的差异，然后再阅读协议和实现的文档。 本文档目标读者是 IOHK…",html:"<p>亲爱的读者，本文档的目的是让您对于 Cardano 平台技术栈第一层即结算层有所了解。如果您理解了结算层是什么，我们建议您先阅读论文和实现的差异，然后再阅读协议和实现的文档。</p>\n<p>本文档目标读者是 IOHK 的开发人员，第三方软件开发人员，审计和致力于实现卡尔达诺结算层或使用卡尔达诺结算层参考实现的咨询人员。</p>",frontmatter:{path:"/cn/welcome-text/",doc_doc_title:"Welcome",author:null,date:null,language:"cn",label:"content",keywords:"welcome"}}},{node:{id:"/Users/robinclark/iohk-sites/cardanodocs.com/src/pages/en/content/intro.en.md absPath of file >>> MarkdownRemark",excerpt:"Cardano SL (或卡尔达诺运算层）是由 IOHK 联合爱丁堡大学，雅典大学和康涅狄格大学共同设计开发的一种加密货币。卡尔达诺运算层是基于 Aggelos Kiayias，Alexander Russell，Bernardo David 和 Roman Oliynykov…",html:"<h3>Cardano SL</h3>\n<p>(或卡尔达诺运算层）是由 IOHK 联合爱丁堡大学，雅典大学和康涅狄格大学共同设计开发的一种加密货币。卡尔达诺运算层是基于 Aggelos Kiayias，Alexander Russell，Bernardo David 和 Roman Oliynykov 的白皮书 『乌洛波罗斯：可证明安全的权益证明协议』的 Haskell 实现。</p>\n<p>您可以将卡尔达诺结算层视为基于比特币重新设计的针对比特币缺陷的自由修复。 有关卡尔达诺结算层和比特币之间的相似之处和差异的更多信息，请阅读『卡尔达诺结算层为什么特别?』。</p>\n<h3>加密货币基础</h3>\n<p>在给出加密货币的定义之前，我们先来谈谈为什么我们在意数字货币，特别是加密货币。</p>\n<h3>我们为什么在意?</h3>\n<ul>\n<li>\n<h4>速度</h4>\n<p>与传统（也称为法定）中心银行货币，与日元或美元相反，电子货币不需要一个银行系统来转移价值。这一限制的解除，使用数字货币的速度要快于银行业务，尤其是在全球范围内。使用数字货币从大阪转移10美元到丹佛不再需要数天的时间。无论距离如何，所有交易都能迅速完成。</p>\n</li>\n<li>\n<h4>你掌控你自己的钱</h4>\n<p>所有的商业银行账户所有者在收到支付请求后在合理的时间内只能支付一定的金额。银行体系对任何价值量都有限制，使个人无法迅速撤出或转移大量资金。有加密货币的情况下，持有一种称为密钥这一特殊信息的人就可以随意花钱。没有其他实体有权操纵用户拥有的价值。</p>\n</li>\n<li>\n<h4>匿名</h4>\n<p>人们可以根据需要，拥有任意多的加密货币地址，从不同的地址接收，消费资产。经营电子商务商店的商家可以拥有一组收款和退款的地址，以及一个用于他们自身需要的单独的个人『钱包』。通过统一的接口控制所有这些钱包，并且不需要登录到多个支付平台，这使得该过程非常节省时间。</p>\n</li>\n<li>\n<h4>安全</h4>\n<p>你的钱就像可用于消费的密钥一样安全。这意味着将密钥存储在保险箱中的 USB 闪存上相当于让纸币处于安全状态。即使进行了成功的网络攻击，也绝对没有人能够窃取这笔钱。</p>\n</li>\n<li>\n<h4>扩展性</h4>\n<p>使用一种称为侧链的方法，以及通用加密货币，如卡尔达诺结算层和比特币，就可以启用特定领域的加密货币，例如以太经典。这样一来，通过特定领域的加密货币开发的任何创新产品都可以让参与者在通用的加密货币中保持价值。这样的应用程序的例子有身份管理，游戏和赌博，以及可验证计算。</p>\n</li>\n</ul>\n<h3>什么是加密货币?</h3>\n<p>加密货币是一种数字货币形式，使用密码来控制价值。密码学提供了一种生成任何类型信息的真实真实性证据的方法。这就是所谓的数字签名。在加密货币中，我们通过签署和发送交易到网络并接收已确认的交易块，生成一个总账（一个提供每个地址有多少钱的信息的数据库）。加密货币通常是分散的，这意味着来自全球各地的许多人通过运行加密货币节点参与总账的生成。因此，必须达成关于总账状况的共识。下一节讨论实现这种共识的两个最重要的方法。</p>\n<h3>卡尔达诺结算层为什么特别</h3>\n<p>虽然比特币和卡尔达诺结算层之间有相似之处，但这两个加密货币之间也有很多不同之处。最显着的区别是，比特币是工作量证明类型的加密货币，而卡尔达诺结算层使用权益证明的方法达成共识。这鼓励诚信和长期的参与。</p>\n<h3>共识算法的目的</h3>\n<p>共识算法被用来产生新的交易区块，使账本更新状态。每当有人发布一个交易区块时，他们（或者说他们的运行加密货币协议的节点）就必须附上他们已经证明的证据。下面讨论两种类型的证明。</p>\n<h3>工作量证明和挖矿</h3>\n<p>工作量证明是加密货币最普遍的共识算法类型。它起源于比特币，加密货币就是这么工作的。为了生成工作证明，计算机必须解决一个挑战。这是难以解决的计算繁重的问题，但解决方案很容易验证。当一台基于网络的工作量证明的计算机找到一个解决方案时，它会将交易发布于同它一起计算的其他计算机。这台计算机会因为产生区块得到交易费和奖励。整个过程被称为挖矿。挖矿是非常耗能的，所需的能源数量在不断增加，这可能导致不健康的竞争。</p>\n<h3>权益证明和铸币</h3>\n<p>权益证明是一种生成区块的新方法。由 Aggelos Kiayias 教授领导的 IOHK 科学家们设计了第一个可证明的，称为乌洛波罗斯的权益证明算法。乌洛波罗斯是卡尔达诺结算层的核心。研究小组已经发表了一篇白皮书 ，这封白皮书对于那些拥有加密货币理论背景的人来说是值得一读的。权益证明的核心思想是，不要浪费电力来解决计算繁重的问题，而是选择一个节点来铸造一个新的区块，其概率与这个节点的硬币数量成正相关。如果一个节点有整数个(> 0)的 slot，它被称为 slot 所有人。如果一个节点最终被选中来铸造一个区块，那么这个节点被称为 slot 领导者。您可以在卡尔达诺结算层的股权证明中了解更多关于该流程的信息。</p>\n<h3>卡尔达诺结算层之上</h3>\n<p>卡尔达诺结算层被称为『层』是有原因的。这是卡尔达诺平台的第一个组件。最终，它将被扩展到一个控制层，作为一个可信的计算框架来评估一种特殊的证明，以确保一定的计算正确执行。在游戏和赌博中，这样的系统被用于验证随机数生成和游戏结果的真实性。伴随着侧链，它将有可能完成诸如在游戏中公平分配奖金的任务。但是控制层的应用远远超出了游戏和赌博。身份管理，信用系统等将成为卡尔达诺平台的一部分。我们将迭代卡尔达诺钱包应用程序 Daedalus，使其变成一个具有自动加密货币交易功能和合法加密货币交易功能的通用加密货币钱包。</p>",frontmatter:{path:"/cn/intro-text/",doc_doc_title:"Intro",author:null,date:null,language:"cn",label:"content",keywords:"intro"}}},{node:{id:"/Users/robinclark/iohk-sites/cardanodocs.com/src/pages/en/docs/2017-01-13-for-contributors.en.md absPath of file >>> MarkdownRemark",excerpt:"\n# Redirecting bar...\n",html:'<h1>Redirecting bar...</h1>\n<!-- end -->\n<!-- <script>\n    window.location.replace("https://github.com/input-output-hk/cardano-sl/blob/develop/CONTRIBUTING.md");\n</script> -->\n<h1>STOOPID!!</h1>',frontmatter:{path:"/cn/for-contributors/",doc_doc_title:"For Contributors",author:null,date:null,language:"cn",label:"docs",keywords:"contributors bar"}}},{node:{id:"/Users/robinclark/iohk-sites/cardanodocs.com/src/pages/en/docs/2017-01-19-glossary.en.md absPath of file >>> MarkdownRemark",excerpt:"\n<!-- Reviewed at d0d6c2fedefb642744a24b4b0a6d8d7ad11532f6 -->\n\n# glossary foo\n\n## Ada\n\nThe name of our currency, named in honor of [Ada\nLovelace](https://en.wikipedia.org/wiki/Ada_Lovelace).\n\n## Address\n\nThe unique identifier of a [node](#node). Please read about [Addresses in\nCardano SL](/cardano/addresses/) for more details.\n\n",html:'<!-- Reviewed at d0d6c2fedefb642744a24b4b0a6d8d7ad11532f6 -->\n<h1>glossary foo</h1>\n<h2>Ada</h2>\n<p>The name of our currency, named in honor of <a href="https://en.wikipedia.org/wiki/Ada_Lovelace">Ada\nLovelace</a>.</p>\n<h2>Address</h2>\n<p>The unique identifier of a <a href="#node">node</a>. Please read about <a href="/cardano/addresses/">Addresses in\nCardano SL</a> for more details.</p>\n<!-- end -->\n<h2>Balance</h2>\n<p>Please read about <a href="/cardano/balance-and-stake/">Balance and Stake in Cardano SL</a>\nfor explanation.</p>\n<h2>Block</h2>\n<p>A fundamental part of a <a href="#ledger">Ledger</a>. Please read about <a href="/technical/blocks/">Blocks in Cardano\nSL</a> for technical details.</p>\n<h2>Blockchain</h2>\n<p>Please see <a href="#ledger">Ledger</a>.</p>\n<h2>Cardano SL</h2>\n<p>Cardano SL (or Cardano Settlement Layer) is a decentralized cryptographic\ncurrency designed and developed by <a href="https://iohk.io/team">IOHK</a>. Named in honor\nof <a href="https://en.wikipedia.org/wiki/Gerolamo_Cardano">Gerolamo Cardano</a>.</p>\n<h2>Coin Tossing</h2>\n<p>A Coin Tossing is a protocol that allows two or more parties to obtain\na uniformly random value. We use Coin Tossing protocol as a base of <a href="#ssc">SSC</a>.\nPlease read <a href="#paper">paper</a> (page 36) for more details about Coin Tossing.</p>\n<h2>Consensus Algorithm</h2>\n<p>A way for a decentralized system to reach a consistent view on shared\ncollections of data. Cardano SL uses the <a href="/cardano/proof-of-stake/">Ouroboros Consensus\nAlgorithm</a>, which is an algorithm based on\n<a href="#proof-of-stake">Proof of Stake</a>.</p>\n<h2>Cryptocurrency</h2>\n<p>A computer system which uses cryptographic protocols to generate a ledger.\nPlease read about <a href="/introduction/#cryptocurrency-basics">Cryptocurrency Basics</a>\nfor more details.</p>\n<h2>Daedalus</h2>\n<p>Cardano SL wallet application. It provides a GUI for users, so they can access\ntheir funds, send and receive transactions, etc. Please read about <a href="/technical/wallet-frontend/">Cardano SL\nWallet Frontend</a> for more details.</p>\n<h2>Decentralization</h2>\n<p>A notion of a computer system operating through interaction of independent\nnodes. In case of maintaining a shared data collection such as a ledger, a\nconsensus is required for consistency and reliability of data.</p>\n<h2>Epoch</h2>\n<p>A bigger period of time for which we know in advance who will have the right to\ngenerate a block in each slot. Please read <a href="#paper">paper</a> (page 3) for\ntechnical details.</p>\n<h2>Follow The Satoshi</h2>\n<p>A mechanism whereby stakeholders are selected at random to forge a new block in\nthe blockchain, with a proportional chance to get elected depending on their\namount of stake in the protocol.</p>\n<h2>Guaranteed Output Delivery</h2>\n<p>Guaranteed output delivery is a mechanism that proves that the honest parties\nare guaranteed to successfully complete the multiparty computation (MPC). We\nuse G.O.D. in <a href="#ssc">SSC</a>.</p>\n<h2>Honest Majority</h2>\n<p>Honest majority is a situation when the number of honest participants is strictly\ngreater than the number of adversaries, i.e. at least 50% + 1. Honest majority\nis assumed by default.</p>\n<h2>Kademlia</h2>\n<p>Please see <a href="#peer-discovery">Peer Discovery</a>.</p>\n<h2>Leader Election</h2>\n<p>A process of picking who will generate blocks during the next epoch. Leaders are\nelected with a probability proportional to their stake (see <a href="#proof-of-stake">Proof of\nStake</a>, <a href="#follow-the-satoshi">Follow the Satoshi</a>).</p>\n<h2>Ledger</h2>\n<p>A collection of data that keeps track of value assigned to individuals. Please\nread <a href="#paper">paper</a> (page 32) for technical details.</p>\n<h2>Lovelace</h2>\n<p>Name of a smallest unit of our currency. Named in honor of <a href="https://en.wikipedia.org/wiki/Ada_Lovelace">Ada\nLovelace</a>.</p>\n<h2>Minting</h2>\n<p>A process of a new block creation in <a href="/introduction/#proof-of-stake-and-minting">Proof of\nStake</a> systems.</p>\n<h2>Node</h2>\n<p>A computer program that participates in a decentralized protocol system. Please\nread <a href="/technical/#high-level-overview">High-level technical overview</a> for more\ndetails.</p>\n<h2>Paper</h2>\n<p>Official protocol report <a href="https://eprint.iacr.org/2016/889">Ouroboros: A Provably Secure Proof-of-Stake Blockchain\nProtocol</a>. Please notice that Cardano SL\nimplementation differs from the paper, <a href="/cardano/differences/">read about\ndifferences</a> for more details.</p>\n<h2>Peer Discovery</h2>\n<p>A way how a node can find other nodes after running. Peer discovery we use is\nbased on Kademlia DHT. Please read <a href="https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf">a Kademlia\npaper</a>\nfor technical details.</p>\n<h2>Plutus</h2>\n<p>Strictly typed pure functional programming language used for defining smart\ncontracts in Cardano. Please read about\n<a href="/technical/plutus/introduction/">Plutus</a> for more details.</p>\n<h2>Proof of Stake</h2>\n<p>Ouroboros Proof of Stake algorithm is the most important part of the <a href="#paper">protocol</a>.\nIt defines the way <a href="#node">nodes</a> reach consensus about the state of <a href="#ledger">ledger</a>.\nPlease read about <a href="/cardano/proof-of-stake/">Ouroboros Proof of Stake Algorithm</a>\nfor more details.</p>\n<h2>PVSS</h2>\n<p>PVSS (Publicly Verifiable Secret Sharing) is a cryptographic scheme we use in <a href="#ssc">SSC</a>.\nPlease read about <a href="/technical/pvss/">PVSS implementation in Cardano SL</a> for more details.</p>\n<h2>Richman</h2>\n<p>Stakeholder with stake enough for participation in some action. Particularly,\nthere are three kinds of such actions: randomness generation (for <a href="/technical/leader-selection/">slot leaders\nelections process</a>),\n<a href="/technical/delegation/#heavyweight-delegation">heavyweight stake delegation</a>\nand voting for <a href="/cardano/update-mechanism/#application-update-sign-and-announce">update proposals</a>.</p>\n<h2>Signing</h2>\n<p>A way to generate a proof of genuine authenticity of any kind of information we\nuse in <a href="#cryptocurrency">cryptocurrency</a>.</p>\n<h2>Slot</h2>\n<p>A small period of physical time that is significantly larger than the expected\ndifference in clocks on different nodes. Please read <a href="#paper">paper</a> (page 4) for\ntechnical details.</p>\n<h2>Slot Leader</h2>\n<p>A slot leader is a node which was elected to have a right to create a block in\nthe current slot. Please read <a href="#paper">paper</a> (page 7) for technical details.</p>\n<h2>SSC</h2>\n<p>SSC (Shared Seed Computation) is a part of <a href="#leader-election">slot leader election</a>\nprocess. This part is implemented as a <a href="#coin-tossing">Coin Tossing</a> protocol with\n<a href="#guaranteed-output-delivery">Guaranteed Output Delivery</a>. As a result of SSC we get\na randomness which will be used in <a href="#follow-the-satoshi">Follow The Satoshi</a> mechanism.</p>\n<h2>Stake</h2>\n<p>Please read about <a href="/cardano/balance-and-stake/">Balance and Stake in Cardano SL</a>\nfor explanation.</p>\n<h2>Stakeholder</h2>\n<p>A node with a positive stake.</p>\n<h2>Transaction</h2>\n<p>The data that represents the act of transferring value. Please read about\n<a href="/cardano/transactions/">Transactions in Cardano SL</a> for more details.</p>\n<h2>Transaction Fees</h2>\n<p>Please read about <a href="/cardano/transaction-fees/">Transaction Fees in Cardano SL</a>\nfor explanation.</p>',frontmatter:{path:"/cn/glossary/",doc_doc_title:"Glossary",author:null,date:null,language:"cn",label:"docs",keywords:"glossary foo"}}},{node:{id:"/Users/robinclark/iohk-sites/cardanodocs.com/src/pages/en/docs/2018-06-09-post1.en.md absPath of file >>> MarkdownRemark",excerpt:"\n##This is Post 1\n\npost1 one Cillum enim sint excepteur laborum mollit nulla dolore dolore id pariatur. Ea ullamco ex aute aliquip deserunt. Quis deserunt fugiat adipisicing ea cupidatat. Duis anim nisi officia sit irure. Esse Lorem exercitation ex ut.\n",html:"<h2>This is Post 1</h2>\n<p>post1 one Cillum enim sint excepteur laborum mollit nulla dolore dolore id pariatur. Ea ullamco ex aute aliquip deserunt. Quis deserunt fugiat adipisicing ea cupidatat. Duis anim nisi officia sit irure. Esse Lorem exercitation ex ut.</p>\n<!-- end -->\n<p>Tempor duis nisi ipsum deserunt Lorem duis voluptate aliqua deserunt ipsum occaecat consectetur velit ipsum. Minim eu eu culpa deserunt sit quis reprehenderit velit sunt esse non irure quis velit. Incididunt magna ipsum anim cillum excepteur proident excepteur aliquip tempor.</p>",frontmatter:{path:"/cn/post-1",doc_doc_title:"Post 1",author:"Charles Hoskinson",date:"06-09-2018",language:"cn",label:"docs",keywords:"post1 one"}}},{node:{id:"/Users/robinclark/iohk-sites/cardanodocs.com/src/pages/en/docs/2019-06-09-post2.en.md absPath of file >>> MarkdownRemark",excerpt:"\n##This is Post 2\n\npost2 two Tempor duis nisi ipsum deserunt Lorem duis voluptate aliqua deserunt ipsum occaecat consectetur velit ipsum. Minim eu eu culpa deserunt sit quis reprehenderit velit sunt esse non irure quis velit. Incididunt magna ipsum anim cillum excepteur proident excepteur aliquip tempor.\n",html:"<h2>This is Post 2</h2>\n<p>post2 two Tempor duis nisi ipsum deserunt Lorem duis voluptate aliqua deserunt ipsum occaecat consectetur velit ipsum. Minim eu eu culpa deserunt sit quis reprehenderit velit sunt esse non irure quis velit. Incididunt magna ipsum anim cillum excepteur proident excepteur aliquip tempor.</p>\n<!-- end -->\n<p>Cillum enim sint excepteur laborum mollit nulla dolore dolore id pariatur. Ea ullamco ex aute aliquip deserunt. Quis deserunt fugiat adipisicing ea cupidatat. Duis anim nisi officia sit irure. Esse Lorem exercitation ex ut.</p>",frontmatter:{path:"/cn/post-2",doc_doc_title:"Post 2",author:"Jonny S",date:"06-09-2018",language:"cn",label:"docs",keywords:"post2 two"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---cn-273c6016c13b80139a18.js.map