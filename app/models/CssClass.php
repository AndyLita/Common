<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class CssClass extends Model
{
    //
    protected $table = 'cssClasses';
    protected $fillable = array('slidesElementTypeID', 'className', 'presentationID', 'classContent', 'posV', 'posX', 'sourceURL');

}