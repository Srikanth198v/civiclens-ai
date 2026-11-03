import { BrowserRouter, Link, NavLink, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowRight, Bell, ChevronDown, CircleHelp, Compass, Home, Map, Menu, Plus, ScanEye, Settings2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage';
import { DashboardPage, ExplorePage, MapPage, ProfilePage, ReportDetailPage, ReportFormPage } from './pages/ProductPages';
import { getPreferences, savePreferences } from './services/reportService';
import type { DemoPreferences } from './services/reportService';
const nav = [
  { to: '/dashboard', label: 'Overview', icon: Home }, { to: '/explore', label: 'Explore issues', icon: Compass },
  { to: '/map', label: 'Issue map', icon: Map }, { to: '/profile', label: 'Profile & settings', icon: Settings2 },
];
function Shell() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<DemoPreferences>(() => getPreferences());
  const location = useLocation();
  useEffect(() => { document.documentElement.dataset.theme = prefs.theme; savePreferences(prefs); }, [prefs]);
  useEffect(() => setOpen(false), [location.pathname]);
  return <div className="app-shell">
    <a href="#main" className="skip-link">Skip to content</a>
    <aside className={`sidebar ${open ? 'sidebar-open' : ''}`} aria-label="Application sidebar">
      <Link className="brand" to="/" aria-label="CivicLens home"><span className="brand-mark"><ScanEye size={20}/></span><span>civiclens<span className="brand-dot">.ai</span></span></Link>
      <p className="nav-label">WORKSPACE</p><nav className="side-nav" aria-label="Workspace navigation">{nav.map(({to,label,icon:Icon})=><NavLink key={to} to={to} className={({isActive})=>`side-link ${isActive?'active':''}`}><Icon size={18}/><span>{label}</span></NavLink>)}</nav>
      <div className="sidebar-bottom"><div className="demo-notice"><span className="demo-pulse"/>DEMO WORKSPACE<p>Sample reports and local browser storage only. Nothing goes to an authority.</p></div><button className="side-link theme-toggle" onClick={()=>setPrefs(v=>({...v,theme:v.theme==='light'?'dark':'light'}))} aria-label="Toggle theme"><span className="theme-symbol">◐</span><span>{prefs.theme==='light'?'Dark theme':'Light theme'}</span></button><div className="user-chip"><span className="avatar">DR</span><span><strong>Demo resident</strong><small>Profile placeholder</small></span><ChevronDown size={16}/></div></div>
    </aside>
    {open && <button aria-label="Close navigation" className="mobile-scrim" onClick={()=>setOpen(false)}/>}
    <section className="main-column"><header className="topbar"><button className="mobile-menu icon-button" aria-label={open?'Close navigation':'Open navigation'} onClick={()=>setOpen(v=>!v)}>{open?<X size={20}/>:<Menu size={20}/>}</button><div className="breadcrumb"><span>Workspace</span><span className="crumb-sep">/</span><strong>{nav.find(n=>n.to===location.pathname)?.label ?? (location.pathname==='/report/new'?'Report an issue':location.pathname.startsWith('/reports/')?'Report details':'Welcome')}</strong></div><div className="top-actions"><span className="sample-tag"><span/> SAMPLE DATA</span><button aria-label="Notification preferences" className="icon-button" onClick={()=>setPrefs(v=>({...v,notifications:!v.notifications}))}><Bell size={18}/></button><Link to="/report/new" className="button button-primary button-small"><Plus size={16}/> New report</Link></div></header><main id="main" className="page-content"><Outlet/></main><footer className="app-footer"><span>CivicLens AI <span className="muted">• local demo experience</span></span><Link to="/" className="footer-link"><CircleHelp size={14}/> About</Link></footer></section>
  </div>;
}
function NotFound(){return <div className="empty-state"><h1>Page not found</h1><p>This page isn't part of the demo.</p><Link className="button button-primary" to="/dashboard">Back to dashboard <ArrowRight size={16}/></Link></div>}
export default function App(){return <BrowserRouter><Routes><Route element={<Shell/>}><Route index element={<HomePage/>}/><Route path="dashboard" element={<DashboardPage/>}/><Route path="explore" element={<ExplorePage/>}/><Route path="map" element={<MapPage/>}/><Route path="report/new" element={<ReportFormPage/>}/><Route path="reports/:id" element={<ReportDetailPage/>}/><Route path="profile" element={<ProfilePage/>}/><Route path="*" element={<NotFound/>}/></Route></Routes></BrowserRouter>}
