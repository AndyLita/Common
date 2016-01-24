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

class SlidesElementsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $cssClassID = $dropDowns->cssClassesID(7,3);
        //$cssClassID = $customHelper->forceEmptyOption($cssClassID);
        return view('slidesElements.create',
                    ['slideselementstypesID'=>$slideselementstypesID,
                     'cssClassID'=>$cssClassID]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeText(Request $request)
    {
        $user = Auth::User();
        $input = $request->all();
        $input = \Illuminate\Support\Facades\Input::except('_method', '_token');        
        
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
        
        
        
        //\DB::table('slideselements')->insert($input);
        echo 'ok';
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
