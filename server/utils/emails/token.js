function Token(req, token) {
  console.log('this is the req', req);
  const { firstName } = req;
  console.log(firstName);
  const loginTime = new Date().toLocaleString();
  // const ipAddress = req.ip || req.connection.remoteAddress;
  // const userAgent = req.headers['user-agent'];

  // Get device type from user agent
  // const deviceType = this.getDeviceType(userAgent);
  // const browser = this.getBrowser(userAgent);
  // const os = this.getOS(userAgent);
  return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: #f9f9f9;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
          }
          .content {
            padding: 30px;
            background: white;
          }
          .info-box {
            background: #f0f4f8;
            border-left: 4px solid #667eea;
            padding: 15px;
            margin: 20px 0;
            border-radius: 5px;
          }
          .detail-item {
            margin: 10px 0;
            padding: 8px;
            border-bottom: 1px solid #e0e0e0;
          }
          .detail-label {
            font-weight: bold;
            color: #667eea;
            display: inline-block;
            width: 120px;
          }
          .warning {
            background: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 15px;
            margin: 20px 0;
            border-radius: 5px;
          }
          .button {
            display: inline-block;
            padding: 12px 24px;
            background: #667eea;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
          }
          .footer {
            background: #f4f4f4;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📚 Library Management System</h1>
            <p>New Login Alert</p>
          </div>
          
          <div class="content">
            <h2>Hello ${firstName}!</h2>
            <p>We notice you forgot your password, use this token reset your password:</p>
            <h1>${token}</h1>
            
   
            
            <div class="warning">
              <strong>⚠️ Wasn't you?</strong>
              <p>If you didn't perform this login, please secure your account immediately:</p>
              <ul>
                <li>Change your password</li>
                <li>Contact library support</li>
                <li>Review your recent activity</li>
              </ul>
            </div>
            
            <div class="info-box">
              <strong>📖 Account Summary</strong><br>
              <span>Member since: ${new Date().toLocaleDateString()}</span><br>
              <span>Account status: Active</span><br>
              <span>Library ID: </span>
            </div>
            
            <a href="${process.env.APP_URL || 'LibRoom'}/account" class="button">View Account Activity</a>
          </div>
          
          <div class="footer">
            <p>This is an automated security notification from Library Management System.</p>
            <p>If you have any questions, please contact our support team.</p>
            <p>&copy; ${new Date().getFullYear()} Library Management System. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
}

module.exports = Token;
