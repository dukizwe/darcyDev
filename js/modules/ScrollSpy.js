var spies = $('[data-spy]')
var activeSpy = false
export default function ScrollSpy() {
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