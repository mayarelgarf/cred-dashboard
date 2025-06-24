import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/benefits', () => {
    return HttpResponse.json({
      benefits: [
        {
          id: 1,
          title: "10% Discount",
          icon: "💸",
          description: "Get 10% off on your next purchase",
          ctaText: "Claim",
        },
        {
          id: 2,
          title: "Free Voucher",
          icon: "🎟️",
          description: "Grab your free voucher for select brands",
          ctaText: "View",
        },
        {
          id: 3,
          title: "Exclusive Offer",
          icon: "🔥",
          description: "Access limited time exclusive offers",
          ctaText: "Claim",
        }
      ]
    }
   
    
    );
  }),
];