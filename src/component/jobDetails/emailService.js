import emailjs from 'emailjs-com';

const EMAILJS_USER_ID = '0b14yTqYGVMJiX1rU';
const EMAILJS_SERVICE_ID = 'your_emailjs_service_id';
const EMAILJS_TEMPLATE_ID = 'your_emailjs_template_id';

export const sendEmail = async (recipient, subject, message) => {
  const emailParams = {
    to_email: recipient,
    subject,
    message,
  };

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailParams, EMAILJS_USER_ID);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
