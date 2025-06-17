'use client';

import { colors, fonts } from '../utils/theme';
import CTAButton from './CTAButton';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal = ({ isOpen, onClose }: ContactFormModalProps) => {
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
        <form >
          <div className="mb-4">
            <label htmlFor="modal-name" className={`block ${colors.modalFormText} text-sm font-bold mb-2 ${fonts.body}`}>Name</label>
            <input
              type="text"
              id="modal-name"
              name="name"
              placeholder="Your Name"
              className={`shadow appearance-none border rounded-xl w-full py-3 px-4 ${colors.modalFormText} leading-tight focus:outline-none focus:ring-2 focus:ring-[#B25E3B]`}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="modal-email" className={`block ${colors.modalFormText} text-sm font-bold mb-2 ${fonts.body}`}>Email</label>
            <input
              type="email"
              id="modal-email"
              name="email"
              placeholder="your.email@example.com"
              className={`shadow appearance-none border rounded-xl w-full py-3 px-4 ${colors.modalFormText} leading-tight focus:outline-none focus:ring-2 focus:ring-[#B25E3B]`}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="modal-phone" className={`block ${colors.modalFormText} text-sm font-bold mb-2 ${fonts.body}`}>Phone Number</label>
            <input
              type="tel"
              id="modal-phone"
              name="phone"
              placeholder="+91 98765 43210"
              className={`shadow appearance-none border rounded-xl w-full py-3 px-4 ${colors.modalFormText} leading-tight focus:outline-none focus:ring-2 focus:ring-[#B25E3B]`}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="modal-message" className={`block ${colors.modalFormText} text-sm font-bold mb-2 ${fonts.body}`}>Message</label>
            <textarea
              id="modal-message"
              name="message"
              rows={4}
              placeholder="I'm interested in..."
              className={`shadow appearance-none border rounded-xl w-full py-3 px-4 ${colors.modalFormText} leading-tight focus:outline-none focus:ring-2 focus:ring-[#B25E3B]`}
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <CTAButton 
              text="Submit Inquiry" 
              className="w-full" 
              href="#" 
              onClick={(e) => { 
                e.preventDefault(); 
                alert('Inquiry submitted!'); 
                onClose(); 
              }} 
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;