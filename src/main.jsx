import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, CalendarDays, Heart, MapPin, Share2, Smartphone, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { wedding } from './config/wedding.js';
import './style.css';
import './wedding-extras.css';

const eventNamesHindi = { Haldi: 'हल्दी', Mehendi: 'मेहंदी', Sangeet: 'संगीत', Wedding: 'विवाह', Pagfera: 'पगफेरा' };

function Butterfly({ className = '' }) {
  return <svg className={`butterfly ${className}`} viewBox="0 0 48 42" aria-hidden="true">
    <g className="butterfly-wings"><path d="M23 18C10 0 2 4 5 14c2 7 11 8 18 8M25 18C38 0 46 4 43 14c-2 7-11 8-18 8M23 23C10 18 4 23 8 31c3 5 10 3 15-5M25 23c13-5 19 0 15 8-3 5-10 3-15-5" fill="currentColor" opacity=".82"/></g>
    <path d="M24 15v15M23 16l-5-6m7 6 5-6" fill="none" stroke="#e8d8b5" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>;
}

const welcomeCardFlowers = [
  ['rose', 'top', '13%'], ['lotus', 'top', '37%'], ['rose', 'top', '63%'], ['lotus', 'top', '87%'],
  ['rose', 'right', '13%'], ['lotus', 'right', '38%'], ['rose', 'right', '63%'], ['lotus', 'right', '87%'],
  ['rose', 'bottom', '13%'], ['lotus', 'bottom', '37%'], ['rose', 'bottom', '63%'], ['lotus', 'bottom', '87%'],
  ['rose', 'left', '13%'], ['lotus', 'left', '38%'], ['rose', 'left', '63%'], ['lotus', 'left', '87%'],
];

function WelcomeFlower({ kind, edge, offset }) {
  const place = edge === 'top'
    ? { top: 2, left: offset, transform: 'translate(-50%,-50%)' }
    : edge === 'right'
      ? { right: 2, top: offset, transform: 'translate(50%,-50%)' }
      : edge === 'bottom'
        ? { bottom: 2, left: offset, transform: 'translate(-50%,50%)' }
        : { left: 2, top: offset, transform: 'translate(-50%,-50%)' };

  return <svg className={`welcome-border-flower flower-${kind}`} style={place} viewBox="0 0 24 24" aria-hidden="true">
    {kind === 'rose' ? <>
      <g className="flower-petals">
        <ellipse cx="12" cy="5.2" rx="2.7" ry="4.3"/><ellipse cx="12" cy="5.2" rx="2.7" ry="4.3" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="5.2" rx="2.7" ry="4.3" transform="rotate(120 12 12)"/><ellipse cx="12" cy="5.2" rx="2.7" ry="4.3" transform="rotate(180 12 12)"/>
        <ellipse cx="12" cy="5.2" rx="2.7" ry="4.3" transform="rotate(240 12 12)"/><ellipse cx="12" cy="5.2" rx="2.7" ry="4.3" transform="rotate(300 12 12)"/>
      </g>
      <path className="flower-heart" d="M12 9.1c-2.1-1.2-4 .5-3 2.3.6 1.1 2 1.7 3 2.8 1-1.1 2.5-1.7 3-2.8 1-1.8-.9-3.5-3-2.3Z"/>
      <path className="flower-leaves" d="M9.7 14.1 6.2 16.8q2.9.4 4.6-1.8m3.5-.9 3.5 2.7q-2.9.4-4.6-1.8"/>
    </> : <>
      <g className="flower-petals lotus-petals">
        <path d="M12 3Q7.3 8 12 14Q16.7 8 12 3Z"/><path d="M12 4Q5.6 7.8 10 14Q14.3 8.2 12 4Z" transform="rotate(-38 12 12)"/>
        <path d="M12 4Q5.6 7.8 10 14Q14.3 8.2 12 4Z" transform="rotate(38 12 12)"/>
        <path d="M5 15q7-3 14 0-2 5-7 5t-7-5Z"/>
      </g>
      <circle className="flower-center" cx="12" cy="14.5" r="1.5"/>
      <path className="flower-leaves" d="M7 17q-2 2-3 1m13-1q2 2 3 1"/>
    </>}
  </svg>;
}

function WelcomeCardFloralTrim() {
  return <div className="family-welcome-floral-trim" aria-hidden="true">
    <svg className="family-welcome-trim-line" viewBox="0 0 100 160" preserveAspectRatio="none"><rect x="3" y="3" width="94" height="154" rx="5" fill="none" stroke="#b98b56" strokeOpacity=".48" strokeWidth=".65"/></svg>
    {welcomeCardFlowers.map(([kind, edge, offset], index) => <WelcomeFlower key={`${kind}-${edge}-${index}`} kind={kind} edge={edge} offset={offset} />)}
  </div>;
}

function CoupleIllustration() {
  return <svg className="couple-illustration" viewBox="0 0 260 185" role="img" aria-label="Illustrated bride and groom in traditional wedding attire">
    <g className="character bride-character">
      <ellipse cx="79" cy="171" rx="53" ry="7" fill="#2a0610" opacity=".22"/>
      <path d="M29 169c5-45 23-61 49-61s45 16 50 61H29Z" fill="#8f1c36" stroke="#d4af65" strokeWidth="2"/>
      <path d="m47 121 31 31 30-31" fill="none" stroke="#e8d8b5" strokeWidth="2"/>
      <path d="M54 76c0-21 10-34 25-34s25 13 25 34v24c-9 13-39 13-50 0V76Z" fill="#f4c7a1" stroke="#7b3d36" strokeWidth="1.5"/>
      <path d="M50 78c-8-31 4-54 29-54 26 0 40 20 30 57l-8 19-5-35-18-15-23 18-1 30-7-20Z" fill="#4a0715"/>
      <path d="M48 59c4-22 17-34 33-34 18 0 31 12 35 34-20-7-45-8-68 0Z" fill="#9a2440" stroke="#d4af65" strokeWidth="2"/>
      <circle cx="80" cy="51" r="5" fill="#d4af65"/><path d="M60 73h8m21 0h8" stroke="#4a0715" strokeWidth="2" strokeLinecap="round"/><path d="M72 91q8 7 16 0" fill="none" stroke="#a34d4c" strokeWidth="2" strokeLinecap="round"/>
      <path d="M61 105q19 14 39 0" fill="none" stroke="#d4af65" strokeWidth="3"/><circle cx="55" cy="85" r="4" fill="#d4af65"/><circle cx="105" cy="85" r="4" fill="#d4af65"/>
    </g>
    <g className="character groom-character">
      <ellipse cx="180" cy="171" rx="52" ry="7" fill="#2a0610" opacity=".22"/>
      <path d="M131 169c4-43 23-60 49-60s45 17 49 60h-98Z" fill="#e8d8b5" stroke="#d4af65" strokeWidth="2"/>
      <path d="m158 114 22 37 23-37m-24 37v18" fill="none" stroke="#b48a47" strokeWidth="2"/>
      <path d="M155 75c0-20 10-33 25-33 16 0 25 13 25 33v23c-10 14-40 14-50 0V75Z" fill="#f4c7a1" stroke="#7b3d36" strokeWidth="1.5"/>
      <path d="M152 59c3-18 13-26 28-26s25 9 29 26l-10 8-18-5-19 5-10-8Z" fill="#6d1027" stroke="#d4af65" strokeWidth="2"/>
      <path d="m157 45 22-12 21 12" fill="none" stroke="#d4af65" strokeWidth="2"/>
      <circle cx="170" cy="72" r="1.8" fill="#4a0715"/><circle cx="190" cy="72" r="1.8" fill="#4a0715"/><path d="M172 91q8 7 16 0" fill="none" stroke="#a34d4c" strokeWidth="2" strokeLinecap="round"/><path d="m179 71-2 11 4 1" fill="none" stroke="#ba8170" strokeWidth="1.5"/>
      <circle cx="180" cy="106" r="4" fill="#d4af65"/>
    </g>
    <path className="couple-heart" d="M130 80c-9-10-19 3 0 16 19-13 9-26 0-16Z" fill="#d4af65"/>
  </svg>;
}

function NamaskarAartiArt() {
  return <svg className="rsvp-namaskar-art" viewBox="0 0 120 190" aria-hidden="true">
    <path className="rsvp-toran-line" d="M12 40Q60-7 108 40"/>
    <path className="rsvp-toran-tassels" d="m18 35-4 8m17-21-3 8m19-18-1 8m28-8 1 8m19 3 3 8m11 4 4 8"/>
    <g className="rsvp-toran-blooms"><circle cx="20" cy="34" r="3.2"/><circle cx="34" cy="23" r="3.2"/><circle cx="48" cy="16" r="3.2"/><circle cx="60" cy="13" r="3.8"/><circle cx="72" cy="16" r="3.2"/><circle cx="86" cy="23" r="3.2"/><circle cx="100" cy="34" r="3.2"/></g>
    <path className="rsvp-hands" d="M60 18c-6 8-10 19-10 34l-8-8c-5-5-11 0-8 6l14 22c-5-4-11-3-12 2-1 4 5 10 15 17v17c0 9 18 9 18 0V91c10-7 16-13 15-17-1-5-7-6-12-2l14-22c3-6-3-11-8-6l-8 8c0-15-4-26-10-34Z"/>
    <path className="rsvp-sleeves" d="M48 105q12 8 24 0v18q-12 10-24 0z"/>
    <path className="rsvp-aarti-flame" d="M60 132c-12 10-7 19 0 19s12-9 0-19Z"/>
    <path className="rsvp-aarti-diya" d="M43 151q17 13 34 0l-4 11H47z"/>
    <ellipse className="rsvp-aarti-plate" cx="60" cy="166" rx="37" ry="9"/>
    <path className="rsvp-plate-detail" d="M30 166q30 12 60 0M48 166h24"/>
    <circle className="rsvp-plate-flower" cx="60" cy="166" r="3"/>
    <g className="rsvp-thali-petals"><circle cx="27" cy="164" r="2.5"/><circle cx="35" cy="170" r="2"/><circle cx="93" cy="164" r="2.5"/><circle cx="85" cy="170" r="2"/></g>
  </svg>;
}

