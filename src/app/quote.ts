export class Quote {
    
    showDetails: boolean;
    constructor(public id:number,public entry:string,public author:string,public submitter:string,public actualDate: Date){
        this.showDetails=false;
    }
}
