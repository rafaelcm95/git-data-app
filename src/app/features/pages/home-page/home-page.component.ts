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
        y: 61.41
      }, {
        name: 'Go',
        y: 11.84
      }, {
        name: 'Coffeescript',
        y: 10.85
      }]
    }]
  };

  secondSampleChartOptions = {
    chart: {
      type: 'areaspline'
    },
    title: {
      text: 'Activity in last months'
    },
    subtitle: {
      text: 'See languages activity in last six months'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun'
        ]
    },
    yAxis: {
        title: {
            text: null
        }
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'Typescript',
        data: [8, 10, 7, 8, 9, 6]
    }, {
        name: 'Go',
        data: [3, 2, 5, 8, 5, 7]
    }, {
      name: 'Coffeescript',
      data: [1, 3, 2, 6, 4, 2]
    }]
  };

  constructor() { }

  ngOnInit() {
  }

}

export class SearchOptions {
  public title;
  public isDisabled;

  constructor({ title, isDisabled }) {
    this.title = title;
    this.isDisabled = isDisabled;
  }
}
