var typedTextSpan = document.querySelector('.typed-text')
var cursorSpan = document.querySelector('.cursor')
var typedTexts = ["<body>Salut la planète</body>", "<?php echo 'Salut la planète'; ?>", "document.write('Salut la planète')"]
var typingDelay = 100
var erasingDelay = 50
var newWordDelay = 2000
var arrayIndex = 0
var charIndex = 0
export default function type() {
    if(charIndex < typedTexts[arrayIndex].length) {
        cursorSpan.classList.add('typing')
        typedTextSpan.textContent += typedTexts[arrayIndex].charAt(charIndex)
        charIndex++
        setTimeout(type, typingDelay)
    } else {
        cursorSpan.classList.remove('typing')
        setTimeout(erase, newWordDelay)
    }
}
function erase() {
    if(charIndex > 0) {
        cursorSpan.classList.add('typing')
        typedTextSpan.textContent = typedTexts[arrayIndex].substring(0,charIndex-1)
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