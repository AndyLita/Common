@extends('layouts.master')

@section('pageTitle')
Create Presentation
@endsection

@section('content')
<h1>{{Lang::get('presentationsCreate.createNewPresentation_')}}</h1>
    @if (count($errors) > 0)
    <div class="error">
        <div>
            @foreach ($errors->all() as $error)
            <span>{{ $error }}</span><br/>
            @endforeach
        </div>
    </div>
    @endif
    {!!Form::open(['url'=> '/presentations','id'=>'createPresentation']) !!}
    <div class="tableContainer">
        <div class="tableRow">
            <div class="tableCell">
                {!!Form::label('presentationName', Lang::get('presentationsCreate.presentationName_').'*') !!}
            </div>
            <div class="tableCell">
                {!!Form::text('presentationName', null, ['placeholder'=>Lang::get('presentationsCreate.presentationName_'), 'required'=>'required']) !!}
            </div>
        </div>    
        <div class="tableRow">
            <div class="tableCell">
                {!!Form::label('presentationType', Lang::get('presentationsCreate.presentationType_').'*') !!}
            </div>
            <div class="tableCell">
                {!!Form::select('presentationTypeID', $presentationTypeID, $presentationTypeIDSelected) !!}
            </div>            
        </div>
        <div class="tableRow">
            <div class="tableCell">
                {!! Form::label('market', Lang::get('presentationsCreate.market_').'*') !!}
            </div>
            <div class="tableCell">
                {!! Form::select('marketID', $marketID, $marketIDSelected, array('id' => 'marketID')) !!}
            </div>            
        </div>          
        <div class="tableRow">
            <div class="tableCell">
                {!!Form::label('productName', Lang::get('presentationsCreate.productName_').'*') !!}
            </div>
            <div class="tableCell" id="divSelectBrandID">
                {!!Form::select('brandID', $brandID, $brandIDSelected, array('id' => 'brandID')) !!}
            </div>            
        </div>   
   
        <div class="tableRow">
            <div class="tableCell">
                {!! Form::label('language', Lang::get('presentationsCreate.language_').'*') !!}
            </div>
            <div class="tableCell" id="divSelectLanguageID">
                {!! Form::select('languageID', $languageID, $languageIDSelected, array('id' => 'languageID')) !!}
            </div>            
        </div>  
        <div class="tableRow">
            <div class="tableCell">
                {!!Form::label('description', Lang::get('presentationsCreate.description_')) !!}
            </div>
            <div class="tableCell">
                {!!Form::textarea('description', null, ['placeholder'=>Lang::get('presentationsCreate.description_'), 'id'=>'description']) !!}
            </div>            
        </div>         
        <div class="tableRow">
            <div class="tableCell">
                
            </div>
            <div class="tableCell">
                {!! Form::submit('Add Presentation') !!}
            </div>            
        </div>                
    </div>
    {!! Form::close() !!}
    
@endsection

@section('scripts')
{!! Html::script('/scripts/jquery.validate.min.js') !!}
{!! Html::script('/scripts/createPresentationValidation.js') !!}
{!! Html::script('/scripts/presentations.js') !!}
@endsection 