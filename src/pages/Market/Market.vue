<template>
 <div>
	<!-- Header -->
	<!-- <div id="header">

	</div> -->
	<app-header></app-header>

	<!-- Header END -->
	<div id="main">
		<div class="sliderPad">
			<div class="sliderCont">
				<div class="sliderMask">
					<ul>
						<li><img src="../../../static/images/slider_01.jpg" alt="" width="970px"></li>
						<li><img src="../../../static/images/slider_01.jpg" alt="" width="970px"></li>
						<li><img src="../../../static/images/slider_01.jpg" alt="" width="970px"></li>
						<li><img src="../../../static/images/slider_01.jpg" alt="" width="970px"></li>
						<li><img src="../../../static/images/slider_01.jpg" alt="" width="970px"></li>
					</ul>
				</div>
			</div>
			<!-- <div class="sliderBtPad">
				<i class="sliderBt fa fa-angle-left" aria-hidden="true"></i>
				<i class="sliderBt fa fa-angle-right" aria-hidden="true"></i>
			</div> -->
			<div class="sliderCtrl"></div>
		</div>
		<div class="content">
			<div class="indexBtPad CGt clear">
				<router-link to ='/market_upload' class="btn_item">+物品</router-link>
				<router-link to ='/wish_upload' class="btn_wish">+許願</router-link>
			</div>
			<p class="textAd">行銷文案說明，保留一行文字區塊</p>
			<div class="conBlock marketPad">
				<div class="conTitle">
					<div class="assign btn_assign">
						<a>全部</a>
					</div>
					<h1>市集</h1>
					<p>[享受交換樂趣，充滿無限可能]</p>
				</div>
				<div class="itemPad clear" >
					 <div class="itemBox itemL" v-for="(product,index) in resData" v-if="index == 0">
						<div class="itemImg"><img :src="(product.PictureUrls)[0]" alt=""></div>
						<router-link :to="{name:'Market_detail',params: { id: product._id}} "></router-link>
						<div class="itemInfo">
							<span class="iQua">4</span><span class="iHeart" id="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>{{product.ProductName}}</h3>
							<p>{{product.ProductName}}</p>
						</div>
					</div>
					<div class="itemBox itemS" v-for="(product,index) in resData" v-if="index > 0 && index <= 9 ">
						<div class="itemImg"><img :src="product.PictureUrls[0]" alt=""></div>
						<router-link :to="{name:'Market_detail',params: { id: product._id}}"></router-link>
						<div class="itemInfo">
							<span class="iQua">4</span><span class="iHeart action"></span>
						</div>
						<div class="itemTitle">
							<h3>{{product.ProductName}}</h3>
						</div>
					</div>
					<div class="itemBox itemL itemAd">
						<p>廣告</p>
						<div class="itemImg"><img src="../../../static/images/mk_it_img_11.jpg" alt=""></div>
						<a href="#"></a>
						<div class="itemInfo">
							<span>&nbsp;</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>《天堂M》凌晨開服瞬間18萬人熱爆，遊戲橘子：營運預算無上限</h3>
						</div>
					</div>
					<div class="itemBox itemS" v-for="(product,index) in resData" v-if="index > 9 ">
						<div class="itemImg"><img :src="product.PictureUrls[0]" alt=""></div>
						<router-link :to="{name:'Market_detail',params: { id: product._id}}"></router-link>
						<div class="itemInfo">
							<span class="iQua">4</span><span class="iHeart action"></span>
						</div>
						<div class="itemTitle">
							<h3>{{product.ProductName}}</h3>
						</div>
					</div>
					<!--<div class="itemBox itemS iFinish">
						<div class="itemImg"><img src="../../../static/images/img_item_08.jpg" alt=""></div>
						<a href="item_detail.html?c"></a>
						<div class="itemInfo">
							<span class="iQua">12</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>手做造型彩色隔熱杯套</h3>
						</div>
					</div>
					<div class="itemBox itemS">
						<div class="itemImg"><img src="../../../static/images/mk_it_img_4.jpg" alt=""></div>
						<a href="item_detail.html?j"></a>
						<div class="itemInfo">
							<span class="iQua">10</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>木製貓頭鷹造型桌飾</h3>
						</div>
					</div>
					<div class="itemBox itemS">
						<div class="itemImg"><img src="../../../static/images/mk_it_img_5.jpg" alt=""></div>
						<a href="item_detail.html?j"></a>
						<div class="itemInfo">
							<span class="iQua">48</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>Apple watch第一代，附上一個全新錶帶</h3>
						</div>
					</div>
					<div class="itemBox itemS">
						<div class="itemImg"><img src="../../../static/images/mk_it_img_6.jpg" alt=""></div>
						<a href="item_detail.html?j"></a>
						<div class="itemInfo">
							<span class="iQua">39</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>Canon單眼相機</h3>
						</div>
					</div>
					<div class="itemBox itemS">
						<div class="itemImg"><img src="../../../static/images/mk_it_img_7.jpg" alt=""></div>
						<a href="item_detail.html?c"></a>
						<div class="itemInfo">
							<span class="iQua">20</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>PS遊戲片（多換一可）</h3>
						</div>
					</div>
					<div class="itemBox itemS">
						<div class="itemImg"><img src="../../../static/images/mk_it_img_8.jpg" alt=""></div>
						<a href="item_detail.html?j"></a>
						<div class="itemInfo">
							<span class="iQua">40</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>針織外套（米色）</h3>
						</div>
					</div>
					<div class="itemBox itemS">
						<div class="itemImg"><img src="../../../static/images/mk_it_img_9.jpg" alt=""></div>
						<a href="item_detail.html?c"></a>
						<div class="itemInfo">
							<span class="iQua">29</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>Watch dogs遊戲片（專屬ps4，換出不退</h3>
						</div>
					</div>
					<div class="itemBox itemS">
						<div class="itemImg"><img src="../../../static/images/mk_it_img_10.jpg" alt=""></div>
						<a href="item_detail.html?c"></a>
						<div class="itemInfo">
							<span class="iQua">29</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>PS遊戲片NINIA 2</h3>
						</div>
					</div>
					<div class="itemBox itemL itemAd">
						<p>廣告</p>
						<div class="itemImg"><img src="../../../static/images/mk_it_img_11.jpg" alt=""></div>
						<a href="#"></a>
						<div class="itemInfo">
							<span>&nbsp;</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>《天堂M》凌晨開服瞬間18萬人熱爆，遊戲橘子：營運預算無上限</h3>
						</div>
					</div>
					<div class="itemBox itemS">
						<div class="itemImg"><img src="../../../static/images/mk_it_img_12.jpg" alt=""></div>
						<a href="item_detail.html?j"></a>
						<div class="itemInfo">
							<span class="iQua">40</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>d系列保養組</h3>
						</div>
					</div>
					<div class="itemBox itemS">
						<div class="itemImg"><img src="../../../static/images/mk_it_img_13.jpg" alt=""></div>
						<a href="item_detail.html?j"></a>
						<div class="itemInfo">
							<span class="iQua">29</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>Rongjia晚霜系列</h3>
						</div>
					</div>
					<div class="itemBox itemS">
						<div class="itemImg"><img src="../../../static/images/mk_it_img_14.jpg" alt=""></div>
						<a href="item_detail.html?j"></a>
						<div class="itemInfo">
							<span class="iQua">29</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>MAKE UP FOR EVER</h3>
						</div>
					</div>
					<div class="itemBox itemS" >
						<div class="itemImg"><img src="../../../static/images/mk_it_img_15.jpg" alt=""></div>
						<a href="item_detail.html?c"></a>
						<div class="itemInfo">
							<span class="iQua">40</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>烏克麗麗</h3>
						</div>
					</div>
					<div class="itemBox itemS">
						<div class="itemImg"><img src="../../../static/images/mk_it_img_16.jpg" alt=""></div>
						<a href="item_detail.html?c"></a>
						<div class="itemInfo">
							<span class="iQua">29</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>絨球耳環聖誕系列</h3>
						</div>
					</div>
					<div class="itemBox itemS noSwap">
						<div class="itemImg"><img src="../../../static/images/mk_it_img_17.jpg" alt=""></div>
						<a href="item_detail.html?c"></a>
						<div class="itemInfo">
							<span class="iQua">0</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>Watch dogs遊戲片（專屬ps4，換出不退</h3>
						</div>
					</div>
					<div class="itemBox itemS">
						<div class="itemImg"><img src="../../../static/images/mk_it_img_18.jpg" alt=""></div>
						<a href="item_detail.html?j"></a>
						<div class="itemInfo">
							<span class="iQua">13</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>金工手做搖水杯</h3>
						</div>
					</div>
					<div class="itemBox itemS">
						<div class="itemImg"><img src="../../../static/images/mk_it_img_19.jpg" alt=""></div>
						<a href="item_detail.html?c"></a>
						<div class="itemInfo">
							<span class="iQua">20</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>全新air pod</h3>
						</div>
					</div>
					<div class="itemBox itemS">
						<div class="itemImg"><img src="../../../static/images/mk_it_img_20.jpg" alt=""></div>
						<a href="item_detail.html?c"></a>
						<div class="itemInfo">
							<span class="iQua">1192</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>iphone7 全新機，只患部售，等值商品就換</h3>
						</div>
					</div>
					<div class="itemBox itemS">
						<div class="itemImg"><img src="../../../static/images/mk_it_img_21.jpg" alt=""></div>
						<a href="item_detail.html?j"></a>
						<div class="itemInfo">
							<span class="iQua">29</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>正韓淺紫上衣</h3>
						</div>
					</div>
					<div class="itemBox itemS">
						<div class="itemImg"><img src="../../../static/images/mk_it_img_22.jpg" alt=""></div>
						<a href="item_detail.html?c"></a>
						<div class="itemInfo">
							<span class="iQua">29</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>YSL經典有提包</h3>
						</div>
					</div>
					<div class="itemBox itemS">
						<div class="itemImg"><img src="../../../static/images/mk_it_img_23.jpg" alt=""></div>
						<a href="item_detail.html?c"></a>
						<div class="itemInfo">
							<span class="iQua">4</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>野豬瓦愣造壁掛</h3>
						</div>
					</div> -->
					<!-- <div class="itemBox itemS" v-for="r in resData">
						<div class="itemImg"><img :src="r.PictureUrls[0]" alt=""></div>
						<a href="item_detail.html?c"></a>
						<div class="itemInfo">
							<span class="iQua">20</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>{{r.ProductName}}</h3>
						</div>
					</div> -->
				</div>
			</div>
		</div>
	   <div class="btn_openPop"></div>
	</div><!-- main END -->

	<!-- Footer -->
	<!-- <div id="footer">
	</div> -->
  <app-footer></app-footer>

	<div class="backTop CGt"></div>
	<!-- Light Box -->
	<div id="popContainer" style="top:-100vh;">
		<div class="popContent popAssignPad">
			<div class="btn_closePop"></div>
			<div class="assignList clear">
				<a><img src="../../../static/images/icon_item_all.png" alt="">全部</a>
				<a><img src="../../../static/images/icon_item_man.png" alt="">男士時尚</a>
				<a><img src="../../../static/images/icon_item_lady.png" alt="">女士時尚</a>
				<a><img src="../../../static/images/icon_item_baby.png" alt="">媽咪寶貝</a>
				<a><img src="../../../static/images/icon_item_pet.png" alt="">寵物用品</a>
				<a><img src="../../../static/images/icon_item_book.png" alt="">書籍</a>
				<a><img src="../../../static/images/icon_item_game.png" alt="">遊戲</a>
				<a><img src="../../../static/images/icon_item_media.png" alt="">數位影音</a>
				<a><img src="../../../static/images/icon_item_toy.png" alt="">玩具公仔</a>
			</div>
			<div class="assignList clear">
				<a><img src="../../../static/images/icon_item_3c.png" alt="">3C電子</a>
				<a><img src="../../../static/images/icon_item_electric.png" alt="">家電</a>
				<a><img src="../../../static/images/icon_item_furniture.png" alt="">傢俱</a>
				<a><img src="../../../static/images/icon_item_garden.png" alt="">居家園藝</a>
				<a><img src="../../../static/images/icon_item_sport.png" alt="">戶外活動</a>
				<a><img src="../../../static/images/icon_item_fitness.png" alt="">健身</a>
				<a><img src="../../../static/images/icon_item_makeup.png" alt="">美妝保養</a>
				<a><img src="../../../static/images/icon_item_food.png" alt="">美食</a>
				<a><img src="../../../static/images/icon_item_stationery.png" alt="">文具用品</a>
			</div>
			<div class="assignList clear">
				<a><img src="../../../static/images/icon_item_art.png" alt="">藝術古董</a>
				<a><img src="../../../static/images/icon_item_musical.png" alt="">樂器</a>
				<a><img src="../../../static/images/icon_item_crafts.png" alt="">手工藝品</a>
				<a><img src="../../../static/images/icon_item_traffic.png" alt="">交通工具</a>
				<a><img src="../../../static/images/icon_item_ticket.png" alt="">票券</a>
				<a><img src="../../../static/images/icon_item_service.png" alt="">個人服務</a>
				<a><img src="../../../static/images/icon_item_gift.png" alt="">免費贈與</a>
			</div>
		</div>
	</div>
	<!-- Loader  -->
	<div class="loadPad"><div class="loader_g"><i></i><i></i><i></i><i></i></div></div>

 </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import api from '../../api/Api.js'

