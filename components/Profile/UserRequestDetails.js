import { parseDate } from "../../utilities/ParseDate.js"
import { statusMapWithClassName } from "../../utilities/StatusMap.js"

const UserRequestDetails = (data) => {
    const template = document.createElement("template")

    template.innerHTML =
        `
    <div class="request-details">
                    <div class="top-row">
                        <span class="list-title">${data.eventCategory}</span>
                        <span class="tag ${statusMapWithClassName[data.quotationStatus]}">${data.quotationStatus}</span>
                    </div>
                    <div class="inner-content">
                        <div class="data-row">
                            <div class="data-column">
                                <div class="data-cell">
                                    <div class="data-label">Event Start Date:</div>
                                    <div class="data-value">${parseDate(data.eventStartDate)}</div>
                                </div>
                            </div>
                            <div class="data-column">
                                <div class="data-cell">
                                    <div class="data-label">Event End Date:</div>
                                    <div class="data-value">${parseDate(data.eventEndDate)}</div>
                                </div>
                            </div>
                        </div>
                        <div class="data-row">
                            <div class="data-column">
                                <div class="data-cell">
                                    <div class="data-label">Venue Type:</div>
                                    <div class="data-value">${data.venueType}</div>
                                </div>
                            </div>
                            <div class="data-column">
                                <div class="data-cell">
                                    <div class="data-label">Food Preference Type:</div>
                                    <div class="data-value">${data.foodPreference}</div>
                                </div>
                            </div>
                        </div>
                        <div class="data-row">
                            <div class="data-cell">
                                <div class="data-label">Location Details:</div>
                                <div class="data-value">${data.locationDetails}</div>
                            </div>
                        </div>
                        <div class="data-row">
                            <div class="data-cell">
                                <div class="data-label">Special Instructions:</div>
                                <div class="data-value">${data.specialInstructions}</div>
                            </div>
                        </div>
                        <div class="data-row">
                            <div class="data-cell">
                                <div class="data-label">Catering Instructions:</div>
                                <div class="data-value">${data.cateringInstructions || "-"}</div>
                            </div>
                        </div>
                    </div>
                    ${data.quotationResponse ?
            `<div class="admin-response">
                        <div class="top-row">
                            <span class="list-title">Admin Response</span>
                            <span class="tag ${statusMapWithClassName[data.quotationResponse.requestStatus]}">
                                ${data.quotationResponse.requestStatus}
                            </span>
                        </div>
                        <div class="inner-content">
                        ${data.quotationResponse.requestStatus === "Accepted" ? `<div class="data-row">
                                <div class="data-cell">
                                    <div class="data-label">
                                        Quoted Amount:
                                    </div>
                                    <div class="data-value">
                                        ${data.quotationResponse.quotedAmount} ${data.quotationResponse.currency}
                                    </div>
                                </div>
                            </div>` : ""
            }    
                            <div class="response-message">
                            ${data.quotationResponse.responseMessage}
                            </div>
                            <div class="action-tags-container">
                            ${data.quotationResponse.clientResponse ?
                `           
                    ${data.quotationResponse.clientResponse.clientDecision === "Accepted" ?
                    `                
                    <div class="tag success">
                        <img src="./assets/green_tick.svg" alt="">
                        <span>Accepted</span>
                    </div>
                    ${data.quotationResponse.clientResponse.isPaid ?
                        `
                            <div class="tag warning">
                                <span>Paid</span>
                            </div>
                        ` :
                        `
                        <button data-order-id="${data.quotationResponse.clientResponse.orderId}" class="action-btn pay-now">
                            Pay Now
                        </button>
                        `
                    }
                    `
                    :
                    `
                                    <div class="tag fail">
                <img src="./assets/red_close.svg" alt="">
                <span>Rejected</span>
                </div>
                    `

                } 
                ` :
                `
                    ${data.quotationResponse.requestStatus === "Accepted" ?
                    `
                            <div 
                            data-quotation-response-id="${data.quotationResponse.quotationResponseId}" 
                            data-quotation-request-id="${data.quotationRequestId}" 
                            data-decision="Accepted" 
                            class="tag action success client-decision-btn">
                                <img src="./assets/green_tick.svg" alt="">
                                <span>Accept</span>
                            </div>
                            <div 
                            data-quotation-response-id="${data.quotationResponse.quotationResponseId}" 
                            data-quotation-request-id="${data.quotationRequestId}"
                            data-decision="Denied" 
                            class="tag action fail client-decision-btn">
                                <img src="./assets/red_close.svg" alt="">
                                <span>Reject</span>
                            </div>`
                    :
                    ``
                }
                `
            }
                            </div>
                        </div>
                    </div>
                </div>` :
            `
`
        }
    `


    const content = template.content

    return content
}

export default UserRequestDetails