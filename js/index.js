// 显示与隐藏菜单
$(document).ready(function() {
	var menu = $('.box');
	var menu_out = $('.menu-icon');
	var menu_in = $('#menu-hid');
	var main = $('#main');

	menu_out.click(function() {
		menu.animate({top:'0'},300);
		main.animate({marginTop:'85px'},300);
	});

	menu_in.click(function() {
		menu.animate({top:'-85px'},300);
		main.animate({marginTop:'0'},300);
	});
});

$.Nav = {

	W:function(logo, menu, menu_out, un, menu_box) {
		logo.css('color','#000');
		menu.css('color','#000');
		menu_out.attr('src','img/icon-menu-white@2x2.png');
		un.attr('src','img/untitled2.png');
		menu_box.css({'background':'#fff','border-width':'1px','z-index':'999'});
	},

	B:function(logo, menu, menu_out, un, menu_box) {
		logo.css('color','#fff');
		menu.css('color','#fff');
		menu_out.attr('src','img/icon-menu-white@2x.png');
		un.attr('src','img/untitled.png');
		menu_box.css({'background':'none','border-width':'0px'});
	}
}

$(window).resize(function() { // 监听屏幕宽度变化
	var menu_box = $('.menu-box');
	var logo = $('.logo a');
	var menu = $('.menu a');
	var menu_out = $('.menu-icon');
	var un = $('.un');

	var winWidth = $(window).width();// 获取屏幕宽度

	if (winWidth <= 1024) {
		$.Nav.W(logo, menu, menu_out, un, menu_box);
	} else if (winWidth > 1024) {
		$.Nav.B(logo, menu, menu_out, un, menu_box);
	}
});

$(document).scroll(function() { //屏幕滚动事件
	var scrollTop = $(document).scrollTop(); // 获取屏幕滚动高度
	var winWidth = $(window).width();//浏览器当前窗口可视区域宽度
	// >1024
	var menu_box = $('.menu-box');
	var logo = $('.logo a');
	var menu = $('.menu a');
	var menu_out = $('.menu-icon');
	var un = $('.un');
	// <1024

	if (winWidth > 1024) {
		if (scrollTop >= 630) {
			$.Nav.W(logo, menu, menu_out, un, menu_box);	
		} else if (scrollTop < 630) {
			$.Nav.B(logo, menu, menu_out, un, menu_box);
		}
	}
	
});

// popup 弹窗
$(document).ready(function() {
	var popup = $('.popup');
	var pop_box = $('.pop-box');
	var lang_bnt = $('.lang');
	var lang = $('.lang span');
	var pop_close = $('.pop-close');
	var lang_list = $('.pop-content ul li');
	var lang_lists = ['汉语','英语','丹麦语','法语','德语','日语'];
	var popup2 = $('.popup2');
	var pop_box2 = $('.pop-box2');

	lang_bnt.click(function() {
		popup.css('display','block');
		popup2.css('display','none');
		pop_box2.animate({top:'-100%'},200);

		pop_box.animate({
			top:'15%'
		},450);		
		$('html,body').addClass('ovfHiden'); //使网页不可滚动
	});

	pop_close.click(function() {
		pop_box.animate({
			top:'-85%'},300,function() {
			popup.css('display','none');
		});
		$('html,body').removeClass('ovfHiden'); //使网页恢复可滚
	});

	lang_list.click(function() {
		var i = $(this).index();
		lang.text(lang_lists[i]);
		pop_box.animate({
			top:'-85%'},300,function() {
			popup.css('display','none');
		});
		$('html,body').removeClass('ovfHiden'); //使网页恢复可滚
	});
});

$(document).ready(function() {
	var popup = $('.popup2');
	var popup1 = $('.popup');
	var pop_box1 = $('.pop-box');
	var pop_box = $('.pop-box2');
	var country_bnt = $('.country');
	var country = $('.country span');
	var pop_close = $('.pop-close2');
	var lang_list = $('.pop-content2 ul li');
	var lang_lists = ['中国-人民币','奥地利-EUR','比利时-EUR','捷克共和国-EUR','丹麦-DKK','芬兰-EUR','法国-EUR','德国-EUR','希腊-EUR','爱尔兰-EUR',
	'意大利-EUR','卢森堡-EUR','荷兰-EUR','挪威-挪威克朗','波兰-EUR','葡萄牙-EUR','西班牙-EUR','瑞典-瑞典克朗','英国-英镑','美国-美元'];

	country_bnt.click(function() {
		popup.css('display','block');
		popup1.css('display','none');
		pop_box1.animate({top:'-85%'},200);

		pop_box.animate({
			top:'0'
		},450);		
		$('html,body').addClass('ovfHiden'); //使网页不可滚动
	});

	pop_close.click(function() {
		pop_box.animate({
			top:'-100%'},300,function() {
			popup.css('display','none');
		});
		$('html,body').removeClass('ovfHiden'); //使网页恢复可滚
	});

	lang_list.click(function() {
		var i = $(this).index();
		country.text(lang_lists[i]);
		pop_box.animate({
			top:'-100%'},300,function() {
			popup.css('display','none');
		});
		$('html,body').removeClass('ovfHiden'); //使网页恢复可滚
	});
});

