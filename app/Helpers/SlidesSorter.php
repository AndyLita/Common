<?php

namespace App\Helpers;
use App\models\Slide;

class SlidesSorter{
    
    function rearrangeSlides($slideToPlaceID, $slideNeighborID, $positionVsNeighbor){
        //we find the order of the Neighbor as reference 
        $slideNeighbor = \DB::table('slides')->find($slideNeighborID);
        $currentReferencePosition = $slideNeighbor->orderInPresentation;

        //we get the records before or after the neighbor
        //we fix the operand and the position of the slide to place 
        $operandForQuery = '>';//after scenario
        $extrValue=0;
        if($positionVsNeighbor=='before'){
            $operandForQuery = '>=';
            \DB::table('slides')->where('id',$slideToPlaceID)->update(['orderInPresentation'=>$currentReferencePosition]);
        }else{ //after
            \DB::table('slides')->where('id',$slideToPlaceID)->update(['orderInPresentation'=>($currentReferencePosition+1)]);
        }
        //we query list the slides
        $slidesToEdit = \DB::table('slides')
                        ->where('orderInPresentation',$operandForQuery,$currentReferencePosition) 
                        ->where('id','<>',$slideToPlaceID)
                        ->get();
        
        foreach ($slidesToEdit as $item){
            \DB::table('slides')->where('id',$item->id)->update(['orderInPresentation'=>($item->orderInPresentation+1)]);
        }
        return TRUE;
    }
}