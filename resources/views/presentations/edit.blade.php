@extends('layouts.master')

@section('pageTitle')
    Edit
@endsection

@section('content')
<h1>Please select the presentation you want to change</h1>
    {!!Form::open() !!}
        {!!Form::select('presentationID', $presentationID, $selectedID) !!}
    {!! Form::close() !!}
@endsection
