"use client";

import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Link from "next/link";

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-73.989277, 40.7598419], // Longitude, Latitude
      zoom: 15,
    });

    new mapboxgl.Marker().setLngLat([-73.989277, 40.7598419]).addTo(map);

    return () => map.remove();
  }, []);

  return (
    <Link
      href="https://maps.app.goo.gl/bpu3qn4q62dAsJNv7"
      target="_blank"
      className="absolute -right-[300px] -bottom-[280px] z-100 hidden xl:block"
    >
      <div
        ref={mapContainerRef}
        className="border-secondary-border h-[350px] w-[350px] -rotate-[10deg] border-[14px]"
      />
    </Link>
  );
};

export default Map;
