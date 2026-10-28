var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_WorldImagery_1 = new ol.layer.Tile({
            'title': 'World Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleTerrainHybrid_2 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSateliteHybrid_3 = new ol.layer.Tile({
            'title': 'Google Satelite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelite_4 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Sungai_5 = new ol.format.GeoJSON();
var features_Sungai_5 = format_Sungai_5.readFeatures(json_Sungai_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_5.addFeatures(features_Sungai_5);
var lyr_Sungai_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_5, 
                style: style_Sungai_5,
                popuplayertitle: 'Sungai',
                interactive: false,
                title: '<img src="styles/legend/Sungai_5.png" /> Sungai'
            });
var format_JalanSetapak_6 = new ol.format.GeoJSON();
var features_JalanSetapak_6 = format_JalanSetapak_6.readFeatures(json_JalanSetapak_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanSetapak_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanSetapak_6.addFeatures(features_JalanSetapak_6);
var lyr_JalanSetapak_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanSetapak_6, 
                style: style_JalanSetapak_6,
                popuplayertitle: 'Jalan Setapak',
                interactive: false,
                title: '<img src="styles/legend/JalanSetapak_6.png" /> Jalan Setapak'
            });
var format_JalanKecil_7 = new ol.format.GeoJSON();
var features_JalanKecil_7 = format_JalanKecil_7.readFeatures(json_JalanKecil_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKecil_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKecil_7.addFeatures(features_JalanKecil_7);
var lyr_JalanKecil_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKecil_7, 
                style: style_JalanKecil_7,
                popuplayertitle: 'Jalan Kecil',
                interactive: false,
                title: '<img src="styles/legend/JalanKecil_7.png" /> Jalan Kecil'
            });
var format_JalanLokal_8 = new ol.format.GeoJSON();
var features_JalanLokal_8 = format_JalanLokal_8.readFeatures(json_JalanLokal_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLokal_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLokal_8.addFeatures(features_JalanLokal_8);
var lyr_JalanLokal_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanLokal_8, 
                style: style_JalanLokal_8,
                popuplayertitle: 'Jalan Lokal',
                interactive: false,
                title: '<img src="styles/legend/JalanLokal_8.png" /> Jalan Lokal'
            });
var format_JalanRayaSekunder_9 = new ol.format.GeoJSON();
var features_JalanRayaSekunder_9 = format_JalanRayaSekunder_9.readFeatures(json_JalanRayaSekunder_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanRayaSekunder_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanRayaSekunder_9.addFeatures(features_JalanRayaSekunder_9);
var lyr_JalanRayaSekunder_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanRayaSekunder_9, 
                style: style_JalanRayaSekunder_9,
                popuplayertitle: 'Jalan Raya Sekunder',
                interactive: false,
                title: '<img src="styles/legend/JalanRayaSekunder_9.png" /> Jalan Raya Sekunder'
            });
var format_JalanRayaPrimer_10 = new ol.format.GeoJSON();
var features_JalanRayaPrimer_10 = format_JalanRayaPrimer_10.readFeatures(json_JalanRayaPrimer_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanRayaPrimer_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanRayaPrimer_10.addFeatures(features_JalanRayaPrimer_10);
var lyr_JalanRayaPrimer_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanRayaPrimer_10, 
                style: style_JalanRayaPrimer_10,
                popuplayertitle: 'Jalan Raya Primer',
                interactive: false,
                title: '<img src="styles/legend/JalanRayaPrimer_10.png" /> Jalan Raya Primer'
            });
var format_AreaLuar_11 = new ol.format.GeoJSON();
var features_AreaLuar_11 = format_AreaLuar_11.readFeatures(json_AreaLuar_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaLuar_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaLuar_11.addFeatures(features_AreaLuar_11);
var lyr_AreaLuar_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaLuar_11, 
                style: style_AreaLuar_11,
                popuplayertitle: 'Area Luar',
                interactive: false,
                title: '<img src="styles/legend/AreaLuar_11.png" /> Area Luar'
            });
