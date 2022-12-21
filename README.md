# TIP ME!
A decentralized system for restaurant servers to log their orders and collect their tips in ETH!

Application Demo : https://tip-dapp.onrender.com

## CONTRIBUTORS

Surya Pranesh Krishnan - 101442686 <br/>
Shantanu Ail - 101413427 <br/>
Vishnu Sankar - 101440532 <br/>

## PROBLEM STATEMENT
In the current scenario, we have seen that the tipping system is flawed. When we say flawed, it means that the server work the whole day, server the customers, get tipped and at the end of the day when it's time to collect their wages, it gets split amongst all the servers. We think this is unfair. When a certain server who is excellent at their work and manages to get more tips as compared to others who may not be so good with their customers ends up having to split their share with the rest seems wrong. The server has earned the tip because of their exceptional service. We are here to change how this thing works. 

## GOALS
Our goal is to create a decentralized web portal wherein the servers are able to login to a system, log their orders along with the tips they received & withdraw the total tip they have accumulated in Ether.

## STAKEHOLDERS

- Customers: These include the people who are here at the restaurant to have their meal. They act as the soruce of tips for the servers. 
- Servers: They are the entities who will be using the platform to log the orders they served and withdraw the tip amount as and when required.
- Management: This includes the manager & the owner of the restaurant i.e. the client for whom the system is made.
- Developers: These are the individuals or teams responsible for building and maintaining the application.

## RESTRICTIONS/RULES

- Some countries may have strict regulations on the use of cryptocurrency as a mode of payment. In such a case, the use of Ether will have to be substituted with that of a Fiat currency.
- The servers are restricted to adding only the orders they have served. They will not be able to add for others as they have to login to the system using their Metamask wallet.

## DATA
- There is no need to store any Personally Identifiable Information of the servers.
- Server's Wallet Address data is stored on blockchain along with the tips they have so far accumulated.
- We are also storing the individual order data in order to back trace and have a history of orders served in a period.
- Other than that, we are not storing any data off-chain as the data size is well within the on-chain limit.

## USER STORIES

A server takes the orders from the customers and serves them the food. Impressed by the quality of service provided by the server, the customers give a generous tip to the server. Delighted with the tip, the server goes to the Tip Me system and logs the order for the previous customers. Upon submitting the order, the server sees that they are on the top of the Waiters Leaderboard. She serves many other customers and the tips keep on adding to her balance. At the end of the shift, she sees that she has managed to accumulate a substantial amount of tip in the system. She therefore thinks of withdrawing the balance to her Metamask Wallet. She then proceeds to do so by clicking on the withdraw button and confirming the withdrawal on her Metamask Wallet prompt. In a few minutes she sees the amount deposited in her wallet!

# ARCHITECTURE

### FUNCTIONS - INPUTS/OUTPUTS

#### TipMe CONTRACT
- addWaiter: This function allows the server to add themselves to the system.
- addOrder: This function allows the server to add the order they completed along with the tip amount.
- getWaiters: This function is used to display the servers in the Waiters Leaderboard.
- getOrders: This function is used to display the orders completed in the system.
- waiterToTip: This mapping is used to co-relate a particular server with their corresponding tips. 
- withdrawTips: This function is used by the server to withdraw the tips earned by them.

## DIAGRAM (FLOW CHART)
![TipMe Application](flowchart.jpeg "TipMe Application") <br/>

## TECH STACK
- Programming languages: Solidity, Javascript
- Blockchain platform: Ethereum, Goerli

# PROJECT PLAN

## DEPENDENCIES
- NPM
- Vite.js
- React

## GANTT CHART – SIMPLE
![TipMe Application](gaantchart.png "TipMe Application") <br/>


# SMART CONTRACT

#### TipMe.SOL (0XE49D4933EDF843EE3294A456467EDC758D32184D  - Goerli Testnet)
- Default contract for executing the functions of the program.
- - https://goerli.etherscan.io/address/0xe49d4933edf843ee3294a456467edc758d32184d

# HOW TO RUN PROJECT

#### Clone repository
git clone https://github.com/suryapranesh4/Tip-Management-System-Dapp.git <br/>
cd Tip-Management-System-Dapp

#### Install dependencies for smart contract
cd smart_contract && npm install
 
#### Install dependencies for client
cd client && npm install

#### Run the client
npm run dev

#### Client runs on http://localhost:5173 in the browser

## SCREENSHOTS OF THE APPLICATION

#### Connect wallet screen : <br/>
![TipMe Application](connect.png "TipMe Application") <br/>


#### Goerli etherscan - Smart contract screenshot : <br/>
![TipMe Application](etherscan.png "TipMe Application") <br/>


#### Initial UI of the app : <br/>
![TipMe Application](initialApp.png "TipMe Application") <br/>


#### Loading screen : <br/>
![TipMe Application](loaders.png "TipMe Application") <br/>


#### Tip Management application : <br/>
![TipMe Application](appscreen.png "TipMe Application") <br/>


#### Metamask wallet interaction: <br/>
![TipMe Application](metamask.png "TipMe Application") <br/>


#### Testing code in remix : <br/>
![TipMe Application](remix.png "TipMe Application") <br/>


#### Metamask wallet connection: <br/>
![TipMe Application](wallet.png "TipMe Application") <br/>


