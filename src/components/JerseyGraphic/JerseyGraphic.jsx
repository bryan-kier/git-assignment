import './JerseyGraphic.css';

/**
 * Vector jersey render used everywhere a product graphic is needed
 * (hero, product cards, PDP). No real club/league branding — a shield
 * crest with a generic jersey glyph and a "SPONSOR" placeholder stand
 * in for a real badge/sponsor, since this business resells unofficial
 * imports and can't imply licensing.
 */
export default function JerseyGraphic({
  pattern = 'diagonal',
  fillA = 'var(--surface-3)',
  fillB = 'var(--bg-raised)',
  number,
  className = '',
}) {
  const fillStyle = { '--fill-a': fillA, '--fill-b': fillB };

  return (
    <svg className={`jersey-render ${className}`} viewBox="0 0 240 300" aria-hidden="true">
      <g clipPath="url(#jerseyOutline)">
        <foreignObject x="0" y="0" width="240" height="300">
          <div xmlns="http://www.w3.org/1999/xhtml" className={`jersey-fill jersey-fill--${pattern}`} style={fillStyle}>
            {pattern === 'yoke' && (
              <>
                <div className="yoke-top" />
                <div className="seam" />
              </>
            )}
            {pattern === 'panel' && <div className="panel-stripe" />}
          </div>
        </foreignObject>
      </g>
      <use href="#jerseyCollar" className="jersey-collar-use" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <use href="#jerseyCrest" x="54" y="74" width="24" height="30" className="jersey-crest-use" />
      <text x="120" y="168" className="jersey-sponsor-text">
        SPONSOR
      </text>
      {number != null && (
        <text x="120" y="255" className="jersey-number-tag">
          {number}
        </text>
      )}
    </svg>
  );
}
