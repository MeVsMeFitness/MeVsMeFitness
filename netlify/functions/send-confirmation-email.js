const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);


// Modular HTML email template
const emailHtml = `
<div style="max-width:600px;margin:0 auto;background:#fff;box-shadow:0 0 20px rgba(0,0,0,0.1);font-family:Arial,sans-serif;">
  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;padding:40px 20px;text-align:center;">
    <h1 style="margin:0;font-size:28px;font-weight:bold;">🔥 ME Vs ME FITNESS 🔥</h1>
    <p>Your Journey to a Stronger You Starts Here!</p>
  </div>
  <div style="width:100%;height:200px;background:linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;color:#fff;font-size:24px;font-weight:bold;text-align:center;">
    Welcome to the Community!
  </div>
  <div style="padding:40px 30px;">
    <h2 style="color:#333;margin-bottom:20px;">Thanks for Joining Our Waitlist! 💪</h2>
    <p style="font-size:16px;color:#666;margin-bottom:25px;">
      You've just taken the first step towards transforming your fitness journey. 
      We're excited to have you on board and can't wait to help you become the best version of yourself!
    </p>
    <div style="background:#f8f9fa;border-left:5px solid #667eea;padding:20px;margin:30px 0;font-style:italic;font-size:18px;color:#333;">
      "The only bad workout is the one that didn't happen. Every step forward is a victory against yesterday's you."
      <br><strong>— ME Vs ME Fitness</strong>
    </div>
    <h3 style="color:#333;text-align:center;margin:40px 0 30px;">What's Coming Your Way:</h3>
    <div style="display:table;width:100%;margin:30px 0;">
      <div style="display:table-cell;width:33.33%;text-align:center;padding:20px 10px;vertical-align:top;">
        <div style="width:60px;height:60px;background:#667eea;border-radius:50%;margin:0 auto 15px;display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;">🏋️</div>
        <h4 style="margin:0 0 10px;color:#333;">Personalized Workouts</h4>
        <p style="font-size:14px;color:#666;margin:0;">Tailored fitness plans just for you</p>
      </div>
      <div style="display:table-cell;width:33.33%;text-align:center;padding:20px 10px;vertical-align:top;">
        <div style="width:60px;height:60px;background:#667eea;border-radius:50%;margin:0 auto 15px;display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;">📊</div>
        <h4 style="margin:0 0 10px;color:#333;">Progress Tracking</h4>
        <p style="font-size:14px;color:#666;margin:0;">Monitor your fitness journey</p>
      </div>
      <div style="display:table-cell;width:33.33%;text-align:center;padding:20px 10px;vertical-align:top;">
        <div style="width:60px;height:60px;background:#667eea;border-radius:50%;margin:0 auto 15px;display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;">🎯</div>
        <h4 style="margin:0 0 10px;color:#333;">Goal Achievement</h4>
        <p style="font-size:14px;color:#666;margin:0;">Reach your fitness targets</p>
      </div>
    </div>
    <div style="text-align:center;margin:40px 0;">
      <p style="font-size:16px;color:#333;margin-bottom:20px;">
        <strong>Get ready to crush your fitness goals!</strong><br>
        We'll notify you as soon as ME Vs ME Fitness launches.
      </p>
      <a href="https://mevsmefitness.com" style="display:inline-block;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;padding:15px 30px;text-decoration:none;border-radius:25px;font-weight:bold;margin:20px 0;text-align:center;">Visit Our Website</a>
    </div>
    <div style="text-align:center;padding:20px;background:#f1f3f4;border-radius:10px;margin:30px 0;">
      <p style="font-size:18px;color:#333;margin:0;font-weight:500;">
        "Success isn't just about what you accomplish in your life,<br>
        it's about what you inspire others to do."
      </p>
    </div>
  </div>
  <div style="background:#333;color:#fff;padding:30px;text-align:center;font-size:14px;">
    <h3 style="margin:0 0 15px;">Stay Connected</h3>
    <div style="margin:20px 0;">
      <a href="#" style="color:#fff;text-decoration:none;margin:0 10px;font-size:18px;">📱 Instagram</a>
      <a href="#" style="color:#fff;text-decoration:none;margin:0 10px;font-size:18px;">📘 Facebook</a>
      <a href="#" style="color:#fff;text-decoration:none;margin:0 10px;font-size:18px;">🐦 Twitter</a>
    </div>
    <p style="margin:20px 0 0;">
      ME Vs ME Fitness<br>
      Building stronger bodies, stronger minds.<br>
      <small>If you didn't sign up for this, please ignore this email.</small>
    </p>
  </div>
</div>
`;

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const email = body.event.data.new.email;

    const { data, error } = await resend.emails.send({
      from: 'non-reply@mevsmefitness.com',
      to: email,
      subject: 'Thanks for signing up!',
      html: emailHtml,
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
