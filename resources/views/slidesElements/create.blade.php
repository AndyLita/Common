<form id="navigatorMenuForm">
<div class="tableContainer">
    <div class="tableRow" style="vertical-align: middle">
        <div class="tableCell">
            <h4>Class</h4>
        </div>        
        <div class="tableCell">
            {!!Form::select('cssClassID', $cssClassID, $cssClassID) !!}
        </div>
        <div class="tableCell">
            PosX
        </div>        
        <div class="tableCell">
            <input type="text" name="posLeft" id="posLeft" />
        </div>      
        <div class="tableCell">
            PosV
        </div>        
        <div class="tableCell">
            <input type="text" name="posTop" id="posTop" />
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
        <textarea name="content"></textarea>         
    </div>
</div>
 <div class="tableContainer">
     <div class="tableRow" style="text-align: center">
        <h4>Custom CSS</h4>        
    </div>
</div>
 <div class="tableContainer">
     <div class="tableRow" style="text-align: center">
         <textarea name="cssInline"></textarea>         
    </div>
</div>
<input type="hidden" name="elementTypeID" value="1">
<input type="hidden" name="width" value="1024">
<input type="hidden" name="height" value="768">

    

</form>

<div class="navigatorMenuBottom">
    <input type="button" value="Save" id='saveButton' data-posturl='/slidesElements/storeText' data-redirectUrl='/slidesElements/editText' />      
    <input type="button" value="Cancel" id='cancelButton' />  
</div>