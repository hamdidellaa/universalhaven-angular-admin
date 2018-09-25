import { Component, OnInit,ViewChild } from '@angular/core';
import { RefugeesService } from '../services/refugees.service';
import { Refugee } from '../../models/Refugee';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import swal from 'sweetalert2'
@Component({
  selector: 'app-refugee',
  templateUrl: './refugee.component.html',
  styleUrls: ['./refugee.component.css']
})
export class RefugeeComponent implements OnInit {
  testchaine : boolean = false;
  refugees : any[];
  onerefugees : any[];
  refugee = new Refugee();
  saleh :string
  rows =[]
  columns =[]
  temp = [];
  selected = [];
  constructor(private service:RefugeesService) {
    this.refugees = [];
    this.onerefugees = [];
    
   }
   
   @ViewChild(DatatableComponent) table: DatatableComponent;
  ngOnInit() {
    this.gellrefug();
   
  }
  gellrefug(){
    this.service.getAllrefugees().subscribe(result => {this.refugees=result;this.rows=result;this.temp = result;
      console.log(this.temp);
    });
  }
  viewrefugee(refid : number){
    this.testchaine =true
    this.refugee.id=refid;
    this.service.findrefugeebyid(this.refugee.id).subscribe(result => {this.refugee=result
      console.log(this.refugee);
    });
  }
  checkout(refid){
    console.log(refid);
    swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover Refugee!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.service.checkoutrefugee(refid).subscribe(res => {
      this.gellrefug()
          swal(
            'Deleted!',
            'Refugee file has been Checkout.',
            'success'
          )
        });
      } else if (result.dismiss === 'cancel') {
        swal(
          'Cancelled',
          'Refugee is safe :)',
          'error'
        )
      }
    })
    
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  onActivate(event) {
    console.log('Activate Event', event);
  }

  add() {
    this.selected.push(this.rows[1], this.rows[3]);
  }

  update() {
    this.selected = [ this.rows[1], this.rows[3] ];
  }

  remove() {
    this.selected = [];
  }

  displayCheck(row) {
    return row.name !== 'Ethel Price';
  }
}
