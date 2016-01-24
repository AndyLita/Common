<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Http\Requests;
use App\Http\Controllers\Controller;
use \Illuminate\Support\Facades\Redirect; 
use \Illuminate\Support\Facades\Session; 

class LangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($lang)
    {
        $langs = ['en','de'];
        if(in_array($lang, $langs)){
            Session::put('language', $lang);
            Session::set('lang',$lang);
            \App::setlocale($lang);
            return redirect('presentations');
            //echo "Here is ".$lang;
        }
        //return redirect('presentations');
    }

}