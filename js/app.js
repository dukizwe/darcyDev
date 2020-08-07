import './libs/jquery.js'
import reveal from './modules/reveal.js'
import Time from './modules/Time.js'
import sticky from './modules/Sticky.js'
import scrollSpy from './modules/ScrollSpy.js'
import Tab from './modules/Tab.js'
import Copied from './modules/Copied.js'
import Typed from './modules/Typed.js'
$(function() {
    const time = new Time()
    $('.webdate').text(time.carrierYear)
    $('.age').text(time.age)
    $('.passed-year').text(time.schoolYear)
    $('.copyright').text(time.currentYear)
    $(window).scroll(function() {
        sticky()
        scrollSpy()
    })
    reveal()
    Tab()
    Copied()
})