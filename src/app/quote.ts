  export class Quote {
    public showAuthor:boolean;
    public upvotes:number;
    public downvotes:number;
    constructor(public id:number, public name:string, public author:string, public notedDate:Date){
      this.showAuthor=false;
      this.upvotes=0
      this.downvotes=0
      this.notedDate= new Date()
      }
  }
  