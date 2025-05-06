# 3D Model Purchase Demo

A minimal, no-backend demo application that demonstrates Stripe payment integration for digital product downloads.

## Features

- Image upload preview (client-side only, not stored)
- Stripe Checkout integration
- Automatic file download after successful payment
- No backend required
- No user authentication needed

## Setup

1. Create a Stripe account and get your test mode Payment Link:
   - Set the amount to $2.00 (or your desired amount)
   - Configure Success URL: `https://yourdomain.com/success.html?session_id={CHECKOUT_SESSION_ID}`
   - Configure Cancel URL: `https://yourdomain.com/index.html`

2. Update the Payment Link URL:
   - Open `index.html`
   - Replace `YOUR_STRIPE_PAYMENT_LINK_URL` with your actual Stripe Payment Link URL

3. Deploy the files:
   - Upload all files to your static hosting service (e.g., Netlify, Vercel, or GitHub Pages)
   - Ensure the `downloads` directory and its contents are accessible

## Testing

Use Stripe's test card for payments:
- Card number: 4242 4242 4242 4242
- Expiry: Any future date
- CVC: Any 3 digits
- ZIP: Any 5 digits

## File Structure

```
/
├── index.html          # Main page with image upload and payment
├── success.html        # Success page with download link
├── downloads/          # Directory containing downloadable files
│   └── final_output.stl # Sample 3D model file
└── README.md          # This file
```

## Security Notes

- This is a demo application running in Stripe Test Mode
- No real payments are processed
- File downloads are protected by Stripe session verification
- Consider adding additional security measures for production use

## Production Deployment

To switch to production mode:

1. Create a live mode Payment Link in your Stripe Dashboard
2. Update the Payment Link URL in `index.html`
3. Update the success and cancel URLs to your production domain
4. Deploy to your production hosting environment

## License

MIT License - Feel free to use this code for your own projects. 