function RsvpResponseBlessing({ attendance }) {
  if (attendance === 'accepted') {
    return <div className="rsvp-response-blessing rsvp-accepted-blessing" role="status" aria-live="polite">
      <img className="rsvp-atithi-side-art" src="/images/namaste-woman-transparent.png" alt="Woman in a golden namaskar pose"/>
      <div className="rsvp-blessing-message"><span className="rsvp-blessing-flourish" aria-hidden="true">✦　❋　✦</span><img className="rsvp-atithi-phrase-art" src="/images/atithi-devo-bhava-gold-transparent.png" alt="Atithi Devo Bhava in ornate gold lettering"/><p>We look forward to welcoming you with open hearts.</p></div>
      <img className="rsvp-atithi-side-art" src="/images/namaste-woman-transparent.png" alt=""/>
    </div>;
  }
  if (attendance === 'declined') {
    return <div className="rsvp-response-blessing rsvp-declined-blessing" role="status" aria-live="polite">
      <img className="rsvp-distance-thali" src="/images/ornate-golden-pooja-thali.png" alt="Golden pooja thali with a lit diya"/>
      <div className="rsvp-blessing-message"><span className="rsvp-blessing-flourish" aria-hidden="true">✧　❋　✧</span><img className="rsvp-declined-phrase-art" src="/images/ornate-maroon-gold-devanagari-emblem.png" alt="Ornate maroon and gold Devanagari blessing emblem"/><p>Even from afar, your blessings stay close to our hearts.</p></div>
      <img className="rsvp-distance-thali rsvp-distance-thali-mirror" src="/images/ornate-golden-pooja-thali.png" alt=""/>
    </div>;
  }
  return null;
}

function WeddingPeacock({ className = '' }) {
  return <svg className={`wedding-peacock ${className}`} viewBox="0 0 150 160" aria-hidden="true">
    <g className="peacock-fan" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M75 106C38 95 18 70 20 34M75 106C49 79 43 50 49 20M76 105C72 72 82 42 99 18M77 106C97 78 116 59 132 48M75 106C42 99 28 82 25 63"/>
      <ellipse cx="20" cy="32" rx="5" ry="9"/><ellipse cx="49" cy="18" rx="5" ry="9"/><ellipse cx="100" cy="16" rx="5" ry="9"/><ellipse cx="133" cy="47" rx="5" ry="9"/><ellipse cx="25" cy="60" rx="4" ry="7"/>
      <circle cx="20" cy="32" r="2.4" fill="#66856b"/><circle cx="49" cy="18" r="2.4" fill="#66856b"/><circle cx="100" cy="16" r="2.4" fill="#66856b"/><circle cx="133" cy="47" r="2.4" fill="#66856b"/><circle cx="25" cy="60" r="2" fill="#66856b"/>
    </g>
    <path d="M67 103c-4-16 3-31 17-34 13-3 23 9 19 22-3 10-12 17-24 20l-2 31h-8l2-26c-3-3-4-8-4-13Z" fill="#56806d" stroke="currentColor" strokeWidth="2"/>
    <circle cx="88" cy="58" r="12" fill="#56806d" stroke="currentColor" strokeWidth="2"/><path d="m99 57 14 4-14 4" fill="#c39148"/><circle cx="91" cy="57" r="1.7" fill="#2d291f"/>
    <path d="M85 46c-2-9-7-12-11-14m16 12q1-11 7-15m-2 17q8-7 13-6M69 139l-4 10m14-10 4 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>;
}

function WeddingElephant({ className = '' }) {
  return <svg className={`wedding-elephant ${className}`} viewBox="0 0 170 145" aria-hidden="true">
    <g className="elephant-sway">
      <path d="M25 75c0-30 21-50 56-50 33 0 57 20 57 51v42H37c-8-10-12-24-12-43Z" fill="#eadbbd" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M103 47c19-8 35 4 36 23 1 17-8 28-23 31-13 2-22-8-22-21 0-15 2-26 9-33Z" fill="#dfc99c" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M130 75c12 4 17 16 13 29-4 12-14 20-24 19-6-1-9-5-8-10 12-4 15-11 12-18-2-7-1-13 7-20Z" fill="#eadbbd" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M111 64c4-4 9-5 13-2m-11 40c5-4 9-3 13 0" fill="none" stroke="#705848" strokeWidth="2" strokeLinecap="round"/>
      <path d="M44 69c8-10 22-12 31-5v35c-10 8-25 6-32-4-6-9-5-19 1-26Z" fill="#f6ebd3" stroke="currentColor" strokeWidth="2"/>
      <path d="M45 74q14 9 29 0m-30 12q15 9 30 0" fill="none" stroke="#c39148" strokeWidth="1.5"/>
      <path d="M44 116v16m24-15v15m43-15v15m21-17v17" stroke="#92795e" strokeWidth="7" strokeLinecap="round"/>
      <circle cx="119" cy="68" r="2" fill="#352a20"/><path d="M131 93q7 4 9 11" fill="none" stroke="#f8f0dc" strokeWidth="3" strokeLinecap="round"/>
      <path d="M27 52q7-12 13-15m-12 19q-8-4-12-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="50" cy="78" r="2" fill="#c39148"/><circle cx="65" cy="90" r="2" fill="#c39148"/><circle cx="52" cy="94" r="2" fill="#c39148"/>
    </g>
  </svg>;
}

