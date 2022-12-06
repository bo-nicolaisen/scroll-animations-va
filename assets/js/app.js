const numSteps = 20.0;

let boxElement;




// Set things up on load
window.addEventListener("load", (event) => {
    scrollElements = document.querySelectorAll(".scroll-reveal");

    scrollElements = Array.from(scrollElements);

    scrollElements.forEach(element => {
        createObserver(element);
    })

}, false);




// Intersection Observer creation

function createObserver(element) {
    let observer;

    // use threshold list for diffrent behaviours for diffrent visibility deggree
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: buildThresholdList()
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);
}




// call back to handles intersects  

function handleIntersect(entries, observer) {

    entries.forEach((entry) => {


        if (entry.intersectionRatio > 0.4) {

            /*        console.log('in: ' + entry.target);
                   console.log(entry.target.querySelectorAll('.fade')); */

            let fadeElements = Array.from(entry.target.querySelectorAll('.fade'));
            fadeElements.forEach(element => {

                if (!element.classList.contains('fadeIn')) {
                    console.log('fade in');
                    element.classList.add('fadeIn');
                    element.classList.remove('fadeOut');
                }
            })

        }
        else {
            let fadeElements = Array.from(entry.target.querySelectorAll('.fade'));

            fadeElements.forEach(element => {

                if (!element.classList.contains('fadeOut')) {
                    console.log('fade out');
                    element.classList.remove('fadeIn');
                    element.classList.add('fadeOut');
                }
            })
        }

    });
}



function buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
}
