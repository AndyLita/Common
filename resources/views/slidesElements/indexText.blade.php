<div class="navigatorMenuTop">
    <div id="info">View Text Content</div>
</div>
<div>
    <form id="navigatorMenuForm">
        <table class="showData">
            <?php
                $counter=0;
                foreach($textElementsInSlide as $item){ ?>
            <tr>
                <td style="width: 300px;">
                    {{ $item->content }}
                </td>
                <td>
                    <input type="button" value="e" class="getButton" id="editButton{{$counter}}" data-requestUrl='/slidesElements/editTextGet' data-redirectUrl='/slidesElements/editText' data-slidesElementID="{{ $item->id }}"> 
                    <input type="button" value="x" class="actionButton" id="deleteButton{{$counter}}" data-requestUrl='/slidesElements/deleteText' data-redirectUrl='/slidesElements/indexText' data-slidesElementID="{{ $item->id }}"> 
                </td>
            </tr>
            <?php 
                $counter++;
                } ?>         
        </table>
        <input type="hidden" name="elementTypeID" value="1">
        <input type="hidden" name="width" value="1024">
        <input type="hidden" name="height" value="768">
    </form> 
</div>

<div class="navigatorMenuBottom">
    <input type="button" value="Add New" class='getButton' id="editAndSave" data-requestUrl='/slidesElements/createText' data-redirectUrl='/slidesElements/createText' />   
    <input type="button" value="Cancel" class='actionButton' id="cancelEdit" />  
</div>