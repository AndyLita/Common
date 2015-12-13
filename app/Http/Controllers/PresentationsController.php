<?php

namespace App\Http\Controllers;


use App\models\Presentation;
use App\Http\Requests;
use App\Http\Controllers\Controller;
//use Illuminate\Support\Facades\DB;
use Request;
//use Carbon\Carbon;


class PresentationsController extends Controller
{
    public $restful = true;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $presentations = Presentation::latest()->get();
	return view('presentations.index',['presentations'=>$presentations]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        //$request = null;
        return view('presentations.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Requests\createPresentation $request)
    {
        //
        $input = Request::all();
        //here we recreate missing data
        $input['presentationUniqueName'] = $input['presentationName'];
        $input['published'] = 0;
        //$input['created_at'] = Carbon::now();
        Presentation::create($input);
        return redirect('presentations');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return view('presentations.show', ['presentation' => \App\models\Presentation::findOrFail($id)]);
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
