export class Post{
    constructor(x: string){
        this.title = x;
        this.comments = [];
        this.hidden = true;
    }
    title: string;
    comments: string[];
    tempComment: string;
    hidden: boolean;
}