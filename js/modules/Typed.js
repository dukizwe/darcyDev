var typedTextSpan = document.querySelector('.typed-text')
var cursorSpan = document.querySelector('.cursor')
var typedTexts = [
    "<?= true ? 'Hello world' : '404' ?>",
    "if(world.hasCorona()) people.",
    [
        "stayHome()",
        "washHands()",
        "dontHug()",
        "dontKiss()"
    ]
]
var typingDelay = 100
var erasingDelay = 50
var newWordDelay = 2000
var arrayIndex = 0
var charIndex = 0
var prevSpanLength = 0
var toTypeAgain = null
export default function type() {
    if(charIndex < typedTexts[arrayIndex].length) {
        cursorSpan.classList.add('typing')
        var span = `<span>${typedTexts[arrayIndex].charAt(charIndex)}</span>`
        if(span == "<span><</span>" || span == "<span>></span>" || span == "<span>/</span>") {
            span = `<span style='color:red'>${typedTexts[arrayIndex].charAt(charIndex)}</span>`
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
        if(span == "<span><</span>" || span == "<span>></span>" || span == "<span>/</span>") {
            span = `<span class='added-text' style='color:red'>${toTypeAgain[arrayIndexAgain].charAt(charIndexAgain)}</span>`
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
            //setTimeout(erase, erasingDelay)
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
        //typedTextSpan.textContent = typedTexts[arrayIndex].substring(0,charIndex-1)
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