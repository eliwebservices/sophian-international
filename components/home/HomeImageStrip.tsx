const images = [
  { src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80&fit=crop", alt: "Infinity pool ocean view" },
  { src: "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=600&q=80&fit=crop", alt: "Ocean waves aerial" },
  { src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&q=80&fit=crop", alt: "Lush green nature" },
  { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80&fit=crop", alt: "Tropical coast" },
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
  