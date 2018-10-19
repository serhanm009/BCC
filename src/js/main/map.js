var map, map2;

function myMap() {
	var mapProp = {
		center:new google.maps.LatLng(40.4093,49.8671),
		zoom:15,
	};
 map=new google.maps.Map(document.getElementById("myMap"),mapProp);
 map2=new google.maps.Map(document.getElementById("myMap"),mapProp);
}

 