function WeddingScenery({ creature = 'peacock', theme = 'welcome' }) {
  const Creature = creature === 'elephant' ? WeddingElephant : WeddingPeacock;
  const archButterflyPalette = ['#c8843b', '#d36d7d', '#66835c', '#8a75aa', '#d0a33e'];
  const archButterflyPositions = theme === 'events' ? [
    ...Array.from({ length: 13 }, (_, i) => {
      const x = 108.5 + i * (783 / 12);
      const t = Math.abs((x - 500) / 391.5);
      return { x, y: 86.5 + 181 * t * t };
    }),
    ...Array.from({ length: 8 }, (_, i) => ({ x: 108.5, y: 295 + i * 57 })),
    ...Array.from({ length: 8 }, (_, i) => ({ x: 891.5, y: 295 + i * 57 }))
  ] : [];
  const archFlowerPositions = [
    { x: 445, y: 90, color: '#d36d7d' }, { x: 555, y: 90, color: '#d0a33e' },
    ...[390, 510, 630].map((y, i) => ({ x: 108.5, y, color: ['#8a75aa', '#d8844b', '#66835c'][i] })),
    ...[390, 510, 630].map((y, i) => ({ x: 891.5, y, color: ['#66835c', '#d36d7d', '#d0a33e'][i] }))
  ];
  return <div className={'section-scenery scenery-' + creature + ' motif-' + theme} aria-hidden="true">
    <svg className="scenery-motif" viewBox="0 0 1000 700" preserveAspectRatio="none">
      {theme === 'welcome' && <g className="motif-welcome"><path d="M48 700V370C48 160 230 44 500 44s452 116 452 326v330M72 700V370C72 178 245 68 500 68s428 110 428 302v330"/><path d="M80 150q40 54 80 0 40 54 80 0 40 54 80 0 40 54 80 0 40 54 80 0 40 54 80 0 40 54 80 0 40 54 80 0 40 54 80 0"/><path d="M158 150v62m84-62v44m84-44v62m84-62v44m180-44v44m84-44v62m84-62v44m84-44v62"/></g>}
      {theme === 'story' && <g className="motif-story"><path d="M92 700V350C92 160 250 72 500 72s408 88 408 278v350M125 700V360C125 202 270 106 500 106s375 96 375 254v340"/><path d="M160 235h680M160 465h680M274 140v450m226-488v526m226-488v450"/><path d="m160 235 114 115-114 115m680-230L726 350l114 115M274 140l226 95 226-95m-452 450 226-125 226 125"/></g>}
      {theme === 'countdown' && <g className="motif-countdown"><circle cx="125" cy="160" r="88"/><circle cx="125" cy="160" r="62"/><circle cx="875" cy="540" r="105"/><circle cx="875" cy="540" r="75"/><path d="m125 42 18 78 77 40-77 40-18 78-18-78-77-40 77-40zm750 378 15 83 78 37-78 39-15 82-18-82-77-39 77-37z"/><path d="M330 91h1m35 45h1m280 363h1m-38 39h1"/></g>}
      {theme === 'events' && <g className="motif-events"><path d="M92 700V255Q92 68 500 68t408 187v445M125 700V280Q125 105 500 105t375 175v420"/><path d="M125 280q47-75 94 0 47-75 94 0 47-75 94 0 47-75 94 0 47-75 94 0 47-75 94 0 47-75 94 0 47-75 94 0 47-75 94 0"/><path d="M145 290v124m100-124v164m100-164v124m410-124v124m100-124v164m100-164v124"/></g>}
      {theme === 'venue' && <g className="motif-venue"><path d="M65 700V410h120V280h90V165h120V280h90v-90h30v90h90V165h120v115h90v130h120v290"/><path d="M65 410h870M185 410V310h90v100m140 0V195h120v215m150 0V195h120v215m90-100h90v100"/><path d="M340 410V290q0-70 65-70t65 70v120m190 0V290q0-70 65-70t65 70v120"/></g>}
      {theme === 'family' && <g className="motif-family"><path d="M90 700V260Q90 80 270 80t180 180v440M550 700V260Q550 80 730 80t180 180v440"/><path d="M125 700V280Q125 120 270 120t145 160v420m170 0V280Q585 120 730 120t145 160v420"/><path d="M140 255q130 90 260 0m140 0q130 90 260 0M270 120v580m460-580v580"/><circle cx="270" cy="255" r="23"/><circle cx="730" cy="255" r="23"/></g>}
      {theme === 'rsvp' && <g className="motif-rsvp"><path d="M95 700V420m810 280V420M55 420q40-80 80 0 40-80 80 0m650 0q40-80 80 0 40-80 80 0"/><path d="M105 372q54-42 108 0l-12 26h-84zm682 0q54-42 108 0l-12 26h-84z"/><path d="M105 352v-28m35 28v-40m35 40v-28m507 28v-28m35 28v-40m35 40v-28"/></g>}
      {theme === 'farewell' && <g className="motif-farewell"><path d="M115 700V310C115 145 265 70 500 70s385 75 385 240v390M150 700V310c0-140 136-205 350-205s350 65 350 205v390"/><path d="M150 220q44 52 88 0 44 52 88 0 44 52 88 0m172 0q44 52 88 0 44 52 88 0 44 52 88 0"/><path d="M225 220v80m110-80v58m330-58v58m110-58v80"/></g>}
      {theme === 'shagun' && <g className="motif-shagun"><circle cx="115" cy="525" r="68"/><circle cx="115" cy="525" r="43"/><circle cx="885" cy="175" r="68"/><circle cx="885" cy="175" r="43"/><path d="M115 437q52 45 0 90-52-45 0-90zm68 88q-45 52-90 0 45-52 90 0zm-68 88q-52-45 0-90 52 45 0 90zm-68-88q45-52 90 0-45 52-90 0zm838-438q52 45 0 90-52-45 0-90zm68 88q-45 52-90 0 45-52 90 0zm-68 88q-52-45 0-90 52 45 0 90zm-68-88q45-52 90 0-45 52-90 0z"/></g>}
    </svg>
    {theme === 'events' && <div className="events-arch-swarm" aria-hidden="true">
      {archButterflyPositions.map(({ x, y }, i) => <svg key={i} className="butterfly events-arch-butterfly" viewBox="0 0 48 42" style={{ left: `${x / 10}%`, top: `${y / 7}%`, animationDelay: `${-i * .37}s`, color: archButterflyPalette[i % archButterflyPalette.length] }}>
          <g className="butterfly-wings"><path d="M23 18C10 0 2 4 5 14c2 7 11 8 18 8M25 18C38 0 46 4 43 14c-2 7-11 8-18 8M23 23C10 18 4 23 8 31c3 5 10 3 15-5M25 23c13-5 19 0 15 8-3 5-10 3-15-5" fill="currentColor" opacity=".86"/></g>
          <path d="M24 15v15M23 16l-5-6m7 6 5-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>)}
      {archFlowerPositions.map(({ x, y, color }, i) => <span key={`${x}-${y}`} className="events-arch-flower" style={{ left: `${x / 10}%`, top: `${y / 7}%`, color, animationDelay: `${-i * .48}s` }}>✿</span>)}
    </div>}
    {theme === 'events' && <>
      <svg className="events-diya events-diya-left" viewBox="0 0 90 64" aria-hidden="true"><ellipse className="diya-glow" cx="45" cy="36" rx="34" ry="24"/><path className="diya-flame" d="M45 7c-12 12-12 22 0 29 12-7 12-17 0-29Z"/><path className="diya-wick" d="M45 33v8"/><path className="diya-bowl" d="M17 39q28 23 56 0l-7 15H24z"/><path className="diya-rim" d="M17 39q28 12 56 0"/></svg>
      <svg className="events-diya events-diya-right" viewBox="0 0 90 64" aria-hidden="true"><ellipse className="diya-glow" cx="45" cy="36" rx="34" ry="24"/><path className="diya-flame" d="M45 7c-12 12-12 22 0 29 12-7 12-17 0-29Z"/><path className="diya-wick" d="M45 33v8"/><path className="diya-bowl" d="M17 39q28 23 56 0l-7 15H24z"/><path className="diya-rim" d="M17 39q28 12 56 0"/></svg>
    </>}
    <Creature className="scenery-creature"/>
    <span className="scenery-petal scenery-petal-one">✿</span><span className="scenery-petal scenery-petal-two">✧</span>
  </div>;
}

function JourneyMascot({ event }) {
  return <div className={'journey-mascot vignette-' + event.name.toLowerCase()} aria-hidden="true">
    {event.name === 'Haldi' && <svg viewBox="0 0 180 170"><g className="sun-character"><circle cx="90" cy="51" r="29" fill="#f4d66d" stroke="#b18537" strokeWidth="3"/><path d="M79 50h1m20 0h1m-18 14q7 7 14 0" fill="none" stroke="#654b30" strokeWidth="2.5" strokeLinecap="round"/><path d="M90 8v9m0 68v9M47 51h9m68 0h9M60 21l7 7m46 46 7 7m0-60-7 7M67 74l-7 7" stroke="#c4983d" strokeWidth="4" strokeLinecap="round"/></g><path className="haldi-bowl" d="M48 111q42 38 84 0l-10 28H58z" fill="#d5a633" stroke="#9b6c25" strokeWidth="3"/><path d="M42 109q48 19 96 0" fill="none" stroke="#9b6c25" strokeWidth="4"/><circle className="haldi-splash splash-a" cx="43" cy="91" r="6"/><circle className="haldi-splash splash-b" cx="136" cy="88" r="5"/><circle className="haldi-splash splash-c" cx="124" cy="99" r="3"/></svg>}
    {event.name === 'Mehendi' && <svg viewBox="0 0 180 170"><path className="mehendi-hand" d="M60 145c-8-10-11-21-9-34l4-36c1-9 12-8 13 0l3 22-1-58c0-11 14-11 15 0l2 48 1-59c0-11 15-10 15 1l-1 60 5-46c1-10 16-9 15 2l-4 57c-1 23-15 39-37 43H60Z" fill="#efd8bd" stroke="#80613f" strokeWidth="3" strokeLinejoin="round"/><path className="henna-pattern" d="M66 122q20-22 41 0m-35-11q14-15 29 0m-21-16q8-8 16 0m-15 39q12-9 24 0m-6-17q8-8 16 0" fill="none" stroke="#688056" strokeWidth="2.5" strokeLinecap="round"/><path className="mehendi-vine" d="M30 117q-18-25 2-45 21 12 2 25 22-10 28-34" fill="none" stroke="#688056" strokeWidth="3" strokeLinecap="round"/><path d="M31 93q-16-8-20 4 13 7 20-4m25-31q-3-17 11-20 7 14-11 20" fill="#8fa06a" stroke="#688056" strokeWidth="2"/></svg>}
    {event.name === 'Sangeet' && <svg viewBox="0 0 180 170"><g className="sangeet-dhol"><path d="M49 57q40-24 82 0v55q-41 26-82 0z" fill="#c87863" stroke="#80523f" strokeWidth="3"/><ellipse cx="49" cy="84" rx="12" ry="28" fill="#eed8a7" stroke="#80523f" strokeWidth="3"/><ellipse cx="131" cy="84" rx="12" ry="28" fill="#eed8a7" stroke="#80523f" strokeWidth="3"/><path d="m56 62 68 45m-68 0 68-45m-72-2 70 59m-70 0 70-59" stroke="#e9cb86" strokeWidth="3"/></g><text className="sangeet-note note-a" x="25" y="42">♪</text><text className="sangeet-note note-b" x="133" y="43">♫</text><path d="M35 132q55 18 110 0" fill="none" stroke="#b18a43" strokeWidth="2" strokeDasharray="3 7"/></svg>}
    {event.name === 'Wedding' && <svg viewBox="0 0 180 170"><path className="wedding-canopy" d="M25 78q65-91 130 0m-118-2v77m106-77v77M32 155h116M37 76q53 28 106 0" fill="none" stroke="#b58a46" strokeWidth="3" strokeLinecap="round"/><g className="wedding-pair"><circle cx="72" cy="92" r="12" fill="#f2c9a7" stroke="#8c5e45" strokeWidth="2"/><circle cx="109" cy="92" r="12" fill="#f2c9a7" stroke="#8c5e45" strokeWidth="2"/><path d="M54 143q2-34 18-34t18 34m1 0q2-34 18-34t18 34" fill="#9c2842" stroke="#b58a46" strokeWidth="2"/><path d="M61 85q10-22 22 0m16 0q10-22 22 0" fill="#d7ad61" stroke="#9c2842" strokeWidth="2"/></g><path className="wedding-flower" d="M90 56q-10-12 0-17 10 5 0 17m0 0q-14-8-18 2 8 10 18-2m0 0q14-8 18 2-8 10-18-2m0 0q-8 14 0 18 8-4 0-18" fill="#d5a650"/></svg>}
    {event.name === 'Pagfera' && <svg viewBox="0 0 180 170"><g className="pagfera-kalash"><path d="M58 89q8 18 7 44h50q-1-26 7-44l-18-15H76z" fill="#e2bb64" stroke="#9c7135" strokeWidth="3"/><path d="M56 89q34 12 69 0M78 75l-2-21m27 21 3-21M63 130h62" fill="none" stroke="#9c7135" strokeWidth="3"/><path d="M88 75q-20-19-18-33m27 33q20-19 18-33m-27 33V31" fill="none" stroke="#688056" strokeWidth="4" strokeLinecap="round"/><path d="M68 42q18-13 22 8-17 8-22-8m40 0q-18-13-22 8 17 8 22-8" fill="#92a174" stroke="#688056" strokeWidth="2"/></g><path className="pagfera-footprints" d="M36 139q-8-8-4-17 5-8 11 0 4 9-7 17m102-2q-8-8-4-17 5-8 11 0 4 9-7 17" fill="#bf8f48"/><path className="pagfera-lotus" d="M89 151q-18-17 0-26 18 9 0 26m0 0q-22-9-24 5 16 11 24-5m0 0q22-9 24 5-16 11-24-5" fill="#cd9f52"/></svg>}
  </div>;
}

class QrErrorBoundary extends React.Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    return this.state.failed ? <p className="qr-error" role="alert">The QR code could not be generated. Please check the amount and try again.</p> : this.props.children;
  }
}

const safeName = raw => String(raw || '').normalize('NFC').replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, 80);
const validAmount = raw => /^(?:\d{1,7})(?:\.\d{1,2})?$/.test(raw) && Number(raw) > 0;

const eventShlokas = {
  Haldi: 'शं नो देवीरभिष्टय आपो भवन्तु पीतये।\nशं योरभि स्रवन्तु नः॥',
  Mehendi: 'सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके।\nशरण्ये त्र्यम्बके गौरी नारायणि नमोऽस्तु ते॥',
  Sangeet: 'वेदानां सामवेदोऽस्मि देवानामस्मि वासवः।\nइन्द्रियाणां मनश्चास्मि भूतानामस्मि चेतना॥',
  Wedding: 'समञ्जन्तु विश्वे देवाः समापो हृदयानि नौ।\nसं मातरिश्वा सं धाता समु देष्ट्री दधातु नौ॥',
  Pagfera: 'इहैव स्तं मा वि यौष्टं विश्वमायुर्व्यश्नुतम्।\nक्रीळन्तौ पुत्रैर्नप्तृभिर्मोदमानौ स्वे गृहे॥'
};

