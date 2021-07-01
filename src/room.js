class Room {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.contents = [];
  }
  add(item) {
   this.contents.push(item); 
   return this;   
  }
  has(item) {
    for (let element in this.contents) {
      if(Object.is(this.contents[element], item)) return true; 
    }
    return false;
  }
}

module.exports = Room
