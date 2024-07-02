import ReviewOverlay from "../components/Profile/ReviewOverlay.js"


export const createViewReviewOverlay = (eventDetails) => {
    const { reviews } = eventDetails
    const reviewOverlayElement = ReviewOverlay(reviews)
    document.body.appendChild(reviewOverlayElement)

}

export const cancelViewReviewOverlay = () => {
    const reviewOverlayElement = document.querySelector(".view-review-overlay-container")
    reviewOverlayElement?.remove()
}
