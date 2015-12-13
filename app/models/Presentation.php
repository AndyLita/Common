<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Presentation extends Model
{
    //
    protected $table = 'presentations';
    protected $fillable = array('presentationName','presentationUniqueName','published');
    
    public function scopePublished($query){
        return $query->where('published',1);
    }
    
    public function scopeUnpublished($query){
        return $query->where('published',0);
    }
}