function djs(){
        var obj=document.getElementById('num');
        var num=obj.innerText;
        obj.innerText=num-1;
        if(num-1==0){
            clearInterval(ds);
            obj.parentElement.className='bigbang';
            setTimeout(function(){
                obj.parentElement.className='';
                obj.innerHTML='时间到';
                obj.style.fontSize='58px';
                obj.parentElement.style.background='red';
            },600)
        }
    }
    var ds=setInterval(djs,1000);