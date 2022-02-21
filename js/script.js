
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

    //Footer의 관련사이트 클릭시 submenu 보여주기 
    $('.footer-about .btn-about').on('click', function() {
        $('.list-about').css({'display':'block'});
        $('.btn-about > span').css({'transform' : 'rotate(45deg)'}, 200)
    })
    
    $('.animate').scrolla({
        mobile: true, // 모바일에서도 애니메이션 적용
        once: false, // 한번만 실행할 것 인지
    });



    /* 메인 슬라이드 동영상 제어 */
    // 재생/일시정지
    $('.playpause').on('click', function() {
        let video = $('video').get(0)

        if( video.paused) {
            video.play()
        } else {
            video.pause()
        }

        $('.playpause').toggleClass('active')
        
    })

    // 음소거
    $('.sound').on('click', function() {
        let video = $('video').get(0)

        if( video.muted ) {
            $('#main-video').prop('muted', false)
        } else {
            $('#main-video').prop('muted', true)
        }

        $('.sound').toggleClass('active')
        
    })

    // 전체화면
    

})
