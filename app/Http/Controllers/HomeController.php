<?php 

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Database\DatabaseManager;


class HomeController extends BaseController{
	
	public function index()
	{	
		$users = \DB::table('users')->get();
		//$users = "andy";
		$data = array(
			'greeting' => 'Hello world',
			'users'		=> $users
			);
		return \View::make('home.index',$data);
	}
}
?>