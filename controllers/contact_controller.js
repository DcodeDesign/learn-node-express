var mail = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

exports.sendMail = (req, res) => {
    var data = {
        Nom:req.body.nom,
        Prenom:req.body.prenom,
        Email:req.body.email,
        Msg:req.body.msg
    };


    if(data.Nom!=="" && data.Prenom!=="" && data.Email!=="" && data.Msg!==""){
        console.log("Message Can be Send!");
        var Transport = mail.createTransport(smtpTransport({
            host: "smtp.gmail.com",
            service: "Gmail",
            auth: {
               user: "...@gmail.com",
               pass: "..."
           }
       }));

        Transport.sendMail({
           from: "Message Envoyé depuis le Site" + "<" + data.Email +">", // sender address
           to: "Nom prenom <baudouxloic@gmail.com>", // comma separated list of receivers
           subject: "Test", // Subject line
           text:data.Msg,  // Plain-Text Body
           html: data.Msg // Html Body
       },
       (err, info) => {
           console.log(err)
           if(err)
               res.render("index.ejs", { page:"page/contact.ejs", title:"Contact Us", sended: false } );
           else
               res.render("index.ejs", { page:"page/contact.ejs", title:"Contact Us", sended: true } );
       });
    }
}

exports.viewContact = (req, res) => {
    res.render( "index.ejs", { page:"page/contact.ejs", title : "Contact Us"})
}
