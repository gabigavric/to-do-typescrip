class Task {  ///classes are blueprints for objects
  done: boolean; ///class properties

  constructor(public description: string, public priority: string) {
    //when you add public it meants typescript has permission to automatically
    //access and assign it to class properties. (called accces level modifierß)
    this.done = false; //constructor method
  }
}

var tasks: Task[] = [];
//datatype task[] refers to an array containing Task object
tasks.push(new Task('Finish week two js codereview.', 'Medium'));
//we create anew task object. new keyword automatically invokes a constructor.
//then we push tasks array
console.log(tasks);
//log array to console


//##################################################################//
class Task {
  done: boolean = false;

  constructor(public description: string, public priority: string){}

  markDone(){
    this.done = true;
  }
  //created a method, when called upon Task object, it will change its done
  //property from false to true.
}

var tasks: Task[] = [];
tasks.push(new Task('Do codereview.', 'Medium'));
tasks.push(new Task('Walk tyson', 'Medium'));
tasks.push(new Task('Pre-cook.', 'Low'));
console.log(tasks);
//since we made changes to .ts file we have to re-compile run $tsc app/to-do.ts

tasks[0].markDone();
//calling markDone on first task. COMPILE!

for(var task of tasks){
  console.log(task);
}

//basic type script loop looks like this:
//for(var individualThing of listOfMultipleThings) {
  //console.log(individualThing);
//};
//we do this so we dont have to print entire array. as it cylcles through array
//each individual entry is temporarily assigned to the variable individualThing.


//compile changes again! there was a change made to file!
