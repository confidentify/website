import React, { useEffect, useRef } from 'react';
import { LayoutMain } from '../app/layout/main';

declare global {
  interface Window {
    AdButler?: any;
    abkw?: string;
    plc1301868?: number;
  }
}

export default function BannerTest() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // zone 01 [async] — load AdButler app.js once
    if (!window.AdButler) {
      const s = document.createElement('script');
      s.async = true;
      s.type = 'text/javascript';
      s.src = 'https://servedbyadbutler.com/app.js';
      const n = document.getElementsByTagName('script')[0];
      n.parentNode?.insertBefore(s, n);
    }

    window.AdButler = window.AdButler || {};
    window.AdButler.ads = window.AdButler.ads || [];
    const abkw = window.abkw || '';

    // Replaces the original `document.write` of the placement div, which would
    // otherwise blank the page when run after load in a React app.
    const place = window.plc1301868 || 0;
    window.plc1301868 = place + 1;

    const div = document.createElement('div');
    div.id = 'placement_1301868_' + place;
    containerRef.current?.appendChild(div);

    window.AdButler.ads.push({
      handler: function (opt: any) {
        window.AdButler.register(189934, 1301868, [970, 90], 'placement_1301868_' + opt.place, opt);
      },
      opt: { place: place, keywords: abkw, domain: 'servedbyadbutler.com', click: 'CLICK_MACRO_PLACEHOLDER' },
    });

    return () => {
      // Keep place ids and divs consistent across React strict-mode remounts.
      div.remove();
    };
  }, []);

  return <LayoutMain>
    <h1>Banner test</h1>
    <div>Before ad</div>
    <div ref={containerRef}></div>
    <div>After ad</div>
  </LayoutMain>
}
