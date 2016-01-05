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

Route::get('home', function () {
    //echo 'welcome home';
    Route::get('presentations',['middleware' => 'auth','uses'=>'PresentationsController@index']);
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

Route::get('presentations',['middleware' => 'auth','uses'=>'PresentationsController@index']);
Route::get('presentations/create',['middleware' => 'auth','uses'=>'PresentationsController@create']);
Route::get('presentations/published',['middleware' => 'auth','uses'=>'PresentationsController@published']);
Route::get('presentations/unpublished',['middleware' => 'auth','uses'=>'PresentationsController@unpublished']);
Route::get('presentations/{id}',['middleware' => 'auth','uses'=>'PresentationsController@show']);
Route::post('presentations',['middleware' => 'auth','uses'=>'PresentationsController@store']);

Route::get('presentations/edit/{id}',['middleware' => 'auth','uses'=>'PresentationsController@edit']);
Route::get('presentations/show/{id}',['middleware' => 'auth','uses'=>'PresentationsController@show']);

// Authentication routes...
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

// Registration routes...
Route::get('auth/register', 'Auth\AuthController@getRegister');
Route::post('auth/register', 'Auth\AuthController@postRegister');

Route::get('auth/logout',['middleware' => 'auth', function(){
   Auth::logout(); 
   //echo 'Good bye';
   return View::make('auth.login');
}]);

