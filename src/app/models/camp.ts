

export class Camp{
    
         public id: number;
         public name: string;
         public address:string;
         public budget: number;
         public capacity: number;
         public closingDate: Date;
         public country: string;
         public creationDate: Date;
         public electricity: boolean=false;
         public latLng: string;
         public occupancy: number;
         public superficy: number;
         public water: boolean =false;
         public campCreator: number;
         public campManager: number;
 }