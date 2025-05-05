
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const DomainMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Function to initialize the map
    const initializeMap = (token: string) => {
      mapboxgl.accessToken = token;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: [6.3838, 43.6036], // Ampus, Var coordinates
        zoom: 9
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.current.on('load', () => {
        if (!map.current) return;

        // Add marker for Ampus (main location)
        new mapboxgl.Marker({ color: '#738c4a' })
          .setLngLat([6.3838, 43.6036])
          .setPopup(new mapboxgl.Popup().setHTML("<h3>Domaine du Clochet</h3><p>Ampus, Var (83)</p>"))
          .addTo(map.current);

        // Add markers for nearby attractions
        const attractions = [
          { name: "Gorges du Verdon", coordinates: [6.3278, 43.7470], distance: "30 km" },
          { name: "Lac de Sainte-Croix", coordinates: [6.1425, 43.7720], distance: "35 km" },
          { name: "Golfe de Saint-Tropez", coordinates: [6.6400, 43.2677], distance: "45 km" },
          { name: "Cannes", coordinates: [7.0175, 43.5513], distance: "60 km" },
          { name: "Fréjus (Côte méditerranéenne)", coordinates: [6.7373, 43.4332], distance: "53 min" }
        ];

        attractions.forEach(attraction => {
          new mapboxgl.Marker({ color: '#c18e4e', scale: 0.8 })
            .setLngLat(attraction.coordinates)
            .setPopup(new mapboxgl.Popup().setHTML(`<h3>${attraction.name}</h3><p>${attraction.distance}</p>`))
            .addTo(map.current!);
        });

        // Add markers for accessibility points
        const accessPoints = [
          { name: "Aéroport Nice Côte d'Azur", coordinates: [7.2661, 43.6584], info: "90 km (1h30)" },
          { name: "Gare TGV Les Arcs-Draguignan", coordinates: [6.4798, 43.4627], info: "35 km (40 min)" },
          { name: "Autoroute A8", coordinates: [6.5370, 43.4776], info: "30 km" }
        ];

        accessPoints.forEach(point => {
          new mapboxgl.Marker({ color: '#dcc294', scale: 0.8 })
            .setLngLat(point.coordinates)
            .setPopup(new mapboxgl.Popup().setHTML(`<h3>${point.name}</h3><p>${point.info}</p>`))
            .addTo(map.current!);
        });
      });
    };

    // Ask user for Mapbox token
    const userToken = prompt("Veuillez entrer votre token Mapbox public (créez un compte sur mapbox.com pour l'obtenir):");
    if (userToken) {
      setMapboxToken(userToken);
      initializeMap(userToken);
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [mapboxToken]);

  if (!mapboxToken) {
    return (
      <div className="h-48 rounded-md flex flex-col items-center justify-center bg-cream-50 p-4 text-center">
        <p className="text-olive-700 mb-2">Carte interactive nécessite un token Mapbox</p>
        <button 
          onClick={() => {
            const token = prompt("Veuillez entrer votre token Mapbox public:");
            if (token) setMapboxToken(token);
          }}
          className="px-4 py-2 bg-olive-600 text-white rounded hover:bg-olive-700"
        >
          Entrer un token Mapbox
        </button>
      </div>
    );
  }

  return (
    <div ref={mapContainer} className="h-48 rounded-md" />
  );
};

export default DomainMap;
