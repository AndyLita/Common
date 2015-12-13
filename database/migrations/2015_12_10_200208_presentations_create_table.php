<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PresentationsCreateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //here we create the table presentations 
        Schema::create('presentations',function($table){
			$table->increments('id');
			$table->string('presentationName',250);
			$table->string('presentationUniqueName',250)->unique();
			$table->boolean('published')->default(0);
			$table->timestamps();	
		});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //remove table
        Schema::drop('presentations');
    }
}
