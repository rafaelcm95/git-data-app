import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  searchOnGithubOpts: SearchOptions = new SearchOptions({
    title: 'Search on Github',
    isDisabled: false
  });

  searchOnBitbucketOpts: SearchOptions = new SearchOptions({
    title: 'Search on BitBucket',
    isDisabled: true
  });

  sampleChartOptions = {
    chart: {
      type: 'pie'
    },

    title: {
      text: 'Favorite languages'
    },

    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },

    series: [{
        name: 'Percentage of projects with:',
        colorByPoint: true,
        data: [{
            name: 'Typescript',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Go',
            y: 11.84
        }, {
            name: 'Coffeescript',
            y: 10.85
        }]
    }]
  };

  constructor() {}

  ngOnInit() {
  }

}

export class SearchOptions {
  public title;
  public isDisabled;

  constructor({title, isDisabled}) {
    this.title = title;
    this.isDisabled = isDisabled;
  }
}