function SanskritInscription({ className = '', children }) {
  const text = React.Children.toArray(children).map(part => typeof part === 'string' ? part.normalize('NFC') : React.isValidElement(part) && part.type === 'br' ? '\n' : '').join('');
  const lines = text.split('\n').map(line => line.trim()).filter(Boolean);
  if (className.includes('event-wall-verse')) {
    return <p className={`sanskrit-inscription ${className}`} lang="sa">{children}</p>;
  }
  return <SanskritArchInscription className={className} lines={lines}/>;
}

const lerpPoint = (start, end, t) => [start[0] + (end[0] - start[0]) * t, start[1] + (end[1] - start[1]) * t];
function splitCubic(points, t) {
  const [p0, p1, p2, p3] = points;
  const p01 = lerpPoint(p0, p1, t);
  const p12 = lerpPoint(p1, p2, t);
  const p23 = lerpPoint(p2, p3, t);
  const p012 = lerpPoint(p01, p12, t);
  const p123 = lerpPoint(p12, p23, t);
  const middle = lerpPoint(p012, p123, t);
  return [[p0, p01, p012, middle], [middle, p123, p23, p3]];
}
function cubicParameterAtX(points, x) {
  let low = 0;
  let high = 1;
  for (let step = 0; step < 24; step += 1) {
    const middle = (low + high) / 2;
    const point = splitCubic(points, middle)[0][3];
    if (point[0] < x) low = middle;
    else high = middle;
  }
  return (low + high) / 2;
}
const cubicPath = points => `M${points[0][0]} ${points[0][1]}C${points[1][0]} ${points[1][1]} ${points[2][0]} ${points[2][1]} ${points[3][0]} ${points[3][1]}`;

function SanskritArchInscription({ className, lines }) {
  const id = `mantra-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const svgRef = useRef(null);
  const fittedPathRef = useRef(null);
  const fittedTextRef = useRef(null);
  const linePathRefs = useRef([]);
  const lineTextRefs = useRef([]);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [fittedFontSize, setFittedFontSize] = useState(0);
  const [lineFontSizes, setLineFontSizes] = useState([]);
  const [familyCenterGap, setFamilyCenterGap] = useState(0);
  const isOpeningMantra = className.includes('opening-mantra');
  const isMangalamMantra = className.includes('mangalam-mantra');
  const isWelcomeMantra = className.includes('welcome-mangalam-mantra');
  const isFinalMantra = className.includes('final-mantra');
  const isFooterMantra = className.includes('footer-mantra');
  const isFamilyMantra = className.includes('family-mantra');

  useEffect(() => {
    const element = svgRef.current;
    if (!element) return undefined;
    const familyLabel = isFamilyMantra && className.includes('family-pillar-mantra')
      ? element.closest('.families')?.querySelector(':scope > .eyebrow')
      : null;
    const measure = () => {
      const rect = element.getBoundingClientRect();
      const next = { width: Math.round(rect.width * 10) / 10, height: Math.round(rect.height * 10) / 10 };
      setSize(previous => Math.abs(previous.width - next.width) < 0.5 && Math.abs(previous.height - next.height) < 0.5 ? previous : next);
      if (familyLabel) {
        const range = document.createRange();
        range.selectNodeContents(familyLabel);
        const labelWidth = range.getBoundingClientRect().width;
        const gap = labelWidth + (window.innerWidth <= 760 ? 12 : 16);
        setFamilyCenterGap(previous => Math.abs(previous - gap) < 1 ? previous : gap);
      }
      if (isFooterMantra && fittedPathRef.current?.getTotalLength && fittedTextRef.current?.getComputedTextLength) {
        const pathLength = fittedPathRef.current.getTotalLength();
        const textLength = fittedTextRef.current.getComputedTextLength();
        if (pathLength > 0 && textLength > 0) {
          const currentSize = parseFloat(getComputedStyle(fittedTextRef.current).fontSize) || 16;
          const baseTextLength = textLength * 16 / currentSize;
          const minSize = window.innerWidth <= 760 ? 23 : 33;
          const fittedSize = Math.max(minSize, Math.min(48, pathLength * 0.86 / baseTextLength * 16) - 5);
          setFittedFontSize(previous => Math.abs(previous - fittedSize) < 0.5 ? previous : fittedSize);
        }
      }
      if (isMangalamMantra || isFamilyMantra) {
        const familyPillarMantra = isFamilyMantra && className.includes('family-pillar-mantra');
        const baseSize = isFamilyMantra ? (familyPillarMantra ? (window.innerWidth <= 760 ? Math.max(8, Math.min(20, window.innerWidth * .028 - 2)) : 32) : window.innerWidth <= 760 ? 22 : 16) : (isWelcomeMantra && window.innerWidth <= 760 ? 24 : window.innerWidth <= 760 ? 15 : 17);
        const maxSize = isWelcomeMantra ? (window.innerWidth <= 760 ? 26 : 38) : baseSize;
        const nextSizes = archText.map((_, index) => {
          const path = linePathRefs.current[index];
          const text = lineTextRefs.current[index];
          if (!path?.getTotalLength || !text?.getComputedTextLength) return isWelcomeMantra && window.innerWidth <= 760 ? 13 : baseSize;
          const pathLength = path.getTotalLength();
          const textLength = text.getComputedTextLength();
          if (!(pathLength > 0) || !(textLength > 0)) return isWelcomeMantra && window.innerWidth <= 760 ? 13 : baseSize;
          const currentSize = parseFloat(getComputedStyle(text).fontSize) || baseSize;
          const minimumSize = familyPillarMantra ? 8 : isWelcomeMantra && window.innerWidth <= 760 ? 8 : 11;
          const fittedSize = Math.max(minimumSize, Math.min(maxSize, pathLength * .94 * currentSize / textLength));
          return isWelcomeMantra && window.innerWidth > 760 ? Math.min(maxSize, fittedSize + 2) : fittedSize;
        });
        setLineFontSizes(previous => nextSizes.some((value, index) => Math.abs((previous[index] || 0) - value) >= .5) ? nextSizes : previous);
      }
    };
    measure();
    let active = true;
    if (isWelcomeMantra && window.innerWidth <= 760 && document.fonts?.ready) {
      document.fonts.ready.then(() => { if (active) measure(); });
    }
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', measure);
      return () => { active = false; window.removeEventListener('resize', measure); };
    }
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    if (familyLabel) observer.observe(familyLabel);
    return () => { active = false; observer.disconnect(); };
  }, [familyCenterGap, size.width, size.height]);

  const width = size.width || (isOpeningMantra ? 500 : isFinalMantra ? 820 : 1000);
  const height = size.height || (isOpeningMantra ? 700 : isFinalMantra ? 560 : 700);
  const familyPillarInscription = className.includes('family-pillar-mantra');
  const openingArchRadius = Math.min(250, width / 2);
  const openingInnerRx = Math.min(240, (width - 26) / 2);
  const openingInnerRy = Math.min(240, (height - 26) / 2);
  const storyScaleX = width / 1000;
  const storyScaleY = height / 700;
  const storyOuterTextPath = width <= 760
    ? `M${92 * storyScaleX} ${350 * storyScaleY}C${92 * storyScaleX} ${160 * storyScaleY} ${250 * storyScaleX} ${72 * storyScaleY} ${500 * storyScaleX} ${72 * storyScaleY}S${908 * storyScaleX} ${160 * storyScaleY} ${908 * storyScaleX} ${350 * storyScaleY}`
    : `M${220 * storyScaleX} ${150 * storyScaleY}C${300 * storyScaleX} ${72 * storyScaleY} ${400 * storyScaleX} ${72 * storyScaleY} ${500 * storyScaleX} ${72 * storyScaleY}S${700 * storyScaleX} ${72 * storyScaleY} ${780 * storyScaleX} ${150 * storyScaleY}`;
  const storyInnerTextPath = width <= 760
    ? `M${125 * storyScaleX} ${360 * storyScaleY}C${125 * storyScaleX} ${202 * storyScaleY} ${270 * storyScaleX} ${106 * storyScaleY} ${500 * storyScaleX} ${106 * storyScaleY}S${875 * storyScaleX} ${202 * storyScaleY} ${875 * storyScaleX} ${360 * storyScaleY}`
    : `M${270 * storyScaleX} ${180 * storyScaleY}C${335 * storyScaleX} ${106 * storyScaleY} ${420 * storyScaleX} ${106 * storyScaleY} ${500 * storyScaleX} ${106 * storyScaleY}S${665 * storyScaleX} ${106 * storyScaleY} ${730 * storyScaleX} ${180 * storyScaleY}`;
  const welcomeTextOffsetY = 23 * storyScaleY;
  const welcomeOuterTextPath = width <= 760
    ? `M${12 * storyScaleX} ${height * .68}C${150 * storyScaleX} ${height * .32} ${330 * storyScaleX} ${height * .12} ${500 * storyScaleX} ${height * .12}S${850 * storyScaleX} ${height * .32} ${988 * storyScaleX} ${height * .68}`
    : `M${48 * storyScaleX} ${370 * storyScaleY + welcomeTextOffsetY}C${48 * storyScaleX} ${160 * storyScaleY + welcomeTextOffsetY} ${230 * storyScaleX} ${44 * storyScaleY + welcomeTextOffsetY} ${500 * storyScaleX} ${44 * storyScaleY + welcomeTextOffsetY}S${952 * storyScaleX} ${160 * storyScaleY + welcomeTextOffsetY} ${952 * storyScaleX} ${370 * storyScaleY + welcomeTextOffsetY}`;
  const welcomeInnerTextPath = width <= 760
    ? `M${150 * storyScaleX} ${150 * storyScaleY}C${210 * storyScaleX} ${78 * storyScaleY} ${330 * storyScaleX} ${48 * storyScaleY} ${500 * storyScaleX} ${48 * storyScaleY}S${790 * storyScaleX} ${78 * storyScaleY} ${850 * storyScaleX} ${150 * storyScaleY}`
    : `M${270 * storyScaleX} ${180 * storyScaleY}C${335 * storyScaleX} ${68 * storyScaleY} ${420 * storyScaleX} ${68 * storyScaleY} ${500 * storyScaleX} ${68 * storyScaleY}S${665 * storyScaleX} ${68 * storyScaleY} ${730 * storyScaleX} ${180 * storyScaleY}`;
  const openingInset = 13;
  const closingMobile = width <= 760;
  const closingRx = closingMobile ? width * 0.48 : Math.min(410, width / 2);
  const closingRy = closingMobile ? 120 : 180;
  const closingInset = 18;
  const familyGapRatio = Math.min(.64, Math.max(.08, (familyCenterGap || width * .17) / width));
  const familyArchText = familyPillarInscription ? [lines[0] || '', lines.slice(1).join(' ')] : [lines.join('　')];
  const welcomeMobileText = [lines.slice(0, 2).join(' '), lines.slice(2).join(' ')];
  const footerMobileText = [lines.slice(0, 2).join(' '), lines.slice(2).join(' ')];
  const archText = isFinalMantra ? [lines.join('  ')] : isFooterMantra || isOpeningMantra ? [lines.join(' ')] : isMangalamMantra ? (isWelcomeMantra ? (width <= 760 ? welcomeMobileText : [lines.join(' ')]) : [lines.slice(0, 2).join('　'), lines.slice(2).join('　')]) : isFamilyMantra ? familyArchText : lines;
  const openingFocusWord = 'निर्विघ्नं';
  const openingFocusIndex = isOpeningMantra ? archText[0].indexOf(openingFocusWord) : -1;
  const familyLeftCurve = [[width * .1075, height * .385714], [width * .1075, height * .142857], [width * .27, height * .142857], [width * .5, height * .142857]];
  const familyRightCurve = [[width * .5, height * .142857], [width * .73, height * .142857], [width * .8925, height * .142857], [width * .8925, height * .385714]];
  const familyLeftPath = cubicPath(splitCubic(familyLeftCurve, cubicParameterAtX(familyLeftCurve, width * (.5 - familyGapRatio / 2)))[0]);
  const familyRightPath = cubicPath(splitCubic(familyRightCurve, cubicParameterAtX(familyRightCurve, width * (.5 + familyGapRatio / 2)))[1]);

  return <>
  <svg ref={svgRef} className={`sanskrit-inscription arched-mantra ${className}`} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" role="img" aria-label={lines.join(' ')} lang="sa">
    <title>{lines.join(' ')}</title>
    <defs>
      {isOpeningMantra && <>
        <path id={`${id}-0`} d={`M${openingInset} ${openingArchRadius} A ${width / 2 - openingInset} ${openingArchRadius - openingInset} 0 0 1 ${width - openingInset} ${openingArchRadius}`}/>
        <path id={`${id}-1`} d={`M13 ${13 + openingInnerRy} A ${openingInnerRx} ${openingInnerRy} 0 0 1 ${width - 13} ${13 + openingInnerRy}`}/>
      </>}
      {isMangalamMantra && <>
        <path ref={element => { linePathRefs.current[0] = element; }} id={`${id}-0`} d={isWelcomeMantra ? welcomeOuterTextPath : storyOuterTextPath}/>
        <path ref={element => { linePathRefs.current[1] = element; }} id={`${id}-1`} d={isWelcomeMantra ? welcomeInnerTextPath : storyInnerTextPath}/>
      </>}
      {isFamilyMantra && <>
        {familyPillarInscription ? <>
          <path ref={element => { linePathRefs.current[0] = element; }} id={`${id}-0`} d={familyLeftPath}/>
          <path ref={element => { linePathRefs.current[1] = element; }} id={`${id}-1`} d={familyRightPath}/>
        </> : <path ref={element => { linePathRefs.current[0] = element; }} id={`${id}-0`} d={`M${width * .04} ${height * .90}C${width * .04} ${height * .48} ${width * .18} ${height * .10} ${width * .43} ${height * .10}`}/>}
      </>}
      {isFinalMantra && <path id={`${id}-0`} d={`M${closingInset} ${closingRy}A${closingRx - closingInset} ${closingRy - closingInset} 0 0 1 ${width - closingInset} ${closingRy}`}/>}
      {isFooterMantra && <path ref={fittedPathRef} id={`${id}-0`} d={`M${150 * storyScaleX} ${700 * storyScaleY}V${310 * storyScaleY}c0 ${-140 * storyScaleY} ${136 * storyScaleX} ${-205 * storyScaleY} ${350 * storyScaleX} ${-205 * storyScaleY}s${350 * storyScaleX} ${65 * storyScaleY} ${350 * storyScaleX} ${205 * storyScaleY}v${390 * storyScaleY}`}/>}
    </defs>
    {(isFooterMantra || isOpeningMantra) ? <text ref={isFooterMantra ? fittedTextRef : null} className="mantra-text-line" style={isFooterMantra && fittedFontSize ? { fontSize: `${fittedFontSize}px` } : undefined}><textPath href={`#${id}-0`} startOffset="50%" textAnchor="middle">{isOpeningMantra && openingFocusIndex >= 0 ? <><tspan>{archText[0].slice(0, openingFocusIndex)}</tspan><tspan dx="4">{openingFocusWord}</tspan><tspan dx="-4">{archText[0].slice(openingFocusIndex + openingFocusWord.length)}</tspan></> : archText[0]}</textPath></text> : isMangalamMantra || isFamilyMantra ? archText.map((line, index) => <text key={index} ref={element => { lineTextRefs.current[index] = element; }} className="mantra-text-line" style={lineFontSizes[index] ? { fontSize: `${lineFontSizes[index]}px` } : undefined}><textPath href={`#${id}-${index}`} startOffset="50%" textAnchor="middle">{line}</textPath></text>) : archText.map((line, index) => <text key={index} className="mantra-text-line"><textPath href={`#${id}-${index}`} startOffset="50%" textAnchor="middle">{line}</textPath></text>)}
  </svg>
  {(isFooterMantra || isOpeningMantra || isWelcomeMantra) && <p className={`mantra-mobile-lines ${isFooterMantra ? 'footer-mantra-mobile' : isOpeningMantra ? 'opening-mantra-mobile' : 'welcome-mantra-mobile'}`} lang="sa">{(isFooterMantra ? footerMobileText : isWelcomeMantra ? welcomeMobileText : lines).map((line, index) => <span key={index}>{line}</span>)}</p>}
  </>;
}

