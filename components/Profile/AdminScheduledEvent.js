import { parseDate } from "../../utilities/ParseDate.js"
import { statusMapWithClassName } from "../../utilities/StatusMap.js"

const AdminScheduledEvent = (event) => {

    const template = document.createElement("template")
    template.innerHTML = 
    `
    <div class="profile-list">
                    <div class="top-row">
                        <span class="list-title">${event.eventCategory}</span>
                        <span class="tag ${statusMapWithClassName[event.isCompleted ? "Completed" : "Pending"]}">${event.isCompleted ? "Completed" : "Not Completed"}</span>
                    </div>
                    <div class="inner-content">

                        <div class="data-row">
                            <div class="data-column">
                                <div class="data-cell">
                                    <div class="data-label">Event Start Date:</div>
                                    <div class="data-value">${parseDate(event.eventStartDate)}</div>
                                </div>
                            </div>
                            <div class="data-column">
                                <div class="data-cell">
                                    <div class="data-label">Event End Date:</div>
                                    <div class="data-value">${parseDate(event.eventEndDate)}</div>
                                </div>
                            </div>
                        </div>
                        <div class="data-row">
                            <div class="data-column">
                                <div class="data-cell">
                                    <div class="data-label">Venue Type:</div>
                                    <div class="data-value">${event.venueType}</div>
                                </div>
                            </div>
                            <div class="data-column">
                                <div class="data-cell">
                                    <div class="data-label">Food Preference Type:</div>
                                    <div class="data-value">${event.foodPreference}</div>
                                </div>
                            </div>
                        </div>
                        <div class="data-row">
                            <div class="data-cell">
                                <div class="data-label">Location Details:</div>
                                <div class="data-value">${event.locationDetails}</div>
                            </div>
                        </div>
                        <div class="data-row">
                            <div class="data-cell">
                                <div class="data-label">Special Instructions:</div>
                                <div class="data-value">${event.specialInstructions}</div>
                            </div>
                        </div>
                        <div class="data-row">
                            <div class="data-cell">
                                <div class="data-label">Catering Instructions:</div>
                                <div class="data-value">${event.cateringInstructions || "-"}</div>
                            </div>
                        </div>
                        ${event.isCompleted ?
                ""
                :
                `
                        <div class="scheduled-event-list-action-container">
                            <button data-scheduled-event-id=${event.scheduledEventId} class="mark-as-completed-btn action-btn">
                                Mark as Completed
                            </button>
                        </div>
                            `
            }
                    </div>
                </div>
                </div>
    `

    const content = template.content
    
    return content

}

export default AdminScheduledEvent