import React, { Component } from "react";
import ReactApexChart from 'react-apexcharts';
class ApexChart extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
		series: [{
			name: "Xm",
			data: props.props[0]
		  },{
			name: "Xl",
			data: props.props[1]
		  },{
			name: "Xr",
			data: props.props[2]
		  },
		],
		options: {
		  chart: {
			height: 350,
			type: 'line',
			zoom: {
			  enabled: false
			},
		  },
		  dataLabels: {
			enabled: false
		  },
		  stroke: {
			width: [5, 7, 5],
			curve: 'straight',
			dashArray: [0, 8, 5]
		  },
		  title: {
			text: 'Page Statistics',
			align: 'left'
		  },
		  legend: {
			tooltipHoverFormatter: function(val, opts) {
			  return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
			}
		  },
		  markers: {
			size: 0,
			hover: {
			  sizeOffset: 6
			}
		  },
		  xaxis: {
			categories: props.props[3],
		  },
		  tooltip: {
			y: [
			  {
				title: {
				  formatter: function (val) {
					return val + " (mins)"
				  }
				}
			  },
			  {
				title: {
				  formatter: function (val) {
					return val + " per session"
				  }
				}
			  },
			  {
				title: {
				  formatter: function (val) {
					return val;
				  }
				}
			  }
			]
		  },
		  grid: {
			borderColor: '#f1f1f1',
		  }
		},
	  
	  
	  };
	}

  

	render() {
	  return (
		

  <div id="chart" style={{margin:"0 25vw 10vw 25vw"}}>
<ReactApexChart options={this.state.options} series={this.state.series}  type="line" height={350} width={750}/>
</div>


	  );
	}
  }

 export default ApexChart;