function MandapArch({ className = '' }) {
  return <div className={`mandap-arch ${className}`} aria-hidden="true">
    <svg className="mandap-arch-art" viewBox="0 0 460 430" preserveAspectRatio="none">
      <path className="portal-arch-shadow" d="M48 414V207a182 182 0 0 1 364 0v207"/>
      <path className="portal-arch-outer" d="M56 414V207a174 174 0 0 1 348 0v207"/>
      <path className="portal-arch-inner" d="M73 414V209a157 157 0 0 1 314 0v205"/>
      <path className="portal-arch-light" d="M84 414V209a146 146 0 0 1 292 0v205"/>
      <g className="portal-column-detail">
        <path d="M54 238h28m-25 9h22M54 390h28m-28 9h28M378 238h28m-25 9h22m-25 143h28m-28 9h28"/>
        <path d="M58 253v132m12-132v132m320-132v132m-12-132v132"/>
        <path d="M50 252h36l-5-12H55zm324 0h36l-5-12h-26zM50 385h36v13H50zm324 0h36v13h-36z"/>
        <path d="M57 414h31m284 0h31"/>
      </g>
      <g className="portal-toran">
        <path d="M91 191c28-69 73-104 139-104s111 35 139 104"/>
        <path d="M111 157q-16 9-8 25 14-2 8-25m31-39q-16 10-7 25 14-3 7-25m42-23q-15 12-4 26 13-5 4-26m94 0q15 12 4 26-13-5-4-26m42 23q16 10 7 25-14-3-7-25m31 39q16 9 8 25-14-2-8-25"/>
      </g>
      <g className="portal-keystone" transform="translate(230 68)">
        <path d="M0 17c-18-10-17-25 0-31 17 6 18 21 0 31Zm0 0c-20-2-27 10-17 21 13-1 20-8 17-21Zm0 0c20-2 27 10 17 21-13-1-20-8-17-21Zm0 0c-10 16-4 27 0 29 4-2 10-13 0-29Z"/>
        <circle cx="0" cy="10" r="4"/>
      </g>
      <g className="portal-hanging-details">
        <path d="M91 190v17m278-17v17M105 174v15m250-15v15"/>
        <path d="M86 207q5 7 10 0m274 0q5 7 10 0m-280-18q5 7 10 0m242 0q5 7 10 0"/>
      </g>
      {className.includes('arch-family') && <g className="portal-theme-detail"><path d="M112 181q-8 13 0 20 8-7 0-20m236 0q8 13 0 20-8-7 0-20"/><circle cx="112" cy="203" r="3"/><circle cx="348" cy="203" r="3"/></g>}
      {className.includes('arch-couple') && <g className="portal-theme-detail"><path d="M189 84q18-22 41 0m0 0q23-22 41 0"/><circle cx="230" cy="80" r="4"/></g>}
      {className.includes('arch-event') && <g className="portal-theme-detail"><path d="M120 164q-9 12 0 19 9-7 0-19m220 0q9 12 0 19-9-7 0-19"/><circle cx="120" cy="185" r="3"/><circle cx="340" cy="185" r="3"/></g>}
    </svg>
  </div>;
}

function EventArchGarland() {
  const clipId = `event-garland-${useId().replace(/:/g, '')}`;
  const segments = [
    { x: 56, y: 267, angle: -90 }, { x: 56, y: 365, angle: -90 },
    { x: 404, y: 267, angle: 90 }, { x: 404, y: 365, angle: 90 },
    { x: 61, y: 152, angle: -72 }, { x: 127, y: 66, angle: -36 },
    { x: 230, y: 33, angle: 0 }, { x: 333, y: 66, angle: 36 },
    { x: 399, y: 152, angle: 72 }
  ];
  return <svg className="event-arch-garland" viewBox="0 0 460 430" preserveAspectRatio="none" aria-hidden="true">
    <g>
      {segments.map(({ x, y, angle }, index) => <image key={index} href="/images/elegant-golden-floral-garland.png" x="-60" y="-20" width="120" height="40" preserveAspectRatio="none" transform={`translate(${x} ${y}) rotate(${angle})`}/>)}
    </g>
  </svg>;
}

