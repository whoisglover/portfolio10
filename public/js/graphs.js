$(function () {
    var chart;


    $(document).ready(function () {
     var ajaxRequest = $.ajax({
      type: 'GET',
      url: '/crimes/categories'
  })

     ajaxRequest.done(function(data){
        categories = JSON.parse(data)
        var array = []
        for(var key in categories){
          var small = [key, categories[key]]
          array.push(small)
      }
      // debugger

      $('#graph1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor:'rgba(255, 255, 255, 0.1)'
        },
        title: {
            text: 'Types of Crimes, April-July 2014'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: array
        }]
    });
  })

});

});