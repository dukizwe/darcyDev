var spies = $('[data-spy]')
var activeSpy = false
var windowWidth = $(window).width()
export default function ScrollSpy() {
    if(windowWidth <= 550) {
        $('header a').removeClass('active')
        return $("header a[href='#accueil']").addClass('active')
    }
    var scrollTop = $(window).scrollTop() + ($(window).height() / 2)
    var scrolledActiveSpy = null
    spies.each(function() {
        if(scrollTop > $(this).offset().top) {
            scrolledActiveSpy = $(this).attr('id')
        }
    })
    if(scrolledActiveSpy !== activeSpy) {
        activeSpy = scrolledActiveSpy
        $('header a').removeClass('active')
        $(`header a[href='#${activeSpy}']`).addClass('active')
    }
}

$(window).resize(function() {
    windowWidth = $(window).width()
    ScrollSpy()
})