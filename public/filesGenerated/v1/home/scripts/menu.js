$("document").ready(function () {
    var menuAnimationSpeed = 500;
    var menuAnimationEasingOption = "easeOutBounce";
    var menuTimerCloseTimer = 5000;

    var menuTopOriginalTopPosition = parseInt($(".menuTop").css("top"));
    var menuLeftOriginalLeftPosition = parseInt($(".menuLeft").css("left"));
    var menuBottomOriginalBottomPosition = parseInt($(".menuBottom").css("bottom"));

    console.log("Current location = " + window.location.href);

    /////////////////////////////////////////////////////////
    // Menu links
    GenerateMenuTop();
    GenerateMenuLeft();

    function GenerateMenuLeft() {
        var ul = $("<ul>");
        //console.log(menuLeft);
        var i = 0;
        $.each(menuLeft, function () {
            //console.log(this.menuIcon);
            //console.log(this.urlToOpen);
            var li = $('<li><div class="menuDiv" id="menuLeftID_' + i + '" data-urltoopen="' + locationPathToAdd + this.urlToOpen + '" style="background-image:url(' + locationPathToAdd + this.menuIcon + ');">&nbsp;</div></li>')
            ul.append(li);
            i++;
        });
        $(".menuLeft").html(ul);
    }


    function GenerateMenuTop() {
        var ul = $("<ul>");
        //console.log(menuLeft);
        var i = 0;
        $.each(menuTop, function () {
            //console.log(this.menuIcon);
            //console.log(this.urlToOpen);
            var li = $('<li><div class="menuDiv" id="menuTopID_' + i + '" data-urltoopen="' + locationPathToAdd + this.urlToOpen + '" style="background-image:url(' + locationPathToAdd + this.menuIcon + ');">&nbsp;</div></li>')
            ul.append(li);
            i++;
        });
        $(".menuTop").html(ul);
    }

    //$(document).on("click", ".menuDiv", function () {
    //    var clickedId = this.id;
    //    OpenLink(clickedId);
    //});

    $(document).on("touch click", ".menuDiv", function () {
        var clickedId = this.id;
        OpenLink(clickedId);
    });

    function OpenLink(objectClicked) {
        console.log($("#" + objectClicked));
        var urlToOpen = $("#" + objectClicked).data("urltoopen");
        var currentUrl = window.location.href;
        var currentPageNumber = -1;
        if (currentUrl.indexOf("#current=") > 0) {
            var startIndexForSlice = currentUrl.indexOf("#current=") + ("#current=").length;
            currentPageNumber = currentUrl.slice(startIndexForSlice, currentUrl.length);
        }
        var urlWithoutParameters = currentUrl.slice(0, currentUrl.indexOf(".html"));
        //console.log(urlWithoutParameters);
        var pageGetUrl = "";
        if (currentPageNumber > -1) {
            pageGetUrl = "?page=" + currentPageNumber;
        }
        localStorage.setItem("returnUrl", urlWithoutParameters + ".html" + pageGetUrl);
        console.log(urlWithoutParameters + ".html" + pageGetUrl)
        top.location.href = urlToOpen;
    }

    ////////////////////////////////////////////////
    // Menu animations 
    //

    //this function animates menu inside the screen
    function ShowMenu() {
        $(".menuTop").css("position", "fixed").animate(
            {
                //        left: finalPositionLeft,
                top: 0
            },
            {
                duration: menuAnimationSpeed,
                queue: false,
                easing: menuAnimationEasingOption
            });
        //$(".menuTop").css("position", "absolute");

        $(".menuLeft").css("position", "fixed").animate(
            {
                left: 0,
                //top: 0
            },
            {
                duration: menuAnimationSpeed,
                queue: false,
                easing: menuAnimationEasingOption
            });
        //$(".menuTop").css("position", "absolute");

        $(".menuBottom").css("position", "fixed").animate(
            {
                //left: 0,
                bottom: 0
            },
            {
                duration: menuAnimationSpeed,
                queue: false,
                easing: menuAnimationEasingOption
            });
        //$(".menuBottom").css("position", "absolute");
    }


    // this function returns menu back outside the screen
    function HideMenu() {
        $(".menuTop").css("position", "fixed").animate(
            {
                //        left: finalPositionLeft,
                top: menuTopOriginalTopPosition
            },
            {
                duration: menuAnimationSpeed,
                queue: false,
                easing: menuAnimationEasingOption
            });
        $(".menuTop").css("position", "absolute");

        $(".menuLeft").css("position", "fixed").animate(
            {
                left: menuLeftOriginalLeftPosition,
                //top: 0
            },
            {
                duration: menuAnimationSpeed,
                queue: false,
                easing: menuAnimationEasingOption
            });
        $(".menuTop").css("position", "absolute");

        $(".menuBottom").css("position", "fixed").animate(
            {
                //left: 0,
                bottom: menuBottomOriginalBottomPosition
            },
            {
                duration: menuAnimationSpeed,
                queue: false,
                easing: menuAnimationEasingOption
            });
        $(".menuBottom").css("position", "absolute");
    }

    // here we trigger the menu animations on click
    // show menu
    //$(document).on("click", "[id^=menu]", function () {
    //    ShowMenu();
    //    SetTimerToCloseMenu();
    //});

    $(document).on("touch click", "[class^=menu]", function () {
        ShowMenu();
        SetTimerToCloseMenu();
    });

    //// hide menu
    //$(document).on("click", "#wrapper", function () {
    //    HideMenu();
    //});

    $(document).on("touch click", "#wrapper", function () {
        HideMenu();
    });

    // here we set the interval to close the menu automatically
    function SetTimerToCloseMenu() {
        setTimeout(HideMenu, menuTimerCloseTimer);
    }
});