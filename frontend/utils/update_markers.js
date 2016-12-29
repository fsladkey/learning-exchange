const MARKER_URL = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'

export default function updateMarkers(component, objects) {
  component.markers.forEach(marker => marker.setMap(null))
  component.markers = []
  objects.forEach(object => {
    const latLng = { lat: object.get('latitude'), lng: object.get('longitude') };
    if (latLng.lat && latLng.lng) {
      const marker = new google.maps.Marker({
        position: latLng,
        title: object.get('title'),
        map: component.map
      });
      component.markers.push(marker)
    }
  })
  component.cluster && component.cluster.clearMarkers();
  component.cluster = new MarkerClusterer(
    component.map,
    component.markers,
    { imagePath: MARKER_URL }
  );
}
