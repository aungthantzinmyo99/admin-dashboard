$('.counter-up').counterUp({
    delay: 10,
    time: 1000
});
let dateArr = ['jul 21','jul 20','jul 19','jul 18','jul 17','jul 16','jul 15','jul 14','jul 13','jul 12','jul 11'];
let orderCountArr = [7, 5, 6, 4, 6, 4,8,6,8,9,6];
let viewerCountArr = [13,12,15,14,20,17,19,16,23,33,16];


let ctx = document.getElementById('ov').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [
            {
            label: 'Order Count',
            data:orderCountArr,
            backgroundColor: [
                '#007bff60',
            ],
            borderColor: [
                '#007bff60',
            ],
            borderWidth: 1,
            tension:0
        },
        {
            label: 'Viewer Count',
            data:viewerCountArr,
            backgroundColor: [
                '#28a74560',
            ],
            borderColor: [
                '#28a74560',
            ],
            borderWidth: 1,
            tension:0
        },
    ]
    },
    options: {
        scales: {
            yAxes: [{
                display:false,
                gridLines:{
                    display:false
                }
             }],

            xAxes: [{
               display:false,
               gridLines:{
                   display:false
               },
            }]
        },
        legend: {
            display: true,
          position: 'top',
            labels: {
                fontColor: '#333',
                usePointStyle: true,
            }
        }
    }
    
});

let orderFromPlaces=[6,10,4,7,9,15];
let Place=["YGN","MDY","SHAN","MGY","NPT"]


let order = document.getElementById('op').getContext('2d');
let myOrder = new Chart(order, {
    type: 'doughnut',
    data: {
        labels: Place,
        datasets: [{
            label: '# of Votes',
            data:orderFromPlaces,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                display:false,
                gridLines:{
                    display:false
                }
             }],

            xAxes: [{
               display:false,
               gridLines:{
                   display:false
               },
            }]
        },
        legend: {
            display: true,
          position: 'bottom',
            labels: {
                fontColor: '#333',
                usePointStyle: true,
            }
        }
    }
});
 