// here we keep the order of the pages
var activePages = [0, 1, 3];
var allPages = [0,1,2,3,4];

// here we store the HTML content of the pages 
var pagesContent = [
    '<h1 class="title" >Here we write the Title</h1><h2 class="subTitle" id="2">Here we explain more...</h2>\
     <div class="bodyText"><a href="presentation1.html?page=10">If you have seen this before, you can jump to the last page...</a></div>',

    '<h1 class="title animatedOnEntry" id="1">Title appears with delay</h1> <h2 class="subTitle animatedOnEntry" id="2">Sub-title comes later... with delay, after title</h2>',

    '<h1 class="title" id="1">This is how animate a page with an image</h1>\
    <img src="images/1_splash.png" style="position: absolute; top:0; left:-27px; z-index: 5;"/> \
    <img id="image_2_1" src="images/image_2_1_x330_y48_w153_h295.png" style="position: absolute; left:660px; top:-600px; width:306px; height:590px; z-index: 5;"/>',

    '<h1 class="title animatedOnEntry" id="trigger_3_1" data-animations=\'[{"elementId":"trigger_3_1", "animationEffect":"translate", "delayTime":"0", "speedTime":"500", "finalPositionLeft":"500", "finalPositionTop":"500", "easingOption":"easeOutElastic"}]\'>Click me</h1> <p class="bodyText">And here we have a lot of text<br/>as much as we may need to write in this paragraph<br/>...and it goes on.</p>',

    '<h1 class="title">Here we animate elements on click</h1> \
     <h2 class="subTitle" id="2">Click on the images below to open pop-ups, references etc.</h2> \
     <img src="images/trigger_4_1_x36_y72_60x46.png" class="menuInPage" id="trigger_4_1" style="left:72px" \
         data-animations=\'[{"elementId":"image_4_11", "animationEffect":"show", "delayTime":"0", "speedTime":"1000"},\
                            {"elementId":"image_4_12", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                            {"elementId":"image_4_13", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                            {"elementId":"image_4_14", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                            {"elementId":"image_4_15", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                            {"elementId":"image_4_16", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                            {"elementId":"image_4_17", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"}]\' /> \
    <img src="images/trigger_4_2_x99_y72_60x46.png" class="menuInPage" id="trigger_4_2" style="left:198px" \
        data-animations=\'[{"elementId":"image_4_11", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_12", "animationEffect":"show", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_13", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_14", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_15", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_16", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_17", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"}]\' /> \
    <img src="images/trigger_4_3_x162_y72_60x46.png" class="menuInPage" id="trigger_4_3" style="left:324px" \
        data-animations=\'[{"elementId":"image_4_11", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_12", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_13", "animationEffect":"fadeIn", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_14", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_15", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_16", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_17", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"}]\' /> \
    <img src="images/trigger_4_4_x225_y72_60x46.png" class="menuInPage" id="trigger_4_4" style="left:450px" \
        data-animations=\'[{"elementId":"image_4_11", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_12", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_13", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_14", "animationEffect":"show", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_15", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_16", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_17", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"}]\' /> \
    <img src="images/trigger_4_5_x288_y72_60x46.png" class="menuInPage" id="trigger_4_5" style="left:576px" \
        data-animations=\'[{"elementId":"image_4_11", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_12", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_13", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_14", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_15", "animationEffect":"show", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_16", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_17", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"}]\' /> \
    <img src="images/trigger_4_6_x352_y72_60x46.png" class="menuInPage" id="trigger_4_6" style="left:704px" \
        data-animations=\'[{"elementId":"image_4_11", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_12", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_13", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_14", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_15", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_16", "animationEffect":"show", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_17", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"}]\' /> \
    <img src="images/trigger_4_7_x415_y72_60x46.png" class="menuInPage" id="trigger_4_7" style="left:830px" \
        data-animations=\'[{"elementId":"image_4_11", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_12", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_13", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_14", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_15", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_16", "animationEffect":"hide", "delayTime":"0", "speedTime":"0"},\
                           {"elementId":"image_4_17", "animationEffect":"show", "delayTime":"0", "speedTime":"0"}]\' /> \
    <img src="images/image_4_10_x36_y147_w439_h97.png" style="position:absolute; left:72px; top:294px; width:878px; height:194px;"> \
    <img src="images/image_4_18_x36_y120_w441_h22.png" style="position:absolute; top:240px; left:72px; width:882px; height:58px;" /> \
    <img id="image_4_11" class="popUp" src="images/image_4_11_x36_y160_w187_h84.png" style="left:72px; top:320px; width:374px; heigth:170px; position:absolute;" />\
    <img id="image_4_12" class="popUp" src="images/image_4_12_x99_y160_w187_h84.png" style="left:198px; top:320px; width:374px; heigth:170px; position:absolute;" />\
    <img id="image_4_13" class="popUp" src="images/image_4_13_x162_y147_w187_h98.png" style="left:324px; top:294px; width:374px; heigth:170px; position:absolute;" />\
    <img id="image_4_14" class="popUp" src="images/image_4_14_x225_y147_w187_h98.png" style="left:450px; top:294px; width:374px; heigth:170px; position:absolute;" />\
    <img id="image_4_15" class="popUp" src="images/image_4_15_x288_y147_w187_h98.png" style="left:576px; top:294px; width:374px; heigth:170px; position:absolute;" />\
    <img id="image_4_16" class="popUp" src="images/image_4_16_x225_y147_w187_h98.png" style="left:450px; top:294px; width:374px; heigth:170px; position:absolute;" />\
    <img id="image_4_17" class="popUp" src="images/image_4_17_x289_y147_w187_h98.png" style="left:578px; top:294px; width:374px; heigth:170px; position:absolute;" />\
    <img src="images/image_4_21_x97_y257_w316_h41.png" style="left:194px; top:514px; width:632px; height:82px; position:absolute;"/>\
    <img src="images/image_4_22_x110_y310_w291_h24.png" style="left:220px; top:620px; width:582px; height:48px; position:absolute;"/>',

    '<h1 class="title" id="5_1">With Slide-Up/Down we can animate graphs</h1>\
    <img src="images/5_graph.png" style="position: absolute; left:62px; top:134px; width:900px; height:500px;"/>\
    <div id="5_2" class="popUp" style="position:absolute; height:412px; width:20px; left:406px; top:184px; z-index:10; background-color:red"></div>',

     '<h1 class="title" id="6_1">Various translation options</h1>\
     <h2 class="subTitle" id="6_2">Effect: easeOutBounce</h2>\
     <img id="6_3" src="images/6_ball.png" style="position: absolute; left:50px; top:150px; width:80px; height:80px;"/>',

    '<h1 class="title" id="7_1">Various translation options</h1>\
     <h2 class="subTitle" id="7_2">Effect: linear</h2>\
     <img id="7_3" src="images/7_circle.png" style="position: absolute; left:50px; top:150px; width:300px; height:300px;"/>\
     <img id="7_4" src="images/7_circle.png" style="position: absolute; left:650px; top:150px; width:300px; height:300px;"/>\
     <div id="7_5" class="popUp" style="position: absolute; left:500px; top:235px; font-size:30px; font-weight: 900;">You can<br/>&nbsp;&nbsp;&nbsp;add<br/>elements<br/>&nbsp;&nbsp;later...</div>',

    '<h1 class="title" id="8_1">This is an experiment in the digital laboratory</h1>\
     <h2 class="subTitle" id="8_2">Effect: fade</h2>\
     <img id="8_3" class="popUp" src="images/8_Laboratory.jpg" style="position: absolute; left:80px; top:160px; width:360px; height:240px;"/>\
     <img id="8_4" class="popUp" src="images/8_programmer1.jpg" style="position: absolute; left:380px; top:320px; width:409px; height:293px;"/>',

     '<h1 class="title" id="9_1">This is an experiment in the digital laboratory</h1>\
     <h2 class="subTitle" id="trigger_9_2"\
        data-animations=\'[{"elementId":"9_3", "animationEffect":"fadeOut", "delayTime":"500", "speedTime":"1000"},\
                           {"elementId":"9_4", "animationEffect":"fadeOut", "delayTime":"0", "speedTime":"500"}]\'>Effect: click here to fade out</h2>\
     <img id="9_3" src="images/8_Laboratory.jpg" style="position: absolute; left:80px; top:160px; width:360px; height:240px;"/>\
     <img id="9_4" src="images/8_programmer1.jpg" style="position: absolute; left:380px; top:320px; width:409px; height:293px;"/>',

     '<h1 class="title" id="10_1">The navigation allows to jump to differnt pages</h1>\
      <div class="bodyText">\
        <a href="presentation1.html?page=0">First Page</a><br/><br/><a href="presentation1.html?page=4">An interior page</a><br/><br/><a href="presentation1.html?page=9">Previous Page</a>\
      </div>',

      '<img id="10" src="images/10.png" style="position: absolute; left:0px; top:0px; width:1024px; height:768px;"/>'
];

