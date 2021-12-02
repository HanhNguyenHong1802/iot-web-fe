import React, { useEffect, useState } from 'react';
import { Search } from 'react-feather';
import ReactMapGL, { GeolocateControl } from 'react-map-gl';
import tw from 'twin.macro';

const HeaderContainer = tw.div`flex pt-7 justify-around items-center`
const Header = tw.h1`w-1/3`
const SearchBar = tw.input`w-1/2 outline-none h-12 rounded-xl border-none items-end shadow-xl p-2 font-semibold`
const PageContainer = tw.div`p-5`

const geolocateControlStyle = {
  right: 10,
  top: 10
};

const WorldMap = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 600,
    latitude: 21.7577,
    longitude: 105.4376,
    zoom: 16
  });
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(pos => {
  //     setViewport({
  //       ...viewport,
  //       latitude: pos.coords.latitude,
  //       longitude: pos.coords.longitude
  //     })
  //   })
  // }, [])
  return (
    <PageContainer>
      <HeaderContainer>
        <Header>Explore the air quality anywhere in the world</Header>
        <SearchBar placeholder="   Your country, city or location ..." />
        <Search style={{ position: 'absolute', right: 0, marginRight: '6.2rem', background: "#fff" }} />
      </HeaderContainer>
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v11"
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_API_TOKEN}
      >
        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          showUserLocation={true}
          showUserHeading={true}
          auto
        />
      </ReactMapGL>
    </PageContainer>
  )
}

export default WorldMap
