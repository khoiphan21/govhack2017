import { Component, OnInit, ElementRef } from '@angular/core';
// import the D3 service, the type alias for the d3 varialbe and selection interface
import { D3Service, D3, Selection } from 'd3-ng2-service'; 

@Component({
  selector: 'app-page-data',
  templateUrl: './page-data.component.html',
  styleUrls: ['./page-data.component.scss']
})
export class PageDataComponent implements OnInit {
  private d3: D3;
  private parentNativeElement: any;

  constructor(element: ElementRef, d3Service: D3Service) { // passing d3 service into the consturctor
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 service
    this.parentNativeElement = element.nativeElement;
   }

  ngOnInit() {
    let d3 = this.d3; // for convenience use a block scope variable
    let d3ParentElement: Selection<any,any,any,any>; // Use  the selection interface

    if (this.parentNativeElement !== null){
      d3ParentElement = d3.select(''); // use the d3 select method
    }
  }

}
