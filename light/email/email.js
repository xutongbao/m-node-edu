const { getTransporter } = require('../../utils/tools')
const nodemailer = require('nodemailer')

const customSend = async  (req, res) => {
  const transporter = getTransporter()
  let result = await transporter.sendMail({
    ...req.body
  })

  console.log('Message sent: %s', result.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(result))
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  res.send({
    state: 1,
    data: {
      ...req.body
    },
    message: '发送成功',
  })
}


module.exports = {
  emailCustomSend: customSend,
}