@extends('layouts.master')

@section('pageTitle')
    Presentations
@endsection

@section('content')
<h1>{{Lang::get('presentationsIndex.presentations_')}}</h1>
<div class="filter">
   <form>
    {!!Form::select('presentationTypeID', $presentationTypeID, $presentationTypeIDSelected) !!}
    {!! Form::select('marketID', $marketID, $marketIDSelected, array('id' => 'marketID')) !!}
    {!!Form::select('brandID', $brandID, $brandIDSelected, array('id' => 'brandID')) !!}
    {!! Form::submit('Filter') !!}
    <a href="presentations"><input type="button" value="{{Lang::get('presentationsIndex.resetFilter_')}}"></a>
    </form> 
</div>

<table class="showData">
    <tr>
        <th>ID</th>
        <th>{{Lang::get('presentationsIndex.presentationName_')}}</th>
        <th>{{Lang::get('presentationsIndex.market_')}} / {{Lang::get('presentationsIndex.language_')}}</th>
        <th>{{Lang::get('presentationsIndex.presentationType_')}}</th>
        <th>{{Lang::get('presentationsIndex.brand_')}}</th>
        <th class="centred">{{Lang::get('presentationsIndex.presentationStatus_')}} / {{Lang::get('presentationsIndex.published_')}}</th>
        <th>{{Lang::get('presentationsIndex.createdDate_')}}</th>
        <th>{{Lang::get('presentationsIndex.editedDate_')}}</th>
        <th>{{Lang::get('presentationsIndex.editedUser_')}}</th>
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
        <td>
            {{ $presentation->marketName }} / {{ $presentation->languageISOCode }}
        </td>    
        <td>
            {{ $presentation->presentationTypeName }}
        </td>         
        <td>
            {{ $presentation->brandName }}
        </td>    
        <td class="centred">
            {{ $presentation->statusName}}
            /
            <?php $converted_res = ($presentation->published) ? Lang::get('presentationsIndex.yes_') : Lang::get('presentationsIndex.no_');?>
            {{ $converted_res }}
        </td>        
        <td>
            {{ $presentation->created_at }}
        </td>    
        <td>
            {{ $presentation->updated_at }}
        </td>      
        <td>
            {{ $presentation->name }}
        </td>         
        <td>
            <a href= {{ URL::to('/presentations/show'.'?id='.$presentation->id) }}>View</a>
        </td>         
    </tr>
    <?php } ?> 
</table>
@endsection