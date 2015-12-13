<!-- resources/views/auth/login.blade.php -->
@extends('layouts.master')

@section('pageTitle')
Login
@endsection

@section('content')
{!!Form::open(['url'=>'auth/login','id'=>'createPresentation','method'=>'POST']) !!}
<!--<form method="POST" action="http://localhost:10101/blog/public/auth/login">-->
    {!! csrf_field() !!}

    <div>
        Email
        <input type="email" name="email" value="{{ old('email') }}">
    </div>

    <div>
        Password
        <input type="password" name="password" id="password">
    </div>

    <div>
        <input type="checkbox" name="remember"> Remember Me
    </div>

    <div>
        <button type="submit">Login</button>
    </div>
<!--</form>-->
 {!! Form::close() !!}
@endsection