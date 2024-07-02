import fetchData from "../utilities/FetchData.js"
import { createAddEventOverlay, createEditEventOverlay } from "./ManageEventOverlay.js";
import UserRequest from "../components/Profile/UserRequest.js";
import UserRequestDetails from "../components/Profile/UserRequestDetails.js";
import UserOrder from "../components/Profile/UserOrder.js";
import UserScheduledEventCard from "../components/Profile/UserScheduledEventCard.js";
import AdminEventCard from "../components/Profile/AdminEventCard.js";
import AdminRequestCard from "../components/Profile/AdminRequestCard.js";
import AdminScheduledEvent from "../components/Profile/AdminScheduledEvent.js";


export const onRequestListMount = async (parentContainer) => {
    const data = await fetchData("/api/user/requests", "GET")
    const container = document.createElement("div")
    container.classList.add("profile-list-container", "list", "quotation-requests-container")
    
    const makeContent = (dataParam) => {
        dataParam.forEach(request => {
            const userRequestContent = UserRequest(request)
            container.appendChild(userRequestContent)
        })
    }
    
    makeContent(data)

    parentContainer.appendChild(container);
}


export const onRequestDetailsMount = async (parentContainer, requestId) => {
    const data = await fetchData(`/api/user/requests/${requestId}`, "GET")
    
    const container = document.createElement("div")
    container.classList.add("profile-list-container", "quotation-requests-container")
    const userRequestDetailsContent = UserRequestDetails(data)
    container.appendChild(userRequestDetailsContent)

    parentContainer.appendChild(container)

}

export const onOrderListMount = async (parentContainer) => {
    const data = await fetchData("/api/user/orders", "GET")
    const container = document.createElement("div")
    container.classList.add("profile-list-container", "list", "order-list")
    
    const makeContent = (dataParams) => {
        dataParams.forEach(order => {
            const orderContent = UserOrder(order    )
            container.appendChild(orderContent)
        })
    }

    makeContent(data)

    parentContainer.appendChild(container);


}
export const onScheduledEventListMount = async (parentContainer) => {
    const data = await fetchData("/api/user/events", "GET")
    const container = document.createElement("div")
    container.classList.add("profile-list-container", "list", "scheduled-event-list")
    data.forEach(event => {
        const userScheduledEventContent = UserScheduledEventCard(event)
        container.appendChild(userScheduledEventContent)
    })
    parentContainer.appendChild(container);

}


export const onAdminManageEventMount = async (parentContainer) => {

    const data = await fetchData("/api/admin/events", "GET")
    const container = document.createElement("div")
    const profileSectionTitle = parentContainer.querySelector(".profile-section-title")
    const addEventBtn = document.createElement("button")
    addEventBtn.textContent = "Add Event"
    addEventBtn.classList.add("add-event-btn")
    addEventBtn.onclick = createAddEventOverlay
    profileSectionTitle.appendChild(addEventBtn)
    container.classList.add("profile-list-container", "list", "scheduled-event-list")
    data.forEach(event => {

        const requestElementContent = AdminEventCard(event)
        container.appendChild(requestElementContent)
    })
    parentContainer.appendChild(container);

}

const renderAdminRequests = (parentContainer, data, headerBtn) => {
    const container = document.createElement("div")
    container.classList.add("profile-list-container", "list", "quotation-requests-container")
    const profileSectionTitle = parentContainer.querySelector(".profile-section-title")
    profileSectionTitle.querySelector(".filter-request-btn")?.remove()
    profileSectionTitle.appendChild(headerBtn)

    data.forEach(request => {
        const content = AdminRequestCard(request)

        container.appendChild(content)
    })
    parentContainer.appendChild(container);
}

export const onAdminRequestMount = async (parentContainer) => {
    const data = await fetchData("/api/admin/quotations", "GET")

    const filterNewBtn = document.createElement("button")
    filterNewBtn.classList.add("filter-request-btn", "new-request-btn")
    filterNewBtn.textContent = "Show New"
    
    const showAllBtn = document.createElement("button")
    showAllBtn.classList.add("filter-request-btn", "all-request-btn")
    showAllBtn.textContent = "Show All"
    
    showAllBtn.onclick = () => {
        parentContainer.querySelector(".profile-list-container").remove()
        renderAdminRequests(parentContainer, data, filterNewBtn)
    }
    
    filterNewBtn.onclick = () => {
        parentContainer.querySelector(".profile-list-container").remove()
        const filteredData = data.filter(element=>element.quotationStatus === 'Initiated')
        renderAdminRequests(parentContainer, filteredData, showAllBtn)
    }
    
    renderAdminRequests(parentContainer, data, filterNewBtn)
}


export const onAdminScheduledEventListMount = async (parentContainer) => {
    const data = await fetchData("/api/admin/events/scheduled", "GET")
    const container = document.createElement("div")
    container.classList.add("profile-list-container", "list", "scheduled-event-list")
    data.forEach(event => {
        const content = AdminScheduledEvent(event)                
        container.appendChild(content)

    })
    parentContainer.appendChild(container);

}