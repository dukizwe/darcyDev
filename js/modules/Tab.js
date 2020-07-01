var gridItems = document.querySelectorAll('.culture a')
export default function Tab(e) {
    e.preventDefault()
    var activeCategory = $('.culture a.visible')
    
    if($(this).hasClass('active')) return false // si l'onglet qu'on a clique est deja l'onglet actuel, on ne fait rien
        //si on clique sur tout
    if($(this).attr('href') == "#tout") {
        $('.culture').removeClass('filted')
        $('.playlist-direction').removeClass('active')
        $('.culture-content nav a.active').removeClass('active')//on desactive tous les autres onglet active
        $(this).addClass('active') // on active l'onglet actuel
        for(var i=0;i<gridItems.length;i++) {//on retouve a l'etat unitial de tous les imgs de la culture
            gridItems[i].classList.remove('visible')
            gridItems[i].classList.remove('disabled')
        }
        return false // et on arrete tous les autres scripts
    }
    if($(this).attr('href') == "#music") {
        $('.playlist-direction').addClass('active')
    } else {
        $('.playlist-direction').removeClass('active')
    }
    //sinon si on a cliquer sur un autre onglet
    $('.culture').addClass('filted')
    //sinon, on active l'onglet qu'on a voulu et on desactive l'onglet qui etait activait
    $('.culture-content nav a.active').removeClass('active')
    $(this).addClass('active')

    var neededTab = $(this).attr('data-vers')
    var neededImgs = $(`.culture a.${neededTab}`)
    neededImgs.removeClass('disabled')
    activeCategory.removeClass('visible')
    neededImgs.addClass('visible')
    for(var i=0; i<gridItems.length; i++) {
        if(gridItems[i].classList.contains('visible')) {
            
        } else {
            gridItems[i].classList.add('disabled')
        }
    }
}
$('.culture-content nav a[data-vers]').click(Tab)