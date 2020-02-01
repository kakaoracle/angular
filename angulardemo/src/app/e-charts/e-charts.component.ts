import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eCharts',
  templateUrl: './e-charts.component.html',
  styleUrls: ['./e-charts.component.scss']
})
export class EChartsComponent implements OnInit {


  public option:{};
  constructor() { }





  ngOnInit() {
    this.option = {
      tooltip: {
        trigger: '2tem',
        formatter: '{a|这段文本采用样式a}',
      },
      legend: {
        orient: 'vertical',
        left: '60%',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            formatter: [
              '{a|样式a}',
              '{b|样式b}'
            ],
            rich: {
              a:{
                color: 'red',
                lineHeight: 10
              },
              b: {
                height: 40
              },
            },
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {value: 335, name: '直接访问'},
            {value: 310, name: '邮件营销'},
            {value: 234, name: '联盟广告'},
            {value: 135, name: '视频广告'},
            {value: 1548, name: '搜索引擎'}
          ]
        }
      ]
    };


  }



}
