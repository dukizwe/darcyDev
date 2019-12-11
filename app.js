 $(function() {
    /*date*/
    var dateDiff = function(oldDate) {
        oldDate = new Date(oldDate)
        return new Number((new Date().getTime() - oldDate.getTime()) / 31536000000).toFixed(0)
    }
    var webDate = dateDiff("1 September 2017")
    var age = dateDiff("29 August 2000")
    var passedYear = dateDiff("1 September 2018")
    $('.webdate').text(webDate)
    $('.age').text(age)
    $('.passed-year').text(passedYear)
    /*header */
    var position = $(window).scrollTop()
    var headerTop = $('header').offset().top + position
    var headerLeft = $('header').offset().left
    var headerWidth = $('header').width()
    var headerHeight = $('header').height()
    var fakeElement = $(`<div class='fake-element' style='height:${headerHeight}px;width:10px'></div>`)
    var spies = $('[data-spy]')
    var activeSpy = false
    function onScroll() {
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
        /*scroll spy*/
        var scrollTop = scroll + ($(window).height() / 2)
        spies.each(function() {
            if(scrollTop > $(this).offset().top) {
                scrolledActiveSpy = $(this).attr('id')
            }
        })
        if(scrolledActiveSpy !== activeSpy) {
            activeSpy = scrolledActiveSpy
            $('header nav a').removeClass('active')
            $(`header nav a[href='#${activeSpy}']`).addClass('active')
        }
    }
    /*header nav*/
    var navTop = $('header').height() + 5
    $('header nav').css('top', navTop+'px')
    $('.show-nav-btn').click(function(e) {
        e.preventDefault()
        $('header nav').toggleClass('visible')
    })
    /*auto typing */
    var typedTextSpan = document.querySelector('.typed-text')
    var cursorSpan = document.querySelector('.cursor')
    var typedTexts = ["<body>Salut la planète</body>", "<?php echo 'Salut la planète'; ?>", "document.write('Salut la planète')"]
    var typingDelay = 100
    var erasingDelay = 50
    var newWordDelay = 2000
    var arrayIndex = 0
    var charIndex = 0
    function type() {
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
    /*culture imgs*/
    var gridItems = document.querySelectorAll('.culture a')
    $('.culture-content nav a[data-vers]').click(function(e) { //on ecoute le clique
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
    })
    function cultureImgsTop() {
        for(var i=0;i<gridItems.length;i++) {
            gridItems[i].classList.add(`grid-item-${i}`)
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
            top18 = gridItems[2].getBoundingClientRect().height + gridItems[16].getBoundingClientRect().height -5
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
        }
    }
    function onResize() {
        cultureImgsTop()
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
        onScroll()
    }
    cultureImgsTop()
    $(window).scroll(onScroll)
    $(window).resize(onResize)
})