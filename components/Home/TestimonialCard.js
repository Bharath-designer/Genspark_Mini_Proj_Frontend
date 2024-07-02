import { generateRatingStars } from "../../utilities/GeneratingRating.js";

const TestimonialCard = (review) => {
    console.log(review);
    const template = document.createElement("template")
    template.innerHTML =
        `
        <div class="testimonial swiper-slide">
            <div class="name-row">
                <span class="name">${review.userName}</span>
                <span class="rating-container">
                    ${generateRatingStars(review.rating)}
                </span>
            </div>
            <div class="comment-row">
                ${review.comments}
            </div>
        </div>
        `

        const content = template.content
        return content

}

export default TestimonialCard