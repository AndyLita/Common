<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Slide extends Model
{
    //
    protected $table = 'slides';
    protected $fillable = array('presentationID','orderInPresentation','hiddenSlide','offerSlide','created_at','updated_at','userID');
    
    public  function user(){
        return $this->belongsTo('App\User');
    }
    
}