<div class="navigatorMenuTop">
    <div id="info">Edit Text</div>
</div>
<form id="navigatorMenuForm">
    <input type="hidden" value="{{ $slidesElement->id}}" name="slidesElementID" id="slidesElementID">
<div class="tableContainer">
     <div class="tableRow" style="text-align: center">
        <h4>Predefined Styling</h4>         
    </div>
</div>
<div class="tableContainer">
    <div class="tableRow" style="vertical-align: middle">
        <div class="tableCell">
            Class
        </div>        
        <div class="tableCell">
            {!!Form::select('cssClassID', $cssClassID, $slidesElement->cssClassID, array('id' => 'cssClassID','data-requestUrl' => '/slidesElements/bringPositions', 'data-functiontocallafter'=>'FillInPosXandV')) !!}
        </div>
        <div class="tableCell">
            PosX
        </div>        
        <div class="tableCell">
            <input type="text" name="posLeft" id="posLeft" value="{{ $slidesElement->posLeft }}" />
        </div>      
        <div class="tableCell">
            PosV
        </div>        
        <div class="tableCell">
            <input type="text" name="posTop" id="posTop" value="{{ $slidesElement->posTop }}" />
        </div>    
        <div class="tableCell">
            PosZ
        </div>        
        <div class="tableCell">
            <input type="button" value="-" />
        </div>   
        <div class="tableCell">
            12
        </div>         
        <div class="tableCell">
            <input type="button" value="+" />
        </div>           
    </div>
</div>
 <div class="tableContainer">
     <div class="tableRow" style="text-align: center">
        <h4>Text Content</h4>         
    </div>
</div>
 <div class="tableContainer">
    <div class="tableRow">
        <textarea name="content">{{ $slidesElement->content }}</textarea>         
    </div>
</div>
 <div class="tableContainer">
     <div class="tableRow" style="text-align: center">
        <h4>Custom CSS</h4>        
    </div>
</div>
 <div class="tableContainer">
     <div class="tableRow" style="text-align: center">
         <textarea name="cssInline">{{ $slidesElement->cssInline }}</textarea>         
    </div>
</div>
<input type="hidden" name="elementTypeID" value="1">
<input type="hidden" name="width" value="1024">
<input type="hidden" name="height" value="768">

    

</form>

<div class="navigatorMenuBottom">
    <input type="button" value="Edit & Save" class='actionButton' id="editAndSave" data-requestUrl='/slidesElements/editTextPost' data-redirectUrl='/slidesElements/editText' />   
    <input type="button" value="Delete" class='actionButton' id="delete" data-requestUrl='/slidesElements/deleteText' data-redirectUrl='/slidesElements/indexText' />  
    <input type="button" value="Cancel" class='getButton' id="cancelEdit" data-requestUrl='/slidesElements/indexText' data-redirectUrl='/slidesElements/indexText' />  
</div>