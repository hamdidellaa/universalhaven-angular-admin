export class Resource{
 id: number;   
 name: string;
 quantity: number;
 type: string;
 unit: string;
 campId: number;

    constructor (
        id: number,   
        name: string,
        quantity: number,
        type: string,
        unit: string,
) 
        {
            this.id = id ; 
            this.name = name ; 
            this.quantity = quantity ; 
            this.unit = unit ; 
            this.type = type;
        }

}