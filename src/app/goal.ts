import { stringify } from "@angular/compiler/src/util";

export class Goal {
    // id!: number;
    // name!: string;
    // description!: string;

    public showDescription: boolean;
  constructor(public id: number,public name: string,public description: string, public completeDate: Date){
    this.showDescription=false;
  }
}


// export class Goal {
//   showDescription: boolean;
//   constructor(public id: number,public name: string,public description: string){
//     this.showDescription=false;
//   }
// }


