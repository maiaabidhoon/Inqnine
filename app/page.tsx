"use client";

import React, { useState } from "react";
import {
  FileText,
  CheckCircle2,
  Receipt,
  Truck,
  FileCheck,
  CreditCard,
  Building2,
  Users,
  ShieldCheck,
  ArrowRight,
  Printer,
  Download,
  Sparkles,
  Star,
  Clock,
  Zap,
  MessageSquare,
  ChevronDown,
  RefreshCw,
  Boxes,
  Globe,
  FileBarChart2,
  UserCheck,
  Wallet,
  KeyRound,
  UploadCloud,
  Briefcase,
  Store,
  Factory,
} from "lucide-react";

export default function Home() {
  // Live Demo State
  const [invoiceData, setInvoiceData] = useState({
    clientName: "Miss inov9",
    invoiceNo: "INV-2026-001",
    date: "2026-09-16",
    itemDesc: "UI/UX Design & Development",
    amount: 35000,
    tax: 18,
  });

  const [openFaq, setOpenFaq] = useState(0);

  const subtotal = Number(invoiceData.amount) || 0;
  const taxAmount = (subtotal * (Number(invoiceData.tax) || 0)) / 100;
  const total = subtotal + taxAmount;

  const faqs = [
    {
      q: "Do I need any accounting background to use Miss Invo9?",
      a: "No. If you can fill a form, you can raise a GST-compliant invoice. Tax fields, totals, and rounding are calculated automatically as you type.",
    },
    {
      q: "What happens when my 7-day trial ends?",
      a: "You'll be asked to pick Business or Enterprise to keep going. Nothing is billed automatically — your documents stay saved either way, and you can export them anytime.",
    },
    {
      q: "Can I switch between Business and Enterprise later?",
      a: "Yes, upgrade or downgrade whenever you like from your account settings. Changes apply from your next billing cycle.",
    },
    {
      q: "Is my data safe if I stop paying?",
      a: "Your past documents remain visible in read-only mode for 90 days after cancellation, giving you plenty of time to export anything you need.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/*  NAVBAR */}
      <nav className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="bg-indigo-600 text-white p-2 rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-slate-900 tracking-tight">
              Miss Invo9
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#demo" className="hover:text-slate-900 transition">Live Demo</a>
            <a href="#documents" className="hover:text-slate-900 transition">Documents</a>
            <a href="#features" className="hover:text-slate-900 transition">Features</a>
            <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
            <a href="#faq" className="hover:text-slate-900 transition">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-sm font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 transition">
              Log in
            </button>
            <button className="text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg transition shadow-sm">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 text-xs font-semibold mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> Effortless Invoicing for Businesses
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
          Simple billing software for modern entrepreneurs.
        </h1>

        <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Create GST Invoices, Quotations, Estimates, and Delivery Challans in under 60 seconds. Clean, professional, and fast.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#pricing"
            className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition flex items-center justify-center gap-2 text-sm"
          >
            Start Free 7-Day Trial <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#demo"
            className="w-full sm:w-auto px-6 py-3 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium rounded-lg transition text-sm shadow-sm"
          >
            Try Live Demo
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          <div>
            <p className="text-2xl font-extrabold text-slate-900">12,400+</p>
            <p className="text-xs text-slate-500 mt-1">Businesses onboarded</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-slate-900">₹840Cr+</p>
            <p className="text-xs text-slate-500 mt-1">Invoiced through the platform</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-slate-900">4.8/5</p>
            <p className="text-xs text-slate-500 mt-1">Average customer rating</p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEMO (MINIMALIST PAPER PREVIEW) */}
      <section id="demo" className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900">Try it right now</h2>
            <p className="text-slate-500 text-sm mt-1">
              Edit the fields below to see your dynamic preview update live.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Control Form */}
            <div className="lg:col-span-5 bg-slate-50/70 p-6 rounded-xl border border-slate-200/80 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                Document Details
              </h3>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  value={invoiceData.clientName}
                  onChange={(e) => setInvoiceData({ ...invoiceData, clientName: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-indigo-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Invoice #
                  </label>
                  <input
                    type="text"
                    value={invoiceData.invoiceNo}
                    onChange={(e) => setInvoiceData({ ...invoiceData, invoiceNo: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-indigo-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={invoiceData.date}
                    onChange={(e) => setInvoiceData({ ...invoiceData, date: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Item Description
                </label>
                <input
                  type="text"
                  value={invoiceData.itemDesc}
                  onChange={(e) => setInvoiceData({ ...invoiceData, itemDesc: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-indigo-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={invoiceData.amount}
                    onChange={(e) => setInvoiceData({ ...invoiceData, amount: Number(e.target.value) })}
                    className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-indigo-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    GST Rate
                  </label>
                  <select
                    value={invoiceData.tax}
                    onChange={(e) => setInvoiceData({ ...invoiceData, tax: Number(e.target.value) })}
                    className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-indigo-600"
                  >
                    <option value={0}>0%</option>
                    <option value={5}>5%</option>
                    <option value={12}>12%</option>
                    <option value={18}>18%</option>
                    <option value={28}>28%</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Live Document Preview Card */}
            <div className="lg:col-span-7 bg-white p-8 rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50 min-h-[480px] flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex justify-between items-start border-b border-slate-100 pb-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-wide">
                      MISS INVO9
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">Your Company Name Ltd.</p>
                    <p className="text-xs text-slate-400">GSTIN: 09AAAAA0000A1Z5</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded">
                      TAX INVOICE
                    </span>
                    <p className="text-xs font-medium text-slate-600 mt-2">
                      #{invoiceData.invoiceNo || "INV-000"}
                    </p>
                    <p className="text-xs text-slate-400">{invoiceData.date}</p>
                  </div>
                </div>

                {/* Customer Details */}
                <div className="my-6">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Billed To
                  </span>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    {invoiceData.clientName || "Client Name"}
                  </p>
                  <p className="text-xs text-slate-400">New Delhi, India</p>
                </div>

                {/* Item List */}
                <table className="w-full text-left my-6">
                  <thead>
                    <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      <th className="py-2">Description</th>
                      <th className="py-2 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-50 text-xs text-slate-700">
                      <td className="py-3 font-medium">
                        {invoiceData.itemDesc || "Service Item"}
                      </td>
                      <td className="py-3 text-right font-medium">
                        ₹{subtotal.toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Totals */}
              <div className="border-t border-slate-100 pt-4">
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>GST ({invoiceData.tax}%)</span>
                  <span>₹{taxAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-slate-900 border-t border-slate-100 pt-2 mt-2">
                  <span>Total Amount</span>
                  <span className="text-indigo-600">₹{total.toLocaleString()}</span>
                </div>

                <div className="mt-6 flex justify-end gap-2">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded text-xs text-slate-600 hover:bg-slate-50 font-medium transition">
                    <Printer className="w-3.5 h-3.5" /> Print
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white rounded text-xs font-medium hover:bg-slate-800 transition">
                    <Download className="w-3.5 h-3.5" /> Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL DOCUMENTS (MINIMAL GRID) */}
      <section id="documents" className="py-20 max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900">Supported Documents</h2>
          <p className="text-slate-500 text-sm mt-1">
            Generate any essential business document in a few clicks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Quotations", desc: "Price proposals for potential clients", icon: FileText },
            { title: "Invoices", desc: "GST-ready payment requests and billing", icon: Receipt },
            { title: "Proforma Invoices", desc: "Advance billing for initial payments", icon: FileCheck },
            { title: "Estimates", desc: "Approximate project cost calculations", icon: Sparkles },
            { title: "Receipts", desc: "Proof of payment received", icon: CreditCard },
            { title: "Purchase Orders", desc: "Official buy orders for suppliers", icon: Building2 },
            { title: "Credit Notes", desc: "Refunds, returns, and billing adjustments", icon: ShieldCheck },
            { title: "Delivery Challans", desc: "Goods movement and delivery tracking", icon: Truck },
            { title: "Payment Reminders", desc: "Automated balance due alerts", icon: Users },
            { title: "Recurring Invoices", desc: "Auto-billed on a schedule for repeat clients", icon: RefreshCw },
            { title: "Expense Vouchers", desc: "Log purchases and outgoing payments", icon: Wallet },
          ].map((doc, idx) => {
            const Icon = doc.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 p-5 rounded-xl hover:border-slate-300 transition shadow-sm"
              >
                <div className="w-8 h-8 bg-slate-100 text-slate-700 rounded-md flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{doc.title}</h3>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">{doc.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900">How it works</h2>
            <p className="text-slate-500 text-sm mt-1">
              From blank page to sent invoice in three steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
            {[
              {
                step: "1",
                title: "Add your details once",
                desc: "Set up your company name, logo, GSTIN, and bank details. Miss Invo9 reuses them on every document from then on.",
              },
              {
                step: "2",
                title: "Fill in the document",
                desc: "Pick a document type, add the customer and line items. Tax and totals are calculated for you automatically.",
              },
              {
                step: "3",
                title: "Send, print, or download",
                desc: "Share a payment link, download a PDF, or print directly. Track whether it's been paid from your dashboard.",
              },
            ].map((s, i) => (
              <div key={i} className="relative">
                <div className="w-9 h-9 rounded-full bg-slate-900 text-white text-sm font-bold flex items-center justify-center mb-4">
                  {s.step}
                </div>
                <h3 className="text-sm font-bold text-slate-900">{s.title}</h3>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SUMMARY */}
      <section id="features" className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Spend less time on paperwork, more on your business
              </h2>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                The small, repetitive parts of billing are handled for you, so you can get back to work that actually pays.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Save a customer or product once, reuse it on every future document",
                  "Correct GST split every time — CGST, SGST, or IGST applied automatically",
                  "Add your logo, signature, and bank details so every document looks like yours",
                  "See exactly what's paid, unpaid, or partially paid, without checking your bank statement",
                  "Send invoices straight to WhatsApp or email with a payment link attached",
                  "Pick up where you left off on your laptop, tablet, or phone",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl space-y-3 shadow-sm">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex justify-between items-center">
                <div>
                  <p className="text-xs text-slate-400">Outstanding Balance</p>
                  <p className="text-xl font-bold text-slate-900">₹84,200</p>
                </div>
                <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                  6 Pending
                </span>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex justify-between items-center">
                <div>
                  <p className="text-xs text-slate-400">Total Collected (This Month)</p>
                  <p className="text-xl font-bold text-emerald-600">₹2,10,000</p>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  Paid
                </span>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex justify-between items-center">
                <div>
                  <p className="text-xs text-slate-400">Documents Generated</p>
                  <p className="text-xl font-bold text-slate-900">312</p>
                </div>
                <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-full">
                  This year
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MORE FEATURES — GROWTH-STAGE NEEDS */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900">As your business grows, Miss Invo9 keeps up</h2>
          <p className="text-slate-500 text-sm mt-1">
            You won't need to switch tools when billing gets more complex.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Recurring & auto-billing",
              desc: "Set a schedule once for repeat clients or retainers — the invoice goes out on its own, every time.",
              icon: RefreshCw,
            },
            {
              title: "Stock-linked billing",
              desc: "Selling physical goods deducts them from inventory automatically, so your stock count stays accurate.",
              icon: Boxes,
            },
            {
              title: "Bill in other currencies",
              desc: "Invoice export clients in USD, EUR, or GBP, with the conversion shown alongside the INR value.",
              icon: Globe,
            },
            {
              title: "GST & e-way bill reports",
              desc: "Export return-ready GST summaries and generate e-way bills without re-entering any data.",
              icon: FileBarChart2,
            },
            {
              title: "A payment page for your customers",
              desc: "Customers can view their invoice and pay online without emailing you back and forth.",
              icon: UserCheck,
            },
            {
              title: "Track what you spend, not just what you earn",
              desc: "Log expenses and purchases alongside your invoices for a complete, accurate picture of cash flow.",
              icon: Wallet,
            },
            {
              title: "Give staff their own logins",
              desc: "Add teammates with limited access — they can raise invoices without seeing your full financials.",
              icon: KeyRound,
            },
            {
              title: "Nothing gets lost",
              desc: "Every document is backed up automatically and can be exported in full whenever you need it.",
              icon: UploadCloud,
            },
          ].map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="bg-white border border-slate-200/80 p-5 rounded-xl shadow-sm">
                <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-md flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{f.title}</h3>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900">Made for the way you already work</h2>
            <p className="text-slate-500 text-sm mt-1">
              Whatever you sell, Miss Invo9 fits around your day rather than the other way round.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Freelancers & consultants",
                desc: "Send a proforma invoice right after a call, then convert it to a final invoice once the client agrees — no retyping.",
                icon: Briefcase,
              },
              {
                title: "Retail & shop owners",
                desc: "Bill customers at the counter in seconds and keep stock counts accurate without a separate inventory sheet.",
                icon: Store,
              },
              {
                title: "Service agencies",
                desc: "Put retainer clients on recurring billing and give account managers their own login to raise invoices.",
                icon: Users,
              },
              {
                title: "Wholesalers & manufacturers",
                desc: "Track delivery challans against purchase orders and generate e-way bills for every dispatch.",
                icon: Factory,
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
                  <div className="w-8 h-8 bg-white border border-slate-200 text-slate-700 rounded-md flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{p.title}</h3>
                  <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900">Trusted by small businesses across India</h2>
          <p className="text-slate-500 text-sm mt-1">A few words from people who bill through Miss Invo9 every day.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              name: "Rohit Malhotra",
              role: "Founder, Malhotra Textiles",
              quote: "Switched from spreadsheets last year. GST calculation used to take me an hour every week — now it's instant.",
            },
            {
              name: "Priya Nair",
              role: "Freelance Interior Designer",
              quote: "My clients get a proper proforma invoice within minutes of a call. It makes me look far more organised.",
            },
            {
              name: "Suresh Iyer",
              role: "Owner, Iyer Hardware Supplies",
              quote: "Payment reminders alone have cut our overdue balances by half. Simple tool, real impact on cash flow.",
            },
          ].map((t, i) => (
            <div key={i} className="bg-white border border-slate-200/80 rounded-xl p-6 shadow-sm">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <p className="text-sm font-bold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900">Simple, predictable pricing</h2>
            <p className="text-slate-500 text-sm mt-1">Start free, upgrade only when you need to.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Trial */}
            <div className="bg-white border border-slate-200 p-6 rounded-xl flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center mb-4">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Trial</h3>
                <p className="text-xs text-slate-500 mt-0.5">Explore every feature, no card required</p>
                <div className="my-5">
                  <span className="text-3xl font-extrabold text-slate-900">Free</span>
                  <span className="text-slate-500 text-xs"> for 7 days</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-800"/> Full access to all 9 document types</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-800"/> Up to 15 documents</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-800"/> PDF export & printing</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-800"/> Email support</li>
                </ul>
              </div>
              <button className="mt-6 w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-lg text-xs transition">
                Start Free Trial
              </button>
            </div>

            {/* Business Plan */}
            <div className="bg-white border-2 border-indigo-600 p-6 rounded-xl flex flex-col justify-between shadow-md relative">
              <span className="absolute -top-3 right-4 bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Popular
              </span>
              <div>
                <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Zap className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Business</h3>
                <p className="text-xs text-slate-500 mt-0.5">For freelancers & growing businesses</p>
                <div className="my-5">
                  <span className="text-3xl font-extrabold text-slate-900">₹249</span>
                  <span className="text-slate-500 text-xs"> / month</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-600"/> Unlimited documents</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-600"/> Custom branding & logo</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-600"/> Recurring invoices & auto-reminders</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-600"/> Customer & product catalog</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-600"/> Online payment page for customers</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-600"/> Basic customer analytics</li>
                </ul>
              </div>
              <button className="mt-6 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-xs transition shadow-sm">
                Upgrade to Business
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white border border-slate-200 p-6 rounded-xl flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center mb-4">
                  <Building2 className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Enterprise</h3>
                <p className="text-xs text-slate-500 mt-0.5">For multi-user teams & agencies</p>
                <div className="my-5">
                  <span className="text-3xl font-extrabold text-slate-900">₹599</span>
                  <span className="text-slate-500 text-xs"> / month</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-800"/> Everything in Business</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-800"/> Multi-staff accounts with role-based access</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-800"/> Stock-linked billing & multi-currency invoices</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-800"/> GST & e-way bill reports</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-800"/> Priority, dedicated support</li>
                </ul>
              </div>
              <button className="mt-6 w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-lg text-xs transition">
                Contact Sales
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-8">
            All plans include GST calculation, PDF export, and cloud backup. Cancel anytime.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 max-w-3xl mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <p className="text-slate-500 text-sm mt-1">Can't find what you're looking for? Reach out at support@missinvo9.com.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const open = openFaq === i;
            return (
              <div key={i} className="border border-slate-200 rounded-xl bg-white overflow-hidden">
                <button
                  onClick={() => setOpenFaq(open ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-slate-900">{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && (
                  <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Send your next invoice in the next five minutes.
          </h2>
          <p className="text-slate-300 text-sm mt-3 max-w-xl mx-auto">
            Join thousands of businesses who stopped wrestling with spreadsheets. Free for 7 days, no card needed.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-semibold rounded-lg transition flex items-center justify-center gap-2 text-sm"
            >
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#faq"
              className="w-full sm:w-auto px-6 py-3 border border-slate-700 hover:bg-slate-800 text-white font-medium rounded-lg transition text-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> Have questions?
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 text-white p-1 rounded">
              <FileText className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-slate-800">Miss Invo9</span>
          </div>
          <p>© {new Date().getFullYear()} Miss Invo9. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}