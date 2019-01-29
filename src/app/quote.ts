  export class Quote {
    public showName:boolean;
    constructor(public id:number, public name:string, public author:string, public upvotes:number, public downvotes:number, public notedDate:Date){
      this.showName=false;
      this.upvotes=0
      this.downvotes=0
      this.notedDate= new Date()
      }
  }
  