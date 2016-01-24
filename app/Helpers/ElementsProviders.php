<?php
namespace App\Helpers;

class ElementsProviders
{
    function returnTextElement(){
        $textElement ='
                                {
                                    "type": "text",
                                    "id": "{{{{id}}}}",
                                    "subtype": "{{{{subtype}}}}",
                                    "value": "{{{{value}}}}",
                                    "classes": "{{{{clases}}}}",
                                    "style": "{{{{style}}}}",
                                    "position": {"top": "{{{{top}}}}px","left": "{{{{left}}}}px"},
                                    "size": {"width": "{{{{width}}}}px","height": "{{{{height}}}}px"},
                                    "action": {"animation": "{{{{animation}}}}","type": "{{{{type}}}}","triggerElem": "{{{{triggerElem}}}}","hideElem": "{{{{hideElem}}}}","params": "{{{{params}}}}"}
                                }';
        return $textElement;
    }
    
    function returnHomeElement(){
        $homeElement='
var global_presentation_order = [0];
var global_presentation_data =
{
    "homepage": 
    {
        "elements": 
        [
            {
                "type": "image", "id": "homepage_image-0", "src": "images/homePage.png", "classes": "", "style": "",
                "position": {"top": "0", "left": "0"},
                "size": {"width": "1024px","height": "768px"},
                "action": {"animation": "","type": "","triggerElem": "","hideElem": "","params": ""}
            },
            {
                "type": "image","id": "resetButton","src": "images/resetButton.png","classes": "","style": "",
                "position": {"top": "11px","left": "906px"},
                "size": {"width": "74px","height": "74px"},
                "action": {"animation": "","type": "","triggerElem": "","hideElem": "","params": ""}
            }
        ]
    },
    "presentation": 
        [
            {
                "id": "presentation-0","pricePageID": "9",
                "background": {"src": "images/presentation-0/background.png","color": ""},
                "header": {"src": "","size": {"width": "","height": ""}},
                "footer": {"src": "","size": {"width": "","height": ""}},
                "pages": 
                    [';
        return $homeElement;
    }
    

    
    function returnPagesOpener(){
        $pagesOpener='
                        {
                            "type": "{{{{type}}}}","id": "page-{{{{pageID}}}}","slideID":"{{{{slideID}}}}", 
                            "elements": '
                            .'[';
        return $pagesOpener;
    }
    
    function returnPagesCloser(){
        $pagesCloser='          '
                        .'}';
    }
    
    function closingJSON(){
        $closingJSONContent = 
                    ']'.
            '}'.
        ']'.
'};';
        return $closingJSONContent;
    }

    
}