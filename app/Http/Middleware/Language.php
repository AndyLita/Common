<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Session;

class Language 
{
//    public function __construct(Application $app, Redirector $redirector, Request $request) {
//        $this->app = $app;
//        $this->redirector = $redirector;
//        $this->request = $request;
//    }
    
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request);
    }
}
