$(function(){
		var chex = document.querySelectorAll(".listNav input");
		var list = document.querySelectorAll(".list_1");
		$(list).each(function(index,element){
			$(element).hover(function(){
			$(this).find("div").stop().slideDown(1000);
		    },function(){
			$(this).find("div").stop().slideUp(1000);
		    })
		})
		console.log($(chex))
		$("#btn1").click(function(){
			$(chex).each(function(index,element){
				$(chex).eq(index).prop("checked",true);
			})
		})
		$("#btn2").click(function(){
			$(chex).each(function(index,element){
				$(chex).eq(index).prop("checked",false);
			})
		})
		$("#btn3").click(function(){
			$(chex).each(function(index,element){
				if($(chex).eq(index).prop("checked")==true){
					$(chex).eq(index).prop("checked",false);
				}
				else{
					$(chex).eq(index).prop("checked",true);
				}
			})
		})
		var jy = document.querySelectorAll(".jy");
		function qh(selector){
			$(selector).each(function(index,element){
				$(selector).eq(index).click(function(){
				$(selector).each(function(i,key){
			    	$(key).removeClass("active");
				})
				$(this).addClass("active");
				
		    })
		   })
		}
		qh(".zy")
		qh(".jy")
		qh(".date")
		qh(".yl")
		qh(".car")
		qh(".bg")
		qh(".cj")
		qh(".kj")
		qh(".phone")
		qh(".games")
		qh(".center")
		qh(".favorite")
		qh(".book")
		var Timer1 = null;
       	Timer1 = setInterval(move1,50)
       	var n = -1;
       	function move1()
       	{
         
          if($(".photo_list")[0].offsetLeft<=-$(".photo_list")[0].offsetWidth/2+38)
          {
        	  $(".photo_list")[0].style.left = 0 +"px";
          	// $("#div2>ul")[0].style.left = 0 +"px";
          }
          if($(".photo_list")[0].offsetLeft>0){
        	  $(".photo_list")[0].style.left = -$(".photo_list")[0].offsetWidth/2+38 +"px"; 
          }
          $(".photo_list")[0].style.left = $(".photo_list")[0].offsetLeft + n +"px"; 
       	}
          $(".photo_prev").click(function (){
          	n = -1;
          	clearInterval(Timer1);
          	Timer1 = setInterval(move1,50)
          })
          $(".photo_next").click(function (){
            n = 1;
            clearInterval(Timer1);
            Timer1 = setInterval(move1,50)
          })
          $(".photo_list").hover(function (){
          	clearInterval(Timer1)
          },function(){
          	clearInterval(Timer1)
          	Timer1 = setInterval(move1,50)
          })
		
	})