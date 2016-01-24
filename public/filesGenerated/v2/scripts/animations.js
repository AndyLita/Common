var animationParser = {
  checkAnim: function(element) {
    if(element.action.animation != "")
      return true;
    else return false;
  },
  prepareWipeUp: function(elementID, params){
    var hgt=elementID.height();
    elementID.height(0);
    var para = params.split(";");
    var speed = para[0].split("=")[1];
    var delay = para[1].split("=")[1];
    return [hgt,speed,delay];
  },
  prepareWipeDown: function(elementID, params){
    var hgt=elementID.height();
    elementID.height(0);
    var topPos=elementID.css('top');
    topPos=topPos.substr(0,topPos.length-2);
    topPos=768-hgt-topPos;
    elementID.css('top','');
    elementID.css('bottom',topPos);
    var para = params.split(";");
    var speed = para[0].split("=")[1];
    var delay = para[1].split("=")[1];
    return [hgt,speed,delay];
  },
  prepareWipeLeft: function(elementID, params){
    var wdt=elementID.width();
    elementID.width(0);
    var para = params.split(";");
    var speed = para[0].split("=")[1];
    var delay = para[1].split("=")[1];
    return [wdt,speed,delay];
  },
  prepareWipeRight: function(elementID, params){
    var wdt=elementID.width();
    elementID.width(0);
    var leftPos=elementID.css('left');
    leftPos=leftPos.substr(0,leftPos.length-2);
    leftPos=1024-wdt-leftPos;
    elementID.css('left','');
    elementID.css('right',leftPos);
    var para = params.split(";");
    var speed = para[0].split("=")[1];
    var delay = para[1].split("=")[1];
    return [wdt,speed,delay];
  },
  prepareShow: function(elementID, params){
    elementID.css('opacity',0);
    var para = params.split(";");
    var speed = para[0].split("=")[1];
    var delay = para[1].split("=")[1];
    return [speed,delay];
  },
  prepareHide: function(elementID, params){
    elementID.css('opacity', 1);
    var para = params.split(";");
    var speed = para[0].split("=")[1];
    var delay = para[1].split("=")[1];
    return [speed,delay];
  },
  prepareTranslate: function(elementID, params){
    var par = params.split(";");
    var xPos = par[0].split("=")[1];
    var yPos = par[1].split("=")[1];
    var speed = par[2].split("=")[1];
    var delay = par[3].split("=")[1];
    var easing = par[4].split("=")[1];

    var leftPos=elementID.css('left');
    leftPos=leftPos.substr(0,leftPos.length-2);
    leftPos=parseInt(leftPos)+parseInt(xPos);
    
    var topPos=elementID.css('top');
    topPos=topPos.substr(0,topPos.length-2);
    topPos=parseInt(topPos)+parseInt(yPos);
    return [leftPos,topPos,speed,delay,easing];
  },
  wipeUpDown: function(elementID, hgt, speed, delay){
      setTimeout(function(){
        elementID.animate({
            height: hgt
          }, speed);
      }, delay);
  },
  wipeLeftRight: function(elementID, wdt, speed, delay){
      setTimeout(function(){
        elementID.animate({
          width: wdt
        }, speed);
      }, delay);
  },
  toggleOpacity: function(elementID, opac, speed, delay){
      setTimeout(function(){
        elementID.animate({
          'opacity': opac
        }, speed);
      }, delay);
  },
  animTranslate: function(elementID, leftPos, topPos, speed, delay, easing){
      setTimeout(function(){
        elementID.animate({
          left: leftPos,
          top: topPos
        }, speed, easing);
      }, delay);
  },
  hideElements: function(hideID){
    var ids=hideID.split(";");
    ids.forEach(function(id){
      $("#"+id).css('opacity',0);
    });
  }
}