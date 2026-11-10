import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import {
  Truck,
  ShieldCheck,
  Gem,
  Award,
  ArrowUp,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

const GOLD = "#D3AF37";

/* ---------- data ---------- */
const PERKS = [
  { icon: Gem, title: "1:12 Scale", text: "True-to-life proportions" },
  { icon: Award, title: "Collector Grade", text: "Hand-finished detail" },
  { icon: Truck, title: "Free Shipping", text: "On every order" },
  { icon: ShieldCheck, title: "Secure Payments", text: "Safe and encrypted" },
];

const CATEGORIES = [
  { label: "Sport", to: "/shop?category=sport" },
  { label: "MotoGP", to: "/shop?category=motogp" },
  { label: "Classic", to: "/shop?category=classic" },
  { label: "Adventure", to: "/shop?category=adventure" },
  { label: "New Arrivals", to: "/shop?sort=new" },
];

const CARE = [
  { label: "Track Order", to: "/orders" },
  { label: "Shipping Info", to: "/shipping" },
  { label: "Returns and Refunds", to: "/returns" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact Us", to: "/contact" },
];

const SOCIALS = [
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "#" },
];

const PAYMENTS = ["UPI", "Cards", "Net Banking", "COD"];

/* ---------- small helpers ---------- */
const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="group inline-flex items-center gap-1 text-sm text-gray-400 hover:text-[#D3AF37] transition-colors duration-300"
    >
      <span className="h-px w-0 bg-[#D3AF37] transition-all duration-300 group-hover:w-3" />
      {children}
    </Link>
  </li>
);

const ColumnTitle = ({ children }) => (
  <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-white">
    {children}
  </h3>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: connect to your backend / newsletter API
    setSubscribed(true);
    setEmail("");
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#0a0a0a] text-gray-300 border-t border-[#D3AF37]/30">
      {/* ---------- Trust strip ---------- */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PERKS.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D3AF37]/40 text-[#D3AF37]">
                <Icon size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs text-gray-500">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------- Main columns ---------- */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-12 md:grid-cols-2 lg:grid-cols-12">
        {/* Brand + newsletter */}
        <div className="lg:col-span-5">
          <h2
            className="text-4xl text-white tracking-[0.25em] uppercase"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Moto<span style={{ color: GOLD }}>Mini</span>
          </h2>
          <p className="mt-2 text-[11px] uppercase tracking-[0.35em] text-[#D3AF37]">
            Small Bikes. Endless Passion.
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
            Premium miniature motorcycles inspired by the world's most iconic
            machines. Built for collectors and riders at heart.
          </p>

          {/* Newsletter */}
          <div className="mt-8">
            <p className="text-sm font-semibold text-white">
              Join the garage
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Get early access to new drops and limited editions.
            </p>

            {subscribed ? (
              <p className="mt-4 text-sm text-[#D3AF37]">
                You're in. Watch your inbox for the next drop.
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="mt-4 flex max-w-sm border border-white/15 focus-within:border-[#D3AF37] transition-colors"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-600 outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex items-center justify-center bg-[#D3AF37] px-5 text-black hover:bg-[#E5C14A] transition-colors"
                >
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Shop */}
        <div className="lg:col-span-2">
          <ColumnTitle>Shop</ColumnTitle>
          <ul className="space-y-3">
            {CATEGORIES.map((c) => (
              <FooterLink key={c.label} to={c.to}>
                {c.label}
              </FooterLink>
            ))}
          </ul>
        </div>

        {/* Customer care */}
        <div className="lg:col-span-2">
          <ColumnTitle>Customer Care</ColumnTitle>
          <ul className="space-y-3">
            {CARE.map((c) => (
              <FooterLink key={c.label} to={c.to}>
                {c.label}
              </FooterLink>
            ))}
          </ul>
        </div>

        {/* Contact + social */}
        <div className="lg:col-span-3">
          <ColumnTitle>Get in touch</ColumnTitle>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#D3AF37]" />
              <a
                href="mailto:hello@motomini.com"
                className="hover:text-[#D3AF37] transition-colors"
              >
                hello@motomini.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#D3AF37]" />
              <a
                href="tel:+910000000000"
                className="hover:text-[#D3AF37] transition-colors"
              >
                +91 00000 00000
              </a>
            </li>
          </ul>

          <div className="mt-7 flex gap-3">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ y: -4 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-400 hover:border-[#D3AF37] hover:bg-[#D3AF37] hover:text-black transition-colors duration-300"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} MotoMini. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="border border-white/15 px-3 py-1 text-[10px] uppercase tracking-widest text-gray-500"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-[#D3AF37] transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-[#D3AF37] transition-colors">
              Terms
            </Link>
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center border border-[#D3AF37]/50 text-[#D3AF37] hover:bg-[#D3AF37] hover:text-black transition-colors"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;