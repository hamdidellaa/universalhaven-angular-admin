import { Camp } from './camp';


export class FundraisingEvent {
    
         public id: number;
         public title:string;
         public description: string;
         public imagePath: string;
         public goal: number;
         public finishingDate: Date;
         public publishDate: string;
         public state: string;
         public urgency: string;
         public camp: Camp;
         public publisher: number;
     
 }