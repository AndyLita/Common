<?php

namespace App\DropDowns;

class DropDowns 
{
    function emptyDropDown(){
        $emptyOption = array('0'=>'------');
        return $emptyOption;
    }
    
    function brandID($marketID){
        $brandID = \DB::table('brandsInMarkets')
                    ->where('brandsInMarkets.marketID', $marketID)
                    ->join('brands', 'brandsInMarkets.brandID', '=', 'brands.ID')
                    ->orderBy('brands.brandName')
                    ->select('brands.brandName','brands.id')
                    ->lists('brands.brandName','brands.id');
        return $brandID;
    }
    
    function languageID($marketID){
        $languageID = \DB::table('languagesInMarkets')
                    ->where('languagesInMarkets.marketID', $marketID)
                    ->join('languages', 'languagesInMarkets.languageID', '=', 'languages.ID')
                    ->join('languageslocalisations','languages.ID','=','languageslocalisations.languageID')
                    ->where('languageslocalisations.langCode', \Lang::getLocale())
                    ->orderBy('languageslocalisations.languageName')
                    ->select('languageslocalisations.languageName','languages.id')
                    ->lists('languageslocalisations.languageName','languages.id');   
        return $languageID;
    }
    
    function marketID(){
        $marketID = \DB::table('markets')
                ->join('marketslocalisations', 'markets.ID', '=', 'marketslocalisations.marketID')
                ->where('marketslocalisations.langCode', \Lang::getLocale())
                ->select('marketslocalisations.marketName','markets.id')
                ->orderBy('marketslocalisations.marketName')
                ->lists('marketslocalisations.marketName','markets.id');   
        return $marketID;
    }
    
    function presentationTypeID (){
        $presentationTypeID = \DB::table('presentationtypes')
                            ->join('presentationtypeslocalisations', 'presentationtypes.ID', '=', 'presentationtypeslocalisations.presentationTypeID')
                            ->where('presentationtypeslocalisations.langCode', \Lang::getLocale())
                            ->select('presentationtypes.ID','presentationtypeslocalisations.presentationTypeName')
                            ->orderBy('presentationtypeslocalisations.presentationTypeName')
                            ->lists('presentationtypeslocalisations.presentationTypeName','presentationtypes.ID');
        return $presentationTypeID;
    }
    
    function slideselementstypesID (){
        $slideselementstypesID = \DB::table('slideselementstypes')
                                ->where('active','=','1')
                                ->orderBy('elementTypeName','asc')
                                ->lists('elementTypeName','ID');
        return $slideselementstypesID;
    }
    
    function cssClassesID ($presentationID,$slidesElementTypeID){
        $cssClassesID = \DB::table('cssClasses')
                        ->where('slidesElementTypeID','=',$slidesElementTypeID)
                        ->where('presentationID','=',$presentationID)
                        ->orderBy('className','asc')
                        ->lists('className','ID');
        //var_dump($cssClassesID);
        return $cssClassesID;
    }
}
