import { cancelViewReviewOverlay } from "../../scripts/ViewReviewOverlay.js"
import ReviewCard from "./ReviewCard.js"

const ReviewOverlay = (reviews) => {

    const template = document.createElement("template")
    template.innerHTML =
        `
    <div class="view-review-overlay-container overlay-container">
        <div class="review-wrapper">
            <div class="form-title">Reviews</div>
            <div class="reviews-container ${reviews?.length === 0? 'hidden':''}">

            </div>
            <div class="review-empty-text">
                No Reviews for this event
            </div>
            <div class="form-btn-container">
                <button type="button" class="cancel-btn btn">Cancel</button>
            </div>
        </div>

    </div>
    `

    const content = template.content
    const reviewsContainer = content.querySelector(".reviews-container")
    const cancelBtn = content.querySelector(".cancel-btn")
    cancelBtn.onclick = cancelViewReviewOverlay
    
    reviews.forEach(review => {
        const reviewCard = ReviewCard(review)
        reviewsContainer.appendChild(reviewCard)
    })
    
    return content
}

export default ReviewOverlay