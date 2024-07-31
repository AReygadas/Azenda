const Resend = require('resend')
 
class MailServices {
    
    constructor(){}
    
    async Send(){
         const resend = new Resend('re_123456789');
         await resend.emails.send({
             from: 'a.reygadas.g@gmail.com',
             to: 'info@azenda.mx',
             subject: 'hello world',
             text: 'it works!',
           });
        return null
    }    
}

module.exports = MailServices;