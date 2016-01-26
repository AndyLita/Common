<div class="navigatorMenuTop">
    <div id="info">Add New Image</div>
</div>    
<!--<form id="navigatorMenuForm" nctype="multipart/form-data" method="post" action="upload.php">-->
    
{!!Form::open(['url'=> '/slidesElements/addImagePost','id'=>'addImage', "method"=>'post', 'files'=>true ]) !!}
<input type="hidden" name="elementTypeID" value="1">
<input type="hidden" name="width" value="1024">
<input type="hidden" name="height" value="768">
<input type="hidden" id="fileFormatError" value=" This file format is not accepted" />
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
            {!!Form::select('cssClassID', $cssClassID, $cssClassID, array('id' => 'cssClassID','data-posturl' => '/slidesElements/bringPositions', 'data-functiontocallafter'=>'FillInPosXandV')) !!}
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
<div id='inputFile'>
     <div class="tableContainer" id='inputFile1'>
        <div class="tableRow" style="text-align: center">
           <h4>Image upload</h4>         
       </div>
    </div>
        <div class="tableContainer" id='inputFile2'>
           <div class="tableRow">
               <input type="file" name="uploadImageSlide"  id="uploadImageSlide"  />
           </div>
    </div>
</div>
<div id='previewFile' class="hidden">
    <div class="tableContainer" id='previewFile1'>
       <div class="tableRow" style="text-align: center">
          <h4>Image Preview</h4>         
      </div>
    </div>
     <div class="tableContainer" id='previewFile2'>
         <div class="tableRow" style="text-align: center">
             <img id="uploadImageSlidePreview" src="#" alt="uploaded image" style="max-height: 200px; width: auto; max-width: 200px;" />       
        </div>
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
    <input type="button" value="Save" id="saveImageToServer" data-requestUrl='/slidesElements/addImagePost' data-redirectUrl='/slidesElements/addImageShow'/> 
</form>

<div class="navigatorMenuBottom">
  
    <input type="button" value="Save & New" class="actionButton" id='saveAndNewTtextButton' data-requestUrl='/slidesElements/storeText' data-redirectUrl='/slidesElements/createText' />    <input type="button" value="Cancel" id="cancelButton" class="getButton" data-requestUrl='/slidesElements/indexText' data-redirectUrl='/slidesElements/indexText' />  
</div>