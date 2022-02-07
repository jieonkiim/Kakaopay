
$(document).ready(function() {

    // 메뉴에 마우스 올리면, 배경 흰색
    $('.menu ul.main li').on('mouseenter', function() {
        $('header').css({'background-color': 'var(--white)' })
        $('.menu .main>li').css({'color' : 'var(--black'} )
        $('.logo a').css({'color' : 'var(--black'} )
        $('header').stop().animate({'height': '84px'}, 400)
    })
    
    // 서브메뉴에 마우스올리면, 헤더 높이를 늘려준다.
    $('.menu ul.main li.pmenu').on('mouseenter', function() {

        // 서브메뉴 보여주기
        let li = $(this)
        $('.menu2').css({'display': 'none'})
        li.children('.menu2').css({'display': 'block'})
        $('header').stop().animate({'height': '300px'}, 400)
    })

    // 헤더를 벗어나면 배경 투명
    $('header').on('mouseleave', function() {
        $('.menu .main>li').css({'color' : 'var(--white'} )
        $('.logo a').css({'color' : 'var(--white'} )
        $('header').stop().animate({'height': '84px'}, 400)
        $('header').css({'background-color': 'transparent' })
        
    })
    
    
})