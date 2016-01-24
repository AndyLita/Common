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
//        Event::listen('illuminate.query', function($query)
//        {
//            echo('<br><br>');
//            var_dump($query);
//
//        });
    
    Route::get('presentations',['middleware' => 'auth','uses'=>'PresentationsController@index']);
    
    Route::get('presentations/create',['middleware' => 'auth','uses'=>'PresentationsController@create']);
    Route::post('presentations/bringBrands/',['middleware' => 'auth','uses'=>'PresentationsController@bringBrands']);
    Route::post('presentations/bringLanguages/',['middleware' => 'auth','uses'=>'PresentationsController@bringLanguages']);
    
    
    Route::get('presentations/published',['middleware' => 'auth','uses'=>'PresentationsController@published']);
    Route::get('presentations/unpublished',['middleware' => 'auth','uses'=>'PresentationsController@unpublished']);
    Route::get('presentations/{id}',['middleware' => 'auth','uses'=>'PresentationsController@show']);
    Route::post('presentations',['middleware' => 'auth','uses'=>'PresentationsController@store']);
    
    //slides 
    Route:post('slides/store',['middleware' => 'auth','uses'=>'SlidesController@store']);
    
    //slidesElements 
    Route::get('slidesElements/createText',['middleware' => 'auth','uses'=>'SlidesElementsController@createText']);
    Route::post('slidesElements/storeText',['middleware' => 'auth','uses'=>'SlidesElementsController@storeText']);
    
    Route::get('errors/index/{id}',['middleware' => 'auth','uses'=>'SlidesElementsController@create']);
    
    Route::get('/', function () {
        return view('welcome');
    });

    Route::get('/lang/{lang}','LangController@index');


//    Route::get('/presentations', function () {
//        echo 'welcome home - routes.php';
//    });

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



    Route::get('test', 'test@index');

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
       echo 'Good bye';
    }]);
