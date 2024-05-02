window.onload = (e)=>{
    var ctx1 = document.getElementById("front_chart");
    new Chart(ctx1, {
        type: 'radar',
        data: {
            labels: ['HTML/CSS', 'TailwindCSS', 'JavaScript', 'jQuery', 'Vue.js', 'Nuxt.js', 'React.js'],
            datasets: [{
                label: 'Front-end',
                data: [4, 4, 3, 3, 1, 1, 1],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)',
                borderWidth:1
            }],
        },
        //オプションの設定
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: 'black'
                    }
                }
            },
            scales: {
                r: {
                    //グラフの最小値・最大値
                    min: 0,
                    max: 5,
                    //背景色
                    backgroundColor: 'rgb(243 244 246)',
                    //グリッドライン
                    grid: {
                        color: 'rgb(209 213 219)',
                    },
                    //アングルライン
                    angleLines: {
                        color: 'rgb(209 213 219)',
                    },
                    //各項目のラベル
                    pointLabels: {
                        color: 'black',
                    },
                },
            },
        }, 
    });

    var ctx2 = document.getElementById("back_chart");
    new Chart(ctx2, {
        type: 'radar',
        data: {
            labels: ['laravel', 'PHP', 'MySQL', 'NginX', 'AWS'],
            datasets: [{
                label: 'Back-end',
                data: [4, 3, 3, 2, 2],
                backgroundColor: 'rgba(14, 165, 233, 0.2)',
                borderColor: 'rgb(14, 165, 233)',
                pointBackgroundColor: 'rgb(14, 165, 233)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(14, 165, 233)',
                borderWidth:1
            }],
        },
        //オプションの設定
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: 'black'
                    }
                }
            },
            scales: {
                r: {
                    //グラフの最小値・最大値
                    min: 0,
                    max: 5,
                    //背景色
                    backgroundColor: 'rgb(243 244 246)',
                    //グリッドライン
                    grid: {
                        color: 'rgb(209 213 219)',
                    },
                    //アングルライン
                    angleLines: {
                        color: 'rgb(209 213 219)',
                    },
                    //各項目のラベル
                    pointLabels: {
                        color: 'black',
                    },
                },
            },
        }, 
    });

    var ctx3 = document.getElementById("other_chart");
    new Chart(ctx3, {
        type: 'radar',
        data: {
            labels: ['Docker', 'Slack', 'Git/GitHub', 'Jira', 'Vercel'],
            datasets: [{
                label: 'Other',
                data: [2, 4, 4, 3, 1],
                backgroundColor: 'rgba(234, 179, 8, 0.2)',
                borderColor: 'rgb(234, 179, 8)',
                pointBackgroundColor: 'rgb(234, 179, 8)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(234, 179, 8)',
                borderWidth:1
            }],
        },
        //オプションの設定
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: 'black'
                    }
                }
            },
            scales: {
                r: {
                    //グラフの最小値・最大値
                    min: 0,
                    max: 5,
                    //背景色
                    backgroundColor: 'rgb(243 244 246)',
                    //グリッドライン
                    grid: {
                        color: 'rgb(209 213 219)',
                    },
                    //アングルライン
                    angleLines: {
                        color: 'rgb(209 213 219)',
                    },
                    //各項目のラベル
                    pointLabels: {
                        color: 'black',
                    },
                },
            },
        }, 
    });
}