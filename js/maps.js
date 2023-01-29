const myMap = () => {
    const mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

myMap();


    // var marker = new google.maps.Marker({
    //     position:myCenter,
    //     icon:'pinkball.png'
    //   });
      
    //   marker.setMap(map);