import React, { memo, useRef, useState } from 'react';
import { Search } from 'react-feather';
import ReactMapGL, { FullscreenControl, GeolocateControl, Marker, Popup } from 'react-map-gl';
import tw, { styled } from 'twin.macro';
import { MapContextProvider, useMapContext } from '../context';
import "../style.css";

const HeaderContainer = tw.div`flex pt-7 justify-around items-center`
const Header = tw.h1`w-1/3`
const SearchBar = tw.input`w-1/2 outline-none h-12 rounded-xl border-none items-end shadow-xl p-2 font-semibold`
const PageContainer = tw.div`p-5 z-10`

const geolocateControlStyle = {
  right: 10,
  top: 10
};

const CircleIcon = styled.div(({ props }) => [
  tw`rounded-full text-white w-9 h-9 text-sm`,
  props <= 50 && tw`bg-green-500`,
  props <= 100 && props >= 51 && tw`bg-yellow-500`,
  props <= 150 && props >= 101 && tw`bg-red-300`,
  props <= 200 && props >= 151 && tw`bg-red-500`,
  props <= 300 && props >= 201 && tw`bg-purple-500`,
  props > 300 && tw`bg-red-900`
])

const WorldMapImpl = () => {
  const mapRef = useRef();
  const { geocodingCity } = useMapContext()
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 600,
    latitude: 21.437,
    longitude: 105.123,
    zoom: 4
  });

  const [popupIndex, setPopUpIndex] = useState(false)

  const renderPopup = ({ item }) => {
    return (
      <>
        {popupIndex && (
          <Popup
            tipSize={5}
            anchor="bottom-left"
            longitude={item?.data.location.coordinates[0]}
            latitude={item?.data.location.coordinates[1]}
            onMouseLeave={(e) => {
              e.preventDefault();
              setPopUpIndex(false);
            }}
            closeOnClick={true}
          >

          </Popup>
        )}
      </>

    )
  }

  const fullscreenControlStyle = {
    right: 10,
    bottom: 10
  };
  console.log(`geocodingCity`, geocodingCity)


  return (
    <PageContainer>
      <HeaderContainer>
        <Header>Explore the air quality anywhere in the world</Header>
        <SearchBar placeholder="   Your country, city or location ..." />
        <Search style={{ position: 'absolute', right: 0, marginRight: '6.2rem', background: "#fff" }} />
      </HeaderContainer>

      <ReactMapGL
        ref={mapRef}
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_API_TOKEN}>
        {
          geocodingCity.length > 0 && geocodingCity?.map((item) => (
            <div>
              <Marker
                key={item?.data.city}
                longitude={item?.data.location.coordinates[0]}
                latitude={item?.data.location.coordinates[1]}
                onMouseEnter={(e) => {
                  e.preventDefault();
                  setPopUpIndex(true);
                }}
                onMouseLeave={(e) => {
                  e.preventDefault();
                  setPopUpIndex(false);
                }}
              >
                <CircleIcon props={item.data.current.pollution.aqius}>
                  <p>{item.data.current.pollution.aqius}</p>
                </CircleIcon>

              </Marker>
              {renderPopup(item)}
            </div>
          ))
        }

        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          showUserLocation={true}
          showUserHeading={true}
          auto
        />
        <FullscreenControl style={fullscreenControlStyle} />
      </ReactMapGL>

    </PageContainer>
  )
}
const WorldMap = (props) => (
  <MapContextProvider>
    <WorldMapImpl {...props} />
  </MapContextProvider>
);

export default memo(WorldMap)