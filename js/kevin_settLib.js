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
		for each(var member in this.setStore){ 
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

//Use

var names = new Set();
names.add("David");
names.add("James");
names.add("Jane");
names.add("David");

print("names: ", names.show());

var names2 = new Set();
names2.add("David");
names2.add("Anthony");
names2.add("Ben");
names2.add("James");
names2.add("Jane");

print("names2: ", names2.show());

print("names U names2: ", names.union(names2).show());

print("names x names2: ", names.intersect(names2).show());

print("is names subset of names2? : ", names.subset(names2));