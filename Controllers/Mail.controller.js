import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

export const sendmail = (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'khannamukesh2003@gmail.com',
            pass: process.env.PASS_KEY
        }
    });

    let details = {
        from: "khannamukesh2003@gmail.com",
        to: "mukeshkj2912@gmail.com",
        subject: "Nodemailer 3rd party Test mail",
        text:"This is nothing but a test mail from nodemailer package,kindly ignore"
    }

    transporter.sendMail(details, (err) => {
        if (err) {
            console.log(err);
            res.status(404).send("Mail not sent");
        } else {
            console.log("Mail sent successfully");
            res.status(200).send("Mail sent successfully");
        }
    });
}