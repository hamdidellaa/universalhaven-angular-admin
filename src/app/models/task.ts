import { TaskComment } from './taskcomment';





export class Task {
    id: number;
    description : string;
    camp: number;
    campId: string ="1";
    taskAssigner: string;
    taskExecutor: string;
    TaskAssignerId: string;
    TaskExecutorId: string;
    Priority:number;
    Deadline : Date;
    deadLine: Date;
    endingDate: Date;
    priority : string;
    status : string;
    startingDate: Date;
    comments : TaskComment[] = [];
    Picture: string;
    constructor(){
        this.status="";
        this.comments= [];
    }
}