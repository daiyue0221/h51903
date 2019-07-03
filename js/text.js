 

$(function(){
	//这是模态框聚焦于是焦点
	var bool1=false;
	var bool2=false;
	var bool3=false;
	var bool4=false;
	var bool5=true;
	var $div= $(".form>div");
	$div.click(function(){
			$(".form div p").css("display","none")
	 	//textarea特效
	 	var text=$(this).attr("class");
	 	if(text=="xxdz"){
	 		 var aaa=$(this).children("textarea")
	 		aaa.focus();
	 		aaa.next().css({
	 			"color":"#ff6700",
	 		})
	 		aaa.next().stop().animate({
		 		"font-size":"12px",
		 		"top":"-8px",
			},300)
	 	}else{
	 		var inp=$(this).children("input")
			inp.css({
				"border-color":"#ff6700",
			})
			inp.next().css({
		 		"color":"#ff6700",
			})
		 	inp.next().stop().animate({
		 		"font-size":"12px",
		 		"top":"-8px",
			},300)
		 	inp.focus();
		 	}
	})
	//textarea
	$("textarea").blur((e)=>{
		e=e||window.event;
		var target=e.target||e.srcElement;
		target=$(target);
		target.parent().css({
			"border-color":"#e0e0e0",
		});
		target.next().css({
	   		"color":"#e0e0e0",
		})
		if(!target.val()){//没有数据
			target.next().stop().animate({
		 		"font-size":"14px",
		 		"top":"10px",
	 		},300)
		}else{//有数据
			var val=target.val();
			var regxxdz=/^[a-zA-Z\u4e00-\u9fa5]{5,32}$/;
			if(regxxdz.test(val)){
            	target.next().next("p").css("display","none");
            	bool3=true;
            }else{
            	target.next().next("p").css("display","block")
            	bool3=false;
            }
		}
	})
	
	//失去input焦点
	var $inputs= $(".form div input");
	$inputs.blur((e)=>{
		e=e||window.event;
		var target=e.target||e.srcElement;
		target=$(target);
		target.css({
			"border-color":"#e0e0e0",
		});
		target.next().css({
	   		"color":"#e0e0e0",
		})
	   	if(!target.val()){//没有数据
			target.next().stop().animate({
		 		"font-size":"14px",
		 		"top":"10px",
	 		},300)
		}else{//有数据
			var val=target.val();
			var name=target.attr("name");
			
			if(name=="userName"){
				var regName=/^[a-zA-Z\u4e00-\u9fa5]{2,}$/;
				if(regName.test(val)){
					target.next().next("p").css("display","none")
					bool1=true;
				}else{
					target.next().next("p").css("display","block")
					bool1=false;
				}
			}
			if(name=="userphone"){
				var regPhone= /^[1][3,4,5,7,8][0-9]{9}$/;
	            if(regPhone.test(val)){
	            	target.next().next("p").css("display","none")
	            	bool2=true;
	            }else{
	            	target.next().next("p").css("display","block")
	            	bool2=false;
	            }
			}
			
			if(name=="ycode"){
				var regCode=/^[\d]{6}$/;
				if(regCode.test(val)){
					target.next().next("p").css("display","none")
					bool4=true;
				}else{
					target.next().next("p").css("display","block")
					bool4=false;
				}
			}
			if(name=="address"){
				if(target.val().length<=5){
					target.next().next("p").css("display","none")
					bool5=true;
				}else{
					target.next().next("p").css("display","block")
					bool5=false;
				}
			}
		}
	})
	//保存
	$("form").submit((e)=>{
		if(bool1 && bool2 && bool3 && bool4 && bool5){
			var arrinfo=[];
//			console.log($(".form div:nth-of-type(1) input").val())//姓名
			var name=$(".form div:nth-of-type(1) input").val();
			
//			console.log($(".form div:nth-of-type(2) input").val())//号码
			var phone=$(".form div:nth-of-type(2) input").val()
			
//			console.log($(".form div:nth-of-type(4) textarea").val())//详细地址
			var xxdz=$(".form div:nth-of-type(4) textarea").val()
			
//			console.log($(".form div:nth-of-type(5) input").val())//邮编
			console.log($(".form div:nth-of-type(6) input").val())//
			//生成新的地址
			
			var li=$(`<li></li>`)
			var h5=$(`<h5>${name}</h5>`)
			var p1=$(`<p>${phone}</p>`)
			var p2=$(`<p>${xxdz}</p>`)
			var a=$(`<a data-target="#myModal" data-toggle="modal">修改</a>`)
			li.append(h5)
			li.append(p1)
			li.append(p2)
			li.append(a)
			$("section>ul").prepend(li)
			return false;
		}else{
			if(!bool1){
				$(".form div:nth-of-type(1) p").css("display","block")
			}
			if(!bool2){
				$(".form div:nth-of-type(2) p").css("display","block")
			}
			if(!bool3){
				$(".form div:nth-of-type(4) p").css("display","block")
			}
			if(!bool4){
				$(".form div:nth-of-type(5) p").css("display","block")
			}
			if(!bool5){
				$(".form div:nth-of-type(6) p").css("display","block")
			}
			return false;
		}
	})
	//取消
	$("[type=button]").click(()=>{
		$(".form div input").val("")
		$(".form div textarea").val("")
		$(".form div span").stop().animate({
		 		"font-size":"14px",
		 		"top":"10px",
	 		},300)
	})
	$(".x").click(()=>{
		$(".form div input").val("")
		$(".form div textarea").val("")
		$(".form div span").stop().animate({
		 		"font-size":"14px",
		 		"top":"10px",
	 		},300)
	})
})




