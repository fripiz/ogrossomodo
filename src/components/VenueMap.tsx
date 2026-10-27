"use client";

// Carte Leaflet centrée sur la guinguette (fonds OpenStreetMap).

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";

type Props = { lat: number; lng: number; label: string };

export default function VenueMap({ lat, lng, label }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    // Pas de zoom à la molette : la page reste facile à faire défiler.
    const map = L.map(ref.current, { center: [lat, lng], zoom: 14, scrollWheelZoom: false });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© les contributeurs d'OpenStreetMap",
      maxZoom: 19,
    }).addTo(map);
    L.marker([lat, lng], {
      icon: L.divIcon({ className: "venue-marker", iconSize: [28, 28] }),
      title: label,
      alt: label,
    })
      .addTo(map)
      .bindTooltip(label, { permanent: true, direction: "top", offset: [0, -16] });
    return () => {
      map.remove();
    };
  }, [lat, lng, label]);

  return <div ref={ref} className="h-full min-h-72 w-full" role="region" aria-label={`Carte : ${label}`} />;
}
