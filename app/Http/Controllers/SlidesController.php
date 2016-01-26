<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Helpers\RightsValidator;
use App\models\Slide;
use App\Helpers\CustomHelper;

class SlidesController extends Controller
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
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rightsValidator = new RightsValidator();
        $user = Auth::User();
        $input = $request->all();
        $input = \Illuminate\Support\Facades\Input::except('_method', '_token'); 
        
        //var_dump($input);
        
        if($rightsValidator->AllowEditSlide($input['presentationID'])==FALSE){
            return redirect('erorrs/index/1');
        }
        //here we recreate data not existing in the form
        $input['userID']=$user->id;
        $input['hiddenSlide']=0;
        $input['offerSlide']=0;
        $slide = \App\models\Slide::create($input);
        
        //here we sort the slides accordingly 
        $slidesSorter = new \App\Helpers\SlidesSorter();
        $sortSlides = $slidesSorter->rearrangeSlides($slide->id, $input['slideID'], $input['desiredOption']);
        
        $customHelper = new CustomHelper();
        $dataContentCrate = $customHelper->writeDataJSON($input['presentationID']);
        
        $newSlide = \DB::table('slides')->find($slide->id);
        
        return view ('slides/slideInfo',['newSlide'=>$newSlide]);
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
