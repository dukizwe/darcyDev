export default function Tab() {
    $('.editor a').click(function(e) {
        e.preventDefault()
    })
    $('.my-picture img.image-1').click(function(e) {
        e.preventDefault()
        $('.my-picture img.image-1').removeClass('visible')
        $('.my-picture img.image-1').addClass('hidden')
    })
    $('.my-picture img.image-2').click(function(e) {
        e.preventDefault()
        $('.my-picture img.image-1').removeClass('hidden')
        $('.my-picture img.image-1').addClass('visible')
    })

    $('.culture-content nav a').click(function(e){
        e.preventDefault()
        e.stopPropagation()
        $('.culture-content nav a').removeClass('active')
        $(this).addClass('active')
        if($(this).attr('href') === '#music') {
            $('.playlist-direction').addClass('active')
        } else {
            $('.playlist-direction').removeClass('active')
        }
    })
    $("#checkbox").click(function(e){
        $('body').toggleClass('dark-mode')
    })
}