<?php

namespace App\Providers;

use Illuminate\Routing\Router;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Http\Response;
use \Illuminate\Support\Facades\Session;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to the controller routes in your routes file.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @param  \Illuminate\Routing\Router  $router
     * @return void
     */
    public function boot(Router $router)
    {
        //
        parent::boot($router);
    }
    

    /**
     * Define the routes for the application.
     *
     * @param  \Illuminate\Routing\Router  $router
     * @return void
     */
    public function map(Router $router, Request $request)
    {
        $locale = $request->segment(1);
        $requestWithLocale = FALSE;
     
        $languages = ['de','en'];
        foreach ($languages as $language){
            if($locale==$language){
                $requestWithLocale = TRUE;
            }
        }
        session_start();

        if($requestWithLocale == FALSE){
            if (isset($_SESSION['storedLang'])){
                $locale = $_SESSION['storedLang'];
            }else{
                $locale = \Lang::getLocale();
            }
            
        }
        $_SESSION['storedLang'] = $locale;
        $this->app->setLocale($locale);

        if($requestWithLocale==FALSE){
            $router->group(['namespace' => $this->namespace], function($router) {
                require app_path('Http/routes.php');
            });
        }
        $router->group(['namespace' => $this->namespace, 'prefix' => $locale], function($router) {
            require app_path('Http/routes.php');
        });
    }
}
