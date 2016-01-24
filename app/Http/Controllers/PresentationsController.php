<?php

namespace App\Http\Controllers;

use Auth;
use App\models\Presentation;
use App\Http\Requests;
use App\Http\Controllers\Controller;
//use Illuminate\Support\Facades\DB;
//use Carbon\Carbon;
use App\Helpers\CustomHelper;
use App\DropDowns\DropDowns;
use App\ListsQueries\ListsQueries;
use Illuminate\Http\Request;
use \Illuminate\Pagination\PaginationServiceProvider;

class PresentationsController extends Controller
{
    public $restful = true;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $input = $request->all();
        $presentationTypeIDSelected = 0;
        if($request->has('presentationTypeID')){
            $presentationTypeIDSelected = $input['presentationTypeID'];
        }
        $marketIDSelected = 0;
        if($request->has('marketID')){
            $marketIDSelected = $input['marketID'];
        }
        $brandIDSelected = 0;
        if($request->has('brandID')){
            $brandIDSelected = $input['brandID'];
        }
        
        $listQueries = new ListsQueries();
        $presentations = $listQueries->presentationsLists($request);
        // filter items
        $customHelper = new CustomHelper();
        $dropDowns = new DropDowns();
        $presentationTypeID = $dropDowns->presentationTypeID();
        $presentationTypeID = $customHelper->addEmptyOption($presentationTypeID);
        
        $marketID = $dropDowns->marketID();
        $marketID = $customHelper->addEmptyOption($marketID);
        
        $brandID = $dropDowns->brandID($marketIDSelected);
        $brandID = $customHelper->addEmptyOption($brandID);
        

        //$presentationTypeIDSelected = $customHelper->requestResults($request,'presentationTypeID','int');
                
	return view('presentations.index',
                ['presentations'=>$presentations,
                'presentationTypeID'=>$presentationTypeID,
                'presentationTypeIDSelected'=>$presentationTypeIDSelected,
                'marketID' => $marketID,
                'marketIDSelected'=> $marketIDSelected,
                'brandID' => $brandID,
                'brandIDSelected'=> $brandIDSelected
//                'languageID' => $languageID,
//                'languageIDSelected' => 0
                 ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $customHelper = new CustomHelper();
        $dropDowns = new DropDowns();

        $presentationTypeID = $dropDowns->presentationTypeID();
        $presentationTypeID = $customHelper->addEmptyOption($presentationTypeID);

        $marketID = $dropDowns->marketID();
        $marketID = $customHelper->addEmptyOption($marketID);
        
        $brandID = $dropDowns->emptyDropDown();
        $languageID = $dropDowns->emptyDropDown();
        
        return view('presentations.create', 
                    ['presentationTypeID'   =>$presentationTypeID,
                     'presentationTypeIDSelected'=>0,
                     'marketID' => $marketID,
                     'marketIDSelected'=>0,
                     'brandID' => $brandID,
                     'brandIDSelected'=>0,
                     'languageID' => $languageID,
                     'languageIDSelected' => 0]);
    }
    
    //$marketID, $optionSelected
    public function bringBrands(Request $request){
        $marketID = $request->input('marketID');
        $optionSelected = $request->input('optionSelected');
        $customHelper = new CustomHelper();
        $dropDowns = new DropDowns();
        $brandID = $dropDowns->brandID($marketID);
        $brandID = $customHelper->addEmptyOption($brandID);
        if($marketID==0){
            $brandID = $dropDowns->emptyDropDown();
        }
        return view('presentations.bringBrands',[
                    'brandID'=>$brandID, 
                    'brandIDSelected'=>$optionSelected]);
    }
    
    public function bringLanguages(Request $request){
        $marketID = $request->input('marketID');
        $optionSelected = $request->input('optionSelected');
        $customHelper = new CustomHelper();
        $dropDowns = new DropDowns();
        $languageID = $dropDowns->languageID($marketID);
        $languageID = $customHelper->addEmptyOption($languageID);
        if($marketID==0){
            $languageID = $dropDowns->emptyDropDown();
        }        
        return view('presentations.bringLanguages',[
           'languageID'=>$languageID,
           'languageIDSelected'=>$optionSelected
        ]);
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::User();
        $input = $request->all();
        
        //here we recreate missing data
        $customHelper = new CustomHelper();
        $input['presentationUniqueName'] = $customHelper->cleanStringsForUniqueValue($input['presentationName']);
        $input['published'] = 0;
        $input['statusID'] = 1;
        $input['user_id']= (int) $user['id'];
        //here we insert data
        $presentation = Presentation::create($input);
        
        $slideData = [];
        $slideData['presentationID'] = $presentation->id;
        $slideData['orderInPresentation']=0;
        
        $slideData['hiddenSlide']=0;
        $slideData['offerSlide']=0;
        $slideData['userID']=(int) $user['id'];
        \DB::table('slides')->insert($slideData);
        
        return redirect('presentations/show/'.$presentation->id);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $input=$request->all();
        $id=$input['id'];
        $customHelper = new CustomHelper();
        $dataContentCrate = $customHelper->writeDataJSON($id);
        $slideID=0;
        if ($request->has('slideID')){
            $slideID = (int)$input['slideID'];
        }
        return view('presentations.show', 
                ['presentation' => \App\models\Presentation::findOrFail($id),
                'slideID'=>$slideID]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $selectlist = \DB::table('presentations')->orderBy('presentationName')->lists('presentationName','id');
        $emptyOption = array('0'=>'------');
        $selectlist = $emptyOption + $selectlist;
        return view('presentations.edit',
                    ['presentationID'=>$selectlist, 
                     'selectedID'=>$id]);
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
    
    public function published(){
        $presentations = Presentation::latest()->published()->get();
	return view('presentations.index',['presentations'=>$presentations]);
    }
    
    public function unpublished(){
        $presentations = Presentation::latest()->unpublished()->get();
	return view('presentations.index',['presentations'=>$presentations]);
    }
}
