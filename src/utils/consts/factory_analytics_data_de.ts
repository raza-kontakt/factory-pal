import type { Shift } from "../../types/Shift";

const data: Shift[] = [
  {
    id: "WEB-01",
    name: "Schicht LEGO Spider-Man",
    isComplete: true,
    date: "2025-01-01T00:00:00Z",
    description: "Die Schicht der LEGO Spider-Man Figuren Produktionslinie",
    logs: [
      {
        id: "oee",
        label: "Gesamtanlageneffizienz",
        value: 0.68,
        type: "percentage",
        description: "Die Gesamtanlageneffizienz in %",
        category: "efficiency",
      },
      {
        id: "sl",
        label: "Geschwindigkeitsverlust",
        value: -10.5,
        type: "number",
        description: "Der Geschwindigkeitsverlust der Linie",
        category: "efficiency",
      },
      {
        id: "lbp",
        label: "Verlust vor Paletten",
        value: -268,
        type: "number",
        description:
          "Verlust der produzierten Waren vor Erreichen des Palettierers",
        category: "efficiency",
      },
      {
        id: "cln_shift",
        label: "Reinigung in Schicht",
        value: 2280,
        type: "secs",
        description:
          "Zeit (in Sekunden) für die Reinigung der Maschinen während der letzten Schicht",
        category: "shift",
      },
      {
        id: "shift_duration",
        label: "Schichtdauer",
        value: 8,
        type: "hours",
        description: "Dauer der letzten Schicht in Stunden",
        category: "shift",
      },
      {
        id: "unexplained",
        label: "Ungeklärte Ausfallzeit",
        value: 180,
        type: "secs",
        description:
          "Die Ausfallzeit (in Sekunden) durch undokumentierte Gründe",
        category: "downtime",
      },
      {
        id: "mech_problems",
        label: "Mechanische Probleme",
        value: 1210,
        type: "secs",
        description: "Die Ausfallzeit (in Sekunden) durch mechanische Probleme",
        category: "downtime",
      },
    ],
  },
  {
    id: "GOTHAM",
    name: "Schicht LEGO Batman",
    isComplete: true,
    date: "2025-01-02T00:00:00Z",
    description: "Die zweite Schicht der LEGO Batman Figuren Produktionslinie",
    logs: [
      {
        id: "oee",
        label: "Gesamtanlageneffizienz",
        value: 0.7,
        type: "percentage",
        description: "Die Gesamtanlageneffizienz in %",
        category: "efficiency",
      },
      {
        id: "sl",
        label: "Geschwindigkeitsverlust",
        value: -8,
        type: "number",
        description: "Der Geschwindigkeitsverlust der Linie",
        category: "efficiency",
      },
      {
        id: "lbp",
        label: "Verlust vor Paletten",
        value: -200,
        type: "number",
        description:
          "Verlust der produzierten Waren vor Erreichen des Palettierers",
        category: "efficiency",
      },
      {
        id: "cln_shift",
        label: "Reinigung in Schicht",
        value: 1800,
        type: "secs",
        description:
          "Zeit für die Reinigung der Maschinen während der letzten Schicht",
        category: "shift",
      },
      {
        id: "shift_duration",
        label: "Schichtdauer",
        value: 7,
        type: "hours",
        description: "Dauer der letzten Schicht in Stunden",
        category: "shift",
      },
      {
        id: "unexplained",
        label: "Ungeklärte Ausfallzeit",
        value: 150,
        type: "secs",
        description: "Die Ausfallzeit durch undokumentierte Gründe",
        category: "downtime",
      },
      {
        id: "mech_problems",
        label: "Mechanische Probleme",
        value: 900,
        type: "secs",
        description: "Die Ausfallzeit durch mechanische Probleme",
        category: "downtime",
      },
    ],
  },
  {
    id: "AMAZON",
    name: "Schicht LEGO Wonder Woman",
    isComplete: true,
    date: "2025-01-03T00:00:00Z",
    description:
      "Die dritte Schicht der LEGO Wonder Woman Figuren Produktionslinie",
    logs: [
      {
        id: "oee",
        label: "Gesamtanlageneffizienz",
        value: 0.72,
        type: "percentage",
        description: "Die Gesamtanlageneffizienz in %",
        category: "efficiency",
      },
      {
        id: "sl",
        label: "Geschwindigkeitsverlust",
        value: -6,
        type: "number",
        description: "Der Geschwindigkeitsverlust der Linie",
        category: "efficiency",
      },
      {
        id: "lbp",
        label: "Verlust vor Paletten",
        value: -150,
        type: "number",
        description:
          "Verlust der produzierten Waren vor Erreichen des Palettierers",
        category: "efficiency",
      },
      {
        id: "cln_shift",
        label: "Reinigung in Schicht",
        value: 2000,
        type: "secs",
        description:
          "Zeit für die Reinigung der Maschinen während der letzten Schicht",
        category: "shift",
      },
      {
        id: "shift_duration",
        label: "Schichtdauer",
        value: 8,
        type: "hours",
        description: "Dauer der letzten Schicht in Stunden",
        category: "shift",
      },
      {
        id: "unexplained",
        label: "Ungeklärte Ausfallzeit",
        value: 120,
        type: "secs",
        description: "Die Ausfallzeit durch undokumentierte Gründe",
        category: "downtime",
      },
      {
        id: "mech_problems",
        label: "Mechanische Probleme",
        value: 1100,
        type: "secs",
        description: "Die Ausfallzeit durch mechanische Probleme",
        category: "downtime",
      },
    ],
  },
  {
    id: "STARK",
    name: "Schicht LEGO Iron Man",
    isComplete: true,
    date: "2025-01-04T00:00:00Z",
    description:
      "Die vierte Schicht der LEGO Iron Man Figuren Produktionslinie",
    logs: [
      {
        id: "oee",
        label: "Gesamtanlageneffizienz",
        value: 0.74,
        type: "percentage",
        description: "Die Gesamtanlageneffizienz in %",
        category: "efficiency",
      },
      {
        id: "sl",
        label: "Geschwindigkeitsverlust",
        value: -4,
        type: "number",
        description: "Der Geschwindigkeitsverlust der Linie",
        category: "efficiency",
      },
      {
        id: "lbp",
        label: "Verlust vor Paletten",
        value: -100,
        type: "number",
        description:
          "Verlust der produzierten Waren vor Erreichen des Palettierers",
        category: "efficiency",
      },
      {
        id: "cln_shift",
        label: "Reinigung in Schicht",
        value: 1500,
        type: "secs",
        description:
          "Zeit für die Reinigung der Maschinen während der letzten Schicht",
        category: "shift",
      },
      {
        id: "shift_duration",
        label: "Schichtdauer",
        value: 7,
        type: "hours",
        description: "Dauer der letzten Schicht in Stunden",
        category: "shift",
      },
      {
        id: "unexplained",
        label: "Ungeklärte Ausfallzeit",
        value: 90,
        type: "secs",
        description: "Die Ausfallzeit durch undokumentierte Gründe",
        category: "downtime",
      },
      {
        id: "mech_problems",
        label: "Mechanische Probleme",
        value: 800,
        type: "secs",
        description: "Die Ausfallzeit durch mechanische Probleme",
        category: "downtime",
      },
    ],
  },
  {
    id: "SHIELD",
    name: "Schicht LEGO Captain America",
    isComplete: true,
    date: "2025-01-05T00:00:00Z",
    description:
      "Die fünfte Schicht der LEGO Captain America Figuren Produktionslinie",
    logs: [
      {
        id: "oee",
        label: "Gesamtanlageneffizienz",
        value: 0.76,
        type: "percentage",
        description: "Die Gesamtanlageneffizienz in %",
        category: "efficiency",
      },
      {
        id: "sl",
        label: "Geschwindigkeitsverlust",
        value: -2,
        type: "number",
        description: "Der Geschwindigkeitsverlust der Linie",
        category: "efficiency",
      },
      {
        id: "lbp",
        label: "Verlust vor Paletten",
        value: -50,
        type: "number",
        description:
          "Verlust der produzierten Waren vor Erreichen des Palettierers",
        category: "efficiency",
      },
      {
        id: "cln_shift",
        label: "Reinigung in Schicht",
        value: 1200,
        type: "secs",
        description:
          "Zeit für die Reinigung der Maschinen während der letzten Schicht",
        category: "shift",
      },
      {
        id: "shift_duration",
        label: "Schichtdauer",
        value: 8,
        type: "hours",
        description: "Dauer der letzten Schicht in Stunden",
        category: "shift",
      },
      {
        id: "unexplained",
        label: "Ungeklärte Ausfallzeit",
        value: 60,
        type: "secs",
        description: "Die Ausfallzeit durch undokumentierte Gründe",
        category: "downtime",
      },
      {
        id: "mech_problems",
        label: "Mechanische Probleme",
        value: 700,
        type: "secs",
        description: "Die Ausfallzeit durch mechanische Probleme",
        category: "downtime",
      },
    ],
  },
];

export default data;
