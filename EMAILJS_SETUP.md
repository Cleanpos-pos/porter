# EmailJS Setup Guide for Porterhouse Contact Form

## 📧 What is EmailJS?
EmailJS allows you to send emails directly from your website without a backend server. It's perfect for contact forms!

## 🚀 Setup Instructions (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's FREE - 200 emails/month)
3. Sign up with your email or Google account

### Step 2: Add Email Service
1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended if you have a Gmail account)
   - **Outlook/Hotmail**
   - Or any other provider
4. Connect your email account (you'll need to authorize EmailJS)
5. **Copy the Service ID** (looks like: `service_abc1234`)

### Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the Porterhouse website contact form.
```

4. In the template settings:
   - **To Email**: winchester@porterhouserestaurant.co.uk
   - **From Name**: Porterhouse Website
   - **Reply To**: {{from_email}}
5. **Save** and **copy the Template ID** (looks like: `template_xyz5678`)

### Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (looks like: `aBcDeFgHiJkLmNoPqR`)
3. Copy it

### Step 5: Update Your Code
Open `components/Contact.tsx` and replace these lines (around line 20-22):

```typescript
const serviceId = 'YOUR_SERVICE_ID';  // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';   // Replace with your Public Key
```

With your actual values:

```typescript
const serviceId = 'service_abc1234';  // Your actual Service ID
const templateId = 'template_xyz5678'; // Your actual Template ID
const publicKey = 'aBcDeFgHiJkLmNoPqR';   // Your actual Public Key
```

### Step 6: Test It!
1. Go to your website: http://localhost:3000
2. Scroll to the Contact section
3. Fill out the form and submit
4. Check your email at winchester@porterhouserestaurant.co.uk

## ✅ Done!
Your contact form will now send real emails to winchester@porterhouserestaurant.co.uk

## 🔧 Troubleshooting

### Emails not sending?
- Check browser console for errors (F12)
- Verify all three IDs are correct
- Make sure your EmailJS service is connected
- Check EmailJS dashboard for error logs

### Want to change the recipient email?
Edit line 28 in `Contact.tsx`:
```typescript
to_email: 'newemail@example.com',
```

### Free tier limits
- 200 emails/month on free plan
- Upgrade to paid plan if you need more

## 📝 Notes
- Emails are sent from your connected email service
- Replies will go to the customer's email (from_email)
- All submissions are logged in EmailJS dashboard
- No backend server needed!

---

Need help? Check EmailJS documentation: https://www.emailjs.com/docs/
