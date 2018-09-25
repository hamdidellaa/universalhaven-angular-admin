import { FundraisingEvent } from './../models/fundraisingEvent';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /*transform(events: any, term: any): any {
    if(term === undefined)return events;
      return events.filter(function(event){
      return event.title.toLowerCase().includes(term.toLowerCase());

    })
  }*/
  transform(items: FundraisingEvent[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.title.toLowerCase().includes(searchText);
    });
   }

}
