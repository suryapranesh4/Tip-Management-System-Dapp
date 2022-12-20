import React, { useEffect, useContext } from "react"
import "./styles.css"

import { TipMeContext } from "./../context/TipMeContext"
import Input from "./../utils/inputField"
import Loader from "./Loader"

export default function Home() {
    const {
        handleChange,
        addOrder,
        getOrders,
        orders,
        getLeaderboard,
        leaderboard,
        withdrawTips,
        isLoading,
    } = useContext(TipMeContext)

    useEffect(() => {
        getOrders()
        getLeaderboard()
    }, [])
    return (
        <div className="home">
            {isLoading ? (
                <Loader />
            ) : (
                <React.Fragment>
                    <div className="orderDetails">
                        <div className="addOrderSection">
                            <p className="title">Order Details</p>
                            <div className="orderData">
                                <form
                                    className="orderData"
                                    onSubmit={(e) => {
                                        e.preventDefault()
                                        addOrder()
                                    }}
                                >
                                    <div className="transactionData">
                                        <strong>Order Amount </strong>
                                        <span>
                                            <Input
                                                name="orderAmount"
                                                type="number"
                                                handleChange={handleChange}
                                            />
                                        </span>
                                    </div>
                                    <div className="transactionData">
                                        <strong>Tip Amount </strong>
                                        <span>
                                            <Input
                                                name="tipAmount"
                                                type="number"
                                                handleChange={handleChange}
                                            />
                                        </span>
                                    </div>

                                    <button className="submitButton" onClick={() => addOrder}>
                                        Add order
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="ordersSection">
                            <p className="title">Orders</p>
                            {orders && orders.length > 0 ? (
                                <div className="allOrders">
                                    {orders.map((order, i) => {
                                        const {
                                            orderNumber,
                                            orderAmount,
                                            tipAmount,
                                            waiterAddress,
                                            waiterName,
                                        } = order
                                        return (
                                            <div key={i} className="eachData">
                                                <div className="transactionData">
                                                    <strong>Order Number </strong>
                                                    <span>#{orderNumber}</span>
                                                </div>
                                                <div className="transactionData">
                                                    <strong>Order Amount </strong>
                                                    <span>${orderAmount}</span>
                                                </div>
                                                <div className="transactionData">
                                                    <strong>Waiter </strong>
                                                    <span>{waiterName || waiterAddress}</span>
                                                </div>
                                                <div className="transactionData">
                                                    <strong>Tip Amount </strong>
                                                    <span>{tipAmount} ETH</span>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : (
                                <p className="subtitle">No orders</p>
                            )}
                        </div>
                    </div>
                    <div className="leaderboard">
                        <p className="title">Waiters Leaderboard</p>
                        {leaderboard && leaderboard.length > 0 ? (
                            <React.Fragment>
                                {leaderboard.map((waiter, i) => {
                                    const { tip, waiterAddress, waiterName } = waiter
                                    return (
                                        <div key={i} className="eachData">
                                            <div className="transactionData">
                                                <strong>Waiter Address </strong>
                                                <span>{waiterAddress}</span>
                                            </div>
                                            <div className="transactionData">
                                                <strong>Tips of the day </strong>
                                                <span>{tip}</span>
                                            </div>
                                            <button
                                                className="submitButton"
                                                onClick={() => withdrawTips()}
                                            >
                                                Withdraw tips
                                            </button>
                                        </div>
                                    )
                                })}
                            </React.Fragment>
                        ) : (
                            <p className="subtitle">No orders taken</p>
                        )}
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}
