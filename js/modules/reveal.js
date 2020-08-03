export default function() {
    const ratio = .1
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }
    const handleIntersect = function(entries, observer) {
        entries.forEach(entry => {
            if(entry.intersectionRatio > ratio) {
                /*
                let revealType = entry.target.getAttribute("reveal-type")
                if(revealType === null || revealType === '') return false
                */
                entry.target.classList.add(`reveal-visible`)
                observer.unobserve(entry.target)
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersect, options)
    document.querySelectorAll("[class*='reveal-'").forEach(function(r) {
        observer.observe(r)
    })
}