<?php

namespace App\Helpers;
use App\ListsQueries\ListsQueries;
use App\Helpers\ElementsProviders;

class CustomHelper 
{

    function addEmptyOption($queryResult){
        $emptyOption = array('0'=>'------');
        if(count($queryResult)>1){
           $queryResult = $emptyOption + $queryResult; 
        }    
        return $queryResult;
    }
    
    function forceEmptyOption($queryResult){
        $emptyOption = array('0'=>'------');
        $queryResult = $emptyOption + $queryResult;  
        return $queryResult;
    }
    
    function cleanStringsForUniqueValue($stringToClean){
        $stringToClean = preg_replace("/[^A-Za-z0-9 ]/", '', $stringToClean);
        $stringToClean = str_replace(" ","",$stringToClean);
        $stringToClean = strtolower($stringToClean);
        return $stringToClean; 
    }
    
    function writeFiles($text){
        $myfile = fopen("filesGenerated/newfile.html", "w") or die("Unable to open file!");
        fwrite($myfile, $text);
        fclose($myfile);
        return TRUE;
    }
    
    function writePageContent($presentationID){
        $queryLists = new ListsQueries();
        $slidesElements = $queryLists->slideElementsList($presentationID);
                
        $text = trim("var activePages=[{{{VarActivePages}}}];var allPages=[{{{VarAllPages}}}];var pagesContent=[{{{varPagesContent}}}];var pageAutomaticAnimations=[{{{VarPageAutomaticAnimations}}}];");
        
        $firstEntry = TRUE;
        $currentSldeID=-1;
        $counterActiveSlides = 0;
        $counterAllSlides=0;
        
        $varAllPages='';
        $varActivePages='';
        $varPagesContent='';
        $varPageAutomaticAnimations='';
        
        //here we parse the pages elements to generate content
        foreach($slidesElements as $item){
            if($firstEntry == TRUE){
                $varPagesContent .="'";
                $varAllPages .="0";
                if($item->hiddenSlide==0){
                    $varActivePages="0";
                }
            }
            if($currentSldeID != $item->ID && $firstEntry==FALSE){
                $varPagesContent .="','";
                $varAllPages .=",";
                $counterAllSlides++;
                $varAllPages .= (string)$counterAllSlides;
                if($item->hiddenSlide == 0){
                    $varActivePages .=",";
                    $varActivePages .= (string)$counterAllSlides;
                }
            }
            $currentSldeID = $item->ID;
            $varPagesContent .= trim($item->contentHTML);
            $firstEntry = FALSE;
        }
        if($firstEntry==FALSE){
            $varPagesContent .= "'";
        }
                
        $finalText = str_replace('{{{varPagesContent}}}',$varPagesContent,$text);
        $finalText = str_replace('{{{VarAllPages}}}',$varAllPages,$finalText);
        $finalText = str_replace('{{{VarActivePages}}}',$varActivePages,$finalText);
        $finalText = str_replace('{{{VarPageAutomaticAnimations}}}',$varPageAutomaticAnimations,$finalText);
        
        $myfile = fopen("filesGenerated/v1/presentation_ID_7/pages/pagesContent.js", "w") or die("Unable to open file!");
        fwrite($myfile, $finalText);
        fclose($myfile);
        //die();
        return TRUE;
    }
    
    function writeDataJSON($presentationID){
        $queryLists = new ListsQueries();
        $slidesElements = $queryLists->slidesAndElementsList($presentationID);

        $elementsProvider = new ElementsProviders();
        
        //here we put content
        $slideID = 0;
        $currentSlideID = -1;
        $firstSlide=TRUE;
        $firstElement=TRUE;
        $pageTemplate  = trim(rtrim($elementsProvider->returnPagesOpener()));
        $pageTemplateReplacer = array("{{{{type}}}}", "{{{{pageID}}}}","{{{{slideID}}}}");
        $elementTemplate = rtrim(trim($elementsProvider->returnTextElement()));
        $elementTemplateReplacer = array("{{{{text}}}}","{{{{id}}}}","{{{{subtype}}}}","{{{{value}}}}","{{{{clases}}}}","{{{{style}}}}","{{{{top}}}}","{{{{left}}}}","{{{{width}}}}","{{{{height}}}}","{{{{animation}}}}","{{{{type}}}}","{{{{triggerElem}}}}","{{{{hideElem}}}}","{{{{params}}}}");
        
        // here we place the content 
        $finalText = trim(rtrim($elementsProvider->returnHomeElement()));
        foreach($slidesElements as $item){
            if((int)$currentSlideID != (int)$item->ID){
                //here we place the separator between SLIDES, if needed
                if($firstSlide == FALSE){
                    $finalText .=']},';
                    $finalText .= trim(rtrim($elementsProvider->returnPagesCloser()));
                }
                $pageContent = array('standard', (string)$slideID, $item->ID);
                $newPage = str_replace($pageTemplateReplacer,$pageContent,$pageTemplate);
                $finalText .= trim(rtrim($newPage));
                
                //here we increment and adjust elements for the next pages
                $slideID++;
                $firstSlide = FALSE;
                $firstElement = TRUE;                
                $currentSlideID=$item->ID;
            }
            //here we place the separator between ELEMENTS, if needed
            if($firstElement==FALSE){
                $finalText .=',';
            }
            $content = str_replace(array("\r\n", "\n\r", "\r", "\n"), "", nl2br($item->content));
            $elementContent = array('text',trim($item->slidesElementsID),'title',$content,(string)$item->className,(string)$item->cssInline,(string)trim($item->posTop),(string)trim($item->posLeft),(string)trim($item->width),(string)trim($item->height),'','','','','');
            $newElement = str_replace($elementTemplateReplacer,$elementContent,$elementTemplate);
            $finalText .= $newElement;
            //here we increment and adjust elements for the next elements
            $firstElement=FALSE;                         
        }
        $finalText .= ']}'.trim(rtrim($elementsProvider->returnPagesCloser()));
        
        $finalText .= rtrim($elementsProvider->closingJSON());
        $dataJSONFile = fopen("filesGenerated/presentation_".$presentationID."/scripts/data.js", "w") or die("Unable to open file!");
        fwrite($dataJSONFile, $finalText);
        fclose($dataJSONFile);        
        return TRUE;
    }
   
}