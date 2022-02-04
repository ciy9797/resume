$(window).on('load', function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
})
var wh0 = $('section').eq(0).offset().top
var wh1 = $('section').eq(1).offset().top
var wh2 = $('section').eq(2).offset().top
var wh3 = $('section').eq(3).offset().top
var wh4 = $('section').eq(4).offset().top
var offTop = 0;


$(window).ready(function () {
  var typingBool = false;
  var typingIdx = 0;
  var typingTxt = $('.choi_inyong-txt').text();
  typingTxt = typingTxt.split("");


  if (typingBool == false) {

    typingBool = true;

    var tyInt = setInterval(typing, 150);
  }

  function typing() {
    if (typingIdx < typingTxt.length) {
      if (typingIdx < 3) {
        $('.choi_inyong-typing1').append(typingTxt[typingIdx]);
        typingIdx++;
      } else if (!typingIdx < 3 && typingIdx == 3) {
        $('.choi_inyong-typing2').append(typingTxt[typingIdx]);
        typingIdx++;
      } else if (!typingIdx < 4 && typingIdx == 4) {
        $('.choi_inyong-typing3').append(typingTxt[typingIdx]);
        typingIdx++;
      } else if (!typingIdx < 5) {
        $('.choi_inyong-typing4').append(typingTxt[typingIdx]);
        typingIdx++;
      }

    } else {
      clearInterval(tyInt);

      $('.choi_inyong-typing').addClass('on')

      setTimeout(function () {
        $('.choi_inyong-typing1').css({
          transform: ' translateX(-3000px)',
          transition: '2s',


        })
        $('.choi_inyong-typing4').css({
          transform: ' translateX(3000px)',
          transition: '2s',

        })
        $('.choi_inyong-typing2').css({
          transform: 'scalex(2) scaleY(2) translateY(-20%)',
          transition: '0.8s'
        })
        $('.choi_inyong-typing3').css({
          transform: 'scaleX(2) scaleY(2) translate(325%,-20%)',
          transition: '0.8s'
        })

        setTimeout(function () {
          $('.smilemouth').fadeIn(1000)
          setTimeout(function () {
            $('.smileface').fadeToggle(1000)

            setTimeout(function () {
              $('.smileface, .smilemouth, .choi_inyong-typing ').addClass('fixed')
              $('.choi_inyong-typing').removeClass('on')

              setTimeout(function () {
                $('html, body').animate({
                  scrollTop: wh1
                }, 500);
                $('.smile').fadeOut(1000)
                $('.mainsmile').css({
                  opacity: '1',
                  transition: '3s'
                })
                setTimeout(function () {
                  $('#presstostart').fadeIn(500)



                }, 1000);


              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 2000);

    }
  }


});


$('#presstostart').on('click', function () {
  $('.mainsmile img').stop().animate({
    width: '600px',
    marginBottom: '20%'
  }, 500)
  $('#presstostart').hide()

  setTimeout(function () {
    $('#greybubble').css({
      opacity: '1'
    })
    $('.confirmname').delay(500).fadeIn()


  }, 1500);

})


$('#greenbubble').on('click', function () {
  //  var mynameval = $('#myname').val()


  /* if ( mynameval == "최인용" || mynameval == "최 인용" || mynameval == "최 인 용" || mynameval == "Choiinyong" || mynameval == "CHOIINYONG" || mynameval == "CHOI INYONG" || mynameval =="Choi inyong" || mynameval == "Choi Inyong" || mynameval == "choiinyong" || mynameval == "choi inyong" || mynameval == "Choi Inyong" || mynameval == "choiinyong" || mynameval == "choi inyong" || mynameval == "INYONG CHOI" || mynameval == "Inyong Choi" || mynameval == "INYONGCHOI" || mynameval == "InyongChoi" || mynameval == "inyongchoi" || mynameval == "inyong choi" )  {  */


  // $('.mainsmile').removeClass('wrong')
  // $('.mainsmile').addClass('correct')
  // $('.nameO').fadeIn()
  // $('.nameX').hide()
  // $('.wimn').hide()
  setTimeout(function () {
    $('.mainsmile').removeClass('correct')
    $('#greybubble').fadeOut()
    $('.confirmname').fadeOut()
    $('.talkmenuarea').delay(500).animate({
      marginBottom: '300px'
    }, 1000, 'easeInOutBounce')
    $('.menugreen1').delay(700).animate({
      marginBottom: '575px'
    }, 1000, 'easeInCirc')

    $('.menugreen2').delay(1100).animate({
      marginBottom: '575px'
    }, 1000, 'easeInCirc')

    $('.menugreen3').delay(1500).animate({
      marginBottom: '575px'
    }, 1000, 'easeInCirc')
  })
  /* }, 2000);
  
  return false */


  //  }else {

  //     $('.mainsmile').addClass('wrong')
  //     $('.nameX').fadeIn()
  //     $('.wimn').hide()
  //     return false
  //  }
})

$('#greenbubble').on('mousedown mouseup', function () {
  $(this).toggleClass('on')
})





$('.menugreen1').on('mouseover', function () {
  $(this).addClass('on')

})
$('.menugreen1').on('mouseout', function () {
  $(this).removeClass('on')

})
/* 1번버튼누르면 */
$('.menugreen1').on('click', function () {
  $('.sect3').children().eq(2).css({
    transform: 'scale(0.5)'
  })
  $(this).animate({
    marginBottom: '800px'

  })
  $(this).delay(3000).animate({
    marginBottom: '575px'
  })
  $('.coverleft1').delay(500).animate({
    marginLeft: '55.6%',
  })
  $('.coverright1').delay(500).animate({
    marginRight: '55.6%',
  })
  setTimeout(function () {
    $('.coverright1').addClass('fixed')
    $('.coverleft1').addClass('fixed')
    $('html, body').animate({
      scrollTop: wh2
    }, 500);
    setTimeout(function () {
      $('.coverright1').removeClass('fixed')
      $('.coverleft1').removeClass('fixed')
      $('.coveredleft').delay(500).animate({
        marginLeft: '-55.6%',
      })
      $('.coveredright').delay(500).animate({
        marginRight: '-55.6%',
      })
      $('.sect3').children().eq(2).css({
        transform: 'scale(1)',
        transition: 'all 1.5s'
      })

    }, 1000)
  }, 1500)
})



$('.menugreen2').on('mouseover', function () {
  $(this).addClass('on')

})
$('.menugreen2').on('mouseout', function () {
  $(this).removeClass('on')

})
/* 2번버튼누르면 */
$('.menugreen2').on('click', function () {
  $('.sect4').children().eq(2).css({
    transform: 'scale(0.5)'
  })

  $(this).animate({
    marginBottom: '800px'

  })
  $(this).delay(3000).animate({
    marginBottom: '575px'
  })
  $('.coverleft1').delay(500).animate({
    marginLeft: '55.6%',
  })
  $('.coverright1').delay(500).animate({
    marginRight: '55.6%',
  })
  setTimeout(function () {
    $('.coverright1').addClass('fixed')
    $('.coverleft1').addClass('fixed')
    $('html, body').animate({
      scrollTop: wh3
    }, 500);
    setTimeout(function () {
      $('.coverright1').removeClass('fixed')
      $('.coverleft1').removeClass('fixed')
      $('.coveredleft').delay(500).animate({
        marginLeft: '-55.6%',
      })
      $('.coveredright').delay(500).animate({
        marginRight: '-55.6%',
      })
      $('.sect4').children().eq(2).css({
        transform: 'scale(1)',
        transition: 'all 1.5s'
      })
    }, 500)
  }, 1500)
})



$('.menugreen3').on('mouseover', function () {
  $(this).addClass('on')

})
$('.menugreen3').on('mouseout', function () {
  $(this).removeClass('on')

})
/* 3번버튼누르면 */
$('.menugreen3').on('click', function () {


  $(this).animate({
    marginBottom: '800px'
  })
  $(this).delay(3000).animate({
    marginBottom: '575px'
  })
  $('.coverleft1').delay(500).animate({
    marginLeft: '55.6%',
  })
  $('.coverright1').delay(500).animate({
    marginRight: '55.6%',
  })
  setTimeout(function () {
    $('.coverright1').addClass('fixed')
    $('.coverleft1').addClass('fixed')
    $('html, body').animate({
      scrollTop: wh4
    }, 500);
    setTimeout(function () {
      $('.coverright1').removeClass('fixed')
      $('.coverleft1').removeClass('fixed')
      $('.coveredleft').delay(500).animate({
        marginLeft: '-55.6%',
      })
      $('.coveredright').delay(500).animate({
        marginRight: '-55.6%',
      })

    }, 500)
  }, 1500)
})



$('.sect3 .PPcontainer > div').on('mouseover mouseout', function () {
  $(this).toggleClass('on')
})


$('.sect3 .PPcontainer > div').on('click', function () {

  var src = $(this).children().eq(1).attr('src')

  $('.sect3').after(`<div class="outbox"><div class="inbox"></div></div>`)
  $('.inbox').append(`<img src="${src}" alt="설명문구">`)

  $('.outbox').css({
    display: 'block'
  })
  // $('.inbox a').attr({ href:href })
  // $('.inbox img').attr({ src:src })
  return false
})

$('body').on('click', function () {
  $('.outbox').remove()
})



$('.backbutton').on('click', function () {

  $('.coveredleft').delay(500).animate({
    marginLeft: '0',
  })
  $('.coveredright').delay(500).animate({
    marginRight: '0',
  })
  setTimeout(function () {
    $('.coverright1').addClass('fixed')
    $('.coverleft1').addClass('fixed')
    $('html, body').animate({
      scrollTop: wh1
    }, 500);
    setTimeout(function () {
      $('.coverright1').removeClass('fixed')
      $('.coverleft1').removeClass('fixed')
      $('.coverleft1').delay(500).animate({
        marginLeft: '0',
      })
      $('.coverright1').delay(500).animate({
        marginRight: '0',
      })
    }, 500)
  }, 1500)
})


/* var color_arr = ["#f60001","#f86002","#007c02","#0000f6","#49017d","#b62ff6"]; 

var index=0;

$(document).ready(function() {

	setInterval(function(){

		if((index) > color_arr.length){index=0;}	

		$('#rssmile').css("color",color_arr[index++])
		$('#rssmile').css({transition:'1s'})
    

	}, 500); // 500ms 로 변경

}); */