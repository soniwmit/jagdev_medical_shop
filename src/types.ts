export type PageType = 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'order';

export interface MedicineItem {
  id: string;
  name: string;
  genericName: string;
  category: string;
  form: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Equipment' | 'Supplement' | 'Care' | 'Ointment';
  priceEstimate?: string;
  description: string;
  prescriptionRequired: boolean;
  inStock: boolean;
  popular?: boolean;
  image?: string;
  uses: string[];
}

export interface CategoryItem {
  id: string;
  name: string;
  iconName: string;
  count: string;
  description: string;
  popularItems: string[];
  gradient: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  category: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  avatarText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Prescription' | 'Order & Delivery' | 'Payment & Hours';
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Store Front' | 'Medicine Shelves' | 'Products' | 'Medical Equipment' | 'Customers';
  imageUrl: string;
  caption: string;
}

export interface OrderFormData {
  customerName: string;
  mobileNumber: string;
  email?: string;
  address: string;
  medicineName: string;
  prescriptionUploaded: boolean;
  prescriptionFileName?: string;
  prescriptionFilePreview?: string;
  message: string;
  preferredDeliveryTime: string;
  orderType: 'Pickup' | 'Delivery' | 'Inquiry';
}

export interface BusinessDetails {
  name: string;
  tagline: string;
  category: string;
  address: string;
  fullAddress: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  displayPhone: string;
  whatsapp: string;
  displayWhatsapp: string;
  email: string;
  googleMapEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  workingHours: {
    weekdays: string;
    sunday: string;
    emergencyHours: string;
  };
  stats: {
    happyCustomers: string;
    medicinesCount: string;
    yearsOfTrust: string;
    googleRating: string;
  };
}
