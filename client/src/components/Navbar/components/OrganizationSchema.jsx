import React from "react";

export const OrganizationSchema = () => (
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Panificadora Andina S.A.",
      "url": typeof window !== 'undefined' ? window.location.href : '',
      "logo": "https://tu-sitio.com/logo.png",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61577301479995",
        "https://www.instagram.com/panificadora_andina/",
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Milton 462",
        "addressLocality": "Villa Luro",
        "addressRegion": "CABA",
        "postalCode": "1406",
        "addressCountry": "AR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+54-11-4888-4304",
        "contactType": "customer service"
      }
    })}
  </script>
);