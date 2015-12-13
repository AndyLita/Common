<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('about', function () {
	$data = array(
		'greeting'	=>	'Hello ',
		'whom'		=>	'World!'
	);
    return View::make('home.about',$data);
});

//Route::get('presentations/','PresentationsController@index');
//
//Route::get('presentations/show/{id}','PresentationsController@show');

Route::get('presentations','PresentationsController@index');
Route::get('presentations/create','PresentationsController@create');
Route::get('presentations/published','PresentationsController@published');
Route::get('presentations/unpublished','PresentationsController@unpublished');
Route::get('presentations/{id}','PresentationsController@show');
Route::post('presentations','PresentationsController@store');

Route::get('presentations/edit/{id}','PresentationsController@edit');
