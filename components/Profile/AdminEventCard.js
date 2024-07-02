import { createEditEventOverlay } from "../../scripts/ManageEventOverlay.js"
import { createViewReviewOverlay } from "../../scripts/ViewReviewOverlay.js"
import { generateRatingStars } from "../../utilities/GeneratingRating.js"

const AdminEventCard = (event) => {
    const template = document.createElement("template") 
    template.innerHTML = 
    `
    <div class="profile-list">
                    <div class="top-row">
                        <span class="list-title">${event.eventName}</span>
                        <span class="tag ${event.isActive ? 'success' : 'fail'}">${event.isActive ? 'Active' : 'Not Active'}</span>
                    </div>
                    <div class="event-inner-content">
                        <div class="desc">
                            ${event.description}
                        </div>
                        <span class="rating-container">
                            ${generateRatingStars(event.rating)}
                        </span>
                        <div class="action-btn-container">
                            <button data-event-category-id=${event.eventCategoryId} class="action-btn-admin edit-event-btn">
                                <img src="./assets/edit_icon.svg" alt="">
                                <span>Edit Event</span>
                            </button>
                            <button data-event-category-id=${event.eventCategoryId} class="action-btn-admin view-event-review-btn">
                                <img src="./assets/review_icon.svg" alt="">
                                <span>View Reviews</span>
                            </button>
                        </div>
                    </div>

                </div>
    `

    const content = template.content

    const editBtn = content.querySelector(".edit-event-btn")
        editBtn.onclick = () => {
            createEditEventOverlay(event)
        }
        
        const viewReviewBtn = content.querySelector(".view-event-review-btn")
        viewReviewBtn.onclick = () => {
            createViewReviewOverlay(event)
        }

    return content
}

export default AdminEventCard