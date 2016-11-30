var G2 = require('g2')

var data = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
];

var chart = new G2.Chart({
    id: 'c1', // 指定图表容器 ID
    width: 800, // 指定图表宽度
    height: 400 // 指定图表高度
});

chart.source(data, {
    genre: {
        alias: '游戏种类' // 列定义，定义该属性显示的别名
    },
    sold: {
        alias: '销售量'
    }
});

chart.interval().position('genre*sold').color('genre')

chart.render();