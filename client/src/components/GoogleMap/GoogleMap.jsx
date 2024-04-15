import { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMap = () => {
  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
      version: "weekly",
      language: "en",
    });

    const initMap = async () => {
      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement } = await loader.importLibrary("marker");

      const map = new Map(document.getElementById("map"), {
        center: {
          lat: 48.445411498321945,
          lng: 30.544187263309613,
        },
        mapId: "4504f8b37365c3d0",
        zoom: 6,
      });

      [
        { lat: 47.87153233836161, lng: 34.99895435526829 },
        { lat: 48.44869166977983, lng: 35.03596249143256 },
        { lat: 50.00117330965277, lng: 36.32129711547172 },
        { lat: 50.445336561223804, lng: 30.494098645742827 },
        { lat: 46.48088099616034, lng: 30.719030344651067 },
        { lat: 49.8346588556145, lng: 24.022902470134532 },
      ].map((coord) => {
        return new AdvancedMarkerElement({
          map,
          position: {
            lat: coord.lat,
            lng: coord.lng,
          },
        });
      });
    };

    initMap();
  }, []);

  return <div id="map" />;
};

export default GoogleMap;
