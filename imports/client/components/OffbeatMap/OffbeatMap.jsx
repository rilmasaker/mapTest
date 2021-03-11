import React from 'react';

import {
  Map, PathLayer, Path, MarkerLayer, Marker,
} from 'react-mapycz';

const OffbeatMap = () => (

  <Map>
    <PathLayer>
      <Path coords={[
        { lat: 55.604890000000005, lng: 8.97171 },
        { lat: 55.60501000000001, lng: 8.97179 },
        { lat: 55.605070000000005, lng: 8.971820000000001 },
        { lat: 55.60512000000001, lng: 8.97183 },
        { lat: 55.60517, lng: 8.971810000000001 },
      ]}
      />
    </PathLayer>
  </Map>

);
export default OffbeatMap;
