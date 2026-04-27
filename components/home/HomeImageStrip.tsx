const images = [
    { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80&fit=crop", alt: "Luxury hotel lobby" },
    { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80&fit=crop", alt: "Hotel team" },
    { src: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?w=600&q=80&fit=crop", alt: "Hospitality leadership" },
    { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80&fit=crop", alt: "Luxury resort" },
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
  