var format_BatasDesa_12 = new ol.format.GeoJSON();
var features_BatasDesa_12 = format_BatasDesa_12.readFeatures(json_BatasDesa_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesa_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_12.addFeatures(features_BatasDesa_12);
var lyr_BatasDesa_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesa_12, 
                style: style_BatasDesa_12,
                popuplayertitle: 'Batas Desa',
                interactive: true,
                title: '<img src="styles/legend/BatasDesa_12.png" /> Batas Desa'
            });
var format_BatasKecamatan_13 = new ol.format.GeoJSON();
var features_BatasKecamatan_13 = format_BatasKecamatan_13.readFeatures(json_BatasKecamatan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_13.addFeatures(features_BatasKecamatan_13);
var lyr_BatasKecamatan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_13, 
                style: style_BatasKecamatan_13,
                popuplayertitle: 'Batas Kecamatan',
                interactive: false,
                title: '<img src="styles/legend/BatasKecamatan_13.png" /> Batas Kecamatan'
            });
var format_BatasKabupaten_14 = new ol.format.GeoJSON();
var features_BatasKabupaten_14 = format_BatasKabupaten_14.readFeatures(json_BatasKabupaten_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupaten_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupaten_14.addFeatures(features_BatasKabupaten_14);
var lyr_BatasKabupaten_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabupaten_14, 
                style: style_BatasKabupaten_14,
                popuplayertitle: 'Batas Kabupaten',
                interactive: false,
                title: '<img src="styles/legend/BatasKabupaten_14.png" /> Batas Kabupaten'
            });
var format_BatasProvinsi_15 = new ol.format.GeoJSON();
var features_BatasProvinsi_15 = format_BatasProvinsi_15.readFeatures(json_BatasProvinsi_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasProvinsi_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasProvinsi_15.addFeatures(features_BatasProvinsi_15);
var lyr_BatasProvinsi_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasProvinsi_15, 
                style: style_BatasProvinsi_15,
                popuplayertitle: 'Batas Provinsi',
                interactive: false,
                title: '<img src="styles/legend/BatasProvinsi_15.png" /> Batas Provinsi'
            });
