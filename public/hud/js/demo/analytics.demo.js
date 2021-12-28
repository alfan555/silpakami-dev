function newDate(days){return moment().add(days,'d').format('D MMM');}
function newDateString(days){return moment().add(days,'d').format();}
Chart.defaults.font.family=FONT_FAMILY;Chart.defaults.font.size=10;Chart.defaults.color=hexToRgba(COLOR_WHITE,.5);Chart.defaults.plugins.legend.display=false;Chart.defaults.plugins.tooltip.padding=8;Chart.defaults.plugins.tooltip.backgroundColor=hexToRgba(COLOR_GRAY_800,.95);Chart.defaults.plugins.tooltip.titleFont.family=FONT_FAMILY;Chart.defaults.plugins.tooltip.titleFont.weight=600;Chart.defaults.plugins.tooltip.footerFont.family=FONT_FAMILY;Chart.defaults.scale.grid.color=hexToRgba(COLOR_WHITE,.25);Chart.defaults.scale.ticks.backdropColor=hexToRgba(COLOR_WHITE,0);Chart.defaults.scale.beginAtZero=true;var options={maintainAspectRatio:false,elements:{line:{tension:0.000001}},legend:{display:false},tooltips:{mode:'nearest',callbacks:{label:function(tooltipItem,data){var label=data.datasets[tooltipItem.datasetIndex].label||'';if(label){label+=': ';}
label+=Math.round(tooltipItem.yLabel*100)/100;label='$'+label;return label;},labelColor:function(tooltipItem,chart){console.log(tooltipItem.datasetIndex);console.log(chart);return{borderColor:hexToRgba(COLOR_WHITE,.75),backgroundColor:chart.data.datasets[tooltipItem.datasetIndex].color};},labelTextColor:function(tooltipItem,chart){return COLOR_WHITE;}}}};var chart1,chart2,chart3,chart4,chart5;var handleRenderChart=function(){options.scales={yAxes:[{ticks:{beginAtZero:true,min:0,max:750,stepSize:250}}]};var ctx=document.getElementById('chart1').getContext('2d');chart1=new Chart(ctx,{type:'line',data:{labels:['','4am','8am','12pm','4pm','8pm',newDate(1)],datasets:[{color:COLOR_THEME,backgroundColor:'transparent',borderColor:COLOR_THEME,borderWidth:2,pointBackgroundColor:COLOR_GRAY_900,pointBorderWidth:2,pointRadius:4,pointHoverBackgroundColor:COLOR_GRAY_900,pointHoverBorderColor:COLOR_THEME,pointHoverRadius:6,pointHoverBorderWidth:2,data:[0,0,0,601.5,220]},{color:COLOR_GRAY_300,backgroundColor:hexToRgba(COLOR_GRAY_300,.2),borderColor:COLOR_GRAY_300,borderWidth:2,pointBackgroundColor:COLOR_GRAY_900,pointBorderWidth:2,pointRadius:4,pointHoverBackgroundColor:COLOR_GRAY_900,pointHoverBorderColor:COLOR_GRAY_300,pointHoverRadius:6,pointHoverBorderWidth:2,data:[0,0,0,500,120,0,0,0]}]},options});options.scales={yAxes:[{ticks:{beginAtZero:true,min:0,max:150,stepSize:50}}]};var ctx2=document.getElementById('chart2').getContext('2d');chart2=new Chart(ctx2,{type:'line',data:{labels:['','4am','8am','12pm','4pm','8pm',newDate(1)],datasets:[{color:COLOR_THEME,backgroundColor:'transparent',borderColor:COLOR_THEME,borderWidth:2,pointBackgroundColor:COLOR_GRAY_900,pointBorderWidth:2,pointRadius:4,pointHoverBackgroundColor:COLOR_GRAY_900,pointHoverBorderColor:COLOR_THEME,pointHoverRadius:6,pointHoverBorderWidth:2,data:[0,20,50,100,120]},{color:COLOR_GRAY_300,backgroundColor:hexToRgba(COLOR_GRAY_300,.2),borderColor:COLOR_GRAY_300,borderWidth:2,pointBackgroundColor:COLOR_GRAY_900,pointBorderWidth:2,pointRadius:4,pointHoverBackgroundColor:COLOR_GRAY_900,pointHoverBorderColor:COLOR_GRAY_300,pointHoverRadius:6,pointHoverBorderWidth:2,data:[0,30,44,130,34,15,43,22]}]},options});options.scales={yAxes:[{ticks:{beginAtZero:true,min:0,max:30,stepSize:10}}]};var ctx3=document.getElementById('chart3').getContext('2d');chart3=new Chart(ctx3,{type:'line',data:{labels:['','4am','8am','12pm','4pm','8pm',newDate(1)],datasets:[{color:COLOR_INDIGO,backgroundColor:'transparent',borderColor:COLOR_INDIGO,borderWidth:2,pointBackgroundColor:COLOR_GRAY_900,pointBorderWidth:2,pointRadius:4,pointHoverBackgroundColor:COLOR_GRAY_900,pointHoverBorderColor:COLOR_INDIGO,pointHoverRadius:6,pointHoverBorderWidth:2,data:[0,0,5,18,9]},{color:COLOR_THEME,backgroundColor:hexToRgba(COLOR_THEME,.2),borderColor:COLOR_THEME,borderWidth:2,pointBackgroundColor:COLOR_GRAY_900,pointBorderWidth:2,pointRadius:4,pointHoverBackgroundColor:COLOR_GRAY_900,pointHoverBorderColor:COLOR_THEME,pointHoverRadius:6,pointHoverBorderWidth:2,data:[0,0,10,26,13]}]},options});options.scales={yAxes:[{ticks:{beginAtZero:true,min:0,max:60,stepSize:20}}]};var ctx4=document.getElementById('chart4').getContext('2d');chart4=new Chart(ctx4,{type:'line',data:{labels:['','4am','8am','12pm','4pm','8pm',newDate(1)],datasets:[{color:COLOR_THEME,backgroundColor:'transparent',borderColor:COLOR_THEME,borderWidth:2,pointBackgroundColor:COLOR_GRAY_900,pointBorderWidth:2,pointRadius:4,pointHoverBackgroundColor:COLOR_GRAY_900,pointHoverBorderColor:COLOR_THEME,pointHoverRadius:6,pointHoverBorderWidth:2,data:[0,0,0,24,39]},{color:COLOR_GRAY_300,backgroundColor:hexToRgba(COLOR_GRAY_300,.2),borderColor:COLOR_GRAY_300,borderWidth:2,pointBackgroundColor:COLOR_GRAY_900,pointBorderWidth:2,pointRadius:4,pointHoverBackgroundColor:COLOR_GRAY_900,pointHoverBorderColor:COLOR_GRAY_300,pointHoverRadius:6,pointHoverBorderWidth:2,data:[0,0,0,28,35,23,0,0]}]},options});options.scales={yAxes:[{ticks:{beginAtZero:true,min:0,max:15,stepSize:5}}]};var ctx5=document.getElementById('chart5').getContext('2d');chart5=new Chart(ctx5,{type:'line',data:{labels:['','4am','8am','12pm','4pm','8pm',newDate(1)],datasets:[{color:COLOR_THEME,backgroundColor:'transparent',borderColor:COLOR_THEME,borderWidth:2,pointBackgroundColor:COLOR_GRAY_900,pointBorderWidth:2,pointRadius:4,pointHoverBackgroundColor:COLOR_GRAY_900,pointHoverBorderColor:COLOR_THEME,pointHoverRadius:6,pointHoverBorderWidth:2,data:[0,0,0,12,5]},{color:COLOR_GRAY_300,backgroundColor:hexToRgba(COLOR_GRAY_300,.2),borderColor:COLOR_GRAY_300,borderWidth:2,pointBackgroundColor:COLOR_GRAY_900,pointBorderWidth:2,pointRadius:4,pointHoverBackgroundColor:COLOR_GRAY_900,pointHoverBorderColor:COLOR_GRAY_300,pointHoverRadius:6,pointHoverBorderWidth:2,data:[0,0,0,10,4,2,0,0]}]},options});}
var handleDaterangepicker=function(){$('[data-id="prev-date"]').html(moment().add(-1,'d').format('D MMM YYYY'));$('[data-id="today-date"]').html(moment().format('D MMM YYYY'));$('#daterangepicker').daterangepicker({opens:'right',format:'MM/DD/YYYY',separator:' to ',startDate:moment(),endDate:moment(),maxDate:moment()});};$(document).ready(function(){handleRenderChart();handleDaterangepicker();$(document).on('theme-reload',function(){chart1.destroy();chart2.destroy();chart3.destroy();chart4.destroy();chart5.destroy();handleRenderChart();});});