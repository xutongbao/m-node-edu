const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const NODE_ENV = process.env.NODE_ENV || 'development'
    let tempPath = ''
    if (NODE_ENV === 'development') {
      tempPath = '/temp/uploadForDev/upload'
    } else if (NODE_ENV === 'production') {
      tempPath = '/temp/uploadForProd/upload'
    } else if (NODE_ENV === 'codesandbox') {
      tempPath = 'uploadForCodesandbox/upload'
    }
    cb(null, tempPath)
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const uploadImgMulter = multer({ storage })

const uploadImg = (req, res) => {
  res.send({
    state: 1,
    data: { ...req.file, filename: 'upload/' + req.file.filename },
    message: '上传成功'
  })
}

module.exports = {
  uploadImgMulter,
  uploadImg
}
