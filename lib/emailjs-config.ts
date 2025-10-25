import emailjs from "@emailjs/browser"

// Initialize EmailJS with public key
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

if (publicKey) {
  emailjs.init(publicKey)
}

export default emailjs
