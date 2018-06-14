

var myObject = function() {	
	var obj = {};	
	obj.name = "Alex";
	obj.age = 29;
	obj.email = "alex@gmail.com";
	obj.address = "HCM City";
	obj.showName = function(){
		return this.name;
	}
	return obj;
}

var obj1 = new myObject();
console.log(obj1.showName());
