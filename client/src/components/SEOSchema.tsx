import { useEffect, useId } from "react";

interface LocalBusinessSchema {
  type: "LocalBusiness";
  name: string;
  description: string;
  telephone: string;
  url: string;
  areaServed: string[];
  priceRange: string;
  image?: string;
}

interface ServiceSchema {
  type: "Service";
  name: string;
  description: string;
  provider: string;
  areaServed: string[];
  serviceType: string;
}

interface ReviewSchema {
  type: "Review";
  author: string;
  reviewBody: string;
  reviewRating: number;
  itemReviewed: string;
}

interface AggregateRatingSchema {
  type: "AggregateRating";
  ratingValue: number;
  reviewCount: number;
  itemReviewed: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchema {
  type: "BreadcrumbList";
  items: BreadcrumbItem[];
}

type SchemaType = LocalBusinessSchema | ServiceSchema | ReviewSchema | AggregateRatingSchema | BreadcrumbSchema;

function generateLocalBusinessSchema(data: LocalBusinessSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": data.url,
    "name": data.name,
    "description": data.description,
    "telephone": data.telephone,
    "url": data.url,
    "image": data.image || `${data.url}/opengraph.jpg`,
    "priceRange": data.priceRange,
    "areaServed": data.areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "sameAs": [],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "06:00",
      "closes": "20:00"
    }
  };
}

function generateOrganizationSchema(data: LocalBusinessSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": data.name,
    "description": data.description,
    "telephone": data.telephone,
    "url": data.url,
    "logo": `${data.url}/favicon.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": data.telephone,
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    }
  };
}

function generateServiceSchema(data: ServiceSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.name,
    "description": data.description,
    "serviceType": data.serviceType,
    "provider": {
      "@type": "LocalBusiness",
      "name": data.provider
    },
    "areaServed": data.areaServed.map(area => ({
      "@type": "City",
      "name": area
    }))
  };
}

function generateReviewSchema(data: ReviewSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": data.author
    },
    "reviewBody": data.reviewBody,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": data.reviewRating,
      "bestRating": 5
    },
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": data.itemReviewed
    }
  };
}

function generateAggregateRatingSchema(data: AggregateRatingSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": data.itemReviewed,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": data.ratingValue,
      "reviewCount": data.reviewCount,
      "bestRating": 5
    }
  };
}

function generateBreadcrumbSchema(data: BreadcrumbSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": data.items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function SEOSchema({ schemas }: { schemas: SchemaType[] }) {
  const uniqueId = useId();
  
  useEffect(() => {
    const scriptId = `seo-schema-${uniqueId.replace(/:/g, '-')}`;
    
    const schemaObjects = schemas.map(schema => {
      switch (schema.type) {
        case "LocalBusiness":
          return [generateLocalBusinessSchema(schema), generateOrganizationSchema(schema)];
        case "Service":
          return generateServiceSchema(schema);
        case "Review":
          return generateReviewSchema(schema);
        case "AggregateRating":
          return generateAggregateRatingSchema(schema);
        case "BreadcrumbList":
          return generateBreadcrumbSchema(schema);
        default:
          return null;
      }
    }).flat().filter(Boolean);

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemaObjects);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [schemas, uniqueId]);

  return null;
}

export const CANYON_BOXING_BUSINESS = {
  name: "Canyon Boxing Club",
  telephone: "+1-602-946-4446",
  url: "https://canyonboxing.com",
  description: "Elite mobile boxing personal training serving Williams, AZ and Northern Arizona. Professional 1-on-1 and group boxing sessions brought directly to your location.",
  priceRange: "$$",
  areaServed: ["Williams", "Flagstaff", "Seligman", "Ash Fork", "Parks", "Bellemont", "Tusayan"]
};
