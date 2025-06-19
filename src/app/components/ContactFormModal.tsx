'use client';

import { useState } from 'react';
import { colors, fonts } from '../utils/theme';
import CTAButton from './CTAButton';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal = ({ isOpen, onClose }: ContactFormModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://hook.eu2.make.com/28s4gsk9q6utbb8pfw6w9vhc5lwtwhel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 2000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to submit the form. Please check your network.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className={`rounded-xl shadow-2xl p-8 max-w-md w-full relative ${colors.warmIvoryBg}`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className={`text-2xl font-bold ${colors.headingText} ${fonts.heading} mb-6 text-center`}>
          Get More Details
        </h2>

        <form onSubmit={handleSubmit}>
          {['name', 'email', 'phone'].map((field) => (
            <div className="mb-4" key={field}>
              <label
                htmlFor={`modal-${field}`}
                className={`block ${colors.modalFormText} text-sm font-bold mb-2 ${fonts.body}`}
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                id={`modal-${field}`}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                placeholder={`Your ${field}`}
                className={`shadow appearance-none border rounded-xl w-full py-3 px-4 ${colors.modalFormText} leading-tight focus:outline-none focus:ring-2 focus:ring-[#B25E3B]`}
                required
              />
            </div>
          ))}

          <div className="mb-6">
            <label
              htmlFor="modal-message"
              className={`block ${colors.modalFormText} text-sm font-bold mb-2 ${fonts.body}`}
            >
              Message
            </label>
            <textarea
              id="modal-message"
              name="message"
              rows={4}
              placeholder="I'm interested in..."
              value={formData.message}
              onChange={handleChange}
              className={`shadow appearance-none border rounded-xl w-full py-3 px-4 ${colors.modalFormText} leading-tight focus:outline-none focus:ring-2 focus:ring-[#B25E3B]`}
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <CTAButton
              text={loading ? 'Submitting...' : submitted ? 'Submitted!' : 'Submit Inquiry'}
              className="w-full"
              href="#"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
