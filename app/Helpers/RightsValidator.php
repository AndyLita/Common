<?php 

namespace App\Helpers;
use App\ListsQueries\ListsQueries;
use App\Helpers\ElementsProviders;

class RightsValidator
{
    function AllowEditSlide($presentationID){
        $presentation = \DB::table('presentations')->find($presentationID);
        //var_dump($presentation);
        if($presentation->published==0){
            return TRUE;
        }
        return FALSE;
    }
    
    function AllowEditSlideElement($presentationID,$slideID,$slidesElementID){
        $presentation = \DB::table('presentations')->find($presentationID);
        //var_dump($presentation);
        if($presentation->published==1){
            return FALSE;
        }
        $slide = \DB::table('slides')->find($slideID);
        if($slide->presentationID != $presentationID){
            return FALSE;
        }
        $slideElement = \DB::table('slidesElements')->find($slidesElementID);
        if($slideElement->presentationID != $presentationID || $slideElement->slideID != $slideID){
            return FALSE;
        }
        return TRUE;
    }
}