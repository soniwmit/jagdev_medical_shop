import React, { useState, useEffect } from 'react';
import {
  X,
  MessageSquare,
  Upload,
  Phone,
  CheckCircle2,
  AlertCircle,
  FileText,
  Clock,
  User,
  MapPin,
  Mail,
  Send,
  Image as ImageIcon,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { OrderFormData } from '../types';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMedicineName?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  initialMedicineName = '',
}) => {
  const [formData, setFormData] = useState<OrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: '',
    medicineName: initialMedicineName,
    prescriptionUploaded: false,
    prescriptionFileName: '',
    prescriptionFilePreview: '',
    message: '',
    preferredDeliveryTime: 'As soon as possible (Urgent)',
    orderType: 'Pickup',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (initialMedicineName) {
      setFormData((prev) => ({ ...prev, medicineName: initialMedicineName }));
    }
  }, [initialMedicineName]);

  if (!isOpen) return null;

  const handlePrescriptionUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          prescriptionUploaded: true,
          prescriptionFileName: file.name,
          prescriptionFilePreview: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hello,
*Jagdev Medical Shop*

Customer Name: ${formData.customerName || 'N/A'}
Phone: ${formData.mobileNumber || 'N/A'}
Address: ${formData.address || 'Shakurabad/Kurtha Area'}
Medicine Required: ${formData.medicineName || 'Prescription attached'}
Prescription Attached: ${formData.prescriptionUploaded ? 'YES (Will send photo in chat)' : 'NO'}
Order Type: ${formData.orderType}
Preferred Time: ${formData.preferredDeliveryTime}
Message/Note: ${formData.message || 'Please check stock and confirm price.'}`;

    const encodedMsg = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodedMsg}`;

    setFormSubmitted(true);

    // Open WhatsApp after brief feedback
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-6 relative max-h-[90vh] overflow-y-auto my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 text-left pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
            <MessageSquare className="w-3.5 h-3.5 text-[#0A8F6A]" />
            <span>Direct WhatsApp Pharmacy Service</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            WhatsApp Medicine & Prescription Order Form
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Fill details below or upload doctor prescription. Clicking send will open a prefilled WhatsApp message with Jagdev Medical Shop.
          </p>
        </div>

        {formSubmitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto animate-bounce" />
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Opening WhatsApp Chat...
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Your prefilled order message has been prepared for Jagdev Medical Shop (+91 6200828784).
              </p>
            </div>
            <button
              onClick={() => {
                setFormSubmitted(false);
                onClose();
              }}
              className="py-2.5 px-6 rounded-xl bg-slate-900 text-white font-bold text-xs"
            >
              Done / Close Form
            </button>
          </div>
        ) : (
          <form onSubmit={handleSendWhatsApp} className="space-y-4">
            {/* Customer Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Customer Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 06200828784"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Email & Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Email (Optional)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Address / Locality *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shakurabad Village, Kurtha"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Medicine Required */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Medicine Name(s) & Quantity
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Dolo 650 - 2 strips, Liv 52 Syrup - 1 bottle, Omron BP Monitor"
                value={formData.medicineName}
                onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Upload Prescription */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-dashed border-slate-300 dark:border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Upload className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    Upload Doctor Prescription
                  </span>
                </div>
                <span className="text-[10px] text-slate-500">JPG, PNG, PDF</span>
              </div>

              <input
                type="file"
                accept="image/*,.pdf"
                id="prescription-file-input"
                onChange={handlePrescriptionUpload}
                className="hidden"
              />

              <label
                htmlFor="prescription-file-input"
                className="w-full py-2.5 px-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer flex items-center justify-center gap-2 transition-colors"
              >
                <ImageIcon className="w-4 h-4 text-emerald-600" />
                <span>
                  {formData.prescriptionUploaded
                    ? `Selected: ${formData.prescriptionFileName}`
                    : 'Choose Prescription Image or PDF'}
                </span>
              </label>

              {formData.prescriptionFilePreview && (
                <div className="relative rounded-xl overflow-hidden max-h-32 border border-emerald-300">
                  <img
                    src={formData.prescriptionFilePreview}
                    alt="Prescription Preview"
                    className="w-full h-28 object-cover"
                  />
                  <span className="absolute bottom-1 right-1 bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded font-bold">
                    Prescription Ready
                  </span>
                </div>
              )}
            </div>

            {/* Order Type & Preferred Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Fulfillment Type
                </label>
                <select
                  value={formData.orderType}
                  onChange={(e) =>
                    setFormData({ ...formData, orderType: e.target.value as 'Pickup' | 'Delivery' | 'Inquiry' })
                  }
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Pickup">Store Pickup (Shakurabad Market)</option>
                  <option value="Delivery">Local Home Delivery (Nearby Shakurabad/Kurtha)</option>
                  <option value="Inquiry">Stock Availability Inquiry Only</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Preferred Time
                </label>
                <select
                  value={formData.preferredDeliveryTime}
                  onChange={(e) => setFormData({ ...formData, preferredDeliveryTime: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="As soon as possible (Urgent)">As soon as possible (Urgent)</option>
                  <option value="Today Evening (5 PM - 8 PM)">Today Evening (5 PM - 8 PM)</option>
                  <option value="Tomorrow Morning (8 AM - 12 PM)">Tomorrow Morning (8 AM - 12 PM)</option>
                  <option value="Flexible">Flexible Time</option>
                </select>
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Additional Instructions / Allergies / Notes
              </label>
              <input
                type="text"
                placeholder="e.g. Please check if Liv 52 expiry is 2027+"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                id="send-via-whatsapp-modal-btn"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#0A8F6A] hover:bg-[#07684D] text-white font-extrabold text-sm flex items-center justify-center gap-2 medical-shadow-green transition-all transform active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto py-3.5 px-6 rounded-2xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 shrink-0"
              >
                <Phone className="w-4 h-4 text-[#0F52BA]" />
                <span>Call Now</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
