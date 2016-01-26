@extends('layouts.master')

@section('pageTitle')
    Details
@endsection

    <?php 
        $slideIDParameter = '';
        if($slideID>0){
            $slideIDParameter = '?page='.$slideID;
        }
        $iFrameURL = Request::root().'/filesGenerated/v1/presentation_ID_'.$presentation->id.'/index.html'.$slideIDParameter;
        $iFrameURL2 = Request::root().'/filesGenerated/presentation_'.$presentation->id.'/index.html'.$slideIDParameter;
    ?>
    
@section('content')
<form id='tokenForm'>
    {!! csrf_field() !!}
</form>
<form id='essentialData'>
    <input type="hidden" name="slideID" id="slideID" value="{{$slideID}}">
    <input type="hidden" name="presentationID" id="presentationID" value="{{$presentation->id}}"> 
</form>

<h1>
    {{ $presentation->presentationName }}
</h1>
<div class="navigatorPresentation">
    <input type="text" value="" id="pageNumber"/>
</div>
<div>
    <iframe id="slidesPreviewer" src="<?php echo($iFrameURL2) ?>" width="1024" height="768" scrolling="no" frameBorder="0"></iframe>
    <p><a href="<?php echo($iFrameURL2)?>" target="_blank">View in separate window</a></p>
</div>

<div class="navigatorMenu" id="navigatorMenu">
    <div class="navigatorRow">
        <div class="navigatorMenuLeft">
            <ul id='slidesEditor' style="display:none;">
                <li class="separatorSmall"></li>
                <li id='slideMenu0' title="Edit Slides" data-hide="slides" data-show="presentations" ></li>                
                <li class="separatorSmall"></li>
                <li id='slideMenu1' class="getButton" title="Texts" data-requestUrl='/slidesElements/indexText' data-redirectUrl='/slidesElements/indexText' ></li>
                <li class="separatorBig"></li> 
                <li id="slideMenu2" class="getButton" title="Images" data-requestUrl='/slidesElements/addImage' data-redirectUrl='/slidesElements/addImage' ></li>   
                <li class="separatorBig"></li>                 
                <li id="slideMenu3" class="getButton" title="Videos"></li>
                <li class="separatorBig"></li> 
                <li id="slideMenu4" class="getButton" title="Vertical Position"></li>
                <li class="separatorBig"></li> 
                <li id="slideMenu5" class="getButton" title="Animations"></li>  
                <li class="separatorBig"></li> 
                <li id="slideMenu6" class="getButton" title="Offers"></li>  
                <li class="separatorBig"></li> 
                <li id="slideMenu7" class="getButton" title="Hidden Slides"></li>  
                <li class="separatorSmall"></li>                
            </ul>
            <ul id='presentationsEditor'>
                <li class="separatorSmall"></li>
                <li id="presentationMenu0" title="Edit Presentation" data-hide="presentations" data-show="slides" ></li>                
                <li class="separatorSmall"></li>
                <li class="addSlideButton" id="presentationMenu1" title="Add Slide After" data-position='after' data-functiontocallafter='OpenNewCreatedSlide'></li>
                <li class="separatorBig"></li> 
                <li class="addSlideButton" id="presentationMenu2" title="Add Slide Before" data-position='before' data-functiontocallafter='OpenNewCreatedSlide'></li>   
                <li class="separatorBig"></li>                 
                <li class="getButton" id="presentationMenu3" title="Videos"></li>
                <li class="separatorBig"></li> 
                <li class="getButton" id="presentationMenu4" title="Vertical Position"></li>
                <li class="separatorBig"></li> 
                <li class="getButton" id="presentationMenu5" title="Animations"></li>  
                <li class="separatorBig"></li> 
                <li class="getButton" id="presentationMenu6" title="Offers"></li>  
                <li class="separatorBig"></li> 
                <li class="getButton" id="presentationMenu7" title="Hidden Slides"></li>  
                <li class="separatorSmall"></li>                
            </ul>            
        </div>
        <div class="navigatorContent">
            <div id="innerMenuContent" class="innerMenuContent"></div>          
        </div>
    </div>  
</div>
@endsection

@section('scripts')

{!! Html::script('/scripts/jquery.validate.min.js') !!}
{!! Html::script('/scripts/jquery-ui.min.js') !!}
{!! Html::script('/scripts/fileUpload/vendor/jquery.ui.widget.js') !!}
{!! Html::script('/scripts/fileUpload/jquery.iframe-transport.js') !!}
{!! Html::script('/scripts/fileUpload/jquery.fileupload.js') !!}
{!! Html::script('/scripts/fileUpload/jquery.fileupload.js') !!}
<!--{!! Html::script('/scripts/fileUpload/imagepreview.js') !!}-->
{!! Html::script('/scripts/presentationsShow.js') !!}


@endsection 

