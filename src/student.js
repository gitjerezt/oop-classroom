class Student {
    constructor(name, skillLevel) {
      this.name = name;
      this.skillLevel = skillLevel;
      this.assignments = [];
    }
    study() {
      if (this.skillLevel < 100) {
        this.skillLevel += 1;       
      }
      return this;
    }
    doHomework(homework) {
      if(!homework) {
          this.assignments.forEach(element => {
              if(element.completed === false) {
                if(element.skillLevel < this.skillLevel) {
                  element.completed = true;
                } else {
                  element.completed = false;  
                }   
              }
          });
      } else {
        if (homework.hasOwnProperty('skillLevel')){
          if(this.skillLevel > homework.skillLevel) {
            homework.completed = true;    
          } else {
            homework.completed = false;    
          }   
        }
        if(homework.hasOwnProperty('skillLevel') && homework.skillLevel > 1 && homework.skillLevel <= 100) {
          this.assignments.push(homework);
        }
      }
    }
  }

module.exports = Student
