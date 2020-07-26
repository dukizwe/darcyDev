var typedTextSpan = document.querySelector('.typed-text')
var cursorSpan = document.querySelector('.cursor')
var typedTexts = [
    "<?= true ? 'Hello world' : '404' ?>",
    "if(world.hasCorona()) people.",
    [
        "stayHome()",
        "washHands()",
        "dontHug()"
    ]
]

var typingDelay = 100
var erasingDelay = 50
var newWordDelay = 2000
var arrayIndex = 0
var charIndex = 0
var prevSpanLength = 0
var toTypeAgain = null
/**
 * tapez les elements au depart
 * 
 */
export default function type() {
    if(charIndex < typedTexts[arrayIndex].length) {
        cursorSpan.classList.add('typing')
        var span = `<span>${typedTexts[arrayIndex].charAt(charIndex)}</span>`
        if(arrayIndex == 0 && (charIndex == 0 || charIndex == 1 || charIndex == 2 | charIndex == 33 || charIndex == 34)) {
            span = `<span style='color:#b7b2b2'>${typedTexts[arrayIndex].charAt(charIndex)}</span>`
        } else if(arrayIndex == 0 && (charIndex == 4 || charIndex == 5 || charIndex == 6 || charIndex == 7)) {
            span = `<span style='color:#3c30f1'>${typedTexts[arrayIndex].charAt(charIndex)}</span>`
        } else if(arrayIndex == 0 && (charIndex == 9 || charIndex == 25)) {
            span = `<span style='color:#ff0bcedd'>${typedTexts[arrayIndex].charAt(charIndex)}</span>`
        } else if(arrayIndex == 0 && (charIndex == 9 || charIndex == 11 || charIndex == 12 || charIndex == 13 || charIndex == 14 || charIndex == 15 || charIndex == 16 || charIndex == 17 || charIndex == 18 || charIndex == 19 || charIndex == 20 || charIndex == 21 || charIndex == 22 || charIndex == 23 || charIndex == 27 || charIndex == 28 || charIndex == 29 || charIndex == 30 || charIndex == 31)) {
            span = `<span style='color:#2ae08c94'>${typedTexts[arrayIndex].charAt(charIndex)}</span>`
        }
        if(arrayIndex == 1 && (charIndex == 0 || charIndex == 1)) {
            span = `<span style='color:#ff0bcedd'>${typedTexts[arrayIndex].charAt(charIndex)}</span>`
        } else if(arrayIndex == 1 && (charIndex == 2 || charIndex == 18 || charIndex == 19 || charIndex == 20)) {
            span = `<span style='color:#f1dada'>${typedTexts[arrayIndex].charAt(charIndex)}</span>`
        } else if(arrayIndex == 1 && (charIndex == 3 || charIndex == 4 || charIndex == 5 || charIndex == 6 || charIndex == 7 || charIndex == 22 || charIndex == 23 || charIndex == 24 || charIndex == 25 || charIndex == 26 || charIndex == 27)) {
            span = `<span style='color:#69714b'>${typedTexts[arrayIndex].charAt(charIndex)}</span>`
        } else if(arrayIndex == 1 && (charIndex == 8  || charIndex == 28)) {
            span = `<span style='color:#ff0bcedd'>${typedTexts[arrayIndex].charAt(charIndex)}</span>`
        }else if(arrayIndex == 1 && (charIndex == 9 || charIndex == 10 || charIndex == 11 || charIndex == 12 || charIndex == 13 || charIndex == 14 || charIndex == 15 || charIndex == 16 || charIndex == 17)) {
            span = `<span style='color:#56848c'>${typedTexts[arrayIndex].charAt(charIndex)}</span>`
        } else if(arrayIndex == 1 && (charIndex == 18 || charIndex == 19 || charIndex == 20)) {
            span = `<span style='color:#69714b'>${typedTexts[arrayIndex].charAt(charIndex)}</span>`
        } else if(arrayIndex == 1 && (charIndex == 8)) {
            span = `<span style='color:#ff0bcedd'>${typedTexts[arrayIndex].charAt(charIndex)}</span>`
        }
        $('.typed-text').append(span)
        charIndex++
        setTimeout(type, typingDelay)
    } else {
        if(typeof(typedTexts[arrayIndex+1]) === "object") {
            toTypeAgain = typedTexts[arrayIndex+1]
            prevSpanLength = typedTexts[arrayIndex].length
            return typeAgain()
        }
        cursorSpan.classList.remove('typing')
        setTimeout(erase, newWordDelay)
    }
}
var typingDelayAgain = 100
var erasingDelayAgain = 50
var newWordDelayAgain = 2000
var arrayIndexAgain = 0
var charIndexAgain = 0