$(document).ready(function() {
	var menu_out2 = $('.menu-icon2');
	var pop3 = $('.popup3');
	var pop3_close = $('#pop-close3');
	var pop_left = $('.pop-left');

	var pop_menu = $('.pop-nav');
	var pop_pro = $('.pop-pro');
	var pop_sto = $('.pop-sto');
	var pop_cou = $('.pop-cou');
	var pop_lang = $('.pop-lang');

	var pro_out = $('.pro');
	var sto_out = $('.sto');
	var cou_out = $('.cou');
	var lan_out = $('.lan');
	var back = $('.back');

	menu_out2.click(function() {
		pop3.css('display','block');
		menu_out2.css({'width':'15px'});
		menu_out2.attr('src','img/nbw.png');
		pop_left.animate({left:'0'},500);
		// $('html,body').addClass('ovfHiden'); //使网页不可滚动
		pop3_close.click(function() {
			menu_out2.attr('src','img/icon-menu-white@2x2.png');
			pop_left.animate({left:'-100%'}, 250, 'swing', function() {
				pop3.css('display','none');	
				// $('html,body').removeClass('ovfHiden'); //使网页恢复可滚			
			});
		});
	});

	pro_out.click(function() {
		popTog(pop_pro,pop_menu);
	});
	sto_out.click(function() {
		popTog(pop_sto,pop_menu);
	});
	cou_out.click(function() {
		popTog(pop_cou,pop_menu);
	});
	lan_out.click(function() {
		popTog(pop_lang,pop_menu);
	});

	back.click(function() {
		if (pop_pro.css('left') == '0px') { popTog(pop_menu, pop_pro); }
		if (pop_sto.css('left') == '0px') { popTog(pop_menu, pop_sto); }
		if (pop_cou.css('left') == '0px') { popTog(pop_menu, pop_cou); }
		if (pop_lang.css('left') == '0px') { popTog(pop_menu, pop_lang); }
	});

});

function popTog(out, i) {
	i.animate({left:'-100%'}, 150, 'swing', function() {
		out.animate({left:'0'},600, 'swing');
	});
}

function ImgSwi(img_name, i, j) {
	console.log(img_name);
	if (j == 0) {
		$('.' + i + ' h3').css('display','none');
		$('.' + i + ' span').css('display','none');;
		$('.' + i + ' h5').css('display','none');;
	} else if (j == 1) {
		$('.' + i + ' h3').css('display','block');
		$('.' + i + ' span').css('display','block');;
		$('.' + i + ' h5').css('display','block');;
	}

	var str = 'img/' + img_name;
	
	$('#' + i).animate({opacity:'0'}, 200, function() {
		$('#' + i).attr('src',str);
		$('#' + i).animate({opacity:'1'},200);
	});	
}




// $(document).ready(function() {
// 	$('#b1-box').mouseover(function() {
// 		$('#b1').attr('src','img/b2.png');
// 	});	

// 	$('#b1-box').mouseout(function() {
// 		$('#b1').attr('src','img/b1.png');
// 	});
// });

// $(document).on("pageinit","#pageone",function() {
// 	$('html,body').on('swiperight', function() {
// 		alert("您向右滑动！");
// 	});
// });

// $.ToggleMenu = {

// 	Small:function(menu_out, menu_in, menu, main) {
// 		menu_out.click(function() {
// 			menu.animate({top:'0'});
// 			main.animate({marginTop:'70px'});
// 		});

// 		menu_in.click(function() {
// 			menu.animate({top:'-70px'});
// 			main.animate({marginTop:'0'});
// 		});
// 	},

// 	Big:function(menu_out, menu_in, menu, main) {
// 		menu_out.click(function() {
// 			menu.animate({top:'0'});
// 			main.animate({marginTop:'85px'});
// 		});

// 		menu_in.click(function() {
// 			menu.animate({top:'-85px'});
// 			main.animate({marginTop:'0'});
// 		});
// 	}
// };
// $(document).scroll(function() {
// 	var box = $('.box');
// 	var main = $('#main');
// 	box.animate({top:'-85px'});
// 	main.animate({marginTop:'0'});
// });
// alert($(window).width()); 