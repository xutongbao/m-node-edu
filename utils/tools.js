const Mock = require('mockjs')

const mockShop = () => {
  return Mock.mock({
    beloneCompany: '@cname 瑞尚创美',
    checkStatus: () => Mock.Random.integer(0, 1),
    supplementCheckStatus: () => Mock.Random.integer(0, 1),
    supplementBindStatus: () => Mock.Random.integer(0, 1),
    shopMoney: () => Mock.Random.integer(100, 1000),
    addTime: Date.now(),
    updateTime: undefined,
    releaseStatus: () => Mock.Random.integer(0, 1),
  })
}

const shopInitValue = () => {
  const addInitValues = {
    logo: {
      name: '1622108199953-小米书城.jpg',
      url: 'http://localhost:81/1622108199953-小米书城.jpg',
    },
    tp_auth_img: {
      name: '1622108601020-证书.pdf',
      url: 'http://localhost:81/1622108601020-证书.pdf',
    },
    location: ['河北省', '唐山市', '路北区'],
    work_day: {
      start: '周一',
      end: '周五',
    },
    course_sort: 0,
    sale_name: '张三',
    sale_attribution: '0',
    owner_mail: '1183391880@qq.com',
    owner_phone: '13642061747',
    owner_name: '徐同保',
    work_time: '07:00-22:00',
    position: '116.314007,39.948574',
    category: ['职业教育', 'IT/互联网', '电商运营'],
    detail_address: '1',
  }

  let arr = []
  for (let i = 0; i < 100; i++) {
    const temp = Mock.mock({
      name: '@cname',
    })
    arr.push({ ...addInitValues, ...temp, ...mockShop(), id: i + 1 + '' })
  }

  return arr
}

const templateInitValue = () => {
  let arr = []
  for (let i = 0; i < 100; i++) {
    const temp = Mock.mock({
      name: '@cname',
    })
    arr.push({ ...temp, id: i + 1 })
  }

  return arr
}

const mockCompany = () => {
  return Mock.mock({
    schoolName: '@cname 北京京佳教育有限公司',
    phone: '电话：4008281999 【机构】短信：13716171502 【机构】',
    checkStatus: () => Mock.Random.integer(0, 1),
    checkTime: Date.now(),
    operators: '@cname',
    releaseStatus: () => Mock.Random.integer(0, 1),
    shopCount: () => Mock.Random.integer(0, 5),
    addTime: Date.now(),
    updateTime: undefined,
  })
}

const companyInitValue = () => {
  const addInitValues = {
    industry: '0',
    platformPhone: '0101234567',
    smsPhone: '13642061747',
    logo: {
      name: '1622108199953-小米书城.jpg',
      url: 'http://localhost:81/1622108199953-小米书城.jpg',
    },
    brand: '中公',
    relatedBrand: '1',
    edu_type: '1',
    org_type: '1',
    credentialNo: '666',
    enterpriseName: '中公教育',
    org_license_time: '2012年01月01日-2032年05月02日',
    org_license: {
      name: '1622108199953-小米书城.jpg',
      url: 'http://localhost:81/1622108199953-小米书城.jpg',
    },
    companyId: '118198167621386'
  }

  let arr = []
  for (let i = 0; i < 100; i++) {
    const temp = Mock.mock({
      name: '@cname',
    })
    arr.push({ ...addInitValues, ...temp, ...mockCompany(), id: i + 1 + '' })
  }

  return arr
}

module.exports = {
  mockShop,
  shopInitValue,
  templateInitValue,
  mockCompany,
  companyInitValue,
}
