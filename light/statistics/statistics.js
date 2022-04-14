const Mock = require('mockjs')

const initValue = (count = 20) => {
  let chartData = {
    xAxisData: [],
    seriesData: {
      index1: [],
      index2: [],
      index3: [],
      index4: [],
      index5: []
    }
  }  
  let timeStart = Date.now()
  let index1Start = 100
  for (let i = 0; i < count; i++) {
    //这些值在mock的批量数据中是随机的
    const temp = Mock.mock({
      xAxisData: timeStart + 3600 * 24 * 1000 * i,
      index1: () => 100 + 1 * i, 
      index2: () => 200 + 2 * i, 
      index3: () => 300 + 1 * i, 
      index4: () => 400 + 2 * i, 
      index5: () => 500 + 1 * i,  
    })


    //x轴
    chartData.xAxisData.push(temp.xAxisData)
    //自营渠道
    chartData.seriesData.index1.push(temp.index1)
    //抖音渠道
    chartData.seriesData.index2.push(temp.index2)
    //自营渠道
    chartData.seriesData.index3.push(temp.index3)
    //自营渠道
    chartData.seriesData.index4.push(temp.index4)
    //自营渠道
    chartData.seriesData.index5.push(temp.index5) 
  }

  return chartData
}

//搜索
const dataSearch = (req, res) => {
  const { searchData = {} } = req.body
  const { shortTimeRange } = searchData

  let hook = {
    1: 20,
    2: 100,
    3: 400,
    4: 1000,
    5: 40
  }

  const chartData = initValue(hook[shortTimeRange])

  res.send({
    state: 1,
    data: {
      chartData,
      searchData,
    },
    message: '搜索成功',
  })
}

module.exports = {
  statisticsSearch: dataSearch,
}
