class Marker {
  constructor (size, color, remainingInk) {
    this.size = size;
    this.color = color;
    this.remainingInk = remainingInk;
  }
  write(word) {
    var charsToWrite = [];
    for (let index in word) {
       if(this.remainingInk > 0 || word[index] === ' '){
        charsToWrite.push(word[index]) ;
      }
      if(word[index] != ' ' && this.remainingInk > 0) {
        this.remainingInk--;
      }
    }
    return charsToWrite.join('');  
  }
}

module.exports = Marker
