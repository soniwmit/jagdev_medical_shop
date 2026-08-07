import React, { useEffect } from 'react';
import { BUSINESS_INFO, FAQS } from '../data/pharmacyData';

interface SeoMetaProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  currentPage?: string;
}

export const SeoMeta: React.FC<SeoMetaProps> = ({
  title = 'Jagdev Medical Shop | Medical Store in Shakurabad, Bihar',
  description = 'Jagdev Medical Shop - Your Trusted Pharmacy in Shakurabad, Bihar 804425. Genuine medicines, surgical supplies, baby care, diabetic care & 24/7 WhatsApp order support.',
  canonicalUrl = 'https://jagdev-medical-shop-navy.vercel.app',
  currentPage = 'Home',
}) => {
  useEffect(() => {
    // Update Document Title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Inject JSON-LD Local Business & Pharmacy Schema
    const pharmacySchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      name: BUSINESS_INFO.name,
      description: description,
      image: 'https://jagdev-medical-shop-navy.vercel.app/store-front.jpg',
      telephone: BUSINESS_INFO.phone,
      email: BUSINESS_INFO.email,
      url: canonicalUrl,
      priceRange: '₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address,
        addressLocality: BUSINESS_INFO.locality,
        addressRegion: BUSINESS_INFO.state,
        postalCode: BUSINESS_INFO.pincode,
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.012345,
        longitude: 84.881234,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '07:00',
          closes: '22:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Sunday',
          opens: '08:00',
          closes: '20:00',
        },
      ],
      sameAs: [
        `https://wa.me/${BUSINESS_INFO.whatsapp}`,
        BUSINESS_INFO.googleMapsDirectionsUrl,
      ],
    };

    // Inject FAQ Schema
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    // Inject Breadcrumb Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://jagdev-medical-shop-navy.vercel.app',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: currentPage,
          item: `${canonicalUrl}#${currentPage.toLowerCase()}`,
        },
      ],
    };

    const pharmacyScript = document.createElement('script');
    pharmacyScript.type = 'application/ld+json';
    pharmacyScript.id = 'pharmacy-jsonld';
    pharmacyScript.text = JSON.stringify(pharmacySchema);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.id = 'faq-jsonld';
    faqScript.text = JSON.stringify(faqSchema);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = 'breadcrumb-jsonld';
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema);

    // Clean up old scripts
    document.getElementById('pharmacy-jsonld')?.remove();
    document.getElementById('faq-jsonld')?.remove();
    document.getElementById('breadcrumb-jsonld')?.remove();

    document.head.appendChild(pharmacyScript);
    document.head.appendChild(faqScript);
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.getElementById('pharmacy-jsonld')?.remove();
      document.getElementById('faq-jsonld')?.remove();
      document.getElementById('breadcrumb-jsonld')?.remove();
    };
  }, [title, description, canonicalUrl, currentPage]);

  return null;
};
