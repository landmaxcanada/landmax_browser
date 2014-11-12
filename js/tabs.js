
var lm = window.lm || {};

// document.querySelector('#mediaQuery').addEventListener('core-media-change',
//   function(e) {
//     document.body.classList.toggle('core-narrow', e.detail.matches);
//     document.querySelector('#scrollableTabs').updateBar();
// });

lm.btns = {};
lm.tabs = document.querySelector('core-toolbar paper-tabs');
lm.pages = document.querySelector('body core-pages');
lm.pages.selected = 0;

lm.webview = {};
lm.webviewElms = document.querySelectorAll('core-pages webview'); //{"wv-home", "wv-mls", "wv-gMap", "wv-assessment"};


lm.tabs.addEventListener('core-select',function(){
  lm.pages.selected = lm.tabs.selected;
  lm.webViewActiveElm = lm.webviewElms[lm.pages.selected];
});

lm.LoadBtns = function(){


  for (var i = 0; i<lm.webviewElms.length; i++) {
    lm.webview[lm.webviewElms[i].id] = {};
    lm.webview[lm.webviewElms[i].id].src = lm.webviewElms[i].src;
  }

  lm.webViewActiveElm = document.getElementById("wv-home");



  lm.btns.Back = document.getElementById("btnBack").addEventListener("click", function(){
    lm.webViewActiveElm.back();
  });

  lm.btns.Forward = document.getElementById("btnForward").addEventListener("click", function(){
    lm.webViewActiveElm.forward();
  });

  lm.btns.Reload = document.getElementById("btnReload").addEventListener("click", function(){
    lm.webViewActiveElm.reload();
  });

  lm.btns.Stop = document.getElementById("btnStop").addEventListener("click", function(){
    lm.webViewActiveElm.stop();
    //lm.realtorWeb.GetAddress();
  });

  document.querySelectorAll('core-toolbar paper-icon-button.hide').className = "";
}

window.onload = function() {
  lm.LoadBtns();
  //lm.realtorWeb.SetSrc();
};
window.onresize = function() {
  console.log('resize');
  //lm.realtorWeb.SetSrc();
};
