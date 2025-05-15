import elements from "../ui/elements.js";

elements.viewUserForm.addEventListener(`submit`,() => {
	  elements.viewUserForm.action = "/UserManagementWebUI/view";
	  elements.viewUserForm.method = "POST";
	}
	//戻ってこないので、fetchではない。だからpreventDefaultもいらない。つまり引数にeventもいらない
);