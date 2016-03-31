//make the map object that takes in a zoom and latlng
var Map = function( latLng, zoom ){
  this.googleMap = new google.maps.Map(document.getElementById('map'), {
    center: latLng,
    zoom: zoom
  })

  this.pan = function (latlng) {
    this.googleMap.panTo(latlng);
  }

  // this.addMarker = function( latLng, label, title ){
  //   //this takes an object as an argument, it needs to know what map to display on
  //   var marker = new google.maps.Marker({
  //     position: latLng, 
  //     map: this.googleMap,
  //     //step12 adding a label to a marker
  //     label: label,
  //     draggable: true,
  //     animation: google.maps.Animation.DROP,
  //     title: title
  //   });
  //   //step 15 addin for info window.
  //   return marker;
  // }

  // this.bindClick = function(){
  //   var counter = 1
  //   google.maps.event.addListener(this.googleMap, 'click', function( userClick ){
  //      var lat = userClick.latLng.lat();
  //      var lng= userClick.latLng.lng();
  //      this.addMarker({lat: lat, lng: lng}, counter.toString() )
  //      counter += 1
  //   }.bind(this))
  // }

  // this.addInfoWindow = function(latLng, title){
  //   var marker= this.addMarker(latLng, "1", title);
  //   marker.addListener('click', function(){
  //     //the InfoWindow is a constructor
  //     var infoWindow = new google.maps.InfoWindow({
  //       content: this.title
  //     });
  //     infoWindow.open(this.map, marker)
  //   });
  // }





};