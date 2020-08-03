import './libs/jquery.js'
import Time from './modules/Time.js'
import sticky from './modules/Sticky.js'
import scrollSpy from './modules/ScrollSpy.js'
import Typed from './modules/Typed.js'
$(function() {
    const time = new Time()
    $('.webdate').text(time.carrierYear)
    $('.age').text(time.age)
    $('.passed-year').text(time.schoolYear)
    $(window).scroll(function() {
        sticky()
        scrollSpy()
    })
    $('.editor a').click(function(e) {
        e.preventDefault()
    })
})