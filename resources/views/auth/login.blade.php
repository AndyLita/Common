<!-- resources/views/auth/login.blade.php -->
@extends('layouts.unlogged')

@section('pageTitle')
Login
@endsection

@section('content')
{!!Form::open(['url'=> Lang::getLocale().'/'.'auth/login','id'=>'createPresentation','method'=>'POST']) !!}
<!--<form method="POST" action="http://localhost:10101/blog/public/auth/login">-->
    {!! csrf_field() !!}
    <table>
        <tr>
            <td>{{ Lang::get('login.email_')}}</td>
            <td>&nbsp;</td>
            <td><input type="email" name="email" value="{{ old('email') }}"></td>
        </tr>
        <tr>
            <td>Password</td>
            <td>&nbsp;</td>
            <td><input type="password" name="password" id="password"></td>
        </tr>        
        <tr>
            <td>Remember Me</td>
            <td>&nbsp;</td>
            <td><input type="checkbox" name="remember"> </td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td><button type="submit">Login</button></td>
        </tr>        
    </table>
<!--</form>-->
 {!! Form::close() !!}
@endsection