
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  isFullPage?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isFullPage = false }) => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = 'service_gb7pqtd';
      const templateId = 'template_wyex1ya';
      const publicKey = 'S8TJnWXuMsqfDaOJr';

      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        from_business: 'Porterhouse Steak Restaurant',
        subject: formState.subject,
        message: formState.message,
        to_email: 'winchester@posso.uk',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`relative ${isFullPage ? 'py-20 bg-[#0a0a0a]' : 'py-24 bg-[#0a0a0a]'} overflow-hidden`}>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-950/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">

          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-red-700 uppercase tracking-widest text-sm font-bold">Visit Us</h3>
              <h2 className="text-4xl md:text-6xl serif text-white leading-tight">Location & Hours</h2>
              <p className="text-zinc-400 max-w-md text-lg font-light leading-relaxed">
                Join us in the heart of Winchester for an unforgettable dining experience.
                Located conveniently next to the historic Theatre Royal.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-red-900 mt-1 shrink-0" size={24} />
                  <div className="space-y-2">
                    <p className="font-bold text-white uppercase text-xs tracking-widest">Address</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      24 Jewry Street, Winchester,<br />
                      Hampshire, SO23 8SB<br />
                      <span className="italic text-zinc-500">(Next to Theatre Royal)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-red-900 mt-1 shrink-0" size={24} />
                  <div className="space-y-2">
                    <p className="font-bold text-white uppercase text-xs tracking-widest">Opening Hours</p>
                    <div className="text-zinc-400 text-sm space-y-1">
                      <p>Monday – Sunday</p>
                      <p className="text-zinc-100 font-medium">12:00 PM – 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="text-red-900 mt-1 shrink-0" size={24} />
                  <div className="space-y-2">
                    <p className="font-bold text-white uppercase text-xs tracking-widest">Reservations</p>
                    <p className="text-zinc-100 font-medium text-lg">01962 810532</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-red-900 mt-1 shrink-0" size={24} />
                  <div className="space-y-2">
                    <p className="font-bold text-white uppercase text-xs tracking-widest">Enquiries</p>
                    <p className="text-zinc-400 text-sm break-all">winchester@porterhouserestaurant.co.uk</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="h-[250px] relative border border-zinc-800 bg-zinc-900 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.8847!2d-1.3138!3d51.0632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48745d0f0e0e0e0f%3A0x0!2s24%20Jewry%20St%2C%20Winchester%20SO23%208SB!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(20%) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Porterhouse Winchester Location"
              ></iframe>
            </div>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800 p-8 md:p-12 space-y-8">
            <div className="space-y-2">
              <h3 className="text-red-700 uppercase tracking-widest text-xs font-bold">Contact Form</h3>
              <h2 className="text-3xl md:text-4xl serif text-white">Send Us A Message</h2>
              <p className="text-zinc-500 text-sm font-light">Have a question or special request? We're here to help.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-zinc-900/50 border border-zinc-800 py-4 px-4 text-white focus:outline-none focus:border-red-900 transition-colors"
                    placeholder="e.g. Alexander Hamilton"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-zinc-900/50 border border-zinc-800 py-4 px-4 text-white focus:outline-none focus:border-red-900 transition-colors"
                    placeholder="e.g. alex@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Subject</label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full bg-zinc-900/50 border border-zinc-800 py-4 px-4 text-white focus:outline-none focus:border-red-900 transition-colors"
                  placeholder="Inquiry about private dining"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Message</label>
                <textarea
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-zinc-900/50 border border-zinc-800 py-4 px-4 text-white focus:outline-none focus:border-red-900 transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-red-900 hover:bg-red-800 text-white font-bold uppercase tracking-[0.2em] transition-all shadow-xl flex items-center justify-center space-x-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-900/20 border border-green-900/50 text-green-400 text-sm">
                  ✓ Message sent successfully! We'll get back to you shortly.
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-900/20 border border-red-900/50 text-red-400 text-sm">
                  ✗ Failed to send message. Please try again or email us directly at winchester@porterhouserestaurant.co.uk
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
