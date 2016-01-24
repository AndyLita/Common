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
}