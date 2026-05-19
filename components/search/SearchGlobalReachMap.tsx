"use client";
import { useState, useCallback } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import type { MarkerData } from "./SearchGlobalReach";

interface Props {
  markers: MarkerData[];
}

export default function SearchGlobalReachMap({ markers }: Props) {
  const [hoveredMarker, setHoveredMarker] = useState<MarkerData | null>(null);

  const MAPTILER_KEY = process.env.NEXT_PUBLIC_MAPTILER_KEY;
  const mapStyle = `https://api.maptiler.com/maps/dataviz-light/style.json?key=${MAPTILER_KEY}`;

  return (
    <div
      className="relative border border-gold/25 overflow-hidden"
      style={{ height: "520px" }}
    >
      <Map
        initialViewState={{
          longitude: 95,
          latitude: 25,
          zoom: 2.8,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle={mapStyle}
        scrollZoom={false}
        dragRotate={false}
        touchZoomRotate={false}
        attributionControl={false}
      >
        <NavigationControl position="top-right" showCompass={false} />

        {markers.map((m) => (
          <Marker
            key={m.name}
            longitude={m.lng}
            latitude={m.lat}
            anchor="bottom"
          >
            <div
              className="relative cursor-pointer group"
              onMouseEnter={() => setHoveredMarker(m)}
              onMouseLeave={() => setHoveredMarker(null)}
            >
              {/* Pulse ring — China primary only */}
              {m.primary && (
                <span
                  className="absolute rounded-full animate-ping"
                  style={{
                    width: "28px",
                    height: "28px",
                    top: "-6px",
                    left: "-6px",
                    backgroundColor: "rgba(144,142,102,0.25)",
                  }}
                />
              )}

              {/* Pin */}
              <svg
                width="22"
                height="28"
                viewBox="0 0 20 26"
                fill="none"
                className="drop-shadow-lg group-hover:scale-125 transition-transform duration-200"
              >
                <path
                  d="M10 0C4.477 0 0 4.477 0 10C0 17.5 10 26 10 26C10 26 20 17.5 20 10C20 4.477 15.523 0 10 0Z"
                  fill={m.primary ? "#908E66" : "#022741"}
                  opacity={m.primary ? 1 : 0.8}
                />
                <circle cx="10" cy="10" r="3.5" fill="white" />
              </svg>
            </div>
          </Marker>
        ))}

        {/* Hover popup */}
        {hoveredMarker && (
          <Popup
            longitude={hoveredMarker.lng}
            latitude={hoveredMarker.lat}
            anchor="bottom"
            offset={[0, -32] as [number, number]}
            onClose={() => setHoveredMarker(null)}
            closeButton={false}
            closeOnClick={false}
            className="sophian-popup"
          >
            <div
              style={{
                background: "#022741",
                borderLeft: "2px solid #908E66",
                padding: "10px 14px",
                minWidth: "140px",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                {hoveredMarker.name}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#908E66",
                  margin: "4px 0 0",
                }}
              >
                {hoveredMarker.region}
              </p>
            </div>
          </Popup>
        )}
      </Map>

      {/* Legend */}
      <div className="absolute bottom-5 left-5 bg-white/95 border border-gold/20 px-5 py-4 z-10">
        <div className="flex items-center gap-3 mb-2">
          <svg width="12" height="16" viewBox="0 0 20 26" fill="none">
            <path d="M10 0C4.477 0 0 4.477 0 10C0 17.5 10 26 10 26C10 26 20 17.5 20 10C20 4.477 15.523 0 10 0Z" fill="#908E66"/>
            <circle cx="10" cy="10" r="3.5" fill="white"/>
          </svg>
          <span className="font-display text-[9px] font-semibold tracking-[0.2em] uppercase text-navy">
            Primary — Greater China
          </span>
        </div>
        <div className="flex items-center gap-3">
          <svg width="12" height="16" viewBox="0 0 20 26" fill="none">
            <path d="M10 0C4.477 0 0 4.477 0 10C0 17.5 10 26 10 26C10 26 20 17.5 20 10C20 4.477 15.523 0 10 0Z" fill="#022741" opacity="0.8"/>
            <circle cx="10" cy="10" r="3.5" fill="white"/>
          </svg>
          <span className="font-display text-[9px] font-semibold tracking-[0.2em] uppercase text-navy">
            Asia Pacific & Global
          </span>
        </div>
      </div>

      <style>{`
        .sophian-popup .maplibregl-popup-content {
          padding: 0 !important;
          border-radius: 0 !important;
          background: transparent !important;
          box-shadow: 0 8px 32px rgba(2,39,65,0.3) !important;
        }
        .sophian-popup .maplibregl-popup-tip {
          border-top-color: #022741 !important;
        }
        .maplibregl-ctrl-group {
          border-radius: 0 !important;
          border: 1px solid rgba(144,142,102,0.25) !important;
          box-shadow: none !important;
        }
        .maplibregl-ctrl button {
          border-radius: 0 !important;
        }
      `}</style>
    </div>
  );
}
