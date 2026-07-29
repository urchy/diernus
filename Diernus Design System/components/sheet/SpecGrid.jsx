import React from 'react';

export function SpecGrid({ columns = 6, children, style, ...rest }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(' + columns + ',1fr)', gap: 1,
      background: 'var(--border-hairline)', border: '1px solid var(--border-hairline)', ...style
    }} {...rest}>{children}</div>
  );
}
