// Shared <defs> for every jersey render: the outline clip-path, collar trim
// path, and crest symbol. Mount once near the app root; JerseyGraphic
// instances reference these by id via <use>/clip-path.
export default function JerseySprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <clipPath id="jerseyOutline" clipPathUnits="userSpaceOnUse">
          <path d="M92,2 Q120,26 148,2 L168,10 L205,6 L236,58 L198,82 L198,296 L42,296 L42,82 L4,58 L35,6 L72,10 Z" />
        </clipPath>
        <path id="jerseyCollar" d="M86,-2 Q120,24 154,-2" />
        <symbol id="jerseyCrest" viewBox="0 0 26 32">
          <path
            d="M1,1 H25 V16 C25,24 19,29 13,31 C7,29 1,24 1,16 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M9,9 L11,7 L13,9 L15,7 L17,9 L15,11 L15,23 L11,23 L11,11 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
          />
        </symbol>
      </defs>
    </svg>
  );
}
