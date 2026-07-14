"use client";

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { submitLead } from '@/app/actions/lead';

export function LeadForm({ defaultType = "Contact", title = "Request a Callback" }: { defaultType?: string, title?: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      type: formData.get('type') as string || defaultType,
      notes: formData.get('notes') as string,
    };

    const res = await submitLead(data);
    if (res.success) {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    }
    setLoading(false);
  }

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 text-brand-primary p-8 rounded-2xl text-center shadow-sm">
        <h4 className="font-heading font-bold text-2xl mb-3">Request Received!</h4>
        <p className="text-brand-dark mb-6">Thank you for reaching out. Our team will contact you shortly to assist you.</p>
        <Button variant="outline" className="w-full" onClick={() => setSuccess(false)}>Submit Another Inquiry</Button>
      </div>
    )
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6 text-center">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input required name="name" type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all" placeholder="Enter your full name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
          <input required name="phone" type="tel" pattern="[0-9]{10}" title="Please enter a valid 10 digit phone number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all" placeholder="10-digit mobile number" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
          <textarea name="notes" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
        </div>
        <input type="hidden" name="type" value={defaultType} />
        <Button type="submit" variant="primary" size="lg" className="w-full shadow-lg shadow-brand-primary/20" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Request'}
        </Button>
        <p className="text-xs text-center text-gray-400 mt-4">We will never spam you. Your data is secure.</p>
      </form>
    </div>
  )
}
