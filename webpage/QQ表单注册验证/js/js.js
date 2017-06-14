
/*console.log($form);
var $elm=$("#nick");
console.log($elm);
	var $vali=$elm.find(validity);
	console.log($vali);
	var $name=$elm.find(name);
	console.log($name);
	switch($name){
		case "nick":
			if($vali.valueMissing){
				$elm.setCustomValidity("用户名不能为空");
			}else if($vali.patternMismatch){
				$elm.setCustomValidity("请输入正确的格式");
			}else{
				$elm.setCustomValidity("");
			}
			break;
	}
$form.on('invalid',function(event){
	var $elm=event.target;
	var $vali=$elm.validity;
	var $name=$elm.name;
	switch($name){
		case "nick":
			if($vali.valueMissing){
				$elm.setCustomValidity("用户名不能为空");
			}else if($vali.patternMismatch){
				$elm.setCustomValidity("请输入正确的格式");
			}else{
				$elm.setCustomValidity("");
			}
			break;
	}*/
  var form= document.querySelector('form');
  form.addEventListener('invalid', function(event) {
  	var evt=event.target;
  	var vali=evt.validity;
  	var name=evt.name;
  	switch(name){
		case "nick":
			if(vali.valueMissing){
				evt.setCustomValidity("用户名不能为空");
			}else if(vali.patternMismatch){
				evt.setCustomValidity("请输入正确的用户名格式");
			}else{
				evt.setCustomValidity("");
			}
			break;
		case "password":
			if(vali.valueMissing){
				evt.setCustomValidity("密码不能为空");
			}else if(vali.patternMismatch){
				evt.setCustomValidity("请输入正确的密码格式");
			}else{
				evt.setCustomValidity("");
			}
			break;
		case "phone":
			if(vali.valueMissing){
				evt.setCustomValidity("手机号码不能为空");
			}else if(vali.patternMismatch){
				evt.setCustomValidity("请输入正确的手机号码格式");
			}else{
				evt.setCustomValidity("");
			}
			break;
		case "email":
			if(vali.valueMissing){
				evt.setCustomValidity("邮箱不能为空");
			}else if(vali.typeMismatch){
				evt.setCustomValidity("请输入正确的邮箱格式");
			}else{
				evt.setCustomValidity("");
			}
			break;	
	}
  },true)
