
"use client";

import { useState } from "react"
import emailjs from '@emailjs/browser'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = e.target as HTMLFormElement
      await emailjs.sendForm(
        'service_ggswy4o',
        'template_w1e3dfh',
        form,
        'M6bMlsOf7w-cGjvv9'
      )

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      form.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>
            Have a question or want to work together? Send me a message!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                name="user_name"
                placeholder="Your Name"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Input
                name="user_email"
                type="email"
                placeholder="Your Email"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Input
                name="subject"
                placeholder="Subject"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                required
                className="min-h-[150px]"
                disabled={isSubmitting}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}