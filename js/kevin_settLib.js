var Set = function (){
	this.setStore = [];
// 	this.add = add;
// 	this.remove = remove;
// 	this.size = size;
// 	this.union = union;
// 	this.intersect = intersect;
// 	this.subset = subset;
// 	this.difference = difference;
// 	this.show = show;
// 	this.contains = contains;
}

Set.prototype.add = function (data) {
	if(this.setStore.indexOf(data)<0){
		this.setStore.push(data);
		return true;
	}
	return false;
}

Set.prototype.remove = function (data){
	var pos = this.setStore.indexOf(data);
	if(pos > -1){
		this.setStore.splice(pos,1);
		return true;
	}
	return false;
}

Set.prototype.show = function (){
	return this.setStore;
}

Set.prototype.contains = function (data){
	if(this.setStore.indexOf(data) > -1){
		return true;
	}
	return false;
}

Set.prototype.union = function (set) {
	var tempSet = new Set();
	for(var i=0; i<this.setStore.length; ++i) {
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

Set.prototype.intersect = function (set) {
	var tempSet = new Set();
	for(var i=0; i<this.setStore.length; ++i){
		if(set.contains(this.setStore[i])){
			tempSet.add(this.setStore[i]);
		}
	}
	return tempSet;
}

Set.prototype.difference = function () {

}

Set.prototype.subset = function (set) {
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

Set.prototype.size = function (){
	return this.setStore.length;
}

Set.prototype.isEmpty = function (){
	if (this.setStore.length < 0) {
	return true;	
	}else{
	return false;	
	};
	
}

Set.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}   

// var setA = new Set();
// setA.add("David");
// setA.add("James");
// setA.add("Jane");
// setA.add("David");

// print("names: ", setA.show());

// var setB = new Set();
// setB.add("David");
// setB.add("Anthony");
// setB.add("Ben");
// setB.add("James");
// setB.add("Jane");

// print("setB: ", setB.show());

// print("setA U setB: ", setA.union(setB).show());

// print("setA x setB: ", setA.intersect(setB).show());

// print("is setA subset of setB? : ", setA.subset(setB));

