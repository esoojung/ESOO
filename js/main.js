$(function(){
    
// fullpage설정 : $('풀페이지 영역으로 잡은애')가 풀페이지 되라 !
    $('#fullpage').fullpage({
        // li랑 fullpage랑 연결 /  []: 배열이라고 함 
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        sectionsColor: ['grey', 'orange', 'yellow', 'green', 'navy', 'blue'],
        // 
        navigation: true,
        // navigationPosition : 'left'

        // ↓ 호버했을 때 이름 보이기 
        navigationTooltips: ['메뉴1','메뉴2','메뉴3','메뉴4','메뉴5','푸터'],

        // ↓ Slide 네비게이션 만들기
        slidesNavigation : true,
        // ↓1000px 부터는 풀페이지 효과를 없애고 스크롤로 할때
         responsiveWidth: 1000,
         afterLoad: function(anchorLink, index){
            console.log('현재 영역의 번호는'+ index)
            if(index == 5){
                alert('마지막영역임')
                
                $('header ul li a').addClass('on')

            }
            
            else {
                $('header ul li a').removeClass('on')
            }

         }

    })



})