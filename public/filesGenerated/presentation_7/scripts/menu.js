/* MENU PARSER */
var global_menuTop = $('#menu-top'),
	global_menuLeft = $('#menu-left'),
	global_menuBot = $('#menu-bot'),
	global_menu = $('#menu-top, #menu-left, #menu-bot'),
	global_background = $('body'),
	global_popUpTop = $('#popup-top'),
	global_totalTableRows = 0,
	global_swapped = [0, 0, 0, 0, 0, 0, 0],
	global_pdf = 0,
	global_homepage = 1,
	global_training_toShow,
	global_localStorage = [];
var menuParser = {
	init: function(){
		var nrElemsTop, nrElemsLeft, nrElemsBot,
			i, speed = menuConfig.menuOpenCloseSpeed;
		var carousel = $(".owl-carousel").data('owlCarousel'),
			homepage = $("#homepage"),
			slider = $("#ipad-slider"),
			training = $("#ipad-training"),
			pdfWrapper = $("#pdf-wrapper");
		var menuPosLeft=[], menuPosTop=[], menuPosBot=[];
		if (menuConfig.itemsTop<=4) nrElemsTop = menuConfig.itemsTop;
		else if (menuConfig.itemsTop>4) nrElemsTop = 4;
		else nrElemsTop = 0;

		if (menuConfig.itemsLeft<=7) nrElemsLeft = menuConfig.itemsLeft;
		else if (menuConfig.itemsLeft>7) nrElemsLeft = 7;
		else nrElemsLeft = 0;

		if (menuConfig.itemsBot<=5) nrElemsBot = menuConfig.itemsBot;
		else if (menuConfig.itemsBot>5) nrElemsBot = 5;
		else nrElemsBot = 0;

		menuPosLeft=this.calcPosLeft(nrElemsLeft);
		menuPosTop=this.calcPosTop(nrElemsTop);
		menuPosBot=this.calcPosBot(nrElemsBot);
		for (i=0;i<nrElemsTop;i++)
		{
			var $div = $("<div>", {id: "menu-top-"+eval(i+1), class: "menu-item"});
			global_menuTop.append($div);
		}
		for (i=0;i<nrElemsLeft;i++)
		{
			var $div = $("<div>", {id: "menu-left-"+eval(i+1), class: "menu-item"});
			global_menuLeft.append($div);
		}
		for (i=0;i<nrElemsBot;i++)
		{
			var $div = $("<div>", {id: "menu-bot-"+eval(i+1), class: "menu-item"});
			global_menuBot.append($div);
		}

		menuConfig.actionsLeft.forEach(function(action, index){
			$('#'+action.id).css('right','22px');
			$('#'+action.id).css('background', action.bg);
			$('#'+action.id).css('top', menuPosLeft[parseInt(action.id.split('-')[2]-1)]);
			$('#'+action.id).on('click touch', function(){
				if (action.jumpTo!=""){
					menuParser.resetBotButtons();
					if (hiddenPages.length!=0)
            			presentationParser.deleteHiddenPage(action.jumpTo);
					homepage.hide();
					global_homepage = 0;
					pdfWrapper.hide();
					menuParser.resetPDF();
					training.hide();
					slider.show();
					carousel.jumpTo(parseInt($('#'+action.jumpTo).data('pagenumber')/*.split('-')[1]*/));
				}
			});
		});
		menuConfig.actionsBot.forEach(function(action, index){
			$('#'+action.id).css('top','17px');
			$('#'+action.id).css('background', action.bg);
			$('#'+action.id).css('left', menuPosBot[parseInt(action.id.split('-')[2]-1)]);
			$('#'+action.id).on('click touch', function(){
				var currentID = parseInt(action.id.split('-')[2]);
				//console.log(global_swapped[currentID]);
				if(global_swapped[currentID]==0){
					menuParser.resetBotButtons();
					$(this).css('background', menuConfig.botMenuBack);
					global_swapped[currentID]=1;
				}
				else if (global_swapped[currentID]==1)
				{
					training.hide();
					slider.show();
					if (global_homepage == 1)
						homepage.show();
					//console.log('test');
					pdfWrapper.hide();
					menuParser.resetPDF();
					menuParser.resetBotButtons();
					//$(this).css('background')=action.bg;
				}

				if (action.jumpTo!="" && global_swapped[currentID]==1){
					homepage.hide();
					pdfWrapper.hide();
					menuParser.resetPDF();
					slider.hide();
					if (training.data('owlCarousel')) 
						training.data('owlCarousel').destroy();
					training.html('');
					loadedTrainingPages=[];
					training.show();
					global_training_toShow = 'presentation-'+action.jumpTo.split('-')[1];
					var totalTrainingPageNr = 0;
					global_training_data.presentation.forEach(function(presentation, index) {
			        if (presentation.id == global_training_toShow)
			        	{
				          var container = document.getElementById('ipad-training');
				          presentation.pages.forEach(function(pageData, index) {

				            var page = document.createElement("div");
				            page.setAttribute('id', pageData.id);
				            page.setAttribute('data-pagenumber', totalTrainingPageNr);
				            
				            page.style.width='1024px';
				            page.style.height='768px';

			            	loadedTrainingPages[totalTrainingPageNr]=false;
			            	totalTrainingPageNr++;
			            	container.appendChild(page);

				          });
			      		}
			    	});
					training.owlCarousel({
						        	navigation : false,
								    singleItem:true,
								    addClassActive: true,
								    afterAction : presentationParser.checkOnLoadTrainingStatus
						  		});
					//carousel.jumpTo(parseInt(action.jumpTo.split('-')[1]))
				}
			});
		});
		menuConfig.actionsTop.forEach(function(action, index){
			$('#'+action.id).css('bottom','16px');
			$('#'+action.id).css('background', action.bg);
			$('#'+action.id).css('left', menuPosTop[parseInt(action.id.split('-')[2]-1)]);
			$('#'+action.id).on('click touch', function(e){
				switch (action.type) {
					case 'pdf':
					{		
						e.stopPropagation();
						//console.log(global_pdf);
						if (global_pdf == 0)
						{
							$(this).css('background', menuConfig.topMenuBack);
							global_pdf = 1;
							menuParser.closeMenu(speed);
							pdfWrapper.show();
							pdfWrapper.html('<object id="pdf-object" data="'+menuConfig.pdfSrc+'" type="application/pdf"></object>');
						}
						else if (global_pdf == 1)
						{
							menuParser.resetPDF();
							pdfWrapper.hide();
						}
						
						break;
					}
					case 'training':
					{
						var currentID = 6;
						//console.log(global_swapped[currentID]);
						if(global_swapped[currentID]==0){
							menuParser.resetBotButtons();
							$(this).css('background', menuConfig.topMenuBack2);
							global_swapped[currentID]=1;
							//console.log(global_swapped);
						}
						else if (global_swapped[currentID]==1)
						{
							training.hide();
							slider.show();
							if (global_homepage == 1)
								homepage.show();
							//console.log('test');
							pdfWrapper.hide();
							menuParser.resetPDF();
							menuParser.resetBotButtons();
							//$(this).css('background')=action.bg;
						}

						if (action.jumpTo!="" && global_swapped[currentID]==1){
							homepage.hide();
							pdfWrapper.hide();
							menuParser.resetPDF();
							slider.hide();
							if (training.data('owlCarousel')) 
								training.data('owlCarousel').destroy();
							training.html('');
							loadedTrainingPages=[];
							training.show();
							global_training_toShow = 'presentation-'+action.jumpTo.split('-')[1];
							//console.log(global_training_toShow);
							var totalTrainingPageNr = 0;
							global_training_data.presentation.forEach(function(presentation, index) {
							//console.log(presentation.id);
					        if (presentation.id == global_training_toShow)
					        	{
						          var container = document.getElementById('ipad-training');
						          presentation.pages.forEach(function(pageData, index) {

						            var page = document.createElement("div");
						            page.setAttribute('id', pageData.id);
						            page.setAttribute('data-pagenumber', totalTrainingPageNr);
						            
						            page.style.width='1024px';
						            page.style.height='768px';

					            	loadedTrainingPages[totalTrainingPageNr]=false;
					            	totalTrainingPageNr++;
					            	container.appendChild(page);

						          });
					      		}
					    	});
							training.owlCarousel({
								        	navigation : false,
										    singleItem:true,
										    addClassActive: true,
										    afterAction : presentationParser.checkOnLoadTrainingStatus
								  		});
							//carousel.jumpTo(parseInt(action.jumpTo.split('-')[1]))
						}
						break;
					}
					case 'home':
					{
						menuParser.resetBotButtons();
						pdfWrapper.hide();
						menuParser.resetPDF();
						homepage.show();
						global_homepage = 1;
						break;
					}
					case 'popUp':
					{
						e.stopPropagation();
						menuParser.closeMenu(speed);
						global_popUpTop.show();
						global_popUpTop.on('click touch', function(e){
							e.stopPropagation();
						});
						break;
					}
					case 'pricePage':
					{
						e.stopPropagation();
						var currentActivePage = $('#ipad-slider .active').children('div').attr('id');
						//console.log(currentActivePage);
						var firstPageNumberID, priceDataID, currentPresentation;
						//console.log(currentActivePage);
						global_presentation_data.presentation.forEach(function(presentation, index){
							presentation.pages.forEach(function(page, index){
								if (page.id == currentActivePage)
								{
									currentPresentation = presentation.id;
									priceDataID = presentation.pricePageID; 
									firstPageNumberID = presentation.pages[0].id;
								}
							});
						});
						var pageDataID = $('#'+currentActivePage).data('pagenumber');
						var firstPageDataID = $('#'+firstPageNumberID).data('pagenumber');

						var jumpPageID = parseInt(firstPageDataID) + parseInt(priceDataID);
						//console.log(jumpPageID);
						var owl = $('#ipad-slider').data('owlCarousel');

						if (global_homepage == 0 && priceDataID != -1 && global_pdf == 0 && $('#ipad-slider').css('display')!= '' && hiddenPages.length == 0)
							owl.jumpTo(jumpPageID);
					}
					default:
					{
						break;
					}
				}
			});
		});
		this.addListeners(speed);
		this.generateTable();
	},
	generateTable: function(){
		var tableBody = $("<table>");
	    var i = 0;
	    global_localStorage = [];
	    $.each(menuConfig.products, function () {
            var skuArrayLength = this.sku.length;
            for (var j = 0; j < skuArrayLength; j++) {
                var storedValue = 0;
                var elementUniqueID = "input_" + i + '_' + j;
                global_localStorage.push({
                	name: this.productName,
                	id: elementUniqueID,
                	sku: this.sku[j].categoryName
                });
                var classAdderMinus = " hidden";
                var classAdderPlus = "";
                //console.log(this.sku[j].allowedValues[this.sku[j].allowedValues.length-1]);
                if (localStorage[elementUniqueID] != null) {
                    storedValue = parseInt(localStorage[elementUniqueID]);
                    if (storedValue != this.sku[j].allowedValues[0]) {
                        classAdderMinus = "";
                    }
                    if (storedValue == this.sku[j].allowedValues[this.sku[j].allowedValues.length-1]) {
                        classAdderPlus = " hidden";
                    }
                }
                var tableLine = $('<tr>\
                                    <td class="brandNameBody">' + this.productName + '</td>\
                                    <td class="brandSKUTypeBody">'+ this.sku[j].categoryName + '</td>\
                                    <td class="buttonHolderMinusBody"><button id="minus_' + i + '_' + j + '" class="roundButton' + classAdderMinus + '" data-uniqueid="'+i+"_"+j+'" data-operator="-1" data-allowedvalues="' + this.sku[j].allowedValues + '">-</button></td>\
                                    <td class="inputHolderBody"><input id="input_' + i + '_' + j + '" type="text" placeholder="?" value="' + storedValue + '" readonly /></td>\
                                    <td class="buttonHolderPlusBody"><button id="plus_' + i + '_' + j + '" class="roundButton'+ classAdderPlus + '" data-uniqueid="' + i + "_" + j + '" data-operator="1"  data-allowedvalues="' + this.sku[j].allowedValues + '">+</button></td>\
                                </tr>');
                if (j==skuArrayLength-1 && i!=menuConfig.products.length-1)
                	tableLine = $('<tr style="border-bottom: 2px solid #fff;">\
                                    <td class="brandNameBody">' + this.productName + '</td>\
                                    <td class="brandSKUTypeBody">'+ this.sku[j].categoryName + '</td>\
                                    <td class="buttonHolderMinusBody"><button id="minus_' + i + '_' + j + '" class="roundButton' + classAdderMinus + '" data-uniqueid="'+i+"_"+j+'" data-operator="-1" data-allowedvalues="' + this.sku[j].allowedValues + '">-</button></td>\
                                    <td class="inputHolderBody"><input id="input_' + i + '_' + j + '" type="text" placeholder="?" value="' + storedValue + '" readonly /></td>\
                                    <td class="buttonHolderPlusBody"><button id="plus_' + i + '_' + j + '" class="roundButton'+ classAdderPlus + '" data-uniqueid="' + i + "_" + j + '" data-operator="1"  data-allowedvalues="' + this.sku[j].allowedValues + '">+</button></td>\
                                </tr>');
                tableBody.append(tableLine);
                //console.log(i + "_" + j);
                global_totalTableRows++;
            }
            i++;
        });
        $(".formContainer").html(tableBody);
        $('.roundButton').on('click touch', function () {
	        var clickedID = this.id;
	        menuParser.saveDataInStorage(clickedID);
	        //console.log(clickedID);
	    });
	    $('.resetButtonBody').on('click touch', function(){
	    	menuParser.resetDataInStorage();
	    });
	    $('.backButtonBody').on('click touch', function(){
	    	presentationParser.reloadCurrentPage();
	    	menuParser.closePopups();
	    });
	},
	saveDataInStorage: function(clickedID){
		var uniqueID = $("#" + clickedID).data("uniqueid");
        var valueInInput = parseInt($("input#input_" + uniqueID).val());
        var operator = parseInt($("#" + clickedID).data("operator"));
        var allowedValuesString = $("#" + clickedID).data("allowedvalues");
        var allowedValues = allowedValuesString.split(',');
        // here we check what is the next value in the array
        for (i = 0; i < allowedValues.length; i++) {
            // here we try to find the position of the input value in the array 
            if (valueInInput == parseInt(allowedValues[i])) {
                //console.log("i=" + i + " val=" + valueInInput);
                // here we treat the case when we click on plus button
                if (operator * 1 > 0 && parseInt(allowedValues[i]) < parseInt(allowedValues[allowedValues.length-1])) {
                    var valueToStore = allowedValues[i + 1];
                    $("#minus_" + uniqueID).removeClass("hidden");
                    if ( i+2 >= allowedValues.length) {
                        $("#plus_" + uniqueID).addClass("hidden");
                    }
                }
                // here the case for the munus button
                if (operator * 1 < 0 && parseInt(allowedValues[i]) > 0) {
                    var valueToStore = allowedValues[i - 1];
                    $("#plus_" + uniqueID).removeClass("hidden");
                    if (i - 1 <= 0) {
                        $("#minus_" + uniqueID).addClass("hidden");
                    }
                }
            }
        }
        localStorage.setItem("input_"+uniqueID, valueToStore);
        $("input#input_" + uniqueID).val(valueToStore);
	},
	resetDataInStorage: function(){
		var i = 0;
        $.each(menuConfig.products, function () {
            var skuArrayLength = this.sku.length;
            for (var j = 0; j < skuArrayLength; j++) {
                var elementUniqueID = "input_" + i + '_' + j;
                localStorage.setItem(elementUniqueID, "0");
            }
            i++;
        });
        menuParser.generateTable();
	},
	resetBotButtons: function(){
		menuConfig.actionsBot.forEach(function(action, index){
			$('#'+action.id).css('background', action.bg);
		});
		$('#'+menuConfig.actionsTop[2].id).css('background', menuConfig.actionsTop[2].bg);
		global_swapped = [0, 0, 0, 0, 0, 0, 0];
	},
	resetPDF: function(){
		menuConfig.actionsTop.forEach(function(action, index){
			if (action.type == 'pdf') {
				$('#'+action.id).css('background', action.bg);
			}
		});
		global_pdf = 0;
	},
	expandMenu: function(speed){
		global_menuTop.animate({
        	top: 0
      	}, speed);
      	global_menuBot.animate({
        	bottom: 0
      	}, speed);
      	global_menuLeft.animate({
        	left: 0
      	}, speed);
	},
	closeMenu: function(speed){
		global_menuTop.animate({
        	top: -81
      	}, speed);
      	global_menuBot.animate({
        	bottom: -81
      	}, speed);
      	global_menuLeft.animate({
        	left: -133
      	}, speed);
	},
	addListeners: function(speed){
		global_menu.on('click touch', function(e){
      		e.stopPropagation();
      		menuParser.expandMenu(speed); 
      		menuParser.closePopups();
    	});

    	global_background.on('click touch', function(){
      		menuParser.closeMenu(speed);
      		menuParser.closePopups();
    	});

    	$("#pdf-object").on('click touch', function(){
      		menuParser.closeMenu(speed);
      		menuParser.closePopups();
    	});
	},
	closePopups: function(){
		global_popUpTop.hide();
	},
	calcPosTop: function(nrElems){
		switch (nrElems) {
			case '1': {
				return [228];
				break;
			}
			case '2': {
				return [108,348];
				break;
			}
			case '3': {
				return [48,228,408];
				break;
			}
			case '4': {
				return [12,156,300,444];
				break;
			}
			default: {
				break;
			}
		}
	},
	calcPosLeft: function(nrElems){
		switch (nrElems) {
			case '1': {
				return [282];
				break;
			}
			case '2': {
				return [161,403];
				break;
			}
			case '3': {
				return [101,282,463];
				break;
			}
			case '4': {
				return [65,210,354,499];
				break;
			}
			case '5': {
				return [41,162,282,402,523];
				break;
			}
			case '6': {
				return [24,127,230,334,437,540];
				break;
			}
			case '7': {
				return [11,102,192,282,372,462,553];
				break;
			}
			default: {
				break;
			}
		}
	},
	calcPosBot: function(nrElems){
		switch (nrElems) {
			case '1': {
				return [299];
				break;
			}
			case '2': {
				return [155,443];
				break;
			}
			case '3': {
				return [83,299,515];
				break;
			}
			case '4': {
				return [41,213,385,557];
				break;
			}
			case '5': {
				return [13,156,299,442,585];
				break;
			}
			default: {
				break;
			}
		}
	}
}