function scrollTrigger(selector) {
    let myElements = document.querySelectorAll(selector)
    myElements = Array.from(myElements)
    myElements.forEach(el => {
        addObserver(el)
    })


}
function addObserver(el) {
    // We are creating a new IntersectionObserver instance
    let observer = new IntersectionObserver((entries, observer) => { // This takes a callback function that receives two arguments: the elements list and the observer instance.
        entries.forEach(entry => {
            // `entry.isIntersecting` will be true if the element is visible
            if (entry.isIntersecting) {
                entry.target.classList.add('active')
                // We are removing the observer from the element after adding the active class
                observer.unobserve(entry.target)
            }
        })
    })
    // Adding the observer to the element
    observer.observe(el)
}
// Example usage
scrollTrigger('.scroll-reveal')