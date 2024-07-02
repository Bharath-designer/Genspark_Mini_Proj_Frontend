import WriteReviewOverlay from "../components/Profile/WriteReviewOverlay.js"


export const createWriteReviewOverlay = (orderId) => {
    const reviewOverlayElement = WriteReviewOverlay(orderId)
    document.body.appendChild(reviewOverlayElement)
}

export const cancelWriteReviewOverlay = () => {
    const reviewOverlayElement = document.querySelector(".write-review-overlay-container")
    reviewOverlayElement?.remove()
}
