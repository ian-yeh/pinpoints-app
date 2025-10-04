import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';

import { mockData } from '@/lib/data/data';
import { Issue } from '@/lib/types/article';
import IssuePopup from '@/components/IssuePopup';

const Map = () => {
  const [isClient, setIsClient] = useState(false);
  const [points, setPoints] = useState<Record<string, Issue>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsClient(true);
    
    // Fix marker icons
    delete (L.Icon.Default.prototype as { _getIconUrl?: () => string })._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });

    // Fetch articles
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/articles'); // Adjust your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        setPoints(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
        // Fallback to mock data if needed
        setPoints(mockData);
        console.log(error)
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [error]);

  if (!isClient) {
    return <div className="h-screen w-full bg-gray-900 flex items-center justify-center">
      <p className="text-white">Loading map...</p>
    </div>;
  }

  if (loading) {
    return <div className="h-screen w-full bg-gray-900 flex items-center justify-center">
      <p className="text-white">Loading articles...</p>
    </div>;
  }

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
      
      {Object.values(points).map((point: Issue, idx: number) => (
        <Marker key={idx} position={[point.coordinates[0], point.coordinates[1]]}>
          <Popup>
            <IssuePopup 
              title={point.title}
              summary={point.summary}
            />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
