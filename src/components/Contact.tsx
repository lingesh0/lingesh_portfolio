'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="section-padding min-h-screen w-full flex flex-col items-center justify-center">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="heading-2 text-center gradient-primary bg-clip-text text-transparent">Contact</motion.h2>
      <div className="container flex flex-1 flex-col justify-center items-center">
        <motion.form
          name="contact"
          method="POST"
          data-netlify="true"
          className="bg-surface rounded-3xl shadow-2xl card-padding flex flex-col gap-4 mb-8 border-2 border-primary/20 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Your Name" required className="body-normal bg-surface-light text-primary p-3 rounded border border-surface focus-visible:outline-2 focus-visible:outline-primary focus:ring-2 focus:ring-primary transition" />
          <input type="email" name="email" placeholder="Your Email" required className="body-normal bg-surface-light text-primary p-3 rounded border border-surface focus-visible:outline-2 focus-visible:outline-primary focus:ring-2 focus:ring-primary transition" />
          <textarea name="message" placeholder="Your Message" required className="body-normal bg-surface-light text-primary p-3 rounded border border-surface focus-visible:outline-2 focus-visible:outline-primary focus:ring-2 focus:ring-primary transition" rows={5} />
          <button type="submit" className="button-base button-primary mt-2">Send</button>
        </motion.form>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }} className="body-large text-center space-y-2 text-secondary">
          <div>Email: <a href="mailto:lingesh3241@gmail.com" className="underline focus-visible:outline-2 focus-visible:outline-primary">lingesh3241@gmail.com</a></div>
          <div>Phone: <a href="tel:6382844052" className="underline focus-visible:outline-2 focus-visible:outline-primary">6382844052</a></div>
          <div>GitHub: <a href="https://github.com/lingesh0" target="_blank" rel="noopener noreferrer" className="underline focus-visible:outline-2 focus-visible:outline-primary">github.com/lingesh0</a></div>
          <div>LinkedIn: <a href="https://www.linkedin.com/in/t-lingesh-a879b5249/" target="_blank" rel="noopener noreferrer" className="underline focus-visible:outline-2 focus-visible:outline-primary">linkedin.com/in/t-lingesh-a879b5249/</a></div>
        </motion.div>
      </div>
    </section>
  );
} 