<!doctype html>
<html>
    <?php Session::put('locale',Lang::getLocale()); ?>
    <head>
            <title>@yield('pageTitle')</title>
            <input type="text" id="baseURL" class='hidden' value='{{ url()}}' />
            {!! Html::style('/css/normalize.css') !!}
            {!! Html::style('/css/main.css') !!}

    </head>
    <body>
        @extends('layouts.menu')
        <div class="wrapper">
            <div class='content'>
                @yield('content')
            </div>                
        </div>
        {!! Html::script('/scripts/jquery-2.1.4.min.js') !!}
        {!! Html::script('/scripts/menu.js') !!}
        @yield('scripts')
	</body>
</html>
