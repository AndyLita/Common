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
            <div class="wrapper">
                <ul>
                    <li><a href= {{ URL::to('/presentations') }}>Presentations</a>
                        <ul class="submenu">
                            <li><a href= {{ URL::to('/presentations') }}>View all</a></li>
                            <li><a href= {{ URL::to('/presentations/published') }}>Published</a></li>
                            <li><a href= {{ URL::to('/presentations/unpublished') }}>Unpublished</a></li>
                            <li><a href= {{ URL::to('/presentations/create') }}>Edit</a></li>   
                            <li><a href= {{ URL::to('/presentations/create') }}>Create</a></li>                            
                        </ul>
                    </li>
                </ul>    
                <ul>
                    <li><a href= {{ URL::to('/presentations') }}>Offers</a>
                        <ul class="submenu">
                            <li><a href= {{ URL::to('/presentations/published') }}>Presentations Published</a></li>
                            <li><a href= {{ URL::to('/presentations/unpublished') }}>Presentations Unpublished</a></li>
                            <li><a href= {{ URL::to('/presentations/create') }}>Presentations Create</a></li>                            
                        </ul>
                    </li>
                </ul>                 
                <ul class="lastRight">
                    <li><a href= {{ URL::to('/auth/logout') }}>LogOut</a> </li>
                </ul>                    
            </div>
        </div>        
        <div class="notification positive">
            <div class="messageBox">
                @yield('notification')
            </div>
        </div>        
        <div class="wrapper">
            <div class='content'>
                @yield('content')
            </div>                
        </div>
        @yield('scripts')
	</body>
</html>
