import elements from "../ui/elements.js";

const sendDeleteId = (event) =>{
    //本来ここにJavaに送るようなものが入る。
    if (elements.deleteId.value.trim() !== ""){
        let deleteId = new URLSearchParams();
        //FormDataクラスってデフォであるの？
        deleteId.append("deleteUserId",elements.deleteId.value);
        
        fetch("/UserManagementWebUI/delete",{
        method:"POST",//やること
        body:deleteId//送るもの
        })
        .then(response=>response.json())//jsonってのはjavascriptのオブジェクトのこと。キーと値。
        //作りが汎用性あるから、異なる環境間でのやり取りに適するんだってキーは“”わすれないこと
        //戻ってきたらresponseをjsonにパース！
        .then(data=>{
			document.getElementById("message").textContent = data.message;
			event.preventDefault(); 	
		})
        .catch(error=>{
        console.log("Error:",error);
        })//ここtry-catchっぽい
    }
    event.preventDefault();
};

elements.deleteUserForm.addEventListener(`submit`,sendDeleteId);