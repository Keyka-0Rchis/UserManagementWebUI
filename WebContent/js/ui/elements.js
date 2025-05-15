//ラジオボタンのDOM取得
//const addMode = document.getElementById("mode-add");
//const viewMode = document.getElementById("mode-view");
//const deleteMode = document.getElementById("mode-delete");
//一括取得。
const modeRadios = document.querySelectorAll('input[name="mode"]');

//sectionのDOM取得、、、sectionって文字列とかもってないけど、styleの中身を書き換えるのかな？
////class指定は.がないと塊としての指定ができない
////getelementclassnameは配列として取り出すから、[0]が必要になる。
////今回は単一のものを対象にするからqueryselectorを用いる
const addSection = document.querySelector(".add-user");
const viewSection = document.querySelector(".view-user");
const deleteSection = document.querySelector(".delete-user");

//addモード
const addUserName = document.getElementById("user-name");
const addEmail = document.getElementById("user-email");
const addUserForm = document.querySelector(".add-user-form");

//viewモード
const viewUserForm = document.querySelector(".view-user-form");

//deleteモード
const deleteId = document.getElementById("delete-id");
const deleteUserForm = document.querySelector(".delete-user-form");

//すべて一つずつだから、defaultで。
export default {
    //addMode,
    //viewMode,
    //deleteMode,
    modeRadios,
    addSection,
    viewSection,
    deleteSection,
    addUserName,
    addEmail,
    addUserForm,
    viewUserForm,
    deleteId,
    deleteUserForm
};