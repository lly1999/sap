var config1 = {
    type: 'doughnut',
    data:{
        datasets:[{
            data:[53,123,43,300],
            backgroundColor:['rgb(255, 159, 64)','rgb(54, 162, 235)','rgb(153, 102, 255)','rgb(201, 203, 207)'],
            label:'Dataset 1'
        }],
        labels:[
            '红烧肉',
            '蒜苗回锅',
            '鱼香肉丝',
            '其他'
        ]
    },
    options:{
        responsive:true,
        legend:{
            position:'top',
            labels:{
                fontColor:"black",
                fontSize: 13
            }
        },
        title:{
            display:true,
            text:'卖出的份数',
            fontColor:"black",
            fontSize: 18,
            
            
            
        },
        animation:{
            animateScale:true,
            animateRotate:true
        }
    }
};

var config2 = {
    type: 'radar',
    data: {
        labels: ['酸','甜','苦','辣','咸'],
        datasets: [{
            label: '红烧肉',
            backgroundColor: '#ebdcc5',
            borderColor: 'rgb(255, 159, 64)',
            pointBackgroundColor: 'rgb(255, 159, 64)',
            data: [2,4,1,5,2]
        }, {
            label: '蒜苗回锅',
            backgroundColor: '#abcdec',
            borderColor:'rgb(54, 162, 235)',
            pointBackgroundColor:'rgb(54, 162, 235)',
            data: [2,5,6,2,1]
        },{
            label: '鱼香肉丝',
            backgroundColor: 'rgb(211, 188, 238)',
            borderColor:'rgb(153, 102, 255)',
            pointBackgroundColor:'rgb(153, 102, 255)',
            data: [1,1,2,5,5]

        }]
    },
    options: {
        legend: {
            position: 'top',
            labels:{
                fontColor:"black",
                fontSize: 13
            }
        },
        title: {
            display: true,
            text: '热卖菜品的口味',
            fontColor:"black",
            fontSize: 18,
        },
        scale: {
            ticks: {
                beginAtZero: true,
                fontColor:"black"
            },
            gridLines:{
                color:"black",
            }
        }
    }

};




var data = {
    labels: ['大前天','前天','昨天'],
    datasets: [{
        backgroundColor: '#ebdcc5',
        borderColor: 'rgb(255, 159, 64)',
        data: [14,14.5,15],
        label: '红烧肉'
    }, {
        backgroundColor: '#abcdec',
        borderColor:'rgb(54, 162, 235)',
        data: [15,15.5,18],
        label: '蒜苗回锅',
    }, {
        backgroundColor: 'rgb(211, 188, 238)',
        borderColor:'rgb(153, 102, 255)',
        data: [10,12,11],
        label: '鱼香肉丝',
    }]
};

var options = {
    maintainAspectRatio: false,
    scaleFontColor: "black",
    spanGaps: false,
    legend:{
        display:true,
        labels:{
            fontColor:"black",
            fontSize: 13
        }
    },
    elements: {
        line: {
            tension: 0.000001
        }
    },
    scales: {
        yAxes: [{
            gridLines:{
                color:"black",
            },
            ticks:{
                fontColor:"black",
            },
            scaleLabel:{
            display:true,
            labelString:'价格',
            fontColor:"black",
            
            }
        }],
        XAxes:[{
            gridLines:{
                color:"black",
            },
            ticks:{
                fontColor:"black",
            },
            scaleLabel:{
            display:true,
            }
        }]
    },
    plugins: {
        filler: {
            propagate: false
        },
        'samples-filler-analyser': {
            target: 'chart-analyser'
        }
    },
    title:{
        display:true,
        text:'最热菜品过去三天的价格',
        fontColor:"black",
        fontSize: 18,
    }
};

Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 13;
var ctx = document.getElementById("chart-area_1").getContext("2d");
var ctx2 = document.getElementById("chart-area_2").getContext("2d");
var ctx3 = document.getElementById("chart-area_3").getContext("2d");
var myBarChart = new Chart(ctx, config1);
var myBarChart2 = new Chart(ctx2, config2);
var myBarChart3 = new Chart(ctx3,{type:'line',data:data,options:options});