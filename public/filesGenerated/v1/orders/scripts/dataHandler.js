$(document).ready(function () {
    var totalTableRows = 0;

    GenerateTable();

    function GenerateTable() {
        var tableBody = $("<table>");
        //console.log(productsLists);
        var i = 0;
        $.each(productsLists, function () {
            var skuArrayLength = this.sku.length;
            for (var j = 0; j < skuArrayLength; j++) {
                var storedValue = 0;
                var elementUniqueID = "input_" + i + '_' + j;
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
                                    <td class="brandName">' + this.productName + '</td>\
                                    <td class="brandSKUType">'+ this.sku[j].categoryName + '</td>\
                                    <td class="buttonHolder"><button id="minus_' + i + '_' + j + '" class="roundButton' + classAdderMinus + '" data-uniqueid="'+i+"_"+j+'" data-operator="-1" data-allowedvalues="' + this.sku[j].allowedValues + '">-</button></td>\
                                    <td class="inputHolder"><input id="input_' + i + '_' + j + '" type="text" placeholder="?" value="' + storedValue + '" /></td>\
                                    <td class="buttonHolder"><button id="plus_' + i + '_' + j + '" class="roundButton'+ classAdderPlus + '" data-uniqueid="' + i + "_" + j + '" data-operator="1"  data-allowedvalues="' + this.sku[j].allowedValues + '">+</button></td>\
                                </tr>')
                tableBody.append(tableLine);
                //console.log(i + "_" + j);
                totalTableRows++;
            }
            i++;
        });
        $(".formContainer").html(tableBody);
        //console.log(totalTableRows);
        // here we write the totalNumber of rows in the 
    }

    //we save the data clicked in the input fields
    $(document).on("click", ".roundButton", function () {
        var clickedID = this.id;
        SaveDataInStorage(clickedID);
    });

    $(document).on("touchclick", ".roundButton", function () {
        var clickedID = this.id;
        SaveDataInStorage(clickedID);
    });

    function SaveDataInStorage(clickedID) {
        var uniqueID = $("#" + clickedID).data("uniqueid");
        var valueInInput = parseInt($("input#input_" + uniqueID).val());
        var operator = parseInt($("#" + clickedID).data("operator"));
        var allowedValuesString = $("#" + clickedID).data("allowedvalues");
        var allowedValues = allowedValuesString.split(',');
        //console.log("valueInInput= " + valueInInput);
        //console.log(allowedValues);
        //console.log(allowedValues.length);
        //console.log("maxValue= "+allowedValues[allowedValues.length - 1]);
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
    }

    // we reset the data stored
    $(document).on("click", "#resetButton", function () {
        ResetDataInStorage();
    });

    $(document).on("touchclick", "#resetButton", function () {
        ResetDataInStorage();
    });

    function ResetDataInStorage() {
        var i = 0;
        $.each(productsLists, function () {
            var skuArrayLength = this.sku.length;
            for (var j = 0; j < skuArrayLength; j++) {
                var elementUniqueID = "input_" + i + '_' + j;
                localStorage.setItem(elementUniqueID, "0");
            }
            i++;
        });
        GenerateTable();
    }

    $(document).on("click", "#backButton", function () {
        var returnUrl = localStorage["returnUrl"];
        top.location.href = returnUrl;
    })
});