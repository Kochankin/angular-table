import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewChecked {
  @ViewChild('tableWrapper') tableWrapper:ElementRef;
  @ViewChild('thead') thead:ElementRef;
  @ViewChild('tbody') tbody:ElementRef;
  constructor(private renderer: Renderer2) { }
  private ths;
  private trs;
  private viewSet = false;
  ngOnInit() {}

  ngAfterViewChecked(){
    if (!this.viewSet && this.tableWrapper && this.thead && this.tbody){
      this.ths = this.thead.nativeElement.querySelectorAll('th');
      this.trs = this.tableWrapper.nativeElement.querySelectorAll('tr');
      this.setColumnsWidth();
      this.viewSet = true;
    }
  }

  setColumnsWidth(){
    Array.prototype.forEach.call(this.trs[1].children, (td, i) => {
      setTimeout(() => 
        this.renderer.setStyle(this.ths[i], 'width', `${td.getBoundingClientRect().width}px`), 0);
    });
  }

  onResize(e){
    this.setColumnsWidth();
  }

  onScroll(e){
    const width = e.target.getBoundingClientRect().width + e.target.scrollLeft;
    this.renderer.setStyle(this.thead.nativeElement, 'width', `${width}px`);
    this.renderer.setStyle(this.tbody.nativeElement, 'width', `${width}px`);
  }

}


