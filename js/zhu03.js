var p1 = document.getElementsByClassName("tip1")[0];
	function checkPhone1(){ 
        var mobile1 = document.getElementById('mobile1').value;
        if(!(/^1[34578]\d{9}$/.test(mobile1))){ 
            p1.style.display="block";  
        } else{
            p1.style.display="none";
        }
    }
$(".list-2>li").click(function(){
    $(".btn-primary").html($(this).children('span').html());
})