function typeAgain() {
    if(charIndexAgain < toTypeAgain[arrayIndexAgain].length) {
        cursorSpan.classList.add('typing')
        var span = `<span class='added-text'>${toTypeAgain[arrayIndexAgain].charAt(charIndexAgain)}</span>`
        if(charIndexAgain == 0 || charIndexAgain == 1 || charIndexAgain == 2 || charIndexAgain == 3 || charIndexAgain == 4 || charIndexAgain == 5 || charIndexAgain == 6) {
            span = `<span class='added-text' style='color:#56848c'>${toTypeAgain[arrayIndexAgain].charAt(charIndexAgain)}</span>`
        } else if((arrayIndexAgain == 0 &&(charIndexAgain == 7)) || (arrayIndexAgain == 1 &&(charIndexAgain == 7 || charIndexAgain == 8))) {
            span = `<span class='added-text' style='color:#56848c'>${toTypeAgain[arrayIndexAgain].charAt(charIndexAgain)}</span>`
        } else if(arrayIndexAgain == 0 && (charIndexAgain == 8 || charIndexAgain == 9)) {
            span = `<span class='added-text' style='color:#f1dada'>${toTypeAgain[arrayIndexAgain].charAt(charIndexAgain)}</span>`
        } else if(arrayIndexAgain == 1 && (charIndexAgain == 9 || charIndexAgain == 10)) {
            span = `<span class='added-text' style='color:#f1dada'>${toTypeAgain[arrayIndexAgain].charAt(charIndexAgain)}</span>`
        } else if(arrayIndexAgain == 2 && (charIndexAgain == 7 || charIndexAgain == 8)) {
            span = `<span class='added-text' style='color:#f1dada'>${toTypeAgain[arrayIndexAgain].charAt(charIndexAgain)}</span>`
        }
        $('.typed-text').append(span)
        charIndexAgain++
        setTimeout(typeAgain, typingDelayAgain)
    } else {
        cursorSpan.classList.remove('typing')
        setTimeout(eraseAgain, newWordDelay)
    }
}
function eraseAgain() {
    if(charIndexAgain > 0) {
        cursorSpan.classList.add('typing')
        if(arrayIndexAgain+1 >= toTypeAgain.length) {
            var spans = $('.typed-text').children()
            charIndexAgain = spans.length
            spans[charIndexAgain-1].remove()
            charIndexAgain--
        } else {
            var spans = $('.typed-text span.added-text')
            spans[charIndexAgain-1].remove()
            charIndexAgain--
        }
        setTimeout(eraseAgain, erasingDelayAgain)
    } else {
        cursorSpan.classList.remove('typing')
        arrayIndexAgain++
        if(arrayIndexAgain >= toTypeAgain.length) {
            arrayIndex = 0
            charIndex = 0
            arrayIndexAgain = 0
            charIndexAgain = 0
            setTimeout(type, newWordDelayAgain)
        } else {
            setTimeout(typeAgain, newWordDelayAgain)
        }
    }
}
function erase() {
    if(charIndex > 0) {
        cursorSpan.classList.add('typing')
        var spans = $('.typed-text').children()
        spans[charIndex-1].remove()
        charIndex--
        setTimeout(erase, erasingDelay)
    } else {
        cursorSpan.classList.remove('typing')
        arrayIndex++
        if(arrayIndex >= typedTexts.length)
            arrayIndex = 0
        setTimeout(type, newWordDelay)
    }
}
if(typedTexts.length) {
    setTimeout(type, 2900)
}