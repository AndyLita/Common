var onLoadAnim=[], onLoadTrainingAnim=[], onLoadAnimHidden=[], hiddenPages=[], loadedTrainingPages=[], loadedPages=[], currentPageID, currentTrainingPageID, presentationParser = {

  loadHomepage: function(){
    $('#ipad-training').hide();
    $('#ipad-slider').show();
    var homepage = document.getElementById('homepage');
    global_presentation_data.homepage.elements.forEach(function(element, index) {
        homepage.appendChild(presentationParser.parseElement(element));
        if (element.id == 'resetButton')
          $('#resetButton').on('click touch', function(){
            menuParser.resetDataInStorage();
          });
      });
    this.loadSlider();
  },
  loadSlider: function() {
    var self=this;
    self.jsonTest(global_presentation_data);
    $('#ipad-slider').owlCarousel({
      //lazyLoad : true,
      navigation : false,
      singleItem:true,
      addClassActive: true,
      //lazyFollow : false,
      afterAction : self.checkOnLoadStatus
    });
  },
  parseElement: function(element) {
    function parseImage(element) {
      var img = document.createElement('img');
      img.setAttribute('id', element.id);
      img.src = element.src;
      if (element.classes!="")
      {
        var classToAdd='';
        var classes = element.classes.split(';');
        for (var jj=0;jj<classes.length;jj++)
          classToAdd += classes[jj]+' ';
        img.setAttribute('class', classToAdd);
      }
      img.setAttribute('style', element.style);
      img.style.width = element.size.width;
      img.style.height = element.size.height;
      img.style.top = element.position.top;
      img.style.left = element.position.left;
      return img;
    }
    function parseText(element) {
      var subtype;
      switch (element.subtype) {
        case 'title': 
        {
          subtype='h1';
          break;
        }
        case 'subtitle':
        {
          subtype='h2';
          break;
        }
        case 'footer-note':
        {
          subtype='h3';
          break;
        }
        case 'paragraph':
        {
          subtype='p';
          break;
        }
      }
      var wrap = document.createElement('div');
      var text = document.createElement(subtype);
      if (element.classes!="")
      {
        var classToAdd='';
        var classes = element.classes.split(';');
        for (var jj=0;jj<classes.length;jj++)
          classToAdd += classes[jj]+' ';
        text.setAttribute('class', classToAdd);
      }
      text.setAttribute('style', element.style);
      wrap.setAttribute('id', element.id);
      wrap.style.position = 'absolute';
      wrap.style.width = element.size.width;
      wrap.style.height = element.size.height;
      wrap.style.overflow = 'hidden';
      wrap.style.top = element.position.top;
      wrap.style.left = element.position.left;
      text.innerHTML = element.value;
      wrap.appendChild(text);
      return wrap;
    }
    function parseVideo(element){
      var video = document.createElement('video');
      var source = document.createElement('source');
      video.appendChild(source);
      video.setAttribute('id', element.id);
      video.setAttribute('controls','');
      video.setAttribute('preload','none');
      source.setAttribute('src', element.src);
      source.setAttribute('type','video/mp4');
      if (element.classes!="")
      {
        var classToAdd='';
        var classes = element.classes.split(';');
        for (var jj=0;jj<classes.length;jj++)
          classToAdd += classes[jj]+' ';
        video.setAttribute('class', classToAdd);
      }
      video.setAttribute('style', element.style);
      video.style.width = element.size.width;
      video.style.height = element.size.height;
      video.style.top = element.position.top;
      video.style.left = element.position.left;
      return video;
    }
    function parseSnippet(element){
      return element;
    }
    function parseTable(element) {
      var table = document.createElement('table');
      table.setAttribute('id', element.id);
      var presentationName = element.src;
      if (element.classes!="")
      {
        var classToAdd='';
        var classes = element.classes.split(';');
        for (var jj=0;jj<classes.length;jj++)
          classToAdd += classes[jj]+' ';
        classToAdd = classToAdd.trim();
        table.setAttribute('class', classToAdd);
      }

      table.setAttribute('style', element.style);
      table.style.width = element.size.width;
      table.style.height = element.size.height;
      table.style.top = element.position.top;
      table.style.left = element.position.left;

      menuConfig.products.forEach(function(product, index){
        //console.log(product.productName);
        //console.log(presentationName);
        if (product.productName == presentationName)
          {
            global_localStorage.forEach(function(elem, index){
              if(elem.name == product.productName)
              {
                if (localStorage[elem.id] > 0) {
                  var tRow = document.createElement('tr');
                  tRow.setAttribute('class', classToAdd+"_row");
                  var tData1 = document.createElement('td');
                  tData1.setAttribute('class', classToAdd+"_data_1");
                  tData1.innerHTML = product.productName;
                  var tData2 = document.createElement('td');
                  tData2.setAttribute('class', classToAdd+"_data_2");
                  tData2.innerHTML = localStorage[elem.id]+" x ";
                  var tData3 = document.createElement('td');
                  tData3.setAttribute('class', classToAdd+"_data_3");
                  tData3.innerHTML = elem.sku;
                  tRow.appendChild(tData1);
                  tRow.appendChild(tData2);
                  tRow.appendChild(tData3);
                  table.appendChild(tRow);
                }
              }
            });
            
          }
      });
      return table;
    }
    switch (element.type) {
      case 'image':
        return parseImage(element);
      case 'text':
        return parseText(element);
      case 'video':
        return parseVideo(element);
      case 'snippet':
        return parseSnippet(element);
      case 'table':
        return parseTable(element);
    }
  },
  jsonTest: function(data) {
    var totalPageNr = 0;
    for (var ii=0;ii<global_presentation_order.length;ii++)
    {
      data.presentation.forEach(function(presentation, index) {
        var current_presentation = 'presentation-'+global_presentation_order[ii];
        if (presentation.id == current_presentation)
        {
          var pagesToLoad = presentation.pages.slice(0, presentation.pages.length);
          var container = document.getElementById('ipad-slider');
          pagesToLoad.forEach(function(pageData, index) {

            var page = document.createElement("div");
            page.setAttribute('id', pageData.id);
            page.setAttribute('data-pagenumber', totalPageNr);
            //added by Andy 
            page.setAttribute('data-slideid', pageData.slideID);
            top.postMessage('page='+pageData.id+'&slideID='+pageData.slideID, 'http://localhost:10101/');
            //end
            totalPageNr++;
            page.style.width='1024px';
            page.style.height='768px';

            var pageIdNr=pageData.id.split('-')[1];
            loadedPages[pageIdNr]=false;

            container.appendChild(page);
          });
      }
    });
  }
  },
  clearPageContent: function(pageData){
    var loadPage = document.getElementById(pageData.id);
        loadPage.style.backgroundImage='';
        loadPage.style.backgroundColor='';
        loadPage.innerHTML="";
        $('#'+pageData.id).parent().removeClass('page-loaded');
        for (var k=0;k<onLoadAnim.length;k++)
          {
            var animPageID=onLoadAnim[k].element.split("_")[0];
            if (animPageID == pageData.id)
              {
                onLoadAnim.splice(k, 1);
                k--;
              }
          };
  },
  reloadCurrentPage: function(){
    var owl = $('#ipad-slider').data('owlCarousel');
    var owlCurrentPage = owl.currentItem;
    owl.jumpTo(owlCurrentPage+1);
    owl.jumpTo(owlCurrentPage);
  },
  loadPageContent: function(type, hasBgImage, bgValues, loadPage, hasBgColor, pageData, elementsToAnim, pageDataNr){
              if (hasBgImage)
                loadPage.style.backgroundImage='url('+bgValues.src+')';
              else
                loadPage.style.backgroundImage='';

              if (hasBgColor)
                loadPage.style.backgroundColor=bgValues.color;
              else
                loadPage.style.backgroundColor='';
          $('#'+pageData.id).parent().addClass('page-loaded');
          pageData.elements.forEach(function(element, index) {
                  loadPage.appendChild(presentationParser.parseElement(element));
                  if(animationParser.checkAnim(element))
                  {
                    if (element.action.type=="onClick")
                    {
                      elementsToAnim.push({
                        id: element.id,
                        animation: element.action.animation,
                        trigger: element.action.triggerElem,
                        hide: element.action.hideElem,
                        params: element.action.params
                      });
                      //console.log('added on click '+element.id+element.animation+element.params);
                    } else if(element.action.type=="onLoad")
                    {
                      if (type=='presentation'){
                      onLoadAnim.push({
                        element: element.id,
                        animation: element.action.animation,
                        params: element.action.params,
                        executed: false
                      });
                      }
                      else if (type=='training')
                      {
                        onLoadTrainingAnim.push({
                        element: element.id,
                        animation: element.action.animation,
                        params: element.action.params,
                        executed: false
                      });
                      }
                      //console.log('added on load '+element.id+element.animation+element.params);
                    }
                  }
              });
              if (type=='presentation')
              {
                loadedPages[pageDataNr]=true;
                elementsToAnim.forEach(function(element) {
                  presentationParser.addClickAnim('presentation', element.id, element.animation, element.trigger, element.hide, element.params);
                });
              }
              else if (type=='training')
              {
                loadedTrainingPages[pageDataNr]=true;+
                elementsToAnim.forEach(function(element) {
                  presentationParser.addClickAnim('training', element.id, element.animation, element.trigger, element.hide, element.params);
                });
              }
              
  },
  checkOnLoadStatus: function(){
    var currentPage=$('#ipad-slider .active').children('div').attr('id');
    var owl = $('#ipad-slider').data('owlCarousel');
    var elementsToAnim=[];
    //console.log(currentPage);
      global_presentation_data.presentation.forEach(function(presentation, index) {
        var bg = document.getElementById('content-wrapper');
        var footer = document.getElementById('footer');
        var header = document.getElementById('header');
        var bgValues = presentation.background;
        var footerValues = presentation.footer;
        var headerValues = presentation.header;
        var hasBgImage = false;
        var hasBgColor = false;

        if (bgValues.src!="")
          hasBgImage = true;
        else
          hasBgImage = false;
        if (bgValues.color!="")
          hasBgColor = true;
        else 
          hasBgColor = false;

        if (footerValues.src!="") {
          var footerImg = document.createElement('img');
          footerImg.src = footerValues.src;
          footer.style.width=footerValues.size.width;
          footer.style.height=footerValues.size.height;
          footer.appendChild(footerImg);
        }

        if (headerValues.src!="") {
          var headerImg = document.createElement('img');
          headerImg.src = headerValues.src;
          header.style.width=headerValues.size.width;
          header.style.height=headerValues.size.height;
          header.appendChild(headerImg);
        }
        
        var pagesTotal = presentation.pages.slice(0, presentation.pages.length);
        pagesTotal.forEach(function(pageData, index) {

          //var currentPageNr = parseInt(currentPage.split('-')[1]);
          var currentPageNr = parseInt($('#'+currentPage).data('pagenumber'));
          var prevPageNr = parseInt(currentPageNr+1);
          var nextPageNr = parseInt(currentPageNr-1);
          //var pageDataNr = pageData.id.split('-')[1];
          var pageDataNr = parseInt($('#'+pageData.id).data('pagenumber'));
          elementsToAnim = [];
          //console.log(pageDataNr+" "+currentPageNr+" "+prevPageNr+" "+nextPageNr);
          if (pageDataNr == currentPageNr) {
              var loadPage = document.getElementById(pageData.id);
              if (loadedPages[pageDataNr]==false) {
                //console.log('Loaded page '+pageData.id);
                presentationParser.loadPageContent('presentation', hasBgImage, bgValues, loadPage, hasBgColor, pageData, elementsToAnim, pageDataNr);
              }
              //here we need to edit dynamicall the url of the host and recipient - added by Andy 
              var slideIDfromDB = $('#'+currentPage).data('slideid');
              top.postMessage('page='+pageDataNr+'&slideID='+slideIDfromDB, 'http://localhost:10101/');
        }
        else if(pageDataNr == prevPageNr || pageDataNr == nextPageNr) {
            var loadPage = document.getElementById(pageData.id);
            presentationParser.clearPageContent(pageData);
            presentationParser.loadPageContent('presentation', hasBgImage, bgValues, loadPage, hasBgColor, pageData, elementsToAnim, pageDataNr);
        }
        else
        if (loadedPages[pageDataNr]==true){
          presentationParser.clearPageContent(pageData);
          //console.log('Removed page '+pageData.id);
          loadedPages[pageDataNr]=false;
        }
        });
      });
    currentPageID = currentPage;
    presentationParser.deleteHiddenPage(currentPage);
    
    /*var onLoadClean = false;
    while (!onLoadClean){
      onLoadClean=true;
      onLoadAnim.forEach(function(page, index){
        if (page.executed==true)
        {
          onLoadClean=false;
          onLoadAnim.splice(index, 1);
        }
      });
    }*/
    onLoadAnim.forEach(function(page, index){
      //console.log(page);
      var animPageID=page.element.split("_")[0];
      var elementID = $('#'+page.element);
      if (currentPage == animPageID && page.executed==false)
      {
        //console.log(page.element+" "+page.animation+" "+page.params);
        switch (page.animation) {
          case 'wipe-up':
          {
            var result=animationParser.prepareWipeUp(elementID, page.params);
            hgt=result[0];
            speed=parseInt(result[1]);
            delay=parseInt(result[2]);
            animationParser.wipeUpDown(elementID, hgt, speed, delay);
            page.executed=true;
            break;
          }
          case 'wipe-down':
          {
            var result=animationParser.prepareWipeDown(elementID, page.params);
            hgt=result[0];
            speed=parseInt(result[1]);
            delay=parseInt(result[2]);
            animationParser.wipeUpDown(elementID, hgt, speed, delay);
            page.executed=true;
            break;
          }
          case 'wipe-left':
          {
            var result=animationParser.prepareWipeLeft(elementID, page.params);
            wdt=result[0];
            speed=parseInt(result[1]);
            delay=parseInt(result[2]);
            animationParser.wipeLeftRight(elementID, wdt, speed, delay);
            page.executed=true;
            break;
          }
          case 'wipe-right':
          {
            var result=animationParser.prepareWipeRight(elementID, page.params);
            wdt=result[0];
            speed=parseInt(result[1]);
            delay=parseInt(result[2]);
            animationParser.wipeLeftRight(elementID, wdt, speed, delay);
            page.executed=true;
            break;
          }
          case 'show':
          {
            var result=animationParser.prepareShow(elementID, page.params);
            speed=parseInt(result[0]);
            delay=parseInt(result[1]);
            animationParser.toggleOpacity(elementID, 1, speed, delay);
            page.executed=true;
            break;
          }
          case 'hide':
          {
            var result=animationParser.prepareHide(elementID, page.params);
            speed=parseInt(result[0]);
            delay=parseInt(result[1]);
            animationParser.toggleOpacity(elementID, 0, speed, delay);
            page.executed=true;
            break;
          }
          case 'translate':
          {
            var result=animationParser.prepareTranslate(elementID, page.params);
            leftPos=result[0];
            topPos=result[1];
            speed=parseInt(result[2]);
            delay=parseInt(result[3]);
            easing=result[4];
            animationParser.animTranslate(elementID, leftPos, topPos, speed, delay, easing);
            page.executed=true;
            break;
          }
        }
      }
    });   
  },
  checkOnLoadTrainingStatus: function(){
    var currentPage=$('#ipad-training .active').children('div').attr('id');
    var trainingElementsToAnim=[];
    //console.log(currentPage);
      global_training_data.presentation.forEach(function(presentation, index) {
        /*console.log(presentation.id);
        console.log(global_training_toShow);*/
        if (presentation.id == global_training_toShow)
        {
        var bg = document.getElementById('content-wrapper');
        var footer = document.getElementById('footer');
        var header = document.getElementById('header');
        var bgValues = presentation.background;
        var footerValues = presentation.footer;
        var headerValues = presentation.header;
        var hasBgImage = false;
        var hasBgColor = false;

        if (bgValues.src!="")
          hasBgImage = true;
        else
          hasBgImage = false;
        if (bgValues.color!="")
          hasBgColor = true;
        else 
          hasBgColor = false;

        if (footerValues.src!="") {
          var footerImg = document.createElement('img');
          footerImg.src = footerValues.src;
          footer.style.width=footerValues.size.width;
          footer.style.height=footerValues.size.height;
          footer.appendChild(footerImg);
        }

        if (headerValues.src!="") {
          var headerImg = document.createElement('img');
          headerImg.src = headerValues.src;
          header.style.width=headerValues.size.width;
          header.style.height=headerValues.size.height;
          header.appendChild(headerImg);
        }
        
        presentation.pages.forEach(function(pageData, index) {

          //var currentPageNr = parseInt(currentPage.split('-')[1]);
          var currentPageNr = parseInt($('#'+currentPage).data('pagenumber'));
          var prevPageNr = parseInt(currentPageNr+1);
          var nextPageNr = parseInt(currentPageNr-1);
          //var pageDataNr = pageData.id.split('-')[1];
          var pageDataNr = parseInt($('#'+pageData.id).data('pagenumber'));
          trainingElementsToAnim = [];
          //console.log(pageDataNr+" "+currentPageNr+" "+prevPageNr+" "+nextPageNr);
          if (pageDataNr == currentPageNr) {
              var loadPage = document.getElementById(pageData.id);
              //console.log(loadedTrainingPages[pageDataNr]+" "+pageDataNr);
              if (loadedTrainingPages[pageDataNr]==false) {
                //console.log('Loaded page '+pageData.id);
                presentationParser.loadPageContent('training', hasBgImage, bgValues, loadPage, hasBgColor, pageData, trainingElementsToAnim, pageDataNr);
              }
        }
        else if(pageDataNr == prevPageNr || pageDataNr == nextPageNr) {
            var loadPage = document.getElementById(pageData.id);
            presentationParser.clearPageContent(pageData);
            presentationParser.loadPageContent('training', hasBgImage, bgValues, loadPage, hasBgColor, pageData, trainingElementsToAnim, pageDataNr);
        }
        else
        if (loadedTrainingPages[pageDataNr]==true){
          presentationParser.clearPageContent(pageData);
          //console.log('Removed page '+pageData.id);
          loadedTrainingPages[pageDataNr]=false;
        }
        });
      }
      });
    currentTrainingPageID = currentPage;
    /*var onLoadClean = false;
    while (!onLoadClean){
      onLoadClean=true;
      onLoadAnim.forEach(function(page, index){
        if (page.executed==true)
        {
          onLoadClean=false;
          onLoadAnim.splice(index, 1);
        }
      });
    }*/
    onLoadTrainingAnim.forEach(function(page, index){
      //console.log(page);
      var animPageID=page.element.split("_")[0];
      var elementID = $('#'+page.element);
      if (currentPage == animPageID && page.executed==false)
      {
        //console.log(page.element+" "+page.animation+" "+page.params);
        switch (page.animation) {
          case 'wipe-up':
          {
            var result=animationParser.prepareWipeUp(elementID, page.params);
            hgt=result[0];
            speed=parseInt(result[1]);
            delay=parseInt(result[2]);
            animationParser.wipeUpDown(elementID, hgt, speed, delay);
            page.executed=true;
            break;
          }
          case 'wipe-down':
          {
            var result=animationParser.prepareWipeDown(elementID, page.params);
            hgt=result[0];
            speed=parseInt(result[1]);
            delay=parseInt(result[2]);
            animationParser.wipeUpDown(elementID, hgt, speed, delay);
            page.executed=true;
            break;
          }
          case 'wipe-left':
          {
            var result=animationParser.prepareWipeLeft(elementID, page.params);
            wdt=result[0];
            speed=parseInt(result[1]);
            delay=parseInt(result[2]);
            animationParser.wipeLeftRight(elementID, wdt, speed, delay);
            page.executed=true;
            break;
          }
          case 'wipe-right':
          {
            var result=animationParser.prepareWipeRight(elementID, page.params);
            wdt=result[0];
            speed=parseInt(result[1]);
            delay=parseInt(result[2]);
            animationParser.wipeLeftRight(elementID, wdt, speed, delay);
            page.executed=true;
            break;
          }
          case 'show':
          {
            var result=animationParser.prepareShow(elementID, page.params);
            speed=parseInt(result[0]);
            delay=parseInt(result[1]);
            animationParser.toggleOpacity(elementID, 1, speed, delay);
            page.executed=true;
            break;
          }
          case 'hide':
          {
            var result=animationParser.prepareHide(elementID, page.params);
            speed=parseInt(result[0]);
            delay=parseInt(result[1]);
            animationParser.toggleOpacity(elementID, 0, speed, delay);
            page.executed=true;
            break;
          }
          case 'translate':
          {
            var result=animationParser.prepareTranslate(elementID, page.params);
            leftPos=result[0];
            topPos=result[1];
            speed=parseInt(result[2]);
            delay=parseInt(result[3]);
            easing=result[4];
            animationParser.animTranslate(elementID, leftPos, topPos, speed, delay, easing);
            page.executed=true;
            break;
          }
        }
      }
    });   
  },
  addClickAnim: function(type, element, animation, triggerID, hideID, params) {
    var pageID = $('#'+element.split("_")[0]);
    var elementID = $('#'+element);
    if (triggerID=="") trigger=pageID;
    else trigger=$('#'+triggerID);
    //console.log(element+" "+animation+" "+element.split("_")[0]+" "+params);
    switch (animation) {
      case 'wipe-up':
      {
        elementID.css('opacity',0);
        trigger.on('click touch', function(event){
          elementID.css('opacity',1);
          if(hideID!="") animationParser.hideElements(hideID);
          var result=animationParser.prepareWipeUp(elementID, params);
          hgt=result[0];
          speed=parseInt(result[1]);
          delay=parseInt(result[2]);
          animationParser.wipeUpDown(elementID, hgt, speed, delay);
          if(hideID=="") trigger.off(event);
        });
        break;
      }
      case 'wipe-down':
      {
        elementID.css('opacity',0);
        trigger.on('click touch', function(event){
          elementID.css('opacity',1);
          var result=animationParser.prepareWipeDown(elementID, params);
          hgt=result[0];
          speed=parseInt(result[1]);
          delay=parseInt(result[2]);
          animationParser.wipeUpDown(elementID, hgt, speed, delay);
          if(hideID=="") trigger.off(event);
          //console.log(trigger+" "+elementID+" "+hgt+" "+speed+" "+delay);
        });
        break;
      }
      case 'wipe-left':
      {
        elementID.css('opacity',0);
        trigger.on('click touch', function(event){
          elementID.css('opacity',1);
          if(hideID!="") animationParser.hideElements(hideID);
          var result=animationParser.prepareWipeLeft(elementID, params);
          wdt=result[0];
          speed=parseInt(result[1]);
          delay=parseInt(result[2]);
          animationParser.wipeLeftRight(elementID, wdt, speed, delay);
          if(hideID=="") trigger.off(event);
        });
        break;
      }
      case 'wipe-right':
      {
        elementID.css('opacity',0);
        trigger.on('click touch', function(event){
          elementID.css('opacity',1);
          if(hideID!="") animationParser.hideElements(hideID);
          var result=animationParser.prepareWipeRight(elementID, params);
          wdt=result[0];
          speed=parseInt(result[1]);
          delay=parseInt(result[2]);
          animationParser.wipeLeftRight(elementID, wdt, speed, delay);
          if(hideID=="") trigger.off(event);
        });
        break;
      }
      case 'show':
      {
        elementID.css('opacity',0);
        trigger.on('click touch', function(event){
          var result=animationParser.prepareShow(elementID, params);
          if(hideID!="") animationParser.hideElements(hideID);
          speed=parseInt(result[0]);
          delay=parseInt(result[1]);
          animationParser.toggleOpacity(elementID, 1, speed, delay);
          if(hideID=="") trigger.off(event);
        });
        break;
      }
      case 'hide':
      {
        trigger.on('click touch', function(event){
          if(hideID!="") animationParser.hideElements(hideID);
          var result=animationParser.prepareHide(elementID, params);
          speed=parseInt(result[0]);
          delay=parseInt(result[1]);
          animationParser.toggleOpacity(elementID, 0, speed, delay);
          if(hideID=="") trigger.off(event);
        });
        break;
      }
      case 'translate':
      {
        trigger.on('click touch', function(event){
          if(hideID!="") animationParser.hideElements(hideID);
          var result=animationParser.prepareTranslate(elementID, params);
          leftPos=result[0];
          topPos=result[1];
          speed=parseInt(result[2]);
          delay=parseInt(result[3]);
          easing=result[4];
          animationParser.animTranslate(elementID, leftPos, topPos, speed, delay, easing);
          if(hideID=="") trigger.off(event);
        });
        break;
      }
      case 'goToPage':
      {
        trigger.on('click touch', function(event){
          //console.log(element+" "+params);
          if (type=='presentation')
            var owl = $("#ipad-slider").data('owlCarousel');
          else if (type=='training')
            var owl = $("#ipad-training").data('owlCarousel');
          //var jumpPageID = params.split("-")[1];
          var jumpPageID = $('#'+params).data('pagenumber');
          //console.log($('#'+params).data('pagenumber'));
          //console.log(params);
          //console.log(jumpPageID);
          owl.jumpTo(jumpPageID);
        });
        break;
      }
      case 'showHidden':
      {
        trigger.on('click touch', function(event){
          var alreadyExists = false;
          hiddenPages.forEach(function(hpage, index){
            if (hpage.id == params)
              alreadyExists = true;
          });
            if (!alreadyExists)
              global_hidden_data.pages.forEach(function(page, index){
              if (params == page.id)
                  presentationParser.generateHiddenPage(page, element, params);
            });
          //console.log(params);
        });
        break;
      }
    }
  },
  generateHiddenPage: function(currentPage, element, params){
    var currentPageData = $('#'+element.split('_')[0]).data('pagenumber');
    var page = '<div id="'+params+'" data-pagenumber="h'+currentPageData+'" style="width: 1024px;height: 768px;"></div>';
    var owl = $('#ipad-slider').data('owlCarousel');
    owl.addItem(page, currentPageData+1);
    //console.log('Added hidden page '+params);
    owl.jumpTo(currentPageData);
    var elementsToAnimHidden = [];
    var hiddenPage = $('#'+params);
    if (currentPage.background.src!="")
      hiddenPage.css('background','url('+currentPage.background.src+') no-repeat');
    else
      hiddenPage.css('background', '');
    if (currentPage.background.color!="")
      hiddenPage.css('background-color',currentPage.background.color);
    else
      hiddenPage.css('background-color','');

    currentPage.elements.forEach(function(elements, index) {
      hiddenPage.append(presentationParser.parseElement(elements));

      if(animationParser.checkAnim(elements))
                  {
                    if (elements.action.type=="onClick")
                    {
                      elementsToAnimHidden.push({
                        id: elements.id,
                        animation: elements.action.animation,
                        trigger: elements.action.triggerElem,
                        hide: elements.action.hideElem,
                        params: elements.action.params
                      });
                      //console.log('added on click '+element.id+element.animation+element.params);
                    } else if(elements.action.type=="onLoad")
                    {
                      onLoadAnimHidden.push({
                        element: elements.id,
                        animation: elements.action.animation,
                        params: elements.action.params,
                        executed: false
                      });
                    }
                      //console.log('added on load '+element.id+element.animation+element.params);
                    }
            });
              elementsToAnimHidden.forEach(function(elements) {
                //console.log(elements.id);
                presentationParser.addClickAnim('presentation', elements.id, elements.animation, elements.trigger, elements.hide, elements.params);
              });

    hiddenPages.push({
        id: params,
        pos: currentPageData+1,
        toDelete: 'no'
    });
  },
  deleteHiddenPage: function(currentPage){
    var owl = $('#ipad-slider').data('owlCarousel');
    hiddenPages.forEach(function(hpage, index){
        if (hpage.id == currentPage && hpage.toDelete == 'no')
        {
          hpage.toDelete = 'yes';
          //console.log(hpage.id+' marked for deletion!');
        }
    });
    hiddenPages.forEach(function(hpage, index){
        if (hpage.id != currentPage && hpage.toDelete == 'yes')
          {
            var currentPageData = $('#'+currentPage).data('pagenumber');
            //console.log(hpage.pos);
            //owl.removeItem(parseInt(hpage.pos));
            //owl.jumpTo(currentPageData);
            //console.log('Deleted hidden page '+hpage.id);
            setTimeout(function(){
              hpage.toDelete = 'deleted';
              owl.removeItem(hpage.pos);
              owl.jumpTo(currentPageData);
              //owl.jumpTo(currentPageData);
            }, 10);
          }
    });
    for (var k=0;k<hiddenPages.length;k++)
    {
      if (hiddenPages[k].toDelete == 'deleted')
              {
                hiddenPages.splice(k, 1);
                k--;
              }
    }
  },
  init: function() {
    this.loadHomepage();
    menuParser.init();
  }
};

$(document).ready(function() {
  presentationParser.init();
});