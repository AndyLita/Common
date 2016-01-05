@extends('layouts.master')

@section('pageTitle')
    Presentations
@endsection

@section('content')
<h1>Current Presentations</h1>
<table class="displayTable">
    <tr>
        <th>ID</th>
        <th>Presentation Name</th>
        <th class="centred">Published</th>
        <th>Date created</th>
        <th>Date edited</th>
        <th class="centred"></th>
    </tr>
    <?php foreach($presentations as $presentation){ ?>
    <tr>
        <td>
            {{ $presentation->id }}
        </td>        
        <td>
            {{ $presentation->presentationName }}
        </td>
        <td class="centred">
            <?php $converted_res = ($presentation->published) ? 'yes' : 'no';?>
            {{ $converted_res }}
        </td>        
        <td>
            {{ $presentation->created_at }}
        </td>    
        <td>
            {{ $presentation->updated_at }}
        </td>      
        <td>
            <a href= {{ URL::to('/presentations/show/'.$presentation->id) }}>View</a>  
            <a href= {{ URL::to('/presentations/edit/'.$presentation->id) }}>Edit</a>  
        </td>         
    </tr>
    <?php } ?> 
</table>
@endsection