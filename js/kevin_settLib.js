function Set(){
	this.setStore = [];
	this.add = add;
	this.remove = remove;
	this.size = size;
	this.union = union;
	this.intersect = intersect;
	this.subset = subset;
	this.difference = difference;
	this.show = show;
	this.contains = contains;
}

function add(data){
	if(this.setStore.indexOf(data)<0){
		this.setStore.push(data);
		return true;
	}
	return false;
}

function remove(data){
	var pos = this.setStore.indexOf(data);
	if(pos > -1){
		this.setStore.splice(pos,1);
		return true;
	}
	return false;
}

function show(){
	return this.setStore;
}

function contains(data){
	if(this.setStore.indexOf(data) > -1){
		return true;
	}
	return false;
}

function union(set){
	var tempSet = new Set();
	for(var i=0; i<this.setStore.length; ++i){
		tempSet.add(this.setStore[i]);
	}
	for(var i=0; i<set.setStore.length; ++i){
		// if(!tempSet.contains(set.setStore[i])){
		// 	tempSet.setStore.push(set.setStore[i]);
		// }

		//simpler way >
		tempSet.add(set.setStore[i]);
	}
	return tempSet;
}

function intersect(set){
	var tempSet = new Set();
	for(var i=0; i<this.setStore.length; ++i){
		if(set.contains(this.setStore[i])){
			tempSet.add(this.setStore[i]);
		}
	}
	return tempSet;
}

function difference(){

}

function subset(set){
	if(this.size() > set.size()){
		return false;
	}
	else{
		//can use for instead too
		for(var member in this.setStore){ 
			if(!set.contains(member)){
				return false;
			}
		}
	}
	return true;
}

function size(){
	return this.setStore.length;
}

function print(a, b){
    console.log(a,b);
}
//Use

var setA = new Set();
setA.add("David");
setA.add("James");
setA.add("Jane");
setA.add("David");

print("names: ", setA.show());

var setB = new Set();
setB.add("David");
setB.add("Anthony");
setB.add("Ben");
setB.add("James");
setB.add("Jane");

print("setB: ", setB.show());

print("setA U setB: ", setA.union(setB).show());

print("setA x setB: ", setA.intersect(setB).show());

print("is setA subset of setB? : ", setA.subset(setB));

