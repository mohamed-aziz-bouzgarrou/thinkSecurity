import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  BarChart3,
  Menu,
  X,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className='bg-dark-blue text-white overflow-hidden'>
      {/* Navbar */}
      <nav className='fixed w-full top-0 z-50 bg-dark-blue/95 backdrop-blur-md border-b border-light-blue/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <motion.div
              className='flex-shrink-0'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}>
              <div className='text-2xl font-bold bg-gradient-to-r from-light-blue to-blue-400 bg-clip-text text-transparent'>
                ThinkSecurity
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className='hidden md:flex items-center space-x-8'>
              {["Home", "Features", "Pricing", "Contact"].map((item, idx) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className='text-sm font-medium hover:text-light-blue transition-colors'
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}>
                  {item}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection("contact")}
                className='px-6 py-2 bg-light-blue hover:bg-blue-600 text-dark-blue font-semibold rounded-lg transition-all transform hover:scale-105'
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}>
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden p-2'>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className='md:hidden pb-4 space-y-2'>
              {["Home", "Features", "Pricing", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className='block w-full text-left px-4 py-2 hover:bg-light-blue/10 rounded transition-colors'>
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id='home'
        className='pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center'>
        <motion.div
          className='max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}>
          {/* Left Content */}
          <motion.div variants={itemVariants} className='space-y-6'>
            <motion.div
              className='inline-block'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}>
              <span className='text-light-blue text-sm font-semibold bg-light-blue/10 px-4 py-2 rounded-full'>
                🔒 Modern Security Awareness
              </span>
            </motion.div>

            <motion.h1
              className='text-5xl sm:text-6xl font-bold leading-tight'
              variants={itemVariants}>
              Modern Cybersecurity Awareness for Modern Organizations
            </motion.h1>

            <motion.p
              className='text-xl text-gray-300 leading-relaxed'
              variants={itemVariants}>
              Empower your team. Reduce human risk. Stay secure.
            </motion.p>

            <motion.div
              className='flex flex-col sm:flex-row gap-4'
              variants={itemVariants}>
              <button
                onClick={() => scrollToSection("pricing")}
                className='px-8 py-4 bg-gradient-to-r from-light-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-dark-blue font-bold rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg'>
                Get Started <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className='px-8 py-4 border-2 border-light-blue hover:bg-light-blue/10 text-light-blue font-bold rounded-lg transition-all'>
                Learn More
              </button>
            </motion.div>

            <motion.div className='flex gap-6 pt-4' variants={itemVariants}>
              <div className='flex items-center gap-2'>
                <CheckCircle size={20} className='text-light-blue' />
                <span className='text-sm text-gray-300'>
                  No credit card required
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <CheckCircle size={20} className='text-light-blue' />
                <span className='text-sm text-gray-300'>Free 14-day trial</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            className='flex justify-center items-center'
            initial={{ opacity: 0, scale: 0.8, rotateZ: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}>
            <div className='relative'>
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-light-blue/30 to-blue-500/30 rounded-full blur-3xl'
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className='relative bg-gradient-to-br from-light-blue/20 to-blue-600/20 p-12 rounded-2xl border border-light-blue/30 backdrop-blur-sm'>
                <Shield size={200} className='text-light-blue' />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id='features' className='py-20 px-4 sm:px-6 lg:px-8 bg-navy/30'>
        <motion.div
          className='max-w-7xl mx-auto'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}>
          <motion.div className='text-center mb-16' variants={itemVariants}>
            <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
              Powerful Features
            </h2>
            <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
              Everything you need to create a security-aware culture within your
              organization
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                icon: Zap,
                title: "Automated Phishing Simulations",
                description:
                  "Test your employees with realistic phishing campaigns and track their progress in real-time.",
              },
              {
                icon: Star,
                title: "Gamified Awareness Training",
                description:
                  "Engage your team with interactive training modules and reward systems to boost participation.",
              },
              {
                icon: BarChart3,
                title: "Real-Time Dashboards & Reporting",
                description:
                  "Get comprehensive insights with detailed analytics and actionable reports on security awareness.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className='bg-white/5 border border-light-blue/20 rounded-xl p-8 hover:border-light-blue/50 transition-all hover:shadow-lg hover:shadow-light-blue/20 group'
                variants={itemVariants}
                whileHover={{ y: -5 }}>
                <div className='inline-flex items-center justify-center w-12 h-12 bg-light-blue/20 rounded-lg mb-4 group-hover:bg-light-blue/40 transition-colors'>
                  <feature.icon size={24} className='text-light-blue' />
                </div>
                <h3 className='text-xl font-bold mb-3'>{feature.title}</h3>
                <p className='text-gray-300 leading-relaxed'>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id='pricing' className='py-20 px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='max-w-7xl mx-auto'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}>
          <motion.div className='text-center mb-16' variants={itemVariants}>
            <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
              Simple, Transparent Pricing
            </h2>
            <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
              Choose the plan that fits your organization's needs
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                name: "Basic",
                price: "300TND",
                period: "/month",
                features: [
                  "Up to 20 users",
                  "Monthly phishing simulations",
                  "Basic training modules",
                  "Standard reporting",
                ],
                cta: "Start Free Trial",
                highlighted: false,
              },
              {
                name: "Pro",
                price: "1500TND",
                period: "/month",
                features: [
                  "Up to 500 users",
                  "Weekly phishing simulations",
                  "Advanced training content",
                  "Advanced analytics",
                  "API access",
                ],
                cta: "Start Free Trial",
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "pricing",
                features: [
                  "Unlimited users",
                  "Custom campaigns",
                  "Dedicated support",
                  "Advanced integrations",
                  "Custom workflows",
                ],
                cta: "Contact Sales",
                highlighted: false,
              },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                className={`relative rounded-2xl p-8 border transition-all ${
                  plan.highlighted
                    ? "border-light-blue bg-light-blue/10 shadow-lg shadow-light-blue/30 transform md:scale-105"
                    : "border-light-blue/20 bg-white/5 hover:border-light-blue/50"
                }`}
                variants={itemVariants}
                whileHover={!plan.highlighted ? { y: -5 } : {}}>
                {plan.highlighted && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-light-blue px-4 py-1 rounded-full text-sm font-semibold text-dark-blue'>
                    Most Popular
                  </div>
                )}

                <h3 className='text-2xl font-bold mb-2'>{plan.name}</h3>
                <div className='mb-6'>
                  <span className='text-4xl font-bold'>{plan.price}</span>
                  <span className='text-gray-400 ml-2'>{plan.period}</span>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all transform hover:scale-105 ${
                    plan.highlighted
                      ? "bg-light-blue hover:bg-blue-600 text-dark-blue"
                      : "bg-white/10 hover:bg-white/20 text-white border border-light-blue/30"
                  }`}>
                  {plan.cta}
                </button>

                <ul className='space-y-4'>
                  {plan.features.map((feature, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <CheckCircle
                        size={20}
                        className='text-light-blue flex-shrink-0 mt-0.5'
                      />
                      <span className='text-gray-300'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-navy/30'>
        <motion.div
          className='max-w-7xl mx-auto'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}>
          <motion.div className='text-center mb-16' variants={itemVariants}>
            <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
              Trusted by Industry Leaders
            </h2>
            <p className='text-xl text-gray-300'>
              See what our customers have to say
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                name: "Sarah Johnson",
                role: "CISO, TechCorp Inc.",
                quote:
                  "ThinkSecurity transformed our security awareness program. We saw a 45% reduction in phishing click rates within 3 months.",
                initials: "SJ",
              },
              {
                name: "Michael Chen",
                role: "Security Manager, FinanceHub",
                quote:
                  "The gamification features have been game-changing for employee engagement. Our team actually enjoys the training now.",
                initials: "MC",
              },
              {
                name: "Emma Rodriguez",
                role: "Compliance Officer, HealthCare Solutions",
                quote:
                  "Outstanding reporting capabilities. We now have complete visibility into our security posture and training effectiveness.",
                initials: "ER",
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                className='bg-white/5 border border-light-blue/20 rounded-xl p-8 hover:border-light-blue/50 transition-all'
                variants={itemVariants}
                whileHover={{ y: -5 }}>
                <div className='flex gap-1 mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className='text-light-blue fill-light-blue'
                    />
                  ))}
                </div>
                <p className='text-gray-300 mb-6 italic leading-relaxed'>
                  "{testimonial.quote}"
                </p>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-light-blue to-blue-600 rounded-full flex items-center justify-center font-bold text-dark-blue'>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className='font-semibold'>{testimonial.name}</p>
                    <p className='text-sm text-gray-400'>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='max-w-3xl mx-auto'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}>
          <motion.div className='text-center mb-12' variants={itemVariants}>
            <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
              Get in Touch
            </h2>
            <p className='text-xl text-gray-300'>
              Have questions? Our team is here to help
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleFormSubmit}
            className='bg-white/5 border border-light-blue/20 rounded-xl p-8 space-y-6'
            variants={itemVariants}>
            <div>
              <label className='block text-sm font-semibold mb-2'>Name</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleFormChange}
                required
                className='w-full bg-white/10 border border-light-blue/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-light-blue transition-colors'
                placeholder='Your name'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold mb-2'>Email</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleFormChange}
                required
                className='w-full bg-white/10 border border-light-blue/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-light-blue transition-colors'
                placeholder='you@example.com'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold mb-2'>
                Message
              </label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleFormChange}
                required
                rows='5'
                className='w-full bg-white/10 border border-light-blue/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-light-blue transition-colors resize-none'
                placeholder='Tell us how we can help...'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-gradient-to-r from-light-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-dark-blue font-bold py-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2'>
              Send Message <ArrowRight size={20} />
            </button>

            {formSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className='bg-light-blue/20 border border-light-blue/50 rounded-lg p-4 text-center text-light-blue'>
                ✓ Thank you! We'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className='bg-navy/50 border-t border-light-blue/10 py-12 px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='max-w-7xl mx-auto'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInVariants}>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
            <div>
              <h4 className='text-lg font-bold bg-gradient-to-r from-light-blue to-blue-400 bg-clip-text text-transparent mb-4'>
                ThinkSecurity
              </h4>
              <p className='text-gray-400'>
                Empowering organizations through cybersecurity awareness.
              </p>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Security", "Updates"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Contact"],
              },
              {
                title: "Legal",
                links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
              },
            ].map((group, idx) => (
              <div key={idx}>
                <h5 className='font-semibold mb-4'>{group.title}</h5>
                <ul className='space-y-2'>
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href='#'
                        className='text-gray-400 hover:text-light-blue transition-colors'>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className='border-t border-light-blue/10 pt-8 flex flex-col sm:flex-row justify-between items-center'>
            <p className='text-gray-400 text-sm'>
              © 2025 ThinkSecurity. All rights reserved.
            </p>
            <div className='flex gap-4 mt-4 sm:mt-0'>
              {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                <a
                  key={social}
                  href='#'
                  className='text-gray-400 hover:text-light-blue transition-colors text-sm'>
                  {social}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
