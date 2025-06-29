# EmailJS Troubleshooting Guide

## Common Issues and Solutions

### 1. Check EmailJS Configuration

Make sure your EmailJS credentials are correct:

- **User ID**: `nofDJb3u1FkZQ7btt`
- **Service ID**: `surajservice11`
- **Template ID**: `template_t8n37l5`

### 2. Verify EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Check if your account is active
3. Verify your service is properly configured
4. Ensure your template exists and is active

### 3. Check Browser Console

Open browser developer tools (F12) and look for:

- EmailJS initialization errors
- Network errors
- JavaScript errors

### 4. Test EmailJS Setup

You can test your EmailJS configuration by running this in browser console:

```javascript
emailjs.init("nofDJb3u1FkZQ7btt");
emailjs
  .send(
    "surajservice11",
    "template_t8n37l5",
    {
      to_name: "Test",
      from_name: "test@example.com",
      message: "Test message",
      from_email: "test@example.com",
    },
    "nofDJb3u1FkZQ7btt"
  )
  .then((response) => console.log("SUCCESS", response))
  .catch((error) => console.log("FAILED", error));
```

### 5. Common Error Messages

- **"Invalid service ID"**: Check your EmailJS service configuration
- **"Invalid template ID"**: Verify your email template exists
- **"Invalid user ID"**: Check your EmailJS user ID
- **Network errors**: Check internet connection and CORS settings

### 6. EmailJS Template Variables

Make sure your EmailJS template uses these variables:

- `{{to_name}}`
- `{{from_name}}`
- `{{message}}`
- `{{from_email}}`

### 7. CORS Issues

If you're getting CORS errors, make sure:

- Your domain is whitelisted in EmailJS
- You're using HTTPS in production

## Quick Fixes

1. **Clear browser cache** and reload the page
2. **Check EmailJS dashboard** for any service issues
3. **Verify template variables** match your code
4. **Test with a simple message** first

## Contact Support

If issues persist, check:

- EmailJS documentation: https://www.emailjs.com/docs/
- EmailJS status page for service issues
- Your EmailJS account dashboard for configuration errors
