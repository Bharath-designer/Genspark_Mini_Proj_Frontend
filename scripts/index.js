import EventCard from "../components/Home/EventCard.js";
import TestimonialCard from "../components/Home/TestimonialCard.js";
import fetchData from "../utilities/FetchData.js";

let userRole = null

const getUserRole = async () => {
    const { isAuthenticated, success, data } = await fetchData("/api/verify", "GET", null, true)

    const navContainer = document.querySelector(".nav-right")
    navContainer.classList.remove("hidden");
    if (!isAuthenticated) {
        return console.error('Not authenticated')
    }
    if (!success) {
        return console.error("Something went wrong")
    }

    navContainer.classList.add("authenticated");
    userRole = data.role
}


const makeEvents = async () => {
    try {
        await getUserRole()
        const { data: events } = await fetchData("/api/events", "GET", null, true)
        const container = document.querySelector(".service-elements-container")
        events.forEach(event => {
            const eventCardContent = EventCard(event, userRole)
            container.append(eventCardContent)
        })
    } catch (error) {
        alert("Can't establish backend connection, some content might not be loaded")
    }
}

const makeTestimonials = async () => {
    try {
        const { data: events } = await fetchData("/api/events/review/top", "GET", null, true)
        const container = document.querySelector(".testimonial-wrapper")
        events.forEach(event => {
            const testimonialCardContent = TestimonialCard(event)
            container.append(testimonialCardContent)
        })
    } catch (error) {
        alert("Can't establish backend connection, some content might not be loaded")
    }
}


const hamburgerEvents = () => {
    const hamburgerIcon = document.querySelector(".hamburger-icon")
    const navBar = document.querySelector(".mobile-nav-right")
    const hamburgerImg = hamburgerIcon.querySelector("img")
    console.log(hamburgerIcon);     
    let isNavOpen = false
    
    const autoCloseFunc = (e) => {
        if (!e.target.closest('.mobile-nav-right') || e.target.closest('.nav-item')) {
            hamburgerIcon.click()
        }
    }
    
    
    hamburgerIcon.onclick = (e) => {
        e.stopPropagation()
        navBar.classList.toggle('hidden')
        isNavOpen = !isNavOpen
        if (isNavOpen) {
            if (userRole !== null) {
                navBar.classList.add("authenticated");
            }
            hamburgerImg.src = "./assets/white_close.svg"
            document.body.addEventListener('click', autoCloseFunc)
        } else {
            hamburgerImg.src = "./assets/hamburger.svg"
            document.body.removeEventListener('click', autoCloseFunc)
        }
    }
}


hamburgerEvents()
makeEvents()
makeTestimonials()