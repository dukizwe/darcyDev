export default (function CultureImgTop() {
    var gridItems = document.querySelectorAll('.culture a')
    for(var i=0;i<gridItems.length;i++) {
        gridItems[i].classList.add(`grid-item-${i}`)
        
    }
    gridItems[3].style.top = gridItems[1].getBoundingClientRect().height + 'px'
    gridItems[4].style.top = gridItems[0].getBoundingClientRect().height + 'px'
    gridItems[5].style.top = gridItems[0].getBoundingClientRect().height + 'px'
    var top6 = gridItems[0].getBoundingClientRect().height + gridItems[4].getBoundingClientRect().height
    gridItems[6].style.top = `${top6}px`
    var top7 = gridItems[0].getBoundingClientRect().height + gridItems[5].getBoundingClientRect().height
    gridItems[7].style.top = `${top7}px`
    gridItems[8].style.top = `${top7}px`
    var top9 = gridItems[8].getBoundingClientRect().height + top7
    gridItems[9].style.top = top9 + 'px'
    gridItems[10].style.top = top9 + 'px'
    var top11 = gridItems[6].getBoundingClientRect().height + top6
    gridItems[11].style.top = `${top11}px`
    var top12 = gridItems[10].getBoundingClientRect().height + top9
    gridItems[12].style.top = `${top12}px`
    var top13 = gridItems[12].getBoundingClientRect().height + top12
    gridItems[13].style.top = `${top13}px`
    var top14 = gridItems[13].getBoundingClientRect().height + top13
    gridItems[14].style.top = `${top14}px`
    var top15 = gridItems[14].getBoundingClientRect().height + top14
    gridItems[15].style.top = `${top15}px`
    gridItems[16].style.top = gridItems[2].getBoundingClientRect().height + 'px'
    gridItems[17].style.top = gridItems[2].getBoundingClientRect().height + 'px'
    var top18 = gridItems[2].getBoundingClientRect().height + gridItems[16].getBoundingClientRect().height -5
    gridItems[18].style.top = `${top18}px`
    var top19 = gridItems[11].getBoundingClientRect().height + top11
    gridItems[19].style.top = `${top19-1}px`
    var top20 = gridItems[15].getBoundingClientRect().height + top15
    gridItems[20].style.top = `${top20-3}px`
    var top21 = gridItems[18].getBoundingClientRect().height + top18
    gridItems[21].style.top = `${top21-9}px`
    gridItems[22].style.top = `${top21-10}px`
    gridItems[23].style.top = `${top21-10}px`
    var top24 = gridItems[23].getBoundingClientRect().height + top21
    gridItems[24].style.top = `${top24-25}px`
    gridItems[25].style.top = `${top21-12}px`
    var cultureHeight = gridItems[0].getBoundingClientRect().height + gridItems[4].getBoundingClientRect().height + gridItems[6].getBoundingClientRect().height + gridItems[11].getBoundingClientRect().height + gridItems[19].getBoundingClientRect().height - 10
    $('.culture').css('height',  cultureHeight + 'px')
    $(window).resize(CultureImgTop)
})()