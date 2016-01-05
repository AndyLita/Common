<!-- resources/views/auth/login.blade.php -->
@extends('layouts.masterSimple')

@section('pageTitle')
Login
@endsection

@section('content')
{!!Form::open(['url'=>'auth/login','id'=>'createPresentation','method'=>'POST']) !!}
<!--<form method="POST" action="http://localhost:10101/blog/public/auth/login">-->
    {!! csrf_field() !!}
    <table>
        <tr>
            <td>Email</td>
            <td><input type="email" name="email" value="{{ old('email') }}"></td>
        </tr>
        <tr>
            <td>Password</td>
            <td><input type="password" name="password" id="password"></td>
        </tr>
        <tr>
            <td>Remember Me&nbsp;</td>
            <td><input type="checkbox" name="remember"></td>
        </tr>
        <tr>
            <td></td>
            <td><button type="submit">Login</button></td>
        </tr>
<!--</form>-->
 {!! Form::close() !!}
@endsection