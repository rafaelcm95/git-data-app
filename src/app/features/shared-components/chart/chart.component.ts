import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input()
  private options: Object = {};
  private defaultOpts: Object = {};
  private _options: Object;

  constructor() {
    this._options = Object.assign(this.defaultOpts, this.options);
  }

  ngOnInit() {
  }

}
