import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import { mockArticles } from '@/lib/data/data';

const Map = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Fix marker icons
    delete (L.Icon.Default.prototype as { _getIconUrl?: () => string })._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

  if (!isClient) {
    return <div className="h-screen w-full bg-gray-900 flex items-center justify-center">
      <p className="text-white">Loading map...</p>
    </div>;
  }

  const points = mockArticles;

  return (
    <MapContainer 
      center={[20, 0]} 
      zoom={2}
      minZoom={2}
      maxZoom={18}
      className="h-screen w-full z-10"
      attributionControl={false}
      zoomControl={false}
      style={{ background: '#1a1a1a' }}
    >
      <ZoomControl position={'topright'} />
      <TileLayer 
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; OpenStreetMap'
      />
      
      {points.map((point, idx) => (
        <Marker key={idx} position={[point.coordinates[0], point.coordinates[1]]}>
          <Popup>
            <div className="p-2">
              <h3 className="font-bold">{point.title}</h3>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
