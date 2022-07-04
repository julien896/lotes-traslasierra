/* eslint-disable */
export default function (req, res) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'traslasierra.lotes.info@gmail.com',
          pass: 'pfceqolqohbdldmn',
        },
        secure: true,
      })

      const mailData = {
        from: 'traslasierra.lotes.info@gmail.com',
        /* to: 'coronadohotel.recepcion@gmail.com', */
        to: 'julicogui@gmail.com',
        subject: `Mensaje de ${req.body.name}`,
        text: req.body.message + " | Enviado por: " + req.body.email,
        html: `<div>${req.body.message}</div>
        <p>Desde el correo: ${req.body.email}</p>
        <p>Telefono: ${req.body.phone}</p>`
      }
      transporter.sendMail(mailData, (err, info) => {
        if(err)
          console.log(err)
        else
          console.log(info)
      })

    res.send(200)
  }