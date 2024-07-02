import { createQuotationRequestOverlay } from "../../scripts/QuotationRequestOverlay.js"

const EventCard = (event, userRole) => {
    const template = document.createElement("template")
    template.innerHTML =
        `
        <div class="service-element">
            <div class="title">
                ${event.eventName}
            </div>
            <div class="service-desc">
                ${event.description}
            </div>
            ${userRole === 'Admin' ? "" :
            `
                 <button class="request-quotation-btn">
                        Request Quotation
                 </button>
                        `
        }
        </div>
        `
    const content = template.content
    const requestBtn = content.querySelector(".request-quotation-btn")
    
    if (requestBtn) requestBtn.onclick = () => {

        if (userRole === null) {
            location.href = '/Login.html'
            return;
        }

        createQuotationRequestOverlay(event.eventCategoryId)
    }

    return content
}


export default EventCard