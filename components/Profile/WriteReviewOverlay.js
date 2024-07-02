import { makeActiveTab } from "../../scripts/Profile.js"
import { cancelWriteReviewOverlay } from "../../scripts/WriteReviewOverlay.js"
import fetchData from "../../utilities/FetchData.js"

const WriteReviewOverlay = (orderId) => {

    const template = document.createElement("template")
    template.innerHTML =
    `
    <div class="write-review-overlay-container overlay-container">
        <form class="respond-to-event-form">
            <div class="form-title">Write Review</div>
            <div class="fields-container">
                <div class="inp-field">
                    <label for="comments">Comments</label>
                    <textarea type="text" id="comments" name="comments"></textarea>
                    <div class="error-section"></div>
                </div>
                <div class="inp-field">
                    <label for="rating">Rating</label>
                    <select id="rating" name="rating" type="text">
                        <option value="" selected disabled>Select Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <div class="error-section"></div>
                </div>                
            </div>
            <div class="form-btn-container">
                <button type="button" class="cancel-btn btn">Cancel</button>
                <button type="submit" class="save-btn btn">Save</button>
            </div>
        </form>

    </div>
    `

    const content = template.content

    const form = content.querySelector("form")
    form.onsubmit = async (e) => {
        e.preventDefault()
        const formdata = new FormData(form)
    
        const comments = formdata.get('comments')
        const rating = formdata.get('rating')
    
        const commentErrorSection = form.querySelector("[name=comments] + .error-section")
        const ratingErrorSection = form.querySelector("[name=rating] + .error-section")
    
        commentErrorSection.textContent = ""
        ratingErrorSection.textContent = ""
    
        if (!comments) {
            commentErrorSection.textContent = "Comment is required"
            return;
        }
        if (!rating) {
            ratingErrorSection.textContent = "Rating is required"
            return;
        }
        
        await fetchData(`/api/user/orders/reviews/${orderId}`,"POST",{comments, rating})
        cancelWriteReviewOverlay()
        makeActiveTab('scheduledEvents')
    }

    const cancelBtn = content.querySelector(".cancel-btn")
    cancelBtn.onclick = cancelWriteReviewOverlay
    
    return content
}

export default WriteReviewOverlay