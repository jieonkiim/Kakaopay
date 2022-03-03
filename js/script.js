
$(document).ready(function() {

    /* ============================  헤더 ============================ */
    $('header').on('mouseover', function() {
        $('header').toggleClass('on')
    })

    $('header').on('mouseout', function() {
        $('header').toggleClass('on')
    })
    
    /* ============================  헤더 ============================ */
    
    /* ============================  메뉴 ============================ */
    // 메인 메뉴 - 마우스 올렸을 때 이벤트


    // 메인 메뉴 - 마우스 올렸을 때, 이벤트
    $('.mainmenu').on('mouseover', function() {
        let index = $(this).index()
        let no = index+1
        $(this).addClass('active')

        let now = $(this).hasClass('no')
        let prev = $(this).prev().hasClass('no')
        let next = $(this).next().hasClass('no')

        if( prev )
            $('.submenu').css({'transition' : 'height 0.4s'})
        else 
            $('.submenu').css({'transition' : 'none'})
            
            if( now ) 
            $('.submenu').css({'transition' : 'height 0.4s'})
            
        $('.submenu:nth-of-type(' + no + ')').addClass('active')
      
    })
    
    $('.submenu').on('mouseover', function() {
        $(this).addClass('active')
        // status = 'on'
    })
    
    // 메인 메뉴 - 마우스 벗어날 때, 이벤트
    $('.mainmenu').on('mouseout', function() {
        $(this).removeClass('active')
        $('.submenu').removeClass('active')

    })
    
    $('.submenu').on('mouseout', function() {
        $(this).removeClass('active')
        // status = 'off'
    })
    /* ============================  메뉴 ============================ */

    //Footer의 관련사이트 클릭시 submenu 보여주기 
    $('.footer-about .btn-about').on('click', function() {
        $('.footer-about').toggleClass('on')
        // $('.list-about').css({'display':'block'});
        // $('.btn-about > span').css({'transform' : 'rotate(45deg)'}, 200)
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
    $('.fullscreen').on('click', function() {
        let video = $('video').get(0)

        video.requestFullscreen()
    })

    // 스크롤 
    let bright = 0
    $(window).on('scroll', function() {
        let now = $(this).scrollTop()               // 현재 스크롤 위치

        bright = now / 10
        // console.log(bright);

        // 스크롤 시, 헤드풀 밝기 조절
        $('.vidpage').css({'filter' : 'brightness(' + (100 - (bright - 20)) + '%)'})

        // 스크롤 시, 헤더 고정
        if( now > 500 ) {
            $('header').css({
                    'position' : 'fixed',
                    'background-color': 'var(--white)',
            })
            $('.menu .main>li').css({'color' : 'var(--black'} )
            $('.logo a').css({'color' : 'var(--black'} )
        } else {
            $('.menu .main>li').css({'color' : 'var(--white'} )
            $('.logo a').css({'color' : 'var(--white'} )
            $('header').stop().animate({'height': '84px'}, 400)
            $('header').css({
                'position' : 'absolute',
                'background-color': 'transparent' 
            })
        }

        // 왼쪽박스 스크롤 올라가는 거
        if( now > 900 ) {
            let bottom = (now - 900) / 10
            $('.vertical-box-left').css({'bottom' : bottom + 'px'})
        }

        
    })

})
