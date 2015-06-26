var Set = function (){
	this.setStore = [];
}

Set.prototype.add = function (data) {
	if(this.setStore.indexOf(data)< 0){
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

		tempSet.add(set.setStore[i]);
	}
	return tempSet.show().sort();
}

Set.prototype.compliment = function (set) {
	var tempSet = [];
  for(var i = 0; i < this.setStore.length; i++){
	  for(var k = 0; k < set.setStore.length; k++){
    if(this.setStore[i] != set.setStore[k]){
      tempSet.push(set.setStore[i]);
      break;
	    }
	  }
  }
  return tempSet;
}

Set.prototype.intersect = function (set) {
  var tempSet = [];
    for(var i = 0; i < this.setStore.length; i++){
        for(var k = 0; k < set.setStore.length; k++){
            if(this.setStore[i] == set.setStore[k]){
                tempSet.push(this.setStore[i]);
                break;
            }
        }
    }
    return tempSet;
}

Set.prototype.subset = function (set) {
	if(this.size() > set.size()){
		return false;
	}
	else{
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
	}
	return false;
	
}

Set.prototype.equals = function (set) {
    // if the other set is a falsy value, return
    if (!set)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != set.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && set[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(set[i]))
                return false;       
        }           
        else if (this[i] != set[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}   


// var aset = new Set();
// aset.setStore = [23,2,3,1,23,2];
// var bset = new Set();
// bset.setStore = [23,2,3,1];

// console.log(aset.compliment(bset));