export default {
  components: {
    'app-header': Header,
	'app-footer': Footer,
  },
  name: 'HelloWorld',
  data() {
    return {
		resData:[],
		data:{}
    }
  },
  created(){
	 this.getItem();

	 
  },
  methods:{
	  async getItem(){
	    this.getToken();  
		this.resData = await api.get('GetProductWithLocationAndCategory_V2',localStorage.getItem('api_token'),'&filterDate=16')
		console.log(this.resData)
	  },
	   async getToken(){
		   await api.getToken()
	   }
	  
  },
  updated(){
	   setTimeout(() => {			 
		  var $itemPad = $('.itemPad'),
          $itemPadW = $itemPad.width(),
          itemW = $itemPadW / 5 - 8, // .itemPad寬度 / 5行 - (marginRight=10 * 4個 / 5行)
          $allBox = $itemPad.find('.itemBox'),
          boxLen = $allBox.length,
          $boxS = $itemPad.find('.itemS'),
          boxSL = $boxS.length,
          $boxL = $itemPad.find('.itemL');
        var boxHArr = [];
        for (var i = 0; i < boxSL; i++) {
          var boxH = $boxS.eq(i).height();
          boxHArr.push(boxH);
          var maxHeight = Math.max(...boxHArr);
		  //console.log('maxHeight= ' + maxHeight);
          $boxS.css({
            'min-height': maxHeight + 'px'
		  });
          $boxL.css({
            'min-height': maxHeight * 2 + 10 + 'px'
          });
        }
		 $('.itemPad').masonry({
          itemSelector: '.itemBox',
          columnWidth: itemW,
          gutter: 10
		});
		   $('.iHeart').click(function(){
	    	$(this).toggleClass('action');
		  });
	   },100)
  },
  mounted() {
	 
	  
    setTimeout(() => {	
	 
      var element = document.getElementById("body_class");
      element.removeAttribute("class");
      element.classList.add("index", "mainPage");

      $('.loadPad').animate({
        opacity: 0
      }, 1000, function () {
        $('.loadPad').css({
          'display': 'none'
        });
	  });
	 
	$('.backTop').click(function(){$('html,body').animate({scrollTop:$('#main').offset().top}, 800, 'easeOutCirc');});
	    $(window).on('load', function () {
          if ($(window).width() > 1024) {
          var s = skrollr.init();
				}
				
		})


				
							/* index Slider */
	var i = 0,
		$sliderCont = $('.sliderCont'),
		$sliderUL = $sliderCont.find('ul'),
		$sliderLI = $sliderCont.find('li'),
		$sliderLeng = $sliderLI.length,
		$sliderNow = 0, //現在的slider 位置
		$sliderBt = $('.sliderBTPad'),
		$sliderBtList = $sliderBt.find('i'),
		$sliderCtrl = $('.sliderCtrl'),
		ind, timer, showSpeed = 8000, stop = false;
    if($sliderLeng <= 5){
			for(i=0; i < $sliderLeng; i++){
				$sliderCtrl.append("<i></i>");
			}
	}
	var $sliderList = $sliderCtrl.find('i');
	$sliderList.eq(0).addClass('action');
	$sliderUL.css({width:$sliderLeng*1200+"px"});
	// 點擊點點
	$sliderList.click(function(){
		ind = $(this).index();
		if(ind !== $sliderNow){
			$sliderNow = ind;
			$sliderUL.css({left:"0"});
		}
		$(this).addClass('action').siblings().removeClass('action');
		$sliderUL.stop().animate({"margin-left":"-1200"*ind+"px"}, 1500 ,'easeOutCubic');
		$sliderList.eq(ind).addClass('action').siblings().removeClass('action');
	});
	// 自動輪播
	timer = setTimeout(move, showSpeed);
	$sliderList.hover(function(){
		stop = true;
		clearTimeout(timer);
	}, function(){
		stop = false;
		timer = setTimeout(move, showSpeed);
	});
	function move(){
		if($sliderNow < $sliderLeng - 1){
		   $sliderNow += 1;
		   }else{
			   $sliderNow = 0;
			   $sliderUL.css({left:"0"});
		   }
		$sliderUL.stop().animate({"margin-left":"-1200"*$sliderNow+"px"}, 1500 ,'easeOutCubic');
		$sliderList.eq($sliderNow).addClass('action').siblings().removeClass('action');
		timer = setTimeout(move, showSpeed);
	}
	$sliderBtList.click(function(){
		var $ind = $(this).index();
		if($ind !== 1 && $sliderNow > 0){
			$sliderNow --;
			if($sliderNow === 0){
				$sliderBtList.eq(0).addClass('false');
			}
		}else if($sliderNow < $sliderLeng - 1){

			$sliderBtList.eq(0).removeClass('false');
			$sliderNow ++;
		}else{
			console.log("none");
		}
		$sliderCont.css({left:"-"+$sliderNow*100+"vw"});
		$sliderList.eq($sliderNow).addClass('action').siblings().removeClass('action');
		console.log($ind, "+" ,$sliderNow);
	});
	//item排版_marketPad
        
	
	$(document).ready(function () {

			  

        $('.btn_assign').click(function () {
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('popAssign');
        })
      })
      $('.btn_closePop').click(function () {
        $('#popContainer').stop().animate({
          top: -100 + 'vh'
        }, 500, function () {
          // $('#popContainer').fadeOut();
          $('#popContainer').removeClass();
        });
        if ($('body').hasClass('mDeal')) {
          $('.post').find('.btn_submit').css({
            'display': 'none'
          }).siblings().fadeIn();
          $('.post').find('.inquireDeta.userData').css({
            'display': 'none'
          }).siblings('.inquireDeta').fadeIn();
        }
	  });
	  
    }, 100)
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
