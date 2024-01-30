var getPdf = ()=>{
    if(document.querySelector(".pdfCover").style.display=='block'){
        document.querySelector(".pdfCover").style.display='none';

    }else{
        document.querySelector(".pdfCover").style.display='block'
        document.querySelector(".mimi").style.transform='rotate(120deg)';

    }
//    }
};
