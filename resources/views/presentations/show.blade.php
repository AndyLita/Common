@extends('layouts.master')

@section('pageTitle')
    Details
@endsection

@section('content')
<h1>
    The requested presentation is: 
    {{ $presentation->presentationName }}
</h1>
@endsection