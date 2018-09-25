import { Task } from './../../../models/task';
import { Endpoints } from './../../../shared/endpoints';
import { Http,Headers,RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";



@Injectable()


export class TaskService{

    ressourceEndpoint = Endpoints.DOTNET+"Task"
    constructor(private http : Http){

    }

    getTasksByUser(userid){
        return this.http.get(this.ressourceEndpoint+"/?userId="+userid).map(resp=>resp.json());
    }


    updateTaskStatus(task : Task, status: String){
        return this.http.put(this.ressourceEndpoint+'/'+task.id+'?status='+status,task).map(resp=>resp.json());
    }

    getTaskById(id){
        return this.http.get(this.ressourceEndpoint+"/"+id).map(resp=>resp.json());
    }

    addTask(task: Task){
        let user = JSON.parse(localStorage.getItem("user"));
        task.TaskAssignerId = user.id;
        console.log(task);
        return this.http.post(this.ressourceEndpoint,task).map(resp=>resp.json());
    }


    removeTask(task : Task){
        return this.http.delete(this.ressourceEndpoint+"/"+task.id);
    }

    getStats(){
        return this.http.get(this.ressourceEndpoint+"?stats=true").map(resp=>resp.json());
    }


    notify(userid){
        this.http.get(Endpoints.JAVA_EE+"user/getToken?userid="+userid).subscribe(resp=>{
            let data= {
                app_id: "a6564835-e297-4b17-a7a9-2b69b784c584",
                include_player_ids : ["8b0fe409-7778-4fe3-b411-9f9b592131c5"],
                template_id:"633db46b-d41c-43d4-8d05-b10afc6403e3"
            };
            let options = new RequestOptions();
            let headers = new Headers();
            headers.set("Authorization","Basic NGVkMTNiODUtZTFlZi00YWU3LTkzNWItY2ViNTczYzM1ZjJi");
            headers.set("Content-Type","application/json");
            options.headers= headers;
            this.http.post("https://onesignal.com/api/v1/notifications",JSON.stringify(data),options).subscribe(resp=>{},err=>{
                console.log(err);
            });

        })
    }
    

}