var format_TitikPentingDesa_16 = new ol.format.GeoJSON();
var features_TitikPentingDesa_16 = format_TitikPentingDesa_16.readFeatures(json_TitikPentingDesa_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPentingDesa_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPentingDesa_16.addFeatures(features_TitikPentingDesa_16);
var lyr_TitikPentingDesa_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPentingDesa_16, 
                style: style_TitikPentingDesa_16,
                popuplayertitle: 'Titik Penting Desa',
                interactive: true,
    title: 'Titik Penting Desa<br />\
    <img src="styles/legend/TitikPentingDesa_16_0.png" /> Gereja GBKP Raya<br />\
    <img src="styles/legend/TitikPentingDesa_16_1.png" /> Gereja GPDI Karmel Raya<br />\
    <img src="styles/legend/TitikPentingDesa_16_2.png" /> Gereja Katolik Stasi Santa Theresia Avilla<br />\
    <img src="styles/legend/TitikPentingDesa_16_3.png" /> Jambur / Balai Desa Raya<br />\
    <img src="styles/legend/TitikPentingDesa_16_4.png" /> Kantor Desa Raya<br />\
    <img src="styles/legend/TitikPentingDesa_16_5.png" /> Masjid Al-Ihsan<br />\
    <img src="styles/legend/TitikPentingDesa_16_6.png" /> Masjid Ar-Rahman<br />\
    <img src="styles/legend/TitikPentingDesa_16_7.png" /> Pajak PU Raya<br />\
    <img src="styles/legend/TitikPentingDesa_16_8.png" /> RS Efarina Etaham<br />\
    <img src="styles/legend/TitikPentingDesa_16_9.png" /> RSU Amanda Berastagi<br />\
    <img src="styles/legend/TitikPentingDesa_16_10.png" /> SPBU Pertamina 13.221.113<br />\
    <img src="styles/legend/TitikPentingDesa_16_11.png" /> Taman Seribu Bunga Raya<br />\
    <img src="styles/legend/TitikPentingDesa_16_12.png" /> Tihara Coffee & Resto<br />\
    <img src="styles/legend/TitikPentingDesa_16_13.png" /> Verina Guest House, Cafe. Resto & Hall<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_WorldImagery_1.setVisible(true);lyr_GoogleTerrainHybrid_2.setVisible(true);lyr_GoogleSateliteHybrid_3.setVisible(true);lyr_GoogleSatelite_4.setVisible(true);lyr_Sungai_5.setVisible(true);lyr_JalanSetapak_6.setVisible(true);lyr_JalanKecil_7.setVisible(true);lyr_JalanLokal_8.setVisible(true);lyr_JalanRayaSekunder_9.setVisible(true);lyr_JalanRayaPrimer_10.setVisible(true);lyr_AreaLuar_11.setVisible(true);lyr_BatasDesa_12.setVisible(true);lyr_BatasKecamatan_13.setVisible(true);lyr_BatasKabupaten_14.setVisible(true);lyr_BatasProvinsi_15.setVisible(true);lyr_TitikPentingDesa_16.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_WorldImagery_1,lyr_GoogleTerrainHybrid_2,lyr_GoogleSateliteHybrid_3,lyr_GoogleSatelite_4,lyr_Sungai_5,lyr_JalanSetapak_6,lyr_JalanKecil_7,lyr_JalanLokal_8,lyr_JalanRayaSekunder_9,lyr_JalanRayaPrimer_10,lyr_AreaLuar_11,lyr_BatasDesa_12,lyr_BatasKecamatan_13,lyr_BatasKabupaten_14,lyr_BatasProvinsi_15,lyr_TitikPentingDesa_16];
lyr_Sungai_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'covered': 'covered', 'motorcar': 'motorcar', 'natural': 'natural', 'waterway': 'waterway', 'layer': 'layer', 'bridge': 'bridge', 'smoothness': 'smoothness', 'maxspeed': 'maxspeed', 'substation': 'substation', 'operator': 'operator', 'location': 'location', 'import': 'import', 'lanes': 'lanes', 'service': 'service', 'motorcycle': 'motorcycle', 'tracktype': 'tracktype', 'surface': 'surface', 'ref': 'ref', 'oneway': 'oneway', 'official_name': 'official_name', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name:etymology': 'name:etymology', 'name': 'name', 'highway': 'highway', 'alt_name': 'alt_name', 'voltage': 'voltage', 'power': 'power', 'frequency': 'frequency', 'cables': 'cables', });
lyr_JalanSetapak_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'covered': 'covered', 'motorcar': 'motorcar', 'natural': 'natural', 'waterway': 'waterway', 'layer': 'layer', 'bridge': 'bridge', 'smoothness': 'smoothness', 'maxspeed': 'maxspeed', 'substation': 'substation', 'operator': 'operator', 'location': 'location', 'import': 'import', 'lanes': 'lanes', 'service': 'service', 'motorcycle': 'motorcycle', 'tracktype': 'tracktype', 'surface': 'surface', 'ref': 'ref', 'oneway': 'oneway', 'official_name': 'official_name', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name:etymology': 'name:etymology', 'name': 'name', 'highway': 'highway', 'alt_name': 'alt_name', 'voltage': 'voltage', 'power': 'power', 'frequency': 'frequency', 'cables': 'cables', });
lyr_JalanKecil_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'covered': 'covered', 'motorcar': 'motorcar', 'natural': 'natural', 'waterway': 'waterway', 'layer': 'layer', 'bridge': 'bridge', 'smoothness': 'smoothness', 'maxspeed': 'maxspeed', 'substation': 'substation', 'operator': 'operator', 'location': 'location', 'import': 'import', 'lanes': 'lanes', 'service': 'service', 'motorcycle': 'motorcycle', 'tracktype': 'tracktype', 'surface': 'surface', 'ref': 'ref', 'oneway': 'oneway', 'official_name': 'official_name', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name:etymology': 'name:etymology', 'name': 'name', 'highway': 'highway', 'alt_name': 'alt_name', 'voltage': 'voltage', 'power': 'power', 'frequency': 'frequency', 'cables': 'cables', });
lyr_JalanLokal_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'covered': 'covered', 'motorcar': 'motorcar', 'natural': 'natural', 'waterway': 'waterway', 'layer': 'layer', 'bridge': 'bridge', 'smoothness': 'smoothness', 'maxspeed': 'maxspeed', 'substation': 'substation', 'operator': 'operator', 'location': 'location', 'import': 'import', 'lanes': 'lanes', 'service': 'service', 'motorcycle': 'motorcycle', 'tracktype': 'tracktype', 'surface': 'surface', 'ref': 'ref', 'oneway': 'oneway', 'official_name': 'official_name', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name:etymology': 'name:etymology', 'name': 'name', 'highway': 'highway', 'alt_name': 'alt_name', 'voltage': 'voltage', 'power': 'power', 'frequency': 'frequency', 'cables': 'cables', });
lyr_JalanRayaSekunder_9.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'covered': 'covered', 'motorcar': 'motorcar', 'natural': 'natural', 'waterway': 'waterway', 'layer': 'layer', 'bridge': 'bridge', 'smoothness': 'smoothness', 'maxspeed': 'maxspeed', 'substation': 'substation', 'operator': 'operator', 'location': 'location', 'import': 'import', 'lanes': 'lanes', 'service': 'service', 'motorcycle': 'motorcycle', 'tracktype': 'tracktype', 'surface': 'surface', 'ref': 'ref', 'oneway': 'oneway', 'official_name': 'official_name', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name:etymology': 'name:etymology', 'name': 'name', 'highway': 'highway', 'alt_name': 'alt_name', 'voltage': 'voltage', 'power': 'power', 'frequency': 'frequency', 'cables': 'cables', });
lyr_JalanRayaPrimer_10.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'covered': 'covered', 'motorcar': 'motorcar', 'natural': 'natural', 'waterway': 'waterway', 'layer': 'layer', 'bridge': 'bridge', 'smoothness': 'smoothness', 'maxspeed': 'maxspeed', 'substation': 'substation', 'operator': 'operator', 'location': 'location', 'import': 'import', 'lanes': 'lanes', 'service': 'service', 'motorcycle': 'motorcycle', 'tracktype': 'tracktype', 'surface': 'surface', 'ref': 'ref', 'oneway': 'oneway', 'official_name': 'official_name', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name:etymology': 'name:etymology', 'name': 'name', 'highway': 'highway', 'alt_name': 'alt_name', 'voltage': 'voltage', 'power': 'power', 'frequency': 'frequency', 'cables': 'cables', });
lyr_AreaLuar_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_BatasDesa_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_BatasKecamatan_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_BatasKabupaten_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_BatasProvinsi_15.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_TitikPentingDesa_16.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Foto': 'Foto', });
lyr_Sungai_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'covered': '', 'motorcar': '', 'natural': '', 'waterway': '', 'layer': '', 'bridge': '', 'smoothness': '', 'maxspeed': '', 'substation': '', 'operator': '', 'location': '', 'import': '', 'lanes': '', 'service': '', 'motorcycle': '', 'tracktype': '', 'surface': '', 'ref': '', 'oneway': '', 'official_name': '', 'name:etymology:wikipedia': '', 'name:etymology:wikidata': '', 'name:etymology': '', 'name': '', 'highway': '', 'alt_name': '', 'voltage': '', 'power': '', 'frequency': '', 'cables': '', });
lyr_JalanSetapak_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'covered': '', 'motorcar': '', 'natural': '', 'waterway': '', 'layer': '', 'bridge': '', 'smoothness': '', 'maxspeed': '', 'substation': '', 'operator': '', 'location': '', 'import': '', 'lanes': '', 'service': '', 'motorcycle': '', 'tracktype': '', 'surface': '', 'ref': '', 'oneway': '', 'official_name': '', 'name:etymology:wikipedia': '', 'name:etymology:wikidata': '', 'name:etymology': '', 'name': '', 'highway': '', 'alt_name': '', 'voltage': '', 'power': '', 'frequency': '', 'cables': '', });
lyr_JalanKecil_7.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'covered': '', 'motorcar': '', 'natural': '', 'waterway': '', 'layer': '', 'bridge': '', 'smoothness': '', 'maxspeed': '', 'substation': '', 'operator': '', 'location': '', 'import': '', 'lanes': '', 'service': '', 'motorcycle': '', 'tracktype': '', 'surface': '', 'ref': '', 'oneway': '', 'official_name': '', 'name:etymology:wikipedia': '', 'name:etymology:wikidata': '', 'name:etymology': '', 'name': '', 'highway': '', 'alt_name': '', 'voltage': '', 'power': '', 'frequency': '', 'cables': '', });
lyr_JalanLokal_8.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'covered': '', 'motorcar': '', 'natural': '', 'waterway': '', 'layer': '', 'bridge': '', 'smoothness': '', 'maxspeed': '', 'substation': '', 'operator': '', 'location': '', 'import': '', 'lanes': '', 'service': '', 'motorcycle': '', 'tracktype': '', 'surface': '', 'ref': '', 'oneway': '', 'official_name': '', 'name:etymology:wikipedia': '', 'name:etymology:wikidata': '', 'name:etymology': '', 'name': '', 'highway': '', 'alt_name': '', 'voltage': '', 'power': '', 'frequency': '', 'cables': '', });
lyr_JalanRayaSekunder_9.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'covered': '', 'motorcar': '', 'natural': '', 'waterway': '', 'layer': '', 'bridge': '', 'smoothness': '', 'maxspeed': '', 'substation': '', 'operator': '', 'location': '', 'import': '', 'lanes': '', 'service': '', 'motorcycle': '', 'tracktype': '', 'surface': '', 'ref': '', 'oneway': '', 'official_name': '', 'name:etymology:wikipedia': '', 'name:etymology:wikidata': '', 'name:etymology': '', 'name': '', 'highway': '', 'alt_name': '', 'voltage': '', 'power': '', 'frequency': '', 'cables': '', });
lyr_JalanRayaPrimer_10.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'covered': '', 'motorcar': '', 'natural': '', 'waterway': '', 'layer': '', 'bridge': '', 'smoothness': '', 'maxspeed': '', 'substation': '', 'operator': '', 'location': '', 'import': '', 'lanes': '', 'service': '', 'motorcycle': '', 'tracktype': '', 'surface': '', 'ref': '', 'oneway': '', 'official_name': '', 'name:etymology:wikipedia': '', 'name:etymology:wikidata': '', 'name:etymology': '', 'name': '', 'highway': '', 'alt_name': '', 'voltage': '', 'power': '', 'frequency': '', 'cables': '', });
lyr_AreaLuar_11.set('fieldImages', {'fid': '', 'OBJECTID': '', 'REMARK': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', });
lyr_BatasDesa_12.set('fieldImages', {'fid': '', 'OBJECTID': '', 'REMARK': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', });
lyr_BatasKecamatan_13.set('fieldImages', {'fid': '', 'OBJECTID': '', 'REMARK': '', 'WADMKC': '', 'WADMKK': '', 'WADMPR': '', });
lyr_BatasKabupaten_14.set('fieldImages', {'fid': '', 'OBJECTID': '', 'REMARK': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', });
lyr_BatasProvinsi_15.set('fieldImages', {'fid': '', 'OBJECTID': '', 'REMARK': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', });
lyr_TitikPentingDesa_16.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Sungai_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'covered': 'no label', 'motorcar': 'no label', 'natural': 'no label', 'waterway': 'no label', 'layer': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'maxspeed': 'no label', 'substation': 'no label', 'operator': 'no label', 'location': 'no label', 'import': 'no label', 'lanes': 'no label', 'service': 'no label', 'motorcycle': 'no label', 'tracktype': 'no label', 'surface': 'no label', 'ref': 'no label', 'oneway': 'no label', 'official_name': 'no label', 'name:etymology:wikipedia': 'no label', 'name:etymology:wikidata': 'no label', 'name:etymology': 'no label', 'name': 'no label', 'highway': 'no label', 'alt_name': 'no label', 'voltage': 'no label', 'power': 'no label', 'frequency': 'no label', 'cables': 'no label', });
lyr_JalanSetapak_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'covered': 'no label', 'motorcar': 'no label', 'natural': 'no label', 'waterway': 'no label', 'layer': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'maxspeed': 'no label', 'substation': 'no label', 'operator': 'no label', 'location': 'no label', 'import': 'no label', 'lanes': 'no label', 'service': 'no label', 'motorcycle': 'no label', 'tracktype': 'no label', 'surface': 'no label', 'ref': 'no label', 'oneway': 'no label', 'official_name': 'no label', 'name:etymology:wikipedia': 'no label', 'name:etymology:wikidata': 'no label', 'name:etymology': 'no label', 'name': 'no label', 'highway': 'no label', 'alt_name': 'no label', 'voltage': 'no label', 'power': 'no label', 'frequency': 'no label', 'cables': 'no label', });
lyr_JalanKecil_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'covered': 'no label', 'motorcar': 'no label', 'natural': 'no label', 'waterway': 'no label', 'layer': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'maxspeed': 'no label', 'substation': 'no label', 'operator': 'no label', 'location': 'no label', 'import': 'no label', 'lanes': 'no label', 'service': 'no label', 'motorcycle': 'no label', 'tracktype': 'no label', 'surface': 'no label', 'ref': 'no label', 'oneway': 'no label', 'official_name': 'no label', 'name:etymology:wikipedia': 'no label', 'name:etymology:wikidata': 'no label', 'name:etymology': 'no label', 'name': 'no label', 'highway': 'no label', 'alt_name': 'no label', 'voltage': 'no label', 'power': 'no label', 'frequency': 'no label', 'cables': 'no label', });
lyr_JalanLokal_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'covered': 'no label', 'motorcar': 'no label', 'natural': 'no label', 'waterway': 'no label', 'layer': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'maxspeed': 'no label', 'substation': 'no label', 'operator': 'no label', 'location': 'no label', 'import': 'no label', 'lanes': 'no label', 'service': 'no label', 'motorcycle': 'no label', 'tracktype': 'no label', 'surface': 'no label', 'ref': 'no label', 'oneway': 'no label', 'official_name': 'no label', 'name:etymology:wikipedia': 'no label', 'name:etymology:wikidata': 'no label', 'name:etymology': 'no label', 'name': 'no label', 'highway': 'no label', 'alt_name': 'no label', 'voltage': 'no label', 'power': 'no label', 'frequency': 'no label', 'cables': 'no label', });
lyr_JalanRayaSekunder_9.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'covered': 'no label', 'motorcar': 'no label', 'natural': 'no label', 'waterway': 'no label', 'layer': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'maxspeed': 'no label', 'substation': 'no label', 'operator': 'no label', 'location': 'no label', 'import': 'no label', 'lanes': 'no label', 'service': 'no label', 'motorcycle': 'no label', 'tracktype': 'no label', 'surface': 'no label', 'ref': 'no label', 'oneway': 'no label', 'official_name': 'no label', 'name:etymology:wikipedia': 'no label', 'name:etymology:wikidata': 'no label', 'name:etymology': 'no label', 'name': 'no label', 'highway': 'no label', 'alt_name': 'no label', 'voltage': 'no label', 'power': 'no label', 'frequency': 'no label', 'cables': 'no label', });
lyr_JalanRayaPrimer_10.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'covered': 'no label', 'motorcar': 'no label', 'natural': 'no label', 'waterway': 'no label', 'layer': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'maxspeed': 'no label', 'substation': 'no label', 'operator': 'no label', 'location': 'no label', 'import': 'no label', 'lanes': 'no label', 'service': 'no label', 'motorcycle': 'no label', 'tracktype': 'no label', 'surface': 'no label', 'ref': 'no label', 'oneway': 'no label', 'official_name': 'no label', 'name:etymology:wikipedia': 'no label', 'name:etymology:wikidata': 'no label', 'name:etymology': 'no label', 'name': 'no label', 'highway': 'no label', 'alt_name': 'no label', 'voltage': 'no label', 'power': 'no label', 'frequency': 'no label', 'cables': 'no label', });
lyr_AreaLuar_11.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_BatasDesa_12.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'REMARK': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKD': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', });
lyr_BatasKecamatan_13.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_BatasKabupaten_14.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_BatasProvinsi_15.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'inline label - visible with data', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_TitikPentingDesa_16.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'header label - always visible', 'Foto': 'header label - always visible', });
lyr_TitikPentingDesa_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});