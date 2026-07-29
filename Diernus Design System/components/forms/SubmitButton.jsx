import React from 'react';

export function SubmitButton({ loading, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return (
    <button type="submit" disabled={loading}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{
        fontFamily: 'var(--font-display)', fontWeight: 'var(--w-semibold)', fontSize: '1.02rem',
        letterSpacing: '.01em', color: 'var(--text-inverse)',
        background: hover && !loading ? 'var(--action-primary-hover)' : 'var(--action-primary)',
        border: 0, borderRadius: 'var(--radius-md)', padding: '.95rem 1.4rem', width: '100%',
        cursor: loading ? 'wait' : 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '.6rem',
        transition: 'background .2s, transform var(--dur-press)', marginTop: '.4rem', minHeight: '3.2rem',
        transform: press ? 'translateY(1px)' : 'none', opacity: loading ? .7 : 1, ...style
      }} {...rest}>
      {loading ? '…' : children}
    </button>
  );
}
