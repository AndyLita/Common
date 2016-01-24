<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class SlidesElement extends Model
{
    //
    protected $table = 'slideselements';
    protected $fillable = array('slideID','presentationID','elementTypeID','content','src','cssClassID','cssInline','width','height','posTop','posLeft','updated_at','userID');
    
}