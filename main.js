/*
// 判断“阅读更多”按钮是否存在并模拟点击
if(exist('#btn-readmore')){
    exist('#btn-readmore').click()
}
// 登录叉号的模拟点击
var cancel='body > div.pulllog-box > div > div > button.btn-close';
if(exist(cancel)){
    exist(cancel).click()
}

// 各处广告的隐藏
var css1='#mainBox > aside > div.csdn-tracking-statistics.mb8.box-shadow'; // 广告1
var css2='#asideFooter > div:nth-child(1)'; // 广告2
var css3='#_360_interactive' //抽奖元素
var css=[css1,css2,css3];

for(var i=0; i<3; i++){
	if(exist(css[i])){
		exist(css[i]).style.display="none";
	}
}

// 判断元素是否存在
function exist(css) {
    if(document.querySelector(css)){
        return document.querySelector(css)
    }
    else{
        return false
    }
}
// 把底部滚动条挪到合适的位置
document.body.onclick=moveRight;

function moveRight() {
    document.documentElement.scrollLeft=390;
}
*/


// 查找元素
function query(css) {
    return document.querySelector(css);
}

//删除元素
function remove(element) {
    const parentElement = element.parentNode;
    if (parentElement) {
        parentElement.removeChild(element);
    }
}

const btnReadmore = query('#btn-readmore')
if (btnReadmore) {
    console.log('btn-readmore exist');

    // 显示全文和隐藏“阅读更多”按钮

    // csdn页面的设置方式：
    // $("div.article_content").removeAttr("style");
    // $('#btn-readmore').parent().remove();

    // 等效替换：
    query("div.article_content").removeAttribute('style');
    remove(btnReadmore.parentNode);
} else {
    console.log('btn-readmore not exist');
}