const images = [
  { src: "/images/home-strip-3.jpg", alt: "Infinity pool ocean view" },
  { src: "/images/home-strip-4.jpg", alt: "Ocean waves aerial" },
  { src: "/images/home-strip-6.jpg", alt: "Lush green nature" },
  { src: "/images/home-strip-5.jpg", alt: "Tropical coast" },
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
  