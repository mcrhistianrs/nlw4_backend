import nodemailer  from 'nodemailer';

class SendMailService{

    constructor(){
        nodemailer.createTestAccount().then(account =>{
            let transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                user: account.user, // generated ethereal user
                pass: account.pass, // generated ethereal password
                },
            });
        });
    }

    async execute(){

    }
}

export {SendMailService}