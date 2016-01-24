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
                <li class="slideMenu0" title="Edit Slides" id='switchTo-presentations'></li>                
                <li class="separatorSmall"></li>
                <li class="slideMenu1" title="Texts" id='slideMenu1' data-geturl='/slidesElements/createText'></li>
                <li class="separatorBig"></li> 
                <li class="slideMenu2" title="Images"></li>   
                <li class="separatorBig"></li>                 
                <li class="slideMenu3" title="Videos"></li>
                <li class="separatorBig"></li> 
                <li class="slideMenu4" title="Vertical Position"></li>
                <li class="separatorBig"></li> 
                <li class="slideMenu5" title="Animations"></li>  
                <li class="separatorBig"></li> 
                <li class="slideMenu6" title="Offers"></li>  
                <li class="separatorBig"></li> 
                <li class="slideMenu7" title="Hidden Slides"></li>  
                <li class="separatorSmall"></li>                
            </ul>
            <ul id='presentationsEditor'>
                <li class="separatorSmall"></li>
                <li class="presentationMenu0" title="Edit Presentation" id='switchTo-slides'></li>                
                <li class="separatorSmall"></li>
                <li class="presentationMenu1" title="Add Slide After" id='addSlide-after'></li>
                <li class="separatorBig"></li> 
                <li class="presentationMenu2" title="Add Slide Before" id='addSlide-before'></li>   
                <li class="separatorBig"></li>                 
                <li class="presentationMenu3" title="Videos"></li>
                <li class="separatorBig"></li> 
                <li class="presentationMenu4" title="Vertical Position"></li>
                <li class="separatorBig"></li> 
                <li class="presentationMenu5" title="Animations"></li>  
                <li class="separatorBig"></li> 
                <li class="presentationMenu6" title="Offers"></li>  
                <li class="separatorBig"></li> 
                <li class="presentationMenu7" title="Hidden Slides"></li>  
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
{!! Html::script('/scripts/presentationsShow.js') !!}
@endsection 

