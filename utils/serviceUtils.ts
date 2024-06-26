import { ServiceType } from "@/types";

export const serviceDurations: { [key in ServiceType]: number } = {
  [ServiceType.CLASSIC]: 180,
  [ServiceType.TWO_D]: 150,
  [ServiceType.THREE_D]: 120,
  [ServiceType.FOUR_D]: 90,
  [ServiceType.CORRECTION]: 45,
  [ServiceType.HYBRID]: 160,
  [ServiceType.NATURAL]: 140,
  [ServiceType.LIGHT_VOLUME]: 130,
  [ServiceType.VOLUME]: 110,
  [ServiceType.MEGA_VOLUME]: 100,
  [ServiceType.LASHES_REMOVAL]: 30,
  [ServiceType.EXPRESS_LASHES]: 60,
  [ServiceType.BOTTOM_LASHES]: 45,
  
  // Brow service durations
  [ServiceType.BROW_SHAPING]: 30,
  [ServiceType.BROW_TINTING]: 45,
  [ServiceType.BROW_LAMINATION]: 60,
};

export const ServiceTitles: { [key in ServiceType]: string } = {
  [ServiceType.CLASSIC]: 'Classic',
  [ServiceType.TWO_D]: 'Hybrid (1-2D)',
  [ServiceType.THREE_D]: 'Natural (2D)',
  [ServiceType.FOUR_D]: 'Light volume (3D)',
  [ServiceType.CORRECTION]: 'Volume (4-5D)',
  [ServiceType.HYBRID]: 'Hybrid (1-2D)',
  [ServiceType.NATURAL]: 'Natural (2D)',
  [ServiceType.LIGHT_VOLUME]: 'Light volume (3D)',
  [ServiceType.VOLUME]: 'Volume (4-5D)',
  [ServiceType.MEGA_VOLUME]: 'Mega volume (6D+)',
  [ServiceType.LASHES_REMOVAL]: 'Lashes removal',
  [ServiceType.EXPRESS_LASHES]: 'Express lashes',
  [ServiceType.BOTTOM_LASHES]: 'Bottom lashes',

   // Brow service titles
  [ServiceType.BROW_SHAPING]: "Brow Shaping",
  [ServiceType.BROW_TINTING]: "Brow Tinting",
  [ServiceType.BROW_LAMINATION]: "Brow Lamination"
};
