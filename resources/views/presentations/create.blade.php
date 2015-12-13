@extends('layouts.master')

@section('pageTitle')
Create Presentation
@endsection

@section('content')
<h1>Create new presentation</h1>
    @if (count($errors) > 0)
    <div class="error">
        <div>
            @foreach ($errors->all() as $error)
            <span>{{ $error }}</span><br/>
            @endforeach
        </div>
    </div>
    @endif
    {!!Form::open(['url'=>'presentations','id'=>'createPresentation']) !!}
        {!!Form::label('presentationName','Presentation Name*') !!}
        <br/>
        {!!Form::text('presentationName', null, ['placeholder'=>'Presentation Name', 'required'=>'required']) !!}
        <br/>
        <br/>
        {!! Form::submit('Add Presentation') !!}
    {!! Form::close() !!}
    
@endsection

@section('scripts')
{!! Html::script('/scripts/jquery.validate.min.js') !!}
{!! Html::script('/scripts/createPresentationValidation.js') !!}

<script>

</script>
@endsection 