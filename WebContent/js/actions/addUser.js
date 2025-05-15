import elements from "../ui/elements.js";

const sendAddUser = (event) =>{
    //formに対してsubmitを指定すると、テキストボックスでのenterキーでイベントが発生。
    //片方入力した段階で関数が実行されるのを防ぐためのif
    //.trim()でスペースも貫通して入力がないことを検知
    if (elements.addUserName.value.trim() !== "" && elements.addEmail.value.trim() !== ""){
        //console.log(elements.addUserName.value);
        //console.log(elements.addEmail.value);
        //本来ここにJavaに送るようなものが入る。
        
        const addUserData= new URLSearchParams();//簡単なテキストを送るための箱だよ。
		//new FormData();
        //FormDataクラスってデフォであるらしい。画像やファイルも送れる。
		//ただし、getParameterで受け取るにはContent-typeを合わせる工夫が必要
        addUserData.append("userName",elements.addUserName.value);
        addUserData.append("email",elements.addEmail.value);
		
		console.log(addUserData.getAll("userName")); //formdataは作れている。。。
        
        fetch("/UserManagementWebUI/add",{ //同じプロジェクト内の/addにアクセス・・・@WebServletで設定した。
	        method:"POST", //やること POST:urlに表示されない GET:userName=###みたいにurlに表示される
	        body:addUserData //送るもの jsonを送るときはjson.stingfy。formdataはそのまま
        //ここ;いらないのね。あれか、json型ってやつ？
        })
        .then(response=>response.json())
        .then(data => {
			document.getElementById("message").textContent = data.message;
			event.preventDefault(); 	
		})
        .catch(error=>{
	        console.log("Error:",error);
			event.preventDefault(); 
        })//ここtry-catchっぽい
    }
    //elseは何もしない。
    event.preventDefault(); 
    //submit行為のページリロードを阻害。ゆくゆくは画面遷移に変えるか？
};

elements.addUserForm.addEventListener(`submit`,sendAddUser);