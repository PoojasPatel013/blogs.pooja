"use server"

import { send } from "@emailjs/nodejs"

export async function sendIdeaEmail(formData: {
  name: string
  email: string
  topic: string
  type: string
  title: string
  description: string
  hashtags: string
}) {
  try {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    const privateKey = process.env.EMAILJS_PRIVATE_KEY
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

    if (!publicKey || !privateKey || !serviceId || !templateId) {
      return {
        success: false,
        message: "Email configuration is not set up. Please contact the site administrator.",
      }
    }

    const response = await send(
      serviceId,
      templateId,
      {
        to_email: "poojaspatel1375@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        topic: formData.topic,
        type: formData.type,
        title: formData.title,
        description: formData.description,
        hashtags: formData.hashtags,
      },
      {
        publicKey: publicKey,
        privateKey: privateKey,
      },
    )

    if (response.status === 200) {
      return {
        success: true,
        message: "Thank you for your idea! I'll review it soon.",
      }
    }

    return {
      success: false,
      message: "There was an error sending your idea. Please try again.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "There was an error sending your idea. Please try again.",
    }
  }
}
