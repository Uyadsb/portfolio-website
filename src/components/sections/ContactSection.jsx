import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const contactLinks = [
    { 
      name: 'Email', 
      href: 'mailto:i_sebti@estin.dz', 
      value: 'i_sebti@estin.dz',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      isStroke: true
    },
    { 
      name: 'WhatsApp', 
      href: 'https://wa.me/213698042720', 
      value: '+213 698 04 27 20',
      icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-.413.248-.694.248-.289.173-.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
      isStroke: false
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/rectfyx', 
      value: '@rectfyx',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
      isStroke: false
    },
    { 
      name: 'TikTok', 
      href: 'https://tiktok.com/@rectfyx', 
      value: '@rectfyx',
      icon: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-4.26 3.76-7.7 8.03-7.7.28 0 .56.02.83.05.04-1.96.03-3.92.04-5.88z',
      isStroke: false,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-6 md:py-8 bg-[#0a0a0a] relative overflow-visible"
    >
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-5 sm:mb-2 md:mb-2"
        >
          <span className="section-label">
            Let's Connect
          </span>
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-display tracking-wider mt-1 sm:mt-2 text-white uppercase">
            Start a Project
          </h2>
          <p className="mt-3 sm:mt-4 text-[#6b6b6b] max-w-xl mx-auto text-sm sm:text-base leading-relaxed px-4 sm:px-0">
            Ready to bring your vision to life? Let's create something extraordinary together.
          </p>
        </motion.div>

        {/* Contact Links Grid */}
        <div className="max-w-3xl mx-auto mt-6 sm:mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
          >
            {contactLinks.map((contact, index) => (
              <motion.a
                key={contact.name}
                href={contact.href}
                target={contact.name !== 'Email' ? '_blank' : undefined}
                rel={contact.name !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 sm:gap-5 p-5 sm:p-6 bg-[#111111] rounded-xl border border-[#1f1f1f] hover:border-[#00e5c0]/30 transition-all duration-300 group"
              >
                <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1f1f1f] flex items-center justify-center group-hover:bg-[#00e5c0] transition-colors flex-shrink-0">
                  {contact.isStroke ? (
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#6b6b6b] group-hover:text-[#0a0a0a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={contact.icon} />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#6b6b6b] group-hover:text-[#0a0a0a] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d={contact.icon} />
                    </svg>
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] sm:text-xs text-[#6b6b6b] uppercase tracking-wider block mb-1">
                    {contact.name}
                  </span>
                  <span className="text-white text-sm sm:text-base font-medium truncate block group-hover:text-[#00e5c0] transition-colors">
                    {contact.value}
                  </span>
                </div>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#6b6b6b] group-hover:text-[#00e5c0] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            ))}
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-4 sm:mt-6 text-center"
          >
            <p className="text-[#6b6b6b] text-sm sm:text-base">
              Based in <span className="text-white">Constantine, Algeria</span> • Available worldwide
            </p>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-7 sm:mt-14 md:mt-18 pt-6 sm:pt-8 border-t border-[#1f1f1f] w-full"
        >
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#6b6b6b] w-full">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#00e5c0] flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#0a0a0a]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <span className="font-display tracking-wider uppercase text-sm sm:text-base">Rectfyx Visuals</span>
            </div>
            <p className="text-center md:text-right w-full md:w-auto">© 2026 All rights reserved. Crafted with passion.</p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

export default ContactSection;