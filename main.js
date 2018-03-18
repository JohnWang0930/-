window.onload=function(){
    // li选中添加class方法
    function addclass(){
        for (var i =0;i<document.getElementsByTagName("li").length;i++){
            document.getElementsByTagName("li")[i].setAttribute('class','')
        }
        this.setAttribute('class','select')
    }
    //获取选中li方法
    function getselect(){
        var li =document.getElementsByTagName("li");
        for (var i=0;i<li.length;i++){
            if (li[i].getAttribute("class") && li[i].getAttribute("class").indexOf("select")!==-1){
                var item=li[i];
                break;
            }
            var item=null;
        }
        return item;
    }
    
    // 添加事件
    (function(){
        //添加按钮click监听
        document.getElementById("add").onclick=function(){
            var textbox=document.getElementById("text");
            addlist(textbox.value);
        }
        //添加方法
        function addlist(text){
            if (text){
                var li=document.createElement("li");
                li.innerHTML=text;
                document.getElementById("ul").appendChild(li);
                document.getElementById("text").value="";
                li.onclick=function(){
                    addclass.call(this)
                }
            }else{
                alert("请输入内容")
            }
            document.getElementById("comfirmalter").style.display='none';
        }
    })()

    // 删除事件
    ;(function(){
        //删除按钮click监听
        document.getElementById("remove").onclick=function(){
            remove(getselect())
        }
        //删除方法
        function remove(item){
            if (item){
               document.getElementById("ul").removeChild(item);
            }else{
                alert("请选择事项")
            }
            document.getElementById("comfirmalter").style.display='none';
            document.getElementById("text").value='';
        }
    })()
    
    //修改事件
    ;(function(){
        //修改按钮click监听
        document.getElementById("alter").onclick=function(){
            alter(getselect())
        }
        //修改方法
        function alter(item){
            var comfirmalter=document.getElementById("comfirmalter")
            var text=document.getElementById("text");
            if (item){
                //input获取修改元素内容
                text.value=item.innerHTML;
                //确认修改按钮显示
                comfirmalter.style.display='inline';
                //确认修改按钮监听
                comfirmalter.onclick=function(){
                    if (text.value!==item.innerHTML){
                        item.innerHTML=text.value;
                        comfirmalter.style.display='none';
                        text.value='';
                    }else{
                        alert("您未修改")
                    }
                }
            }else{
                alert("请选择事项")
            }
        }
    })()
    
}