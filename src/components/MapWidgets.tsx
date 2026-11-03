import { useMemo } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import type { CivicReport, ReportLocation } from '../types/report';
import { CATEGORY_LABELS, STATUS_LABELS } from '../types/report';
const colors: Record<CivicReport['category'], string> = { road_damage:'#b76b2d', waste_management:'#477c56', water_supply:'#43849a', drainage_sewage:'#317387', streetlight:'#a28c3b', public_infrastructure:'#78618d' };
function iconFor(report: CivicReport, active: boolean) { return L.divIcon({ className:'civic-marker-wrap', html:`<span class="civic-marker ${active?'civic-marker-active':''}" style="--marker-color:${colors[report.category]}"></span>`, iconSize:[22,22], iconAnchor:[11,11], popupAnchor:[0,-12] }); }
export function IssueMap({ reports, selected, onSelect }: { reports: CivicReport[]; selected: string|null; onSelect: (id:string)=>void }) {
  const center = useMemo<[number,number]>(()=>[17.412,78.44],[]);
  return <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="leaflet-map" aria-label="Interactive map of sample issue locations">
    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {reports.map(r=><Marker key={r.id} position={[r.location.latitude,r.location.longitude]} icon={iconFor(r,selected===r.id)} eventHandlers={{click:()=>onSelect(r.id)}}><Popup><div className="map-popup"><strong>{r.title}</strong><span>{CATEGORY_LABELS[r.category]} · {STATUS_LABELS[r.status]}</span><small>{r.location.label}</small><Link to={`/reports/${r.id}`}>Open report →</Link></div></Popup></Marker>)}
  </MapContainer>;
}
function ClickToSelect({ onSelect }: { onSelect:(location:ReportLocation)=>void }) { useMapEvents({click(event){onSelect({latitude:event.latlng.lat,longitude:event.latlng.lng,label:`Selected coordinates ${event.latlng.lat.toFixed(4)}, ${event.latlng.lng.toFixed(4)}`});}}); return null; }
export function LocationPicker({ onSelect }: { onSelect:(location:ReportLocation)=>void }) { return <MapContainer center={[17.412,78.44]} zoom={12} scrollWheelZoom={false} className="location-picker-map" aria-label="Interactive map for choosing an optional report location"><TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/><ClickToSelect onSelect={onSelect}/></MapContainer>; }
