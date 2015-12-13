<!doctype html>
<html>
	<head>
		<title>@yield('pageTitle')</title>
                {!! Html::style('/css/normalize.css') !!}
                {!! Html::style('/css/main.css') !!}
                {!! Html::script('/scripts/jquery-2.1.4.min.js') !!}
	</head>
	<body>
            <div class="menu">
                <a href= {{ URL::to('/presentations') }}>Presentations</a>   
                <a href= {{ URL::to('/presentations/published') }}>Presentations Published</a>   
                <a href= {{ URL::to('/presentations/unpublished') }}>Presentations Unpublished</a>   
                <a href= {{ URL::to('/presentations/create') }}>Presentations Create</a>                    
            </div>
            <div class='content'>
                @yield('content')
            </div>
               @yield('scripts')
	</body>
</html>
