        <div class="menu">
            <div class="wrapper">
                <ul>
                    <li><a href= {{ URL::to('/presentations')}}>{{ Lang::get('menu.presentations_')}}</a>
                        <ul class="submenu">
                            <li><a href= {{ URL::to('/presentations') }}>{{ Lang::get('menu.all_')}}</a></li>
                            <li><a href= {{ URL::to('/presentations/published') }}>{{ Lang::get('menu.published_')}}</a></li>
                            <li><a href= {{ URL::to('/presentations/unpublished') }}>{{ Lang::get('menu.unPublished_')}}</a></li>
                            <li><a href= {{ URL::to('/presentations/create') }}>{{ Lang::get('menu.create_')}}</a></li>                     
                        </ul>
                    </li>
                </ul>    
                <ul>
                    <li><a href= {{ URL::to('/prices') }}>{{ Lang::get('menu.prices_')}}</a>
                        <ul class="submenu">
                            <li><a href= {{ URL::to('/presentations/published') }}>{{ Lang::get('menu.pricesPublished_')}}</a></li>
                            <li><a href= {{ URL::to('presentations/unpublished') }}>{{ Lang::get('menu.pricesUnPublished_')}}</a></li>
                            <li><a href= {{ URL::to('presentations/create') }}>{{ Lang::get('menu.pricesAddNew_')}}</a></li>                            
                        </ul>
                    </li>
                </ul>   
                <ul>
                    <li><a href= {{ URL::to('/prices') }}>{{ Lang::get('menu.offers_')}}</a>
                        <ul class="submenu">
                            <li><a href= {{ URL::to('/presentations/published') }}>{{ Lang::get('menu.offersPublished_')}}</a></li>
                            <li><a href= {{ URL::to('/presentations/unpublished') }}>{{ Lang::get('menu.offersUnPublished_')}}</a></li>
                            <li><a href= {{ URL::to('/presentations/create') }}>{{ Lang::get('menu.offersAddNew_')}}</a></li>                            
                        </ul>
                    </li>
                </ul>      
                <ul>
                    <li><a href= {{ URL::to('/prices') }}>{{ Lang::get('menu.configuration_')}}</a>
                        <ul class="submenu">
                            <li><a href= {{ URL::to('/presentations/published') }}>{{ Lang::get('menu.offersPublished_')}}</a></li>
                            <li><a href= {{ URL::to('/presentations/unpublished') }}>{{ Lang::get('menu.offersUnPublished_')}}</a></li>
                            <li><a href= {{ URL::to('/presentations/create') }}>{{ Lang::get('menu.offersAddNew_')}}</a></li>                            
                        </ul>
                    </li>
                </ul>   
                <ul>
                    <li><a href= {{ URL::to('/prices') }}>{{ Lang::get('menu.users_')}}</a>
                        <ul class="submenu">
                            <li><a href= {{ URL::to('/presentations/published') }}>{{ Lang::get('menu.offersPublished_')}}</a></li>
                            <li><a href= {{ URL::to('/presentations/unpublished') }}>{{ Lang::get('menu.offersUnPublished_')}}</a></li>
                            <li><a href= {{ URL::to('/presentations/create') }}>{{ Lang::get('menu.offersAddNew_')}}</a></li>                            
                        </ul>
                    </li>
                </ul>                 
                <ul>
                    <li><a href= {{ URL::to('/prices') }}>{{ Lang::get('menu.releases_')}}</a></li>
                </ul>                    
                <ul >
                    <?php 
                        $currentLangPrefix = Lang::getLocale();  
                        $newLangPrefix = "";
                        $currentURL = Request::url(); 
                        $currentRelativeURL = str_replace(Request::root(),'', $currentURL);
                        $newURL = "";
                        if($currentLangPrefix =='en'){
                            $newLangPrefix = 'de';
                        }else{
                            $newLangPrefix  = 'en';
                        }
                        //here we check if we have an URL with prefix 
                        if(strpos($currentRelativeURL ,"/".$currentLangPrefix."/") !== FALSE){
                            $newURL = str_replace('/'.$currentLangPrefix.'/', '/'.$newLangPrefix.'/', $currentRelativeURL);
                        }else{
                            $newURL = '/'.$newLangPrefix.$currentRelativeURL ;
                        }
                        $newURL = Request::root().$newURL;
                    ?>
                    <li><a href= "<?php echo $newURL; ?>">{{ Lang::get('menu.change_')}}</a></li>
                </ul>
                <ul class="lastRight">
                    <li><a href= {{ URL::to('/auth/logout') }}>LogOut</a> </li>
                </ul>                 
            </div>
        </div>           