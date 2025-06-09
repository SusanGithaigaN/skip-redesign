import bin from '../assets/bin.svg';
import date from '../assets/date.svg';
import pay from '../assets/pay.svg';
import permit from '../assets/permit.svg';
import pin from '../assets/pin.svg';
import truck from '../assets/truck.svg';

export const steps = [
  { label: 'Postcode', icon: pin },
  { label: 'Waste Type', icon: bin },
  { label: 'Select Skip', icon: truck },
  { label: 'Permit Check', icon: permit },
  { label: 'Choose Date', icon: date },
  { label: 'Payment', icon: pay },
];

export const skipData = [
  {
    "id": 17933,
    "size": 4,
    "hire_period": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 278,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "allowed_on_road": true,
    "allows_heavy_waste": true
  },
  {
    "id": 17934,
    "size": 6,
    "hire_period": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 305,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "allowed_on_road": true,
    "allows_heavy_waste": true
  },
  {
    "id": 17935,
    "size": 8,
    "hire_period": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 375,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "allowed_on_road": true,
    "allows_heavy_waste": true
  },
  {
    "id": 17936,
    "size": 10,
    "hire_period": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 400,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "allowed_on_road": false,
    "allows_heavy_waste": false
  },
  {
    "id": 17937,
    "size": 12,
    "hire_period": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 439,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "allowed_on_road": false,
    "allows_heavy_waste": false
  },
  {
    "id": 17938,
    "size": 14,
    "hire_period": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 470,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "allowed_on_road": false,
    "allows_heavy_waste": false
  },
  {
    "id": 17939,
    "size": 16,
    "hire_period": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 496,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "allowed_on_road": false,
    "allows_heavy_waste": false
  },
  {
    "id": 15124,
    "size": 20,
    "hire_period": 14,
    "transport_cost": 248,
    "per_tonne_cost": 248,
    "price_before_vat": 992,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "allowed_on_road": false,
    "allows_heavy_waste": true
  },
  {
    "id": 15125,
    "size": 40,
    "hire_period": 14,
    "transport_cost": 248,
    "per_tonne_cost": 248,
    "price_before_vat": 992,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "allowed_on_road": false,
    "allows_heavy_waste": false
  }
]

// text animation variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};