var pageAutomaticAnimations = [{"page": "1",
                                    "elementsToAnimate": 
                                        [{"elementId": "1","animationEffect": "show","speedTime": "1500","delayTime": "0"}, 
                                         {"elementId": "2","animationEffect": "show","speedTime": "1000","delayTime": "1000"}]},
                                 {"page": "2",
                                    "elementsToAnimate": 
                                        [{"elementId":"image_2_1", "animationEffect":"translate", "delayTime":"0", "speedTime":"500", "finalPositionLeft":"660", "finalPositionTop":"122", "easingOption":"linear", "loopAnimation":"1"}]},
                                {"page": "3",
                                    "elementsToAnimate": 
                                        [{"elementId": "trigger_3_1","animationEffect": "show","speedTime": "500","delayTime": "0"},
                                         { "elementId": "2", "animationEffect": "show", "speedTime": "50000", "delayTime": "1000" }]
                                },
                                {
                                    "page": "5",
                                    "elementsToAnimate":
                                        [{ "elementId": "5_2", "animationEffect": "slideDown", "speedTime": "500", "delayTime": "0" },
                                         { "elementId": "5_2", "animationEffect": "slideUp", "speedTime": "500", "delayTime": "1000" },
                                         { "elementId": "5_2", "animationEffect": "slideDown", "speedTime": "500", "delayTime": "1500" },
                                         { "elementId": "5_2", "animationEffect": "slideUp", "speedTime": "500", "delayTime": "2000" },
                                        { "elementId": "5_2", "animationEffect": "slideDown", "speedTime": "500", "delayTime": "2500" }]
                                },
                                {
                                    "page": "6",
                                    "elementsToAnimate":
                                        [{ "elementId": "6_3", "animationEffect": "translate", "delayTime": "500", "speedTime": "500", "finalPositionLeft": "50", "finalPositionTop": "660", "easingOption": "easeOutBounce", "loopAnimation": "1" }
                                        ]
                                },
                                {
                                    "page": "7",
                                    "elementsToAnimate":
                                        [{ "elementId": "7_3", "animationEffect": "translate", "delayTime": "500", "speedTime": "500", "finalPositionLeft": "350", "finalPositionTop": "150", "easingOption": "linear", "loopAnimation": "1" },
                                          { "elementId": "7_4", "animationEffect": "translate", "delayTime": "500", "speedTime": "500", "finalPositionLeft": "450", "finalPositionTop": "150", "easingOption": "linear", "loopAnimation": "1" },
                                          { "elementId": "7_5", "animationEffect": "show", "delayTime": "900", "speedTime": "10" }
                                        ]
                                },
                                {
                                    "page": "8",
                                    "elementsToAnimate":
                                     [
                                     { "elementId": "8_3", "animationEffect": "fadeIn", "delayTime": "800", "speedTime": "500" },
                                     { "elementId": "8_4", "animationEffect": "fadeIn", "delayTime": "1400", "speedTime": "800" }
                                     ]
                                }
                    ];
