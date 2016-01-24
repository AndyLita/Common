$(document).ready(function () {
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
    }

});