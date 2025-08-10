const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const email = body.event.data.new.email;

    const { data, error } = await resend.emails.send({
      from: 'non-reply@mevsmefitness.com', // Your verified sender
      to: email,
      subject: 'Thanks for signing up!',
      html: '<strong>Thank you for joining the waitlist for ME Vs ME Fitness!</strong>',
    });

    if (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
