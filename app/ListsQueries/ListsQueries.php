<?php

namespace App\ListsQueries;
use Illuminate\Database\Eloquent\Collection;
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class ListsQueries{
    
    public function presentationsLists($request){
        $input = $request->all();
        
        $presentationsList = collect(\DB::table('presentations')
                    ->join('brands', 'presentations.brandID', '=', 'brands.ID')
                    ->join('markets', 'presentations.marketID', '=', 'markets.ID')
                    ->join('marketslocalisations', 'markets.ID', '=', 'marketslocalisations.marketID')
                    ->where('marketslocalisations.langCode','=', \Lang::getLocale())
                    ->join('users', 'presentations.user_ID', '=', 'users.ID')
                    ->join('languages', 'presentations.languageID', '=', 'languages.ID')
                    ->join('presentationTypes', 'presentations.presentationTypeID', '=', 'presentationTypes.ID')
                    ->join('presentationTypesLocalisations','presentationTypes.ID','=','presentationtypeslocalisations.presentationTypeID')
                    ->where('presentationTypesLocalisations.langCode','=', \Lang::getLocale())
                    ->join('presentationsstatuses','presentations.statusID','=','presentationsstatuses.ID')
                    ->join('presentationsstatuseslocalisations','presentationsstatuses.ID','=','presentationsstatuseslocalisations.presentationStatusID')
                    ->where('presentationsstatuseslocalisations.langCode','=', \Lang::getLocale())
                    ->select('presentations.id','presentations.presentationName',
                            'presentations.marketID',
                            'presentations.languageID',
                            'presentations.statusID',
                            'presentations.published',
                            'presentations.presentationTypeID',
                            'presentations.created_at','presentations.updated_at',
                            'brands.brandName',
                            'languages.languageISOCode',
                            'marketslocalisations.marketName',
                            'presentationTypesLocalisations.presentationTypeName',
                            'presentationsstatuseslocalisations.statusName',
                            'users.name')
                    ->orderBy('presentations.id', 'desc')  
                    ->get());
            if($request->has('id') && $input['id']!=0){
                $filterParam = $input['id']; 
                $presentationsList = $presentationsList->filter(function($presentationsList) use($filterParam){
                    return $presentationsList->id == $filterParam;
                });
            }
            if($request->has('marketID') && $input['marketID']!=0){
                $filterParam = $input['marketID']; 
                $presentationsList = $presentationsList->filter(function($presentationsList) use($filterParam){
                    return $presentationsList->marketID == $filterParam;
                });
            }
            if($request->has('languageID') && $input['languageID']!=0){
                $filterParam = $input['languageID']; 
                $presentationsList = $presentationsList->filter(function($presentationsList) use($filterParam){
                    return $presentationsList->languageID == $filterParam;
                });
            }
            if($request->has('statusID') && $input['statusID']!=0){
                $filterParam = $input['statusID']; 
                $presentationsList = $presentationsList->filter(function($presentationsList) use($filterParam){
                    return $presentationsList->statusID == $filterParam;
                });
            }
            if($request->has('presentationTypeID') && $input['presentationTypeID']!=0){
                $filterParam = $input['presentationTypeID']; 
                $presentationsList = $presentationsList->filter(function($presentationsList) use($filterParam){
                    return $presentationsList->presentationTypeID == $filterParam;
                });
            }            
            if($request->has('dateFrom') && $input['dateFrom']!=''){
                $filterParam = $input['dateFrom']; 
                $presentationsList = $presentationsList->filter(function($presentationsList) use($filterParam){
                    return $presentationsList->updated_at >= $filterParam;
                });
            }
            if($request->has('dateTo') && $input['dateTo']!=''){
                $filterParam = $input['dateTo']; 
                $presentationsList = $presentationsList->filter(function($presentationsList) use($filterParam){
                    return $presentationsList->updated_at <= $filterParam;
                });
            }      

            if($request->has('search')){
                $filterParam = $input['search']; 
                $presentationsList = $presentationsList->where('presentations.presentationName','LIKE', "%$filterParam%");
            } 
            
        return $presentationsList;
    }
    
    public function slideElementsList($presentationID){
        $slideElementsList = collect(\DB::table('slides')
                            ->where('slides.presentationID','=',$presentationID)
                            ->join('slideselements','slideselements.slideID','=','slides.ID')
                            ->select('slides.ID', 'slides.orderInPresentation',
                                    'slides.hiddenSlide','slides.offerSlide',
                                    'slidesElements.contentHTML')
                            ->orderBy('slides.orderInPresentation','asc')
                            ->get());
        //var_dump($slideElementsList);
        return $slideElementsList;
    }
    
    public function slidesAndElementsList($presentationID){
        $slideElementsList = collect(\DB::table('slides')
                            ->where('slides.presentationID','=',$presentationID)
                            ->leftJoin('slideselements','slideselements.slideID','=','slides.ID')
                            ->leftJoin('slideselementstypes','slideselements.elementTypeID','=','slideselementstypes.ID')
                            ->leftJoin('cssclasses','slideselements.cssClassID','=','cssclasses.ID')
                            ->select('slides.ID', 'slides.orderInPresentation',
                                    'slides.hiddenSlide','slides.offerSlide',
                                    'slidesElements.ID AS slidesElementsID',
                                    'slidesElements.content','slideselementstypes.htmlStructure',
                                    'slidesElements.width','slidesElements.height',
                                    'slideselements.posTop','slideselements.posLeft',
                                    'slideselements.cssInline','cssclasses.classContent',
                                    'cssclasses.className',
                                    'slideselementstypes.elementTypeName')
                            ->orderBy('slides.orderInPresentation','asc')
                            ->get());
        return $slideElementsList;
    }    
    
}