export class Quote {
    
    showDetails: boolean;
    constructor(public id:number,public entry:string,public author:string,public submitter:string){
        this.showDetails=false;
    }
}