function WeddingInvitation() {
  const linkedGuestName = safeName(new URLSearchParams(window.location.search).get('guest'));
  const [guestName, setGuestName] = useState(linkedGuestName);
  const [nameInput, setNameInput] = useState('');
  const [opened, setOpened] = useState(Boolean(linkedGuestName));
  const [musicMode, setMusicMode] = useState('off');
  const [seconds, setSeconds] = useState(0);
  const [rsvp, setRsvp] = useState(null);
  const [rsvpShareMessage, setRsvpShareMessage] = useState('');
  const [amount, setAmount] = useState('');
  const audioRef = useRef(null);
  const userMutedMusicRef = useRef(false);
  const musicOn = musicMode !== 'off';
  const target = useMemo(() => wedding.weddingTime ? new Date(wedding.weddingTime).getTime() : Date.parse(`${wedding.weddingDate}T00:00:00+05:30`), []);
  const amountValid = validAmount(amount.trim());
  const upiUri = useMemo(() => {
    if (!amountValid) return '';
    const params = new URLSearchParams({ pa: wedding.shagunUpiId, am: amount.trim(), cu: 'INR' });
    return `upi://pay?${params.toString()}`;
  }, [amount, amountValid]);

  useEffect(() => {
    const tick = () => setSeconds(Math.max(0, Math.floor((target - Date.now()) / 1000)));
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, [target]);

  useEffect(() => {
    if (!opened) return undefined;
    const elements = document.querySelectorAll('.reveal-on-scroll');
    if (!('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -30px 0px' });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [opened]);

  useEffect(() => {
    let disposed = false;
    const player = audioRef.current;
    if (player) {
      player.play().then(() => {
        if (!disposed && !userMutedMusicRef.current) setMusicMode('song');
        else player.pause();
      }).catch(() => {
        // Browsers commonly block sound until a visitor interacts with the invitation.
      });
    }
    return () => {
      disposed = true;
      audioRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    if (musicOn || userMutedMusicRef.current) return undefined;
    let listening = true;
    const stopListening = () => {
      if (!listening) return;
      listening = false;
      window.removeEventListener('pointerdown', resumeMusic, true);
      window.removeEventListener('pointerup', resumeMusic, true);
      window.removeEventListener('touchstart', resumeMusic, true);
      window.removeEventListener('touchend', resumeMusic, true);
      window.removeEventListener('click', resumeMusic, true);
      window.removeEventListener('wheel', resumeMusic, true);
    };
    const resumeMusic = () => {
      if (userMutedMusicRef.current) return;
      const player = audioRef.current;
      if (!player) return;
      const playAttempt = player.play();
      if (playAttempt) {
        playAttempt.then(() => {
          if (userMutedMusicRef.current) {
            player.pause();
            return;
          }
          setMusicMode('song');
          stopListening();
        }).catch(() => {});
      }
    };
    window.addEventListener('pointerdown', resumeMusic, true);
    window.addEventListener('pointerup', resumeMusic, true);
    window.addEventListener('touchstart', resumeMusic, true);
    window.addEventListener('touchend', resumeMusic, true);
    window.addEventListener('click', resumeMusic, true);
    window.addEventListener('wheel', resumeMusic, true);
    return () => {
      stopListening();
    };
  }, [musicOn]);

  function openInvitation() {
    setOpened(true);
    void startWeddingSong();
  }

  function enterGuestName(event) {
    event.preventDefault();
    const name = safeName(nameInput);
    if (!name) return;
    setGuestName(name);
    setOpened(true);
    void startWeddingSong();
  }

  async function shareGuestInvitation() {
    const name = safeName(nameInput);
    if (!name) return;
    const invitationUrl = new URL(window.location.href);
    invitationUrl.hash = '';
    invitationUrl.searchParams.set('guest', name);
    const url = invitationUrl.toString();
    // Start both actions directly from the click so browser share sheets retain
    // their required user activation while the link is copied as well.
    const sharePromise = typeof navigator.share === 'function'
      ? navigator.share({
          title: 'Kirti & Jeetu — Wedding Invitation',
          text: `Dear ${name}, we warmly invite you to celebrate the wedding of Kirti & Jeetu.`,
          url,
        })
      : null;
    if (sharePromise) void sharePromise.catch(() => {});
    try {
      await navigator.clipboard?.writeText(url);
    } catch {
      // Keep the invitation page free of copy-confirmation popups or notices.
    }
  }

  function continueInvitation() {
    document.getElementById('welcome')?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }

  function updateRsvp(event) {
    const form = event.currentTarget.form;
    if (!form) return;
    const formData = new FormData(form);
    const attendance = String(formData.get('attendance') || '');
    setRsvpShareMessage('');
    if (attendance !== 'accepted' && attendance !== 'declined') {
      setRsvp(null);
      return;
    }
    setRsvp({
      attendance,
      note: String(formData.get('message') || '').trim().slice(0, 500),
    });
  }

  async function sendRsvp(event) {
    event.preventDefault();
    if (!rsvp) return;
    const response = rsvp.attendance === 'accepted' ? 'Joyfully accepts' : 'Regretfully declines';
    const personalNote = rsvp.note ? ` Message: “${rsvp.note}”` : '';
    const shareData = {
      title: `Wedding RSVP for ${wedding.bride} & ${wedding.groom}`,
      text: `Hello, this is ${safeName(guestName) || 'a wedding guest'}. ${response}.${personalNote}`,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setRsvpShareMessage('Your reply was opened in the share menu.');
        return;
      } catch (error) {
        if (error?.name === 'AbortError') return;
      }
    }
    try {
      await navigator.clipboard.writeText(shareData.text);
      setRsvpShareMessage('Your reply is copied. Paste it into a message to share with Kirti’s family.');
    } catch {
      setRsvpShareMessage('Your closing note is ready below. You can copy it and share it with Kirti’s family.');
    }
  }

  async function startWeddingSong() {
    try {
      await audioRef.current.play();
      if (userMutedMusicRef.current) {
        audioRef.current.pause();
        setMusicMode('off');
        return;
      }
      setMusicMode('song');
    } catch {
      setMusicMode('off');
    }
  }

  async function toggleMusic() {
    if (musicMode === 'song') {
      userMutedMusicRef.current = true;
      audioRef.current?.pause();
      setMusicMode('off');
      return;
    }
    userMutedMusicRef.current = false;
    await startWeddingSong();
  }

  const topDate = wedding.dateLabel;
  const compactDate = wedding.weddingDate.slice(0, 10).split('-').reverse().join(' · ');
  return <>
    <audio ref={audioRef} src={wedding.musicUrl} autoPlay loop preload="auto" />
      <section className={`cover ${opened ? 'cover-open' : ''}`} id="top" aria-label="Wedding invitation welcome">
      <img className="cover-ganesha cover-ganesha-left" src="/images/ganesha-line-art-transparent.png" alt="" aria-hidden="true" />
      <img className="cover-ganesha cover-ganesha-right" src="/images/ganesha-line-art-transparent.png" alt="" aria-hidden="true" />
      <div className="cover-arch">
        <SanskritInscription className="opening-mantra">वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभः।<br/><br/>निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥</SanskritInscription>
        <Butterfly className="cover-butterfly butterfly-one"/><Butterfly className="cover-butterfly butterfly-two"/>
        <div className="mandala">✺</div>
        <span className="cover-overline">YOU ARE CORDIALLY INVITED</span>
        <h1 className="cover-names"><span className="couple-name-accent">{wedding.bride}</span><i>&</i><span className="couple-name-accent">{wedding.groom}</span></h1>
        <div className="cover-date">{compactDate}</div>
        <p className="cover-note">A day of love, laughter, and new beginnings. We would be honoured to celebrate it with you.</p>
        <div className="cover-rule"><span>✦</span></div>
        {!opened ? <div className="guest-honoree" role="status">
          {guestName ? <><span>THIS INVITATION IS ESPECIALLY FOR</span><strong>{guestName}</strong><button className="gold-button guest-continue" onClick={openInvitation}>OPEN YOUR INVITATION <ArrowDown size={15}/></button></> : <><h2>Welcome to the Wedding Celebration</h2><form className="guest-name-form" onSubmit={enterGuestName}><input id="guest-name" name="guestName" aria-label="Enter your name" value={nameInput} onChange={event => setNameInput(event.target.value)} maxLength={80} autoComplete="name" placeholder="Enter your name" required/>{safeName(nameInput) && <button className="guest-share-button" type="button" onClick={shareGuestInvitation}><Share2 size={15}/> SHARE INVITATION</button>}<button className="gold-button guest-continue" type="submit">OPEN YOUR INVITATION <ArrowDown size={15}/></button></form></>}
        </div> : <div className="guest-honoree" role="status"><span>{guestName ? 'THIS INVITATION IS ESPECIALLY FOR' : 'WITH LOVE AND BLESSINGS'}</span>{guestName && <strong>{guestName}</strong>}<p>Kirti's family is delighted to celebrate this beautiful beginning with you.</p><button className="gold-button guest-continue" onClick={continueInvitation}>CONTINUE TO THE CELEBRATION <ArrowDown size={15}/></button></div>}
        <div className="cover-flower">❋</div>
        {opened && <div className="petals" aria-hidden="true">{['✿','✧','❋','✦','✿','✧'].map((p,i)=><b key={i} style={{'--i':i}}>{p}</b>)}</div>}
      </div>
      <span className="cover-foot">A CELEBRATION OF LOVE & FAMILY</span>
    </section>

    {opened && <>
    <header className="site-nav"><a href="#welcome" className="nav-mark">K <Heart className="nav-heart" size={14} fill="currentColor" aria-hidden="true"/> J</a><nav><a href="#story">Our invitation</a><a href="#events">Celebrations</a><a href="#venue">Venue</a><a href="#rsvp">RSVP</a><a href="#shagun">Shagun</a></nav><a className="nav-date" href="#countdown">{topDate} <ArrowDown size={14}/></a><button className="music-toggle" onClick={toggleMusic} aria-label={musicOn ? 'Pause wedding music' : 'Play wedding music'} aria-pressed={musicOn} title={musicOn ? 'Pause music' : 'Play wedding music'}>{musicOn ? <Volume2/> : <VolumeX/>}<span>{musicOn ? 'Music on' : 'Play music'}</span></button></header>
    <main>
      <section id="welcome" className="welcome section-pad"><WeddingScenery creature="peacock" theme="welcome"/><img className="welcome-phera-art welcome-phera-left" src="/images/golden-mandap-phera.png" alt="" aria-hidden="true"/><img className="welcome-phera-art welcome-phera-right" src="/images/golden-mandap-phera.png" alt="" aria-hidden="true"/><SanskritInscription className="mangalam-mantra welcome-mangalam-mantra">मङ्गलं भगवान् विष्णुः।<br/>मङ्गलं गरुडध्वजः।<br/>मङ्गलं पुण्डरीकाक्षः।<br/>मङ्गलाय तनो हरिः॥</SanskritInscription><Butterfly className="section-butterfly welcome-butterfly"/><div className="welcome-ornament">✦　❋　✦</div><p className="eyebrow">A WARM WELCOME FROM KIRTI'S FAMILY</p><h2>Two hearts.<br/><em>One beautiful beginning.</em></h2><div className="names-line"><span className="couple-name-accent">{wedding.bride}</span> <span>&</span> <span className="couple-name-accent">{wedding.groom}</span></div><p className="welcome-copy">With love and blessings, Kirti's family warmly welcomes you to celebrate the wedding of Kirti &amp; Jeetu. Your presence will make this special occasion even more memorable.</p><div className="date-pill"><CalendarDays size={17}/> {wedding.weddingWeekday}, {wedding.dateLabel}</div><div className="welcome-couple-art" aria-label="A little animated portrait of Kirti and Jeetu"><MandapArch className="arch-couple"/><CoupleIllustration/><Butterfly className="welcome-art-butterfly"/></div><a href="#story" className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={14}/></a><div className="welcome-side">EST. IN LOVE<br/>2026</div></section>

      <section id="story" className="story section-pad"><WeddingScenery creature="elephant" theme="story"/><Butterfly className="section-butterfly story-butterfly"/><div className="section-kicker">A NOTE FROM KIRTI'S FAMILY <span>01</span></div><div className="story-grid"><div><p className="eyebrow gold-text">A NOTE FROM THE BRIDE'S FAMILY</p><h2>It would mean<br/>the world to us.</h2><img className="story-namaste-art" src="/images/namaste-halo.png" alt="" aria-hidden="true"/></div><div className="story-text"><p>{wedding.invitationText}</p><p>As Kirti begins this beautiful chapter with Jeetu, we would be honoured to have you by our side. Come share the laughter, the traditions, and the love that bring our family together.</p><div className="signature">With love and blessings, <b>Kirti's Family</b></div></div></div><div className="story-seal">KJ</div></section>

      <section id="countdown" className="countdown section-pad"><WeddingScenery creature="peacock" theme="countdown"/><div className="countdown-lotus-flourishes" aria-hidden="true"><img className="countdown-lotus countdown-lotus-top-right" src="/images/golden-lotus-diya-flourish.png" alt=""/><img className="countdown-lotus countdown-lotus-bottom-left" src="/images/golden-lotus-diya-flourish.png" alt=""/></div><div className="section-kicker">THE DAY KIRTI &amp; JEETU BECOME ONE <span>02</span></div><p className="eyebrow">COUNTING DOWN TO THE WEDDING</p><h2>Until we celebrate…</h2><p className="countdown-note">Every passing day brings us closer to a celebration of love, family, and new beginnings. We can hardly wait to share it with you.</p>{seconds > 0 ? <div className="clock-grid">{[['Days',Math.floor(seconds/86400)],['Hours',Math.floor(seconds%86400/3600)],['Minutes',Math.floor(seconds%3600/60)],['Seconds',seconds%60]].map(([label,value])=><div className="clock-unit" key={label}><strong>{String(value).padStart(2,'0')}</strong><span>{label}</span></div>)}</div> : <p className="celebrate"><Sparkles/> The celebration has begun. Let the memories live forever.</p>}<div className="count-date">{wedding.dateLabel.toUpperCase()} <span>·</span> INDIA STANDARD TIME</div></section>

      <section id="events" className="events section-pad">
        <WeddingScenery creature="elephant" theme="events"/>
        <div className="event-feather-layer" aria-hidden="true">
          <img className="event-peacock-feather event-peacock-feather-left" src="/images/ornate-golden-peacock-feather-4k.png" alt=""/>
          <img className="event-peacock-feather event-peacock-feather-right" src="/images/ornate-golden-peacock-feather-4k.png" alt=""/>
          <img className="event-peacock-feather event-peacock-feather-left-mid" src="/images/ornate-golden-peacock-feather-4k.png" alt=""/>
          <img className="event-peacock-feather event-peacock-feather-left-lower" src="/images/ornate-golden-peacock-feather-4k.png" alt=""/>
          <img className="event-peacock-feather event-peacock-feather-right-mid" src="/images/ornate-golden-peacock-feather-4k.png" alt=""/>
          <img className="event-peacock-feather event-peacock-feather-right-lower" src="/images/ornate-golden-peacock-feather-4k.png" alt=""/>
        </div>
        <div className="section-kicker">GATHER, CELEBRATE, REJOICE <span>03</span></div>
        <p className="eyebrow">THE WEDDING FESTIVITIES</p>
        <h2>Moments to cherish</h2>
        <p className="muted center event-intro">From the first golden Haldi glow to the music, vows, and family blessings, every gathering has a little story of its own. We would love to make these memories with you.</p>
        <div className="event-journey">
          {wedding.events.map((event, i) => <div className={`journey-step reveal-on-scroll${event.name === 'Pagfera' ? ' pagfera-step' : ''}${event.name === 'Haldi' ? ' haldi-step' : ''}`} key={event.name} style={{'--reveal-delay':`${i*130}ms`}}>
            <div className="journey-node" aria-hidden="true"><span>{String(i + 1).padStart(2, '0')}</span><i>✿</i></div><div className={`journey-aside engraving-${event.name.toLowerCase()}`}><JourneyMascot event={event}/><SanskritInscription className="event-wall-verse">{eventShlokas[event.name]}</SanskritInscription><img className="event-row-peacock-feather" src="/images/ornate-golden-peacock-feather-4k.png" alt="" aria-hidden="true"/></div>
            <article className={`event-card event-${event.name.toLowerCase()}`}>
              <MandapArch className={`arch-card arch-event arch-${event.name.toLowerCase()}`}/>
              <span className="event-number">MOMENT 0{i + 1}</span>
              <div className="event-art" aria-hidden="true"><Butterfly className="event-butterfly"/>{event.name === 'Haldi' && <><i className="haldi-dot dot-one"/><i className="haldi-dot dot-two"/><i className="haldi-dot dot-three"/><span className="event-flower">✿</span></>}{event.name === 'Mehendi' && <><span className="henna-vine">❧</span><span className="henna-leaf leaf-one">❧</span><span className="henna-leaf leaf-two">❀</span></>}{event.name === 'Sangeet' && <><span className="music-note note-one">♪</span><span className="music-note note-two">♫</span><span className="music-note note-three">♪</span></>}{event.name === 'Wedding' && <><span className="wedding-petal petal-one">✿</span><span className="wedding-petal petal-two">✧</span><span className="wedding-petal petal-three">❀</span></>}{event.name === 'Pagfera' && <><span className="pagfera-flower flower-one">❀</span><span className="pagfera-flower flower-two">✿</span><span className="pagfera-flower flower-three">❋</span></>}</div>
              <span className="event-icon">{['☼','❋','♫','✦','❀'][i]}</span>
      <h3 lang="hi">{eventNamesHindi[event.name]}</h3>
              <p className="event-note">{event.note}</p>
              <div className="event-details"><span>{event.date}</span>{event.venue && <span>{event.venue}</span>}</div>
              {event.mapUrl && <a href={event.mapUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={13}/></a>}
            </article>
            {event.name === 'Pagfera' && <img className="event-card-peacock-feather" src="/images/ornate-golden-peacock-feather-4k.png" alt="" aria-hidden="true"/>}
            {event.name === 'Pagfera' && <img className="event-card-peacock-feather event-card-peacock-feather-right" src="/images/ornate-golden-peacock-feather-4k.png" alt="" aria-hidden="true"/>}
            {event.name === 'Haldi' && <img className="haldi-card-peacock-feather" src="/images/ornate-golden-peacock-feather-4k.png" alt="" aria-hidden="true"/>}
          </div>)}
        </div>
      </section>

      <section id="venue" className="venue section-pad"><WeddingScenery creature="peacock" theme="venue"/><div className="venue-peacock-feathers" aria-hidden="true"><img className="venue-peacock-feather venue-peacock-left" src="/images/mayur-pankh.png" alt=""/><img className="venue-peacock-feather venue-peacock-right" src="/images/mayur-pankh.png" alt=""/><img className="venue-peacock-feather venue-peacock-lower-left" src="/images/mayur-pankh.png" alt=""/><img className="venue-peacock-feather venue-peacock-lower-right" src="/images/mayur-pankh.png" alt=""/></div><div className="section-kicker">FIND YOUR WAY TO US <span>04</span></div><p className="eyebrow">WE'LL SAVE YOU A SEAT</p><h2><span className="venue-heading-first">Meet us where</span><br/><em>the <span className="venue-magic">magic</span> happens.</em></h2><p className="venue-welcome">Join us at Kasturi Mahal Sagun Vatika in Tappal. Kirti's family will be waiting with open hearts, and we cannot wait to welcome you.</p><div className="venue-card reveal-on-scroll"><MapPin size={22}/><div><h3>{wedding.venue.name}</h3><p>{wedding.venue.address || 'Location for the wedding celebrations'}</p></div><a href={wedding.venue.mapUrl} target="_blank" rel="noreferrer" className="gold-button">GET DIRECTIONS <ArrowUpRight size={15}/></a></div><div className="venue-note">May the journey bring you safely to a day full of joy, good company, and treasured memories.</div></section>

      <section id="family-section" className="families section-pad"><WeddingScenery creature="elephant" theme="family"/><div className="family-floral-vines" aria-hidden="true"><span className="family-floral-vine family-floral-vine-left"/><span className="family-floral-vine family-floral-vine-right"/></div><Butterfly className="section-butterfly family-butterfly"/><div className="section-kicker">ROOTED IN LOVE <span>05</span></div><p className="eyebrow">WITH LOVE AND BLESSINGS</p><h2>A Warm Welcome From <span className="couple-name-accent">Kirti's</span> Family</h2><div className="bride-welcome-card reveal-on-scroll"><WelcomeCardFloralTrim/><span className="bride-welcome-kicker">A WELCOME FROM THE BRIDE'S FAMILY</span><h3>We welcome you with open hearts.</h3><p>We are overjoyed to see Kirti and Jeetu begin their life together. Your presence will fill this celebration with warmth; please join us and bless the couple as they make memories to cherish for a lifetime.</p><img className="family-welcome-flute" src="/images/ornate-golden-flute-trim.png" alt="" aria-hidden="true"/></div><SanskritInscription className="family-mantra family-pillar-mantra">।<br/></SanskritInscription><div className="family-row-heading">With love and blessings from her parents</div><div className="family-row family-parents">{wedding.brideFamily.parents.map((member,index)=><article className="family-card reveal-on-scroll" key={member.name} style={{'--reveal-delay':`${index*120}ms`}}><span className="family-flower" aria-hidden="true">{index === 0 ? '✿' : '❀'}</span><Butterfly className="family-card-butterfly"/><h3>{member.name}</h3><p className="family-relationship">{member.relationship}</p><p className="family-note">“{member.note}”</p></article>)}</div><div className="family-row-heading sibling-heading">With love from her sisters and brother</div><div className="family-row family-siblings">{wedding.brideFamily.siblings.map((member,index)=><article className="family-card reveal-on-scroll" key={member.name} style={{'--reveal-delay':`${index*100}ms`}}><span className="family-flower" aria-hidden="true">{['✿','❋','❀','✧'][index]}</span><Butterfly className="family-card-butterfly"/><h3>{member.name}</h3>{member.relationship && <p className="family-relationship">{member.relationship}</p>}<p className="family-note">“{member.note}”</p></article>)}</div></section>

      <footer className="footer section-pad"><div className="footer-ornaments" aria-hidden="true"><img className="footer-peacock-feather footer-peacock-left" src="/images/mayur-pankh.png" alt=""/><img className="footer-peacock-feather footer-peacock-right" src="/images/mayur-pankh.png" alt=""/><Butterfly className="footer-colored-butterfly footer-butterfly-one"/><Butterfly className="footer-colored-butterfly footer-butterfly-two"/><Butterfly className="footer-colored-butterfly footer-butterfly-three"/><Butterfly className="footer-colored-butterfly footer-butterfly-four"/></div><WeddingScenery creature="elephant" theme="farewell"/><SanskritInscription className="footer-mantra">ॐ भूर्भुवः स्वः।<br/>तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि।<br/>धियो यो नः प्रचोदयात्॥</SanskritInscription><div className="footer-flourish">✦　❋　✦</div><p className="eyebrow">WITH LOVE AND BLESSINGS</p><h2 className="footer-closing-message">Your presence, <span className="footer-message-accent">love, and blessings</span><br/>will make our celebration complete.<br/>May joy fill every moment we share,<br/>and keep these memories in our hearts.</h2><img className="footer-diya-divider" src="/images/golden-lotus-diya-divider.png" alt="" aria-hidden="true"/><p className="footer-sign">With love,<br/><b>Kirti's Family</b></p><div className="footer-date">{compactDate}</div><div className="footer-bottom">MADE WITH LOVE <Heart size={13} fill="currentColor"/> FOR KIRTI & JEETU</div></footer>

      <section id="rsvp" className="rsvp section-pad"><div className="rsvp-side-decorations" aria-hidden="true"><img className="rsvp-side-woman rsvp-side-woman-right" src="/images/namaste-woman-transparent.png" alt=""/><img className="rsvp-side-thali" src="/images/ornate-golden-pooja-thali.png" alt=""/></div><WeddingScenery creature="peacock" theme="rsvp"/><div className="section-kicker">A NOTE WOULD MAKE OUR DAY <span>06</span></div><p className="eyebrow">KINDLY REPLY</p><h2>Will you join us?</h2><p className="muted center">Your presence would mean the world to our families. We would be so happy if you could join Kirti &amp; Jeetu and bless their new beginning. Kindly let us know if you can attend.</p><RsvpResponseBlessing attendance={rsvp?.attendance}/><form className="rsvp-form" onSubmit={sendRsvp}><label>Your response<select name="attendance" required defaultValue="" onChange={updateRsvp}><option value="" disabled>Select an option</option><option value="accepted">Joyfully accepts</option><option value="declined">Regretfully declines</option></select></label><label className="full">A message for the couple <textarea name="message" placeholder="Share a note (optional)" rows="3" maxLength="500" onChange={updateRsvp}/></label><button className="gold-button full" type="submit">SEND YOUR REPLY <ArrowUpRight size={15}/></button>{rsvp && <p className="rsvp-note full" role="status">Your closing message updates as you edit these details. <a href="#closing">View your note <ArrowUpRight size={13}/></a>{rsvpShareMessage && <span className="rsvp-share-feedback">{rsvpShareMessage}</span>}</p>}</form></section>

      {rsvp && <section id="closing" className={`closing-slide section-pad closing-${rsvp.attendance}`} aria-labelledby="closing-title">
        <WeddingScenery creature={rsvp.attendance === 'accepted' ? 'peacock' : 'elephant'} theme="farewell"/>
        <div className="closing-card" role="status">
          <img className="closing-peacock-feather closing-peacock-feather-left" src="/images/mayur-pankh.png" alt="" aria-hidden="true"/>
          <img className="closing-peacock-feather closing-peacock-feather-right" src="/images/mayur-pankh.png" alt="" aria-hidden="true"/>
          <Butterfly className="closing-butterfly closing-butterfly-one"/>
          <Butterfly className="closing-butterfly closing-butterfly-two"/>
          <Butterfly className="closing-butterfly closing-butterfly-three"/>
          <Butterfly className="closing-butterfly closing-butterfly-four"/>
          <div className="closing-seal" aria-hidden="true">{rsvp.attendance === 'accepted' ? '♡' : '✉'}</div>
          <p className="eyebrow">{rsvp.attendance === 'accepted' ? 'YOUR PLACE IS WAITING' : 'SENDING YOU OUR LOVE'}</p>
          <h2 id="closing-title">{rsvp.attendance === 'accepted' ? <>We can’t wait to celebrate, <em>{safeName(guestName) || 'dear guest'}</em>.</> : <>Thank you for letting us know, <em>{safeName(guestName) || 'dear guest'}</em>.</>}</h2>
          <p className="closing-message">{rsvp.attendance === 'accepted'
            ? `How wonderful that you’ll be joining us. Your smiles, blessings, and happy spirit will make Kirti & Jeetu’s celebration all the more beautiful. We are saving a warm welcome just for you.`
            : 'Though we will miss you, please know that our love and warm wishes are with you. We hope the celebration brings a smile to your heart from afar, and that we can share a happy moment together another time.'}</p>
          {rsvp.note && <blockquote className="closing-guest-note">“{rsvp.note}”</blockquote>}
          <div className="closing-signature">With love and blessings,<br/><strong><span className="couple-name-accent">Kirti &amp; Jeetu</span> &amp; their families</strong></div>
          <div className="closing-date">{wedding.dateLabel}</div>
          <img className="closing-diya" src="/images/golden-lotus-diya-divider.png" alt="Golden lotus diya"/>
          <div className="closing-flourish" aria-hidden="true">✦　❋　✦</div>
        </div>
      </section>}

      <section id="shagun" className="shagun section-pad">
        <WeddingScenery creature="peacock" theme="shagun"/><Butterfly className="section-butterfly shagun-butterfly"/>
        <div className="section-kicker">BLESSINGS, FROM OUR HEARTS <span>07</span></div>
        <p className="eyebrow">A TOKEN OF LOVE</p>
        <img className="shagun-lakshmi-art" src="/images/ornate-golden-lakshmi-wealth-ornament.png" alt="Golden Lakshmi wealth ornament"/>
        <h2>Send Your Love &amp; Shagun</h2>
        <p className="shagun-copy">Your blessings and good wishes mean the most to us. If you wish to send Shagun, you may do so using the payment option below. Above all, your love and presence are the greatest gifts our family could ask for.</p>
        <div className="shagun-content">
          <div className={`shagun-card${amountValid ? ' has-qr' : ''}`}>
            <div className="shagun-entry">
              <label htmlFor="shagun-amount">Enter Shagun Amount (₹)</label>
              <div className="amount-field"><span>₹</span><input id="shagun-amount" inputMode="decimal" autoComplete="off" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Enter amount" aria-describedby="amount-help amount-status"/></div>
              <small id="amount-help">Enter a positive amount (up to two decimal places).</small>
              {!amount && <p className="amount-prompt" id="amount-status">Enter an amount to generate the QR code.</p>}
              {amount && !amountValid && <p className="amount-error" id="amount-status" role="alert">Please enter a valid amount greater than ₹0, using up to two decimal places.</p>}
              {amountValid && <><p className="amount-display" id="amount-status" aria-live="polite">Shagun amount: <strong>₹{Number(amount.trim()).toFixed(2)}</strong></p><p className="scan-instruction">Scan this QR code using a compatible UPI payment app. Review the payment details in your app before confirming.</p><a className="gold-button upi-open" href={upiUri}><Smartphone size={15}/> OPEN UPI APP</a><p className="payment-disclaimer">This only creates a payment QR. No payment is initiated or verified, and no payment information is stored here.</p></>}
            </div>
            {amountValid && <div className="payment-qr"><QrErrorBoundary key={upiUri}><div className="qr-frame"><QRCodeSVG value={upiUri} size={260} level="M" includeMargin bgColor="#ffffff" fgColor="#21050b" title={`UPI payment QR for ₹${Number(amount.trim()).toFixed(2)}`}/></div></QrErrorBoundary></div>}
          </div>
        </div>
        <a className="gold-button shagun-return" href="#top" onClick={e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});}}>RETURN TO THE INVITATION <ArrowUpRight size={15}/></a>
      </section>
    </main>
    <footer className="website-signature">Crafted and managed by SKA</footer>
    </>}
  </>;
}

function App() {
  return <WeddingInvitation/>;
}

createRoot(document.getElementById('root')).render(<App/>);
