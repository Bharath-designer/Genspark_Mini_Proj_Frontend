import { generateRatingStars } from "../../utilities/GeneratingRating.js"
import { modifyTextContent } from "../../utilities/ModifyTextContent.js"


const ReviewCard = (review) => {
    const template = document.createElement("template")
    template.innerHTML =
        `
        <div class="review-card">
                <div class="name-row">
                    <span class="name"></span>
                    <span class="rating-container">
                        ${generateRatingStars(review.rating)}
                    </span>
                </div>
                <div class="comment-row">

                </div>
        </div>    
    `

    const content = template.content

    modifyTextContent(content, '.name', review.userName)
    modifyTextContent(content, '.comment-row', review.comments)
    
    return content
}


export default ReviewCard