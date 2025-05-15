import elements from "./ui/elements.js";
//VSCodeは.jsをフィルしないけど、つけたほうが安全らしい。

const initialView = () =>{ //初期画面の定義だよ。
    elements.addSection.style.display = "none";
    elements.viewSection.style.display = "none";
    elements.deleteSection.style.display = "none";
}

const modeSwitch = () =>{
    elements.modeRadios.forEach((radio) =>{
        //foreach((括弧)=>{中括弧}) 単一のものが文になるイメージ。いい加減覚えたい。
        let selectedMode; //jsの変数定数はすごいよね。値でも構造でも飲み込む。
        //下のifパターンと違って、addModeとかのDOMが不要になります。
        switch(radio.value){
            case "add":
                selectedMode = elements.addSection;
                break;  //これ忘れる癖、早めに直したい。
            case "view":
                selectedMode = elements.viewSection;
                break;
            case "delete":
                selectedMode = elements.deleteSection;
                break;
        }
        if(radio.checked){
            selectedMode.style.display = "block";
        }else{
            selectedMode.style.display = "none";
        }
    }
    );

/*  過去の遺産。でも大事にしまっておく。
    if (elements.addMode.checked){
        elements.addSection.style.display = "block";
    }else{
        elements.addSection.style.display = "none";
    }
    if (elements.viewMode.checked){
        elements.viewSection.style.display = "block";
    }else{
        elements.viewSection.style.display = "none";
    }
    if (elements.deleteMode.checked){
        elements.deleteSection.style.display = "block";
    }else{
        elements.deleteSection.style.display = "none";
    }
        */
}

//DOMContentLoaded、単にloadよりもよいらしい。詳しいことは後日。
window.addEventListener(`DOMContentLoaded`,initialView);

//radioボタンはクリックされるたびにchangeイベントを発生させるらしい。
elements.modeRadios.forEach((radio) =>{
    radio.addEventListener(`change`,modeSwitch);
});