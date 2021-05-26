const multer = require('multer')
 
const storage = multer.diskStorage({
  destination: (req ,file, cb) => {
    cb(null, 'upload')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()} - ${file.originalname}` )
  }
})
 
const uploadImgMulter = multer({ storage })
 
const uploadImg = (req, res) => {
  res.send({
    code: 200,
    data: req.file,
    message: '上传成功'
  })
}
 
module.exports = {
  uploadImgMulter,
  uploadImg
}