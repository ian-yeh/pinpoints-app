import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';

import { mockData } from '@/lib/data/data';
import { Issue } from '@/lib/types/article';
import IssuePopup from '@/components/IssuePopup';

import { motion } from 'framer-motion';

const MapController = ({ disabled }: { disabled: boolean }) => {
  const map = useMap();
  
  useEffect(() => {
    if (disabled) {
      map.dragging.disable();
      map.touchZoom.disable();
      map.doubleClickZoom.disable();
      map.scrollWheelZoom.disable();
      map.boxZoom.disable();
      map.keyboard.disable();
    } else {
      map.dragging.enable();
      map.touchZoom.enable();
      map.doubleClickZoom.enable();
      map.scrollWheelZoom.enable();
      map.boxZoom.enable();
      map.keyboard.enable();
    }
  }, [disabled, map]);
  
  return null;
};

const Map = () => {
  const [isClient, setIsClient] = useState(false);
  const [points, setPoints] = useState<Record<string, Issue>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

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
      <MapController disabled={!!selectedIssue} />
      <ZoomControl position={'topright'} />
      <TileLayer 
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; OpenStreetMap'
      />

      {Object.values(points).map((point: Issue, idx: number) => (
        <Marker
          key={idx}
          position={[point.coordinates[0], point.coordinates[1]]}
          eventHandlers={{
            click: () => setSelectedIssue(point),
          }}
        />
      ))}

      {selectedIssue && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          onPointerMove={(e) => e.stopPropagation()}
        >
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black"
            onClick={() => setSelectedIssue(null)}
          />

          {/* Modal content */}
          <div 
            className="relative max-w-6xl w-full ml-80 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <IssuePopup {...selectedIssue} />
          </div>
        </div>
      )}
    </MapContainer>
  );
};

export default Map;
