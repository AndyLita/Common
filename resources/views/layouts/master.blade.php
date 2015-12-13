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
            <div class="menu">
                <ul>
                    <li><a href= {{ URL::to('/presentations') }}>Presentations</a></li>
                    <li class="hidden"><a href= {{ URL::to('/presentations/published') }}>Presentations Published</a></li>
                    <li class="hidden"><a href= {{ URL::to('/presentations/unpublished') }}>Presentations Unpublished</a></li>
                    <li class="hidden"><a href= {{ URL::to('/presentations/create') }}>Presentations Create</a></li>
                </ul>    
                <ul>
                    <li><a href= {{ URL::to('/auth/logout') }}>LogOut</a> </li>
                </ul>
            </div>
            <div class='content'>
                @yield('content')
            </div>
            @yield('scripts')
	</body>
</html>
