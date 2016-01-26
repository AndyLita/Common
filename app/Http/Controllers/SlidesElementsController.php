<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;
use App\DropDowns\DropDowns;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Helpers\CustomHelper;
use App\Helpers\RightsValidator;
use App\models\SlidesElement;
use App\ListsQueries\ListsQueries;

class SlidesElementsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexText(Request $request)
    {
        $user = Auth::User();
        $input = $request->all();
        $input = \Illuminate\Support\Facades\Input::except('_method', '_token');  
        
        $query = new ListsQueries();
        $textElementsInSlide = $query->textElementsInSlide($input['presentationID'], $input['slideID']);
        
        return view('slidesElements.indexText',['textElementsInSlide'=>$textElementsInSlide]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function createText(Request $request)
    {
        $dropDowns = new DropDowns();
        $customHelper = new CustomHelper();
        $input=$request->all();
        
        $slideselementstypesID = $dropDowns->slideselementstypesID();
        $slideselementstypesID = $customHelper->addEmptyOption($slideselementstypesID);
        
        //$cssClassesID = $dropDowns->cssClassesID($presentationID,1);
        $cssClassID = $dropDowns->cssClassesID($input['presentationID'],3);
        //$cssClassID = $customHelper->forceEmptyOption($cssClassID);
        return view('slidesElements.createText',
                    ['slideselementstypesID'=>$slideselementstypesID,
                     'cssClassID'=>$cssClassID]);
    }

    public function storeText(Request $request)
    {
        $user = Auth::User();
        $input = $request->all();
        $input = \Illuminate\Support\Facades\Input::except('_method', '_token');        
        
        //here we check if we are allowed to write content in the slide
        $rightsValidator = new RightsValidator();
        $canStore = $rightsValidator->AllowEditSlide($input['presentationID']);
        if($canStore==0){ 
            return redirect('erorrs/index/1');
        }
        //here we reconstruct missing or automated data
        $input['userID']=$user->id;
        $slidesElement = SlidesElement::create($input);
        
        $customHelper = new CustomHelper();
        $dataContentCrate = $customHelper->writeDataJSON($input['presentationID']);
        
        $dropDowns = new DropDowns();
        $cssClassID = $dropDowns->cssClassesID($input['presentationID'],3);
        
        $slideselementstypesID = $dropDowns->slideselementstypesID();
        $slideselementstypesID = $customHelper->addEmptyOption($slideselementstypesID);
        
        return view($input['redirectUrl'],
                //'slidesElements.editText',
                    ['slideselementstypesID'=>$slideselementstypesID,
                     'slidesElement'=>$slidesElement,
                     'cssClassID'=>$cssClassID]);
    }
    
    public function editTextGet(Request $request){
        $user = Auth::User();
        $input = $request->all();
        $input = \Illuminate\Support\Facades\Input::except('_method', '_token');        
        
        //here we check if we are allowed to write content in the slide
        $rightsValidator = new RightsValidator();
        $canEdit = $rightsValidator->AllowEditSlideElement($input['presentationID'],$input['slideID'],$input['slidesElementID']);
        if($canEdit==0){ 
            return redirect('erorrs/index/1');
        }
        
        $slidesElement = SlidesElement::find($input['slidesElementID']);
        //here we update the JSON data
        $customHelper = new CustomHelper();
        $dataContentCrate = $customHelper->writeDataJSON($input['presentationID']);
        
        
        $dropDowns = new DropDowns();
        $cssClassID = $dropDowns->cssClassesID($input['presentationID'],3);        
        
        return view($input['redirectUrl'], ['presentationID'=>$input['presentationID'],
                                            'slideID'=>$input['slideID'],
                                            'slidesElementID'=>$input['slidesElementID'],
                                            'slidesElement'=>$slidesElement,
                                            'cssClassID'=>$cssClassID]);
    }
    
    
     public function editTextPost(Request $request){
        $user = Auth::User();
        $input = $request->all();
        $input = \Illuminate\Support\Facades\Input::except('_method', '_token');  
        
        //here we check if we are allowed to write content in the slide
        $rightsValidator = new RightsValidator();
        $canEdit = $rightsValidator->AllowEditSlideElement($input['presentationID'],$input['slideID'],$input['slidesElementID']);
        if($canEdit==0){ 
            return redirect('erorrs/index/1');
        } 
        
        //here we update the data
        $slidesElementToUpdate = SlidesElement::find($input['slidesElementID']);
        $slidesElementToUpdate->update(\Illuminate\Support\Facades\Input::all());
                
        //SlidesElement::where('id','=',$input['slidesElementID'])->update($update);
        
        
        $slidesElement = SlidesElement::find($input['slidesElementID']);
        //here we update the JSON data
        $customHelper = new CustomHelper();
        $dataContentCrate = $customHelper->writeDataJSON($input['presentationID']);
        
        
        $dropDowns = new DropDowns();
        $cssClassID = $dropDowns->cssClassesID($input['presentationID'],3);        
        
        return view($input['redirectUrl'], ['presentationID'=>$input['presentationID'],
                                            'slideID'=>$input['slideID'],
                                            'slidesElementID'=>$input['slidesElementID'],
                                            'slidesElement'=>$slidesElement,
                                            'cssClassID'=>$cssClassID]);
    }
    
    
    public function deleteText(Request $request) {
        $user = Auth::User();
        $input = $request->all();
        $input = \Illuminate\Support\Facades\Input::except('_method', '_token');        
        
        //here we check if we are allowed to write content in the slide
        $rightsValidator = new RightsValidator();
        $canStore = $rightsValidator->AllowEditSlide($input['presentationID']);
        if($canStore==0){ 
            return redirect('erorrs/index/1');
        }    
        
        // here we delete the record 
        \DB::table('slidesElements')->where('id','=',$input['slidesElementID'])->delete();
        
        //here we update the JSON data
        $customHelper = new CustomHelper();
        $dataContentCrate = $customHelper->writeDataJSON($input['presentationID']);        
        
        return redirect($input['redirectUrl']."?presentationID=".$input['presentationID'].'&slideID='.$input['slideID']);        
    }
    
    public function addImage(Request $request){
        $user = Auth::User();
        $input = $request->all();
        $input = \Illuminate\Support\Facades\Input::except('_method', '_token');  
        
        $dropDowns = new DropDowns();
        $cssClassID = $dropDowns->cssClassesID($input['presentationID'],3);   
        
        return view('slidesElements.addImage',['cssClassID'=>$cssClassID]);
    }
    
    public function addImagePost(Request $request){
        //var_dump($request);
        echo 'It worked';
        $input = $request->all();
        //$destinationPath = "filesGenerated/presentation_7/images";
        //$fileName = 'right.png';
        //$request->file('uploadImageSlide')->move($destinationPath, $fileName);
        
        $imageName = 'ANDDDDDDYYYY.'.$request->file('uploadImageSlide')->getClientOriginalExtension();
        //$request->file('uploadImageSlide')->move(base_path() . "filesGenerated/presentation_7/images", $imageName);
        $request->file('uploadImageSlide')->move("filesGenerated/presentation_7/images", $imageName);
        echo('check file');
    }
    
    public function bringPositions(Request $request){
        $input = $request->all();
        $cssClass = \App\models\CssClass::find($input['cssClassID']);
        return $cssClass->toJson();
    }
}
