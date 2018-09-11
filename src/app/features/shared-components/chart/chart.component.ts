import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as _ from 'lodash';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  Highcharts = Highcharts;
  @Input()
  private options: Object = {};
  private defaultOpts: Object = {
    credits: false,
    chart: {
      backgroundColor: 'transparent'
    }
  };
  private _options: Object;

  constructor() {
  }

  ngOnInit() {
    this._options = _.merge(this.options, this.defaultOpts);
  }

}
