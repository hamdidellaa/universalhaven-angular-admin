import { Task } from './task';



export class TaskComment{
    public TaskCommentId: number;
    public PublisherId: number;
    public PublishDate : Date;
    public Content : string;
    public TaskId : number;
    public Publisher : string;
    public Picture: string;
    public to : string;
    constructor(){
        
    }
}