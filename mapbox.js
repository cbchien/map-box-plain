mapboxgl.accessToken = "REPLACE_WITH_MAPBOX_ACCESS_TOKEN";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/satellite-v9",
  center: [-94.67774, 39.28138],
  zoom: 18,
});

map.on("load", function () {
  map.addSource("places", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Armor</strong><p><img src="https://n9e-demo-web.s3.amazonaws.com/fps_object_detections/DJI_0207.JPG"> </p>',
            icon: "triangle-15",
          },
          geometry: {
            type: "Point",
            coordinates: [-94.67839, 39.28142],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Armor</strong><p><img src="https://n9e-demo-web.s3.amazonaws.com/fps_object_detections/DJI_0272_2.JPG"> </p>',
            icon: "triangle-15",
          },
          geometry: {
            type: "Point",
            coordinates: [-94.67832, 39.28151],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Backpack</strong><p><img src="https://n9e-demo-web.s3.amazonaws.com/fps_object_detections/DJI_0538_2.JPG"> </p>',
            icon: "suitcase-15",
          },
          geometry: {
            type: "Point",
            coordinates: [-94.67689, 39.28122],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Backpack</strong><p><img src="https://n9e-demo-web.s3.amazonaws.com/fps_object_detections/DJI_0526_2.JPG"> </p>',
            icon: "suitcase-15",
          },
          geometry: {
            type: "Point",
            coordinates: [-94.67721, 39.28185],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Clear</strong><p><img src="https://n9e-demo-web.s3.amazonaws.com/fps_object_detections/DJI_0988.JPG"> </p>',
            icon: "circle-stroked-15",
          },
          geometry: {
            type: "Point",
            coordinates: [-94.67773, 39.28159],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Clear</strong><p><img src="https://n9e-demo-web.s3.amazonaws.com/fps_object_detections/DJI_0988.JPG"> </p>',
            icon: "circle-stroked-15",
          },
          geometry: {
            type: "Point",
            coordinates: [-94.67771, 39.28155],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Rifle</strong><p><img src="https://n9e-demo-web.s3.amazonaws.com/fps_object_detections/DJI_0653.JPG"> </p>',
            icon: "circle-15",
          },
          geometry: {
            type: "Point",
            coordinates: [-94.67773, 39.28159],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Rifle</strong><p><img src="https://n9e-demo-web.s3.amazonaws.com/fps_object_detections/DJI_0693.JPG"> </p>',
            icon: "circle-15",
          },
          geometry: {
            type: "Point",
            coordinates: [-94.67771, 39.28155],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Revolver</strong><p><img src="https://n9e-demo-web.s3.amazonaws.com/fps_object_detections/DJI_0741_2.JPG"> </p>',
            icon: "star-15",
          },
          geometry: {
            type: "Point",
            coordinates: [-94.67774, 39.28138],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Revolver</strong><p><img src="https://n9e-demo-web.s3.amazonaws.com/fps_object_detections/DJI_0733_2.JPG"> </p>',
            icon: "star-15",
          },
          geometry: {
            type: "Point",
            coordinates: [-94.67766, 39.28151],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Season</strong><p><img src="https://n9e-demo-web.s3.amazonaws.com/fps_object_detections/DJI_0875.JPG"> </p>',
            icon: "campsite-15",
          },
          geometry: {
            type: "Point",
            coordinates: [-94.67779, 39.28149],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Season</strong><p><img src="https://n9e-demo-web.s3.amazonaws.com/fps_object_detections/DJI_0943.JPG"> </p>',
            icon: "campsite-15",
          },
          geometry: {
            type: "Point",
            coordinates: [-94.67774, 39.28156],
          },
        },
      ],
    },
  });

  map.addLayer({
    id: "places",
    type: "symbol",
    source: "places",
    layout: {
      "icon-image": "{icon}",
      "icon-allow-overlap": true,
    },
  });

  map.on("click", "places", function (e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup().setLngLat(coordinates).setHTML(description).addTo(map);
  });

  map.on("mouseenter", "places", function () {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "places", function () {
    map.getCanvas().style.cursor = "";
  });
});
