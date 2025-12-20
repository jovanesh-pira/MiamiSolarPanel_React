export const PRODUCTS = [
  // 1) TOPCon 445–455W
  {
    id: "topcon-445-455",
    slug: "topcon-n-445-455w",
    name: "TOPCon (N-Type) 445–455W",
    brand: "MIAMI SOLAR",

    tech: "TOPCon N-Type",
    type: "TOPCon N-Type",

    wattMin: 445,
    wattMax: 455,
    featured: true,

    gallery: [
      "/images/products/OPCon_bifacial_solar_panel_double.webp",
      "/images/products/OPCon_bifacial_solar_panel_double.webp",
    ],

    datasheet: "/docs/_MS-445-455 EN.pdf",

    certifications: [
      "ISO 9001:2016",
      "ISO 14001:2016",
      "ISO 45001:2019",
      "ISO 5001:2019",
      "Certificate of Origin",
    ],

    warrantyYears: 15,

    desc: "High-efficiency N-type TOPCon module for residential and commercial rooftop systems.",

    features: [
      {
        icon: "pid",
        title: "Anti-PID Resistance",
        desc: "Enhanced resistance against potential-induced degradation for long-term performance.",
      },
      {
        icon: "lcoe",
        title: "Low LCOE",
        desc: "Lower shading losses and improved temperature behaviour help reduce the cost of energy.",
      },
      {
        icon: "load",
        title: "Reliable Construction",
        desc: "High-quality N-type cells and durable materials for stable output over the module lifetime.",
      },
      {
        icon: "warranty",
        title: "Long-Term Warranty",
        desc: "15-year product warranty and 30-year linear power output (Miami Solar standard).",
      },
    ],

    electrical: {
      notes: "",
    },

    contact: {
      company: "MIAMI SOLAR LLP",
      website: "https://www.miami-solar.org",
      email: "miami.pv.ok@gmail.com",
      phones: ["+1 689 256 4929", "+1 213 221 0170"],
      address: "3139 Cambria Ct., Orlando, FL 32825",
    },
  },

  // 2) TOPCon 610–625W Double-Glass Bifacial
  {
    id: "topcon-610-625",
    slug: "topcon-n-610-625w-bifacial",
    name: "TOPCon (N-Type) 610–625W Double-Glass Bifacial",
    brand: "MIAMI SOLAR",

    tech: "TOPCon N-Type • Double-Glass Bifacial",
    type: "TOPCon N-Type • Double-Glass Bifacial",

    wattMin: 610,
    wattMax: 625,
    featured: true,

    gallery: [
      "/images/products/OPCon_bifacial_solar_panel_610–625W_double-glass.webp ",
      "/images/products/OPCon_bifacial_solar_panel_610–625W_double-glass.webp",
    ],

    datasheet: "/docs/_MS-620-132DGNBBD-33-EN.pdf",

    certifications: [
      "ISO 9001:2016",
      "ISO 14001:2016",
      "ISO 45001:2019",
      "ISO 5001:2019",
      "Certificate of Origin",
    ],

    warrantyYears: 15,

    desc: "Double-glass bifacial N-type TOPCon module designed for utility-scale plants with high energy yield.",

    features: [
      {
        icon: "pid",
        title: "Anti-PID Certified",
        desc: "Passed 85°C / 85% RH anti-PID test for 192 hours for excellent long-term reliability.",
      },
      {
        icon: "bifacial",
        title: "Bifacial Power Gain",
        desc: "Double-glass bifacial design with backside power generation up to 80% of the front side.",
      },
      {
        icon: "load",
        title: "5400 Pa Load Resistance",
        desc: "Outstanding mechanical load rating: 5400 Pa wind and 5400 Pa snow load.",
      },
      {
        icon: "warranty",
        title: "15/30 Year Warranty",
        desc: "15-year product warranty and 30-year linear power performance warranty.",
      },
    ],

    mechanical: {
      dimensions_mm: "2382 × 1134 × 30",
      cells: "132 (6×11×2)",
      glass: "2.0mm + 2.0mm, AR coating, low iron, tempered",
      junctionBox: "IP68, 3 diodes",
      connector: "MC4 compatible",
      weight_kg: 31.7,
      pallet: "36 pcs / pallet (720 pcs / 40HQ)",
      cable: "Portrait: (+) 400 mm / (−) 200 mm (or custom), 4 mm²",
    },

    ratings: {
      operatingTemp: "-40°C ~ +85°C",
      maxSystemVoltage: "DC 1500 V (IEC)",
      maxSeriesFuse: "30 A",
      tempCoeffPmax: "-0.29%/°C",
      tempCoeffVoc: "-0.25%/°C",
      tempCoeffIsc: "+0.046%/°C",
      NOCT: "43 ± 2°C",
    },

    models: [
      { code: "MS-610M-132DGN", pmax: 610 },
      { code: "MS-615M-132DGN", pmax: 615 },
      { code: "MS-620M-132DGN", pmax: 620 },
      { code: "MS-625M-132DGN", pmax: 625 },
    ],

    contact: {
      company: "MIAMI SOLAR LLP",
      website: "https://www.miami-solar.org",
      email: "miami.pv.ok@gmail.com",
      phones: ["+1 689 256 4929", "+1 213 221 0170"],
      address: "3139 Cambria Ct., Orlando, FL 32825",
    },
  },

  // 3) TOPCon 700–715W Double-Glass Bifacial
  {
    id: "topcon-700-715",
    slug: "topcon-n-700-715w-bifacial",
    name: "TOPCon (N-Type) 700–715W Double-Glass Bifacial",
    brand: "MIAMI SOLAR",

    tech: "TOPCon N-Type • Double-Glass Bifacial",
    type: "TOPCon N-Type • Double-Glass Bifacial",

    wattMin: 700,
    wattMax: 715,
    featured: false,

    gallery: [
      "/images/products/TOPCon_solar_panel_700–715W_double.webp",
      "/images/products/TOPCon_solar_panel_700–715W_double.webp",
    ],

    datasheet: "/docs/_MS-700-132DGNBBD-33-EN.pdf",

    certifications: [
      "ISO 9001:2016",
      "ISO 14001:2016",
      "ISO 45001:2019",
      "ISO 5001:2019",
      "Certificate of Origin",
    ],

    warrantyYears: 15,

    desc: "Large-format double-glass bifacial module delivering up to 715 W, ideal for large solar farms and utility projects.",

    features: [
      {
        icon: "pid",
        title: "Advanced Anti-PID Performance",
        desc: "Successfully passed 85°C / 85% RH anti-PID test for 192 hours.",
      },
      {
        icon: "bifacial",
        title: "High Bifacial Gain",
        desc: "Bifacial mono design with rear-side efficiency up to 80% of the front side.",
      },
      {
        icon: "load",
        title: "5400 Pa Wind & Snow Load",
        desc: "Outstanding mechanical durability for harsh site conditions.",
      },
      {
        icon: "warranty",
        title: "15/30 Year Warranty",
        desc: "15-year product warranty and 30-year linear power performance guarantee.",
      },
    ],

    mechanical: {
      dimensions_mm: "2384 × 1303 × 33",
      cells: "132 (6×11×2)",
      glass: "2.0mm + 2.0mm, AR coating, low iron, tempered",
      junctionBox: "IP68, 3 diodes",
      connector: "MC4 compatible",
      weight_kg: 37.1,
      pallet: "33 pcs / pallet (594 pcs / 40HQ)",
    },

    ratings: {
      operatingTemp: "-40°C ~ +85°C",
      maxSystemVoltage: "DC 1500 V (IEC)",
      maxSeriesFuse: "35 A",
      tempCoeffPmax: "-0.29%/°C",
      tempCoeffVoc: "-0.25%/°C",
      tempCoeffIsc: "+0.046%/°C",
      NOCT: "43 ± 2°C",
    },

    models: [
      { code: "UL-700M-132DGN", pmax: 700 },
      { code: "UL-705M-132DGN", pmax: 705 },
      { code: "UL-710M-132DGN", pmax: 710 },
      { code: "UL-715M-132DGN", pmax: 715 },
    ],

    contact: {
      company: "MIAMI SOLAR LLP",
      website: "https://www.miami-solar.org",
      email: "miami.pv.ok@gmail.com",
      phones: ["+1 689 256 4929", "+1 213 221 0170"],
      address: "3139 Cambria Ct., Orlando, FL 32825",
    },
  },

  // 4) MS-580M-144DGN (580 W monofacial)
  {
    id: "ms-580m-144dgn",
    slug: "ms-580m-144dgn",
    name: "MS-580M-144DGN",
    brand: "MIAMI SOLAR",

    tech: "High-power mono module",
    type: "High-power monofacial module",

    wattMin: 580,
    wattMax: 580,
    featured: false,

    gallery: [
      "/images/products/ms-580m-144dgn.webp",
      "/images/products/ms-580m-144dgn.webp",
    ],

    datasheet: "/docs/_MS-580M-144DGN ENG.pdf",

    certifications: [
      "ISO 9001:2016",
      "ISO 14001:2016",
      "ISO 45001:2019",
      "ISO 5001:2019",
    ],

    warrantyYears: 15,

    desc: "580 W high-power mono module suitable for commercial and industrial rooftops and utility ground-mount projects.",

    features: [
      {
        icon: "pid",
        title: "Anti-PID Certified",
        desc: "Tested under 85°C and 85% relative humidity conditions for long-term stability.",
      },
      {
        icon: "lcoe",
        title: "Lower LCOE",
        desc: "Higher efficiency and reduced resistive losses to lower the cost per kWh.",
      },
      {
        icon: "load",
        title: "5400 Pa Load Resistance",
        desc: "Designed to withstand 5400 Pa wind and snow loads for demanding sites.",
      },
      {
        icon: "warranty",
        title: "15/30 Year Warranty",
        desc: "15-year product quality warranty and 30-year linear power performance warranty.",
      },
    ],

    mechanical: {
      // TODO: verify with datasheet
      dimensions_mm: "2278 × 1134 × 30",
      cells: "144 (6×12x12)",
      glass: "4.0mm , AR coating, low iron, tempered",
      junctionBox: "IP68, 3 diodes",
      connector: "MC4 compatible",
      weight_kg: 31.7,
      pallet: "31 pcs /Box (72psc) /pallet (700 pcs / 40HQ)",
      cable: "Portrait: (+) 400 mm / (−) 200 mm ",
    },

    ratings: {
      // These values follow Miami Solar N-type modules pattern – check once with PDF
      operatingTemp: "-40°C ~ +85°C",
      maxSystemVoltage: "DC 1500 V (IEC)",
      maxSeriesFuse: "30 A",
      tempCoeffPmax: "-0.29%/°C",
      tempCoeffVoc: "-0.25%/°C",
      tempCoeffIsc: "+0.046%/°C",
      NOCT: "43 ± 2°C",
    },

    models: [
      {
        code: "MS-580M-144DGN",
        pmax: 580,
      },
    ],

    contact: {
      company: "MIAMI SOLAR LLP",
      website: "https://www.miami-solar.org",
      email: "miami.pv.ok@gmail.com",
      phones: ["+1 689 256 4929", "+1 213 221 0170"],
      address: "3139 Cambria Ct., Orlando, FL 32825",
    },
  },
];
