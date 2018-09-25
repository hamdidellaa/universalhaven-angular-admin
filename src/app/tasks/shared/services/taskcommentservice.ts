import { TaskComment } from './../../../models/taskcomment';
import { Endpoints } from './../../../shared/endpoints';
import { Http,Headers,RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import { UserService } from '../../../shared/service/user.service';



@Injectable()

export class TaskCommentService{

    ressourceEndpoint = Endpoints.DOTNET+"TaskComments";

    constructor(private http : Http,private serviceUser: UserService){

    }

    getTaskComments(taskid: number){
        return this.http.get(this.ressourceEndpoint+"?taskId="+taskid).map(resp=>resp.json());
    }


    addComment(comment: TaskComment, taskId: number){
        let user = JSON.parse(this.serviceUser.getUser());
        comment.PublishDate = new Date();
        comment.TaskId= taskId;
        comment.PublisherId= user.id;
        return this.http.post(this.ressourceEndpoint,comment).map(resp=>resp.json());
    }



    removeComment(comment: TaskComment){
        return this.http.delete(this.ressourceEndpoint+"/"+comment.TaskCommentId);
    }

}