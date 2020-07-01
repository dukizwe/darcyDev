var position = $(window).scrollTop()
var headerTop = $('header').offset().top
var headerLeft = $('header').offset().left
var headerWidth = $('header').width()
var headerHeight = $('header').height()
var fakeElement = $(`<div class='fake-element' style='height:${headerHeight}px;width:10px'></div>`)
export default function Sticky() {
    var scroll = $(window).scrollTop()
    $('header nav').removeClass('visible')
    if(scroll > position) {
        $('header').removeClass('visible')
        $('header').addClass('hidden')
        $('header').css('left', headerLeft+'px')
        $('header').css('width', headerWidth+'px')
        $('header').after(fakeElement)
    } else{
        $('header').removeClass('hidden')
        $('header').addClass('visible')
        $('header').css('left', headerLeft+'px')
        $('header').css('width', headerWidth+'px')
        if(scroll < headerTop) {
            $('header').removeAttr('style')
            $('header').removeClass('visible')
            $('header').removeClass('hidden')
            fakeElement.remove()
        }
    }
    position = scroll
}
$(window).resize(function() {
    position = $(window).scrollTop()
    headerTop = $('header').offset().top + position
    headerLeft = $('header').offset().left
    headerWidth = $('header').width()
    headerHeight = $('header').height()
    var allFakeElement = $('.fake-element')
    allFakeElement.each(function() {
        $(this).remove()
    })
    fakeElement = $(`<div class='fake-element' style='height:${headerHeight}px;width:10px'></div>`)
    Sticky()
})