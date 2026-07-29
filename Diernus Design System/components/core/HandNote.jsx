import React from 'react';

export function HandNote({ rotate = -2.5, size = 'clamp(1.6rem,3.2vw,2.1rem)', children, style, ...rest }) {
  return (
    <p style={{
      fontFamily: 'var(--font-hand)', fontWeight: 600, fontSize: size,
      color: 'var(--text-hand)', lineHeight: 1, letterSpacing: 0, margin: 0,
      display: 'inline-block', transform: 'rotate(' + rotate + 'deg)', ...style
    }} {...rest}>{children}</p>
  );
}
