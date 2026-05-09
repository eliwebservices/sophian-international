const images = [
  { src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80&fit=crop", alt: "Infinity pool ocean view" },
  { src: "https://res.cloudinary.com/dn70tysny/image/upload/v1778287283/receptionist-providing-luxury-service_50_zoclh8.jpg", alt: "Ocean waves aerial" },
  { src: "https://res.cloudinary.com/dn70tysny/image/upload/v1778287777/beautiful-umbrella-chair-around-outdoor-swimming-pool-hotel-resort-holiday-vacation-travel_50_rsr34c.jpg", alt: "Lush green nature" },
  { src: "https://res.cloudinary.com/dn70tysny/image/upload/v1778287284/holiday-landscape-relaxation-travel-view_50_x0bivu.jpg", alt: "Tropical coast" },
];
  
  export default function HomeImageStrip() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 h-72 md:h-80">
        {images.map((img, i) => (
          <div key={i} className="relative overflow-hidden group">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/10 transition-colors duration-500" />
          </div>
        ))}
      </div>
    );
  }
  