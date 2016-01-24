<!doctype html>
<html>
    <head>
            <title>@yield('pageTitle')</title>
            {!! Html::style('/css/normalize.css') !!}
            {!! Html::style('/css/main.css') !!}
            {!! Html::script('/scripts/jquery-2.1.4.min.js') !!}
            {!! Html::script('/scripts/menu.js') !!}
    </head>
    <body> 
        <div>&nbsp;</div>
        <div class="wrapper">
            <div class='content'>
                @yield('content')
            </div>                
        </div>
        @yield('scripts')
    </body>
</html>
