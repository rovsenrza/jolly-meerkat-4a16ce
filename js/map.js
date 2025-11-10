function init() {
    let center = [55.764111, 37.551358];
    let map = new ymaps.Map("map", {
      center: center,
      zoom: 15,
    });

    let placemark = new ymaps.Placemark(
      center,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "/img/marker.webp",
        iconImageSize: [110, 110],
        iconImageOffset: [-42, -65],
      }
    );

    map.controls.remove("geolocationControl");
    map.controls.remove("searchControl");
    map.controls.remove("trafficControl");
    map.controls.remove("typeSelector");
    map.controls.remove("fullscreenControl");
    map.controls.remove("rulerControl");
    map.geoObjects.add(placemark);
  }
  ymaps.ready(init);