import { createRespondToEventOverlay } from "../../scripts/RespondToEventOverlay.js"
import { parseDate } from "../../utilities/ParseDate.js"
import { statusMapWithClassName } from "../../utilities/StatusMap.js"

const AdminRequestCard = (request) => {

    const template = document.createElement("template")
    template.innerHTML =
    `
    <div data-quotation-request-id=${request.quotationRequestId} class="profile-list">
                    <div class="top-row">
                        <span class="list-title">${request.eventCategory}</span>
                        <span class="tag ${statusMapWithClassName[request.quotationStatus]}">${request.quotationStatus}</span>
                    </div>
                    <div class="inner-content">
                        <div class="data-row">
                            <div class="data-column">
                                <div class="data-cell">
                                    <div class="data-label">Event Start Date:</div>
                                    <div class="data-value">${parseDate(request.eventStartDate)}</div>
                                </div>
                            </div>
                            <div class="data-column">
                                <div class="data-cell">
                                    <div class="data-label">Event End Date:</div>
                                    <div class="data-value">${parseDate(request.eventEndDate)}</div>
                                </div>
                            </div>
                        </div>
                        <div class="data-row">
                            <div class="data-column">
                                <div class="data-cell">
                                    <div class="data-label">Venue Type:</div>
                                    <div class="data-value">${request.venueType}</div>
                                </div>
                            </div>
                            <div class="data-column">
                                <div class="data-cell">
                                    <div class="data-label">Food Preference Type:</div>
                                    <div class="data-value">${request.foodPreference}</div>
                                </div>
                            </div>
                        </div>
                        <div class="data-row">
                            <div class="data-cell">
                                <div class="data-label">Location Details:</div>
                                <div class="data-value">${request.locationDetails}</div>
                            </div>
                        </div>
                        <div class="data-row">
                            <div class="data-cell">
                                <div class="data-label">Special Instructions:</div>
                                <div class="data-value">${request.specialInstructions}</div>
                            </div>
                        </div>
                        <div class="data-row">
                            <div class="data-cell">
                                <div class="data-label">Catering Instructions:</div>
                                <div class="data-value">${request.cateringInstructions || "-"}</div>
                            </div>
                        </div>
                        ${request.quotationStatus === 'Responded' ? "" :
                `
                            <div class="action-btn-container">
                                <button data-event-category-id='{event.eventCategoryId} 'class="action-btn respond-to-event-btn">
                                    <span>Respond</span>
                                </button>
                            </div>
                            `
            }
                    </div>
                </div>
    `

    const content = template.content
    if (request.quotationStatus === "Initiated") {
        const respondBtn = content.querySelector(".respond-to-event-btn")
        respondBtn.onclick = () => createRespondToEventOverlay(request.quotationRequestId)
    }
    
    return content

}

export default AdminRequestCard