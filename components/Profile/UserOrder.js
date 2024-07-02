import { parseDate } from "../../utilities/ParseDate.js"
import { statusMapWithClassName } from "../../utilities/StatusMap.js"

const UserOrder = (order) => {

    const template = document.createElement("template")

    template.innerHTML = 
    `
    <div class="profile-list">
                    <div class="top-row">
                        <span class="list-title">${order.eventDetails.eventCategory}</span>
                        <span class="tag ${statusMapWithClassName[order.orderStatus]}">${order.orderStatus}</span>
                    </div>
                    <div class="inner-content">
                        <div class="data-row">
                            <div class="data-column">
                                <div class="data-cell">
                                    <div class="data-label">Event Start Date:</div>
                                    <div class="data-value">${parseDate(order.eventDetails.eventStartDate)}</div>
                                </div>
                            </div>
                            <div class="data-column">
                                <div class="data-cell">
                                    <div class="data-label">Event End Date:</div>
                                    <div class="data-value">${parseDate(order.eventDetails.eventEndDate)}</div>
                                </div>
                            </div>
                        </div>
                        <div class="data-row">
                            <div class="data-cell">
                                <div class="data-label">Amount:</div>
                                <div class="data-value">${order.totalAmount} ${order.currency}</div>
                            </div>
                        </div>
                        ${order.orderStatus !== "Completed" ?
                `<div class="order-action-btn">
                            <button data-order-id="${order.orderId}" class="action-btn pay-now">Pay Now</button>
                        </div>` : ""
            }
                    </div>
                </div>
    `

    const content = template.content

    return content

}

export default UserOrder