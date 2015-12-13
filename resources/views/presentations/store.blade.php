@extends('layouts.master')

@section('pageTitle')
    Create Presentation
@endsection

@section('content')
<h1>Create new presentation</h1>
    {{ $request->presentationName }}
@endsection