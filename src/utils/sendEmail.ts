import Maingun from "mailgun-js";

const mailGunClient = new Maingun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: process.env.MAILGUN_DOMAIN || ""
});

const sendEmail = (to: string, subject: string, html: string) => {
  const emailData = {
    from: "no-reply@min.com",
    to,
    subject,
    html
  };
  return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (
  email: string,
  fullName: string,
  key: string
) => {
  const emailSubject = `Hello! ${fullName}, please verify your email`;
  const emailBody = `Verify your email by clicking <a href="http://number.com/verification/${key}/">here</a>`;
  return sendEmail(email, emailSubject, emailBody);
};
