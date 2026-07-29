/* @ds-bundle: {"format":4,"namespace":"DiernusDesignSystem_ebdb11","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"HandNote","sourcePath":"components/core/HandNote.jsx"},{"name":"LangToggle","sourcePath":"components/core/LangToggle.jsx"},{"name":"Stamp","sourcePath":"components/core/Stamp.jsx"},{"name":"StatusDot","sourcePath":"components/core/StatusDot.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"FormFeedback","sourcePath":"components/forms/FormFeedback.jsx"},{"name":"SubmitButton","sourcePath":"components/forms/SubmitButton.jsx"},{"name":"TrustList","sourcePath":"components/forms/TrustList.jsx"},{"name":"MoodFigure","sourcePath":"components/media/MoodFigure.jsx"},{"name":"SketchCard","sourcePath":"components/media/SketchCard.jsx"},{"name":"Checklist","sourcePath":"components/sheet/Checklist.jsx"},{"name":"MaterialCard","sourcePath":"components/sheet/MaterialCard.jsx"},{"name":"NoteCard","sourcePath":"components/sheet/NoteCard.jsx"},{"name":"RevisionItem","sourcePath":"components/sheet/RevisionItem.jsx"},{"name":"SectionHead","sourcePath":"components/sheet/SectionHead.jsx"},{"name":"SpecCell","sourcePath":"components/sheet/SpecCell.jsx"},{"name":"SpecGrid","sourcePath":"components/sheet/SpecGrid.jsx"},{"name":"TitleBlock","sourcePath":"components/sheet/TitleBlock.jsx"}],"sourceHashes":{"components/core/Button.jsx":"17a62b1e30e0","components/core/Chip.jsx":"2219da1b427f","components/core/Eyebrow.jsx":"8bf18ad308cd","components/core/HandNote.jsx":"f8433496232b","components/core/LangToggle.jsx":"f343ffce77a3","components/core/Stamp.jsx":"fd9dd6773e99","components/core/StatusDot.jsx":"f6eb96f679de","components/core/Wordmark.jsx":"b9aad3f74b31","components/forms/Field.jsx":"bd36ee9cc79a","components/forms/FormFeedback.jsx":"9f4a75d423ce","components/forms/SubmitButton.jsx":"643d47e0c3c6","components/forms/TrustList.jsx":"db6676cd9893","components/media/MoodFigure.jsx":"a75e2aff774f","components/media/SketchCard.jsx":"ea1a0c3581d7","components/sheet/Checklist.jsx":"31761d809df6","components/sheet/MaterialCard.jsx":"a04a010039e5","components/sheet/NoteCard.jsx":"4a4765737d47","components/sheet/RevisionItem.jsx":"5cc8e366e69b","components/sheet/SectionHead.jsx":"312904a0042b","components/sheet/SpecCell.jsx":"a8e343e9fc14","components/sheet/SpecGrid.jsx":"caa6c31b867e","components/sheet/TitleBlock.jsx":"0f5844ab1fb2","ui_kits/site/ChapterBand.jsx":"f02736d504aa","ui_kits/site/ContactSection.jsx":"832249a65fb8","ui_kits/site/Hero.jsx":"12aad7f9370e","ui_kits/site/LegalPage.jsx":"1879956e3444","ui_kits/site/MoodMarquee.jsx":"762cf660c712","ui_kits/site/SiteFooter.jsx":"dbed858c2b0f","ui_kits/site/SketchGallery.jsx":"812081d7b04b","ui_kits/site/TechnicalSheet.jsx":"c7f4bef43fb3","ui_kits/site/TopBar.jsx":"293870085879"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DiernusDesignSystem_ebdb11 = window.DiernusDesignSystem_ebdb11 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.6rem',
  fontFamily: 'var(--font-mono)',
  textTransform: 'uppercase',
  textDecoration: 'none',
  letterSpacing: 'var(--ls-chip)',
  borderRadius: 'var(--radius-pill)',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'transform var(--dur-hover) var(--ease-standard), background var(--dur-hover) var(--ease-standard), color var(--dur-hover) var(--ease-standard), border-color var(--dur-hover) var(--ease-standard)'
};
const sizes = {
  sm: {
    fontSize: 'var(--t-mono-sm)',
    padding: '.42rem .85rem'
  },
  md: {
    fontSize: '.78rem',
    padding: '.95rem 1.7rem'
  }
};
const variants = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--action-primary-text)',
    border: '1px solid var(--action-primary)',
    boxShadow: 'var(--shadow-blue)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid var(--border-rule)'
  },
  bar: {
    background: 'var(--action-primary)',
    color: '#fff',
    border: '1px solid var(--action-primary)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  as,
  href,
  disabled,
  children,
  style,
  ...rest
}) {
  const Tag = as || (href ? 'a' : 'button');
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const hoverStyle = !disabled && hover ? variant === 'ghost' ? {
    borderColor: 'var(--border-strong)'
  } : {
    background: 'var(--action-primary-hover)',
    borderColor: 'var(--action-primary-hover)'
  } : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...sizes[size],
      ...v,
      ...hoverStyle,
      transform: press ? 'translateY(0)' : hover && !disabled ? 'translateY(var(--lift-hover))' : 'none',
      opacity: disabled ? .45 : 1,
      pointerEvents: disabled ? 'none' : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Chip({
  href,
  tone = 'default',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'span';
  const toneColor = tone === 'stamp' ? 'var(--accent-stamp)' : tone === 'accent' ? 'var(--text-accent)' : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '.7rem',
      letterSpacing: 'var(--ls-chip)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      padding: '.35rem .7rem',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (toneColor || 'var(--border-rule)'),
      color: toneColor || (href && hover ? 'var(--text-body)' : 'inherit'),
      background: 'var(--surface-page)',
      borderColor: href && hover && !toneColor ? 'var(--border-strong)' : toneColor || 'var(--border-rule)',
      transition: 'border-color var(--dur-control), color var(--dur-control)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  tone = 'accent',
  children,
  style,
  ...rest
}) {
  const colors = {
    accent: 'var(--text-accent)',
    stamp: 'var(--accent-stamp)',
    muted: 'var(--text-muted)',
    ink: 'var(--hud-line)'
  };
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: colors[tone] || colors.accent,
      margin: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/HandNote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function HandNote({
  rotate = -2.5,
  size = 'clamp(1.6rem,3.2vw,2.1rem)',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontFamily: 'var(--font-hand)',
      fontWeight: 600,
      fontSize: size,
      color: 'var(--text-hand)',
      lineHeight: 1,
      letterSpacing: 0,
      margin: 0,
      display: 'inline-block',
      transform: 'rotate(' + rotate + 'deg)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { HandNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/HandNote.jsx", error: String((e && e.message) || e) }); }

// components/core/LangToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LangToggle({
  value = 'pt',
  options = ['pt', 'en'],
  onChange,
  tone = 'graphite',
  style,
  ...rest
}) {
  const inverse = tone === 'ink';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "group",
    "aria-label": "Idioma / Language",
    style: {
      display: 'flex',
      border: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-rule)'),
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      ...style
    }
  }, rest), options.map(o => {
    const on = o === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      type: "button",
      "aria-pressed": on,
      onClick: () => onChange && onChange(o),
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.68rem',
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        padding: '.3rem .65rem',
        border: 0,
        cursor: 'pointer',
        background: on ? inverse ? 'var(--ink)' : 'var(--graphite)' : 'transparent',
        color: on ? inverse ? 'var(--blueprint-2)' : 'var(--bone)' : inverse ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
      }
    }, o);
  }));
}
Object.assign(__ds_scope, { LangToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LangToggle.jsx", error: String((e && e.message) || e) }); }

// components/core/Stamp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stamp({
  label = 'R3 · VALIDADO',
  sub,
  rotate = -8,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-mono)',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--accent-stamp)',
      border: '3px solid var(--accent-stamp)',
      borderRadius: 'var(--radius-stamp)',
      padding: '.5rem 1rem',
      textAlign: 'center',
      fontSize: '1.05rem',
      background: 'rgba(179,35,46,.06)',
      transform: 'rotate(' + rotate + 'deg)',
      pointerEvents: 'none',
      ...style
    }
  }, rest), label, sub && /*#__PURE__*/React.createElement("small", {
    style: {
      display: 'block',
      fontSize: '.6em',
      letterSpacing: '.3em',
      marginTop: '.15rem'
    }
  }, sub));
}
Object.assign(__ds_scope, { Stamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stamp.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatusDot({
  children,
  tone = 'amber',
  style,
  ...rest
}) {
  const c = tone === 'amber' ? 'var(--amber)' : 'var(--action-primary)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '.6rem',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono)',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--text-inverse-muted)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: c,
      boxShadow: '0 0 0 3px ' + (tone === 'amber' ? 'rgba(230,150,88,.25)' : 'rgba(44,73,199,.25)'),
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Wordmark({
  href = '#top',
  size = '.8rem',
  tone = 'graphite',
  accent = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: size,
      letterSpacing: 'var(--ls-wordmark)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      color: tone === 'ink' ? 'var(--text-inverse)' : 'var(--text-body)',
      ...style
    }
  }, rest), accent ? /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 500,
      color: tone === 'ink' ? 'var(--amber)' : 'var(--text-accent)'
    }
  }, "DIERNUS") : 'DIERNUS');
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  id,
  required,
  type = 'text',
  rows,
  error,
  placeholder,
  tone = 'blueprint',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const Tag = rows ? 'textarea' : 'input';
  const inverse = tone === 'blueprint';
  const border = error ? 'var(--amber)' : focus ? 'var(--action-primary)' : inverse ? 'var(--border-inverse)' : 'var(--border-rule)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '.45rem',
      marginBottom: '1.1rem',
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '.66rem',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      gap: '.4rem'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--amber)',
      fontSize: '1rem',
      lineHeight: 1
    }
  }, "*")), /*#__PURE__*/React.createElement(Tag, _extends({
    id: id,
    type: rows ? undefined : type,
    rows: rows,
    required: required,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    "aria-invalid": error ? 'true' : undefined,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '1.05rem',
      padding: '.75rem .9rem',
      background: inverse ? focus ? 'rgba(0,0,0,.32)' : 'rgba(0,0,0,.22)' : 'var(--surface-card)',
      border: '1px solid ' + border,
      borderBottom: '2px solid ' + (focus || error ? border : 'transparent'),
      borderRadius: 'var(--radius-sm)',
      color: inverse ? 'var(--text-inverse)' : 'var(--text-body)',
      transition: 'border-color .2s, background .2s',
      width: '100%',
      resize: 'vertical',
      lineHeight: 1.5,
      outline: 'none'
    }
  }, rest)), error && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-xs)',
      letterSpacing: 'var(--ls-chip)',
      color: 'var(--amber)',
      margin: '.15rem 0 0'
    }
  }, error));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormFeedback.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FormFeedback({
  tone = 'success',
  action,
  onAction,
  children,
  style,
  ...rest
}) {
  const ok = tone === 'success';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    "aria-live": "polite",
    style: {
      marginTop: '1.4rem',
      padding: '1rem 1.1rem',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--t-sm)',
      lineHeight: 1.5,
      background: ok ? 'rgba(44,73,199,.14)' : 'rgba(230,150,88,.12)',
      border: '1px solid ' + (ok ? 'rgba(44,73,199,.4)' : 'rgba(230,150,88,.4)'),
      color: ok ? '#9DB1E5' : 'var(--amber)',
      ...style
    }
  }, rest), children, action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: '.66rem',
      letterSpacing: 'var(--ls-chip)',
      textTransform: 'uppercase',
      background: 'transparent',
      border: '1px solid currentColor',
      color: 'inherit',
      padding: '.4rem .85rem',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      marginTop: '.6rem'
    }
  }, action));
}
Object.assign(__ds_scope, { FormFeedback });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormFeedback.jsx", error: String((e && e.message) || e) }); }

// components/forms/SubmitButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SubmitButton({
  loading,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "submit",
    disabled: loading,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-semibold)',
      fontSize: '1.02rem',
      letterSpacing: '.01em',
      color: 'var(--text-inverse)',
      background: hover && !loading ? 'var(--action-primary-hover)' : 'var(--action-primary)',
      border: 0,
      borderRadius: 'var(--radius-md)',
      padding: '.95rem 1.4rem',
      width: '100%',
      cursor: loading ? 'wait' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '.6rem',
      transition: 'background .2s, transform var(--dur-press)',
      marginTop: '.4rem',
      minHeight: '3.2rem',
      transform: press ? 'translateY(1px)' : 'none',
      opacity: loading ? .7 : 1,
      ...style
    }
  }, rest), loading ? '…' : children);
}
Object.assign(__ds_scope, { SubmitButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SubmitButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/TrustList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TrustList({
  items = [],
  tone = 'blueprint',
  style,
  ...rest
}) {
  const inverse = tone === 'blueprint';
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '.7rem',
      margin: 0,
      padding: 0,
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: 'relative',
      paddingLeft: '1.4rem',
      fontSize: '1.02rem',
      lineHeight: 1.5,
      color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: '.62em',
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--amber)',
      boxShadow: '0 0 0 3px rgba(230,150,88,.18)'
    }
  }), it)));
}
Object.assign(__ds_scope, { TrustList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TrustList.jsx", error: String((e && e.message) || e) }); }

// components/media/MoodFigure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MoodFigure({
  src,
  alt,
  caption,
  dot = 'var(--action-primary)',
  rotate = -0.5,
  height = 'clamp(220px,30vw,330px)',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("figure", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      margin: 0,
      height,
      flex: 'none',
      border: '1px solid var(--border-hairline)',
      background: 'var(--surface-card)',
      padding: '.45rem .45rem 2.2rem',
      boxShadow: 'var(--shadow-paper-sm)',
      transform: hover ? 'rotate(0deg) scale(1.04)' : 'rotate(' + rotate + 'deg)',
      transition: 'transform var(--dur-swap)',
      zIndex: hover ? 2 : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      height: '100%',
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: '.75rem',
      bottom: '.65rem',
      fontFamily: 'var(--font-mono)',
      fontSize: '.6rem',
      letterSpacing: 'var(--ls-chip)',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      display: 'inline-block',
      width: '.55rem',
      height: '.55rem',
      borderRadius: '50%',
      background: dot,
      marginRight: '.45rem',
      verticalAlign: 'middle'
    }
  }), caption));
}
Object.assign(__ds_scope, { MoodFigure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/MoodFigure.jsx", error: String((e && e.message) || e) }); }

// components/media/SketchCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SketchCard({
  src,
  alt,
  title,
  index,
  tape = 'rgba(217,142,74,.55)',
  rotate = -1.2,
  crop = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("figure", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      margin: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      boxShadow: hover ? 'var(--shadow-paper-hover)' : 'var(--shadow-paper)',
      padding: '.7rem .7rem 3rem',
      transform: hover ? 'translate3d(0,-8px,0) rotate(0deg) scale(1.015)' : 'rotate(' + rotate + 'deg)',
      transition: 'box-shadow var(--dur-swap), transform var(--dur-swap)',
      zIndex: hover ? 2 : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: -13,
      left: '50%',
      width: 120,
      height: 28,
      transform: 'translateX(-50%) rotate(-2deg)',
      background: tape,
      boxShadow: '0 1px 3px rgba(35,33,28,.18)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      display: 'block',
      width: '100%',
      height: 'auto',
      aspectRatio: crop ? '3/2' : undefined,
      objectFit: crop ? 'cover' : undefined,
      objectPosition: '50% 100%'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: '1rem',
      right: '1rem',
      bottom: '.9rem',
      display: 'flex',
      justifyContent: 'space-between',
      gap: '.6rem',
      fontFamily: 'var(--font-mono)',
      fontSize: '.64rem',
      letterSpacing: 'var(--ls-chip)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-body)',
      fontWeight: 500
    }
  }, title), index && /*#__PURE__*/React.createElement("span", null, index)));
}
Object.assign(__ds_scope, { SketchCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/SketchCard.jsx", error: String((e && e.message) || e) }); }

// components/sheet/Checklist.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checklist({
  items = [],
  tone = 'blueprint',
  style,
  ...rest
}) {
  const inverse = tone === 'blueprint';
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '.55rem',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-sm)',
      letterSpacing: 'var(--ls-chip)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '.55rem',
      color: it.done ? inverse ? 'var(--text-inverse)' : 'var(--text-body)' : inverse ? 'var(--ink-35)' : 'var(--graphite-35)',
      transition: 'color .3s'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: '.9rem',
      height: '.9rem',
      borderRadius: 'var(--radius-xs)',
      display: 'grid',
      placeItems: 'center',
      fontStyle: 'normal',
      fontSize: '.6rem',
      lineHeight: 1,
      flex: 'none',
      border: '1px solid ' + (it.done ? 'var(--action-primary)' : inverse ? 'var(--ink-35)' : 'var(--graphite-35)'),
      background: it.done ? 'var(--action-primary)' : 'transparent',
      color: '#fff'
    }
  }, it.done ? '✓' : ''), it.label)));
}
Object.assign(__ds_scope, { Checklist });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sheet/Checklist.jsx", error: String((e && e.message) || e) }); }

// components/sheet/MaterialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const textures = {
  burl: 'radial-gradient(90px 60px at 20% 30%,rgba(255,205,140,.28),transparent 60%),radial-gradient(140px 90px at 75% 70%,rgba(30,12,2,.5),transparent 65%),radial-gradient(60px 44px at 60% 25%,rgba(255,190,120,.22),transparent 60%),radial-gradient(100px 70px at 35% 80%,rgba(20,8,0,.42),transparent 60%),linear-gradient(120deg,#6b4220,#4a2c12 55%,#5c3a1c)',
  velvet: 'radial-gradient(220px 120px at 30% 0%,rgba(255,255,255,.14),transparent 60%),linear-gradient(160deg,#3d5578,#22304a 70%)',
  stripe: 'repeating-linear-gradient(90deg,#5c7699 0 7px,#33445e 7px 14px,#8fa6c4 14px 16px,#33445e 16px 23px)'
};
function MaterialCard({
  code,
  name,
  texture = 'burl',
  supplierRef,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      border: '1px solid var(--border-rule)',
      background: 'var(--surface-page)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      position: 'relative',
      background: textures[texture] || texture,
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1.1rem 1.2rem 1.3rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '.4rem',
      flex: 1
    }
  }, code && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-sm)',
      letterSpacing: 'var(--ls-chip)',
      color: 'var(--accent-stamp)'
    }
  }, code), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-bold)',
      fontSize: '1.25rem',
      textTransform: 'uppercase',
      letterSpacing: '.02em'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--t-sm)',
      color: 'var(--text-muted)'
    }
  }, children), supplierRef && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '.64rem',
      letterSpacing: '.08em',
      color: 'var(--text-muted)',
      marginTop: 'auto',
      paddingTop: '.6rem',
      borderTop: '1px dashed var(--border-rule)'
    }
  }, supplierRef)));
}
Object.assign(__ds_scope, { MaterialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sheet/MaterialCard.jsx", error: String((e && e.message) || e) }); }

// components/sheet/NoteCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NoteCard({
  kicker,
  title,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      border: '1.5px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      padding: '1.2rem 1.3rem 1.4rem',
      background: 'var(--surface-page)',
      position: 'relative',
      ...style
    }
  }, rest), kicker && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '.7rem',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--accent-stamp)',
      marginBottom: '.6rem'
    }
  }, kicker), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-bold)',
      fontSize: 'var(--t-card-title)',
      lineHeight: 'var(--lh-tight)',
      textTransform: 'uppercase',
      marginBottom: '.5rem'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.98rem',
      color: 'var(--text-muted)'
    }
  }, children));
}
Object.assign(__ds_scope, { NoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sheet/NoteCard.jsx", error: String((e && e.message) || e) }); }

// components/sheet/RevisionItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function RevisionItem({
  rev,
  date,
  status,
  children,
  latest = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-inverse)',
      padding: '1.3rem 1.2rem 1.5rem',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '1.6rem',
      color: latest ? '#fff' : 'var(--hud-line)',
      background: latest ? 'var(--accent-stamp)' : 'transparent',
      display: 'inline-block',
      padding: latest ? '0 .4em' : 0,
      borderRadius: latest ? '.2em' : 0
    }
  }, rev), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-sm)',
      letterSpacing: 'var(--ls-chip)',
      color: 'var(--text-inverse-muted)',
      margin: '.3rem 0 .7rem'
    }
  }, date, " \xB7 ", status), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--t-sm)',
      color: 'var(--text-inverse-muted)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { RevisionItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sheet/RevisionItem.jsx", error: String((e && e.message) || e) }); }

// components/sheet/SectionHead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHead({
  kicker,
  title,
  lede,
  tone = 'bone',
  style,
  ...rest
}) {
  const inverse = tone === 'blueprint';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: style
  }, rest), kicker && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: inverse ? 'ink' : 'accent',
    style: {
      marginBottom: '.8rem'
    }
  }, kicker), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-heavy)',
      fontSize: 'var(--t-h2)',
      lineHeight: 'var(--lh-display)',
      textTransform: 'uppercase',
      maxWidth: 'var(--measure-heading)',
      color: inverse ? 'var(--text-inverse)' : 'var(--text-body)',
      margin: 0
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--measure-lede)',
      marginTop: '1.2rem',
      fontSize: 'var(--t-lede)',
      fontStyle: 'italic',
      color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-body)'
    }
  }, lede));
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sheet/SectionHead.jsx", error: String((e && e.message) || e) }); }

// components/sheet/SpecCell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SpecCell({
  value,
  unit,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-page)',
      padding: '1.4rem 1.2rem',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("output", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-black)',
      fontSize: 'var(--t-stat)',
      lineHeight: 1
    }
  }, value, unit && /*#__PURE__*/React.createElement("sub", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '.32em',
      fontWeight: 400,
      verticalAlign: 'baseline',
      letterSpacing: '.05em',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, unit)), /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-sm)',
      letterSpacing: 'var(--ls-mono)',
      color: 'var(--text-muted)',
      display: 'block',
      marginTop: '.5rem',
      textTransform: 'uppercase'
    }
  }, label));
}
Object.assign(__ds_scope, { SpecCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sheet/SpecCell.jsx", error: String((e && e.message) || e) }); }

// components/sheet/SpecGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SpecGrid({
  columns = 6,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ',1fr)',
      gap: 1,
      background: 'var(--border-hairline)',
      border: '1px solid var(--border-hairline)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SpecGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sheet/SpecGrid.jsx", error: String((e && e.message) || e) }); }

// components/sheet/TitleBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TitleBlock({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + Math.max(items.length, 1) + ',1fr)',
      borderTop: '1px solid var(--border-rule)',
      borderBottom: '1px solid var(--border-rule)',
      margin: 0,
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '.7rem 1rem',
      borderRight: i === items.length - 1 ? 0 : '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '.6rem',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '.78rem',
      letterSpacing: 'var(--ls-chip)',
      textTransform: 'uppercase',
      margin: '.15rem 0 0'
    }
  }, it.value))));
}
Object.assign(__ds_scope, { TitleBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sheet/TitleBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/ChapterBand.jsx
try { (() => {
const {
  Eyebrow
} = window.DiernusDesignSystem_ebdb11;
function ChapterBand({
  num,
  accent = 'var(--cobalt)',
  title,
  children,
  tone = 'bone'
}) {
  const inverse = tone === 'blueprint';
  const alt = tone === 'bone-2';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: 'var(--chapter-y) var(--pad) clamp(1.2rem,3vw,2rem)',
      overflow: 'hidden',
      background: inverse ? 'var(--surface-inverse)' : alt ? 'var(--surface-page-alt)' : 'var(--surface-page)',
      color: inverse ? 'var(--text-inverse)' : 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 'calc(var(--pad) * .4)',
      top: '50%',
      transform: 'translateY(-50%)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-black)',
      fontSize: 'clamp(8rem,20vw,17rem)',
      lineHeight: 1,
      color: 'transparent',
      WebkitTextStroke: '2px ' + accent,
      opacity: .15,
      userSelect: 'none'
    }
  }, num), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: inverse ? 'ink' : 'accent',
    style: {
      marginBottom: '.7rem',
      color: accent
    }
  }, "CAP\xCDTULO ", num), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-heavy)',
      fontSize: 'var(--t-h1)',
      textTransform: 'uppercase',
      lineHeight: 'var(--lh-display)',
      maxWidth: '12em',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--measure-prose)',
      marginTop: '1rem',
      fontSize: '1.12rem',
      fontStyle: 'italic',
      color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, children));
}
Object.assign(window, {
  ChapterBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/ChapterBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/ContactSection.jsx
try { (() => {
const {
  SectionHead,
  HandNote,
  TrustList,
  StatusDot,
  Field,
  SubmitButton,
  FormFeedback
} = window.DiernusDesignSystem_ebdb11;
function ContactSection() {
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [err, setErr] = React.useState(null);
  function submit(e) {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) {
      setErr('INDICA UM EMAIL VÁLIDO');
      return;
    }
    setErr(null);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  }
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--surface-inverse-deep)',
      color: 'var(--text-inverse)',
      padding: 'var(--section-y) var(--pad)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-20%',
      right: '-10%',
      width: '60%',
      height: '80%',
      pointerEvents: 'none',
      background: 'radial-gradient(closest-side,rgba(230,150,88,.22),transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '-10%',
      bottom: '-30%',
      width: '50%',
      height: '70%',
      pointerEvents: 'none',
      background: 'radial-gradient(closest-side,rgba(44,73,199,.18),transparent 72%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '5fr 7fr',
      gap: 'clamp(2.5rem,6vw,5rem)',
      alignItems: 'start',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HandNote, {
    style: {
      marginBottom: '.8rem'
    }
  }, "ol\xE1, vamos falar"), /*#__PURE__*/React.createElement(SectionHead, {
    tone: "blueprint",
    kicker: "CONTACTO \xB7 RESPOSTA EM 24H \xDATEIS",
    title: "Vamos falar do teu pr\xF3ximo projeto.",
    lede: "Escreve-nos o que tens em mente \u2014 uma pe\xE7a, um espa\xE7o, um caderno de encargos. Respondemos directamente para o teu email."
  }), /*#__PURE__*/React.createElement(TrustList, {
    style: {
      marginTop: '2rem'
    },
    items: ['Resposta em 24h úteis', 'Orçamento gratuito, sem compromisso', 'NDA disponível, se precisares', 'Conversas em PT · EN']
  }), /*#__PURE__*/React.createElement(StatusDot, {
    style: {
      marginTop: '1.8rem'
    }
  }, "Lemos tudo \xB7 respondemos por email")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      background: 'color-mix(in srgb,var(--ink) 4%,transparent)',
      border: '1px solid var(--border-inverse)',
      borderRadius: 'var(--radius-lg)',
      padding: 'clamp(1.6rem,3vw,2.4rem)',
      backdropFilter: 'var(--blur-panel)',
      boxShadow: 'var(--shadow-panel-inverse)'
    }
  }, !sent && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-heavy)',
      fontSize: '1.6rem',
      textTransform: 'uppercase',
      margin: '0 0 .35rem'
    }
  }, "Enviar mensagem"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--t-sm)',
      fontStyle: 'italic',
      color: 'var(--text-inverse-muted)',
      margin: '0 0 1.6rem'
    }
  }, "Tr\xEAs campos. Sem linha de assunto, sem n\xFAmero de cliente."), /*#__PURE__*/React.createElement(Field, {
    id: "cf-name",
    label: "Nome",
    placeholder: "Como te chamamos?"
  }), /*#__PURE__*/React.createElement(Field, {
    id: "cf-email",
    label: "Email",
    type: "email",
    required: true,
    placeholder: "nome@empresa.pt",
    error: err,
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(Field, {
    id: "cf-msg",
    label: "Mensagem",
    rows: 5,
    required: true,
    placeholder: "Conta-nos o que precisas\u2026"
  }), /*#__PURE__*/React.createElement(SubmitButton, {
    loading: loading
  }, "Enviar mensagem \u2192"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '1.1rem',
      fontSize: '.78rem',
      color: 'var(--text-inverse-muted)',
      fontStyle: 'italic',
      lineHeight: 1.5
    }
  }, "Ao enviar, concordas com a nossa pol\xEDtica de privacidade. N\xE3o partilhamos os teus dados.")), sent && /*#__PURE__*/React.createElement(FormFeedback, {
    tone: "success",
    action: "ENVIAR OUTRA",
    onAction: () => {
      setSent(false);
      setEmail('');
    },
    style: {
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("b", null, "Obrigado."), " Recebemos a tua mensagem e respondemos dentro de 24h \xFAteis.")))));
}
Object.assign(window, {
  ContactSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Hero.jsx
try { (() => {
const {
  Eyebrow,
  Chip
} = window.DiernusDesignSystem_ebdb11;
function Hero({
  setView
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      minHeight: '78vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 'calc(var(--pad) + 3rem) var(--pad) 0',
      overflow: 'hidden',
      backgroundImage: 'linear-gradient(var(--grid-line) 1px,transparent 1px),linear-gradient(90deg,var(--grid-line) 1px,transparent 1px)',
      backgroundSize: 'var(--grid-size) var(--grid-size)',
      backgroundPosition: 'center top'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 90% at 50% 10%,transparent 30%,var(--bone) 78%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '1rem'
    }
  }, "DIERNUS \xB7 EST\xDADIO DE DESENHO DE MOBILI\xC1RIO"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-black)',
      fontSize: 'clamp(3.6rem,10vw,8.5rem)',
      lineHeight: 'var(--lh-hero)',
      letterSpacing: 'var(--ls-tight)',
      textTransform: 'uppercase',
      margin: 0
    }
  }, "Da ideia", /*#__PURE__*/React.createElement("br", null), "\xE0 pe\xE7a"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '34em',
      fontSize: '1.35rem',
      margin: '1.4rem 0 2.2rem',
      fontStyle: 'italic'
    }
  }, "Esbo\xE7o \xE0 m\xE3o, conce\xE7\xE3o do ambiente, folha de produ\xE7\xE3o \u2014 e, no fim, a pe\xE7a a montar-se sozinha."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '.5rem',
      marginBottom: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setView('home');
    }
  }, "01 \xB7 IDEIA"), /*#__PURE__*/React.createElement(Chip, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setView('moods');
    }
  }, "02 \xB7 CONCE\xC7\xC3O"), /*#__PURE__*/React.createElement(Chip, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setView('sheet');
    }
  }, "03 \xB7 DESENHO T\xC9CNICO"), /*#__PURE__*/React.createElement(Chip, {
    href: "#",
    tone: "stamp",
    onClick: e => {
      e.preventDefault();
      setView('contact');
    }
  }, "04 \xB7 A PE\xC7A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '.8rem',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono)',
      letterSpacing: '.24em',
      color: 'var(--text-muted)',
      padding: '1.2rem 0 1.6rem',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "22",
    viewBox: "0 0 14 22",
    style: {
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 3 L7 9 L12 3 M2 12 L7 18 L12 12",
    stroke: "var(--cobalt)",
    strokeWidth: "2",
    fill: "none"
  })), /*#__PURE__*/React.createElement("span", null, "SCROLL PARA COME\xC7AR"))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/LegalPage.jsx
try { (() => {
const {
  Wordmark,
  Eyebrow
} = window.DiernusDesignSystem_ebdb11;
function LegalPage() {
  const h2 = {
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--w-heavy)',
    fontSize: '1.35rem',
    textTransform: 'uppercase',
    letterSpacing: '.005em',
    margin: '2.2rem 0 .7rem'
  };
  const a = {
    color: 'var(--text-accent)',
    textDecoration: 'none',
    borderBottom: '1px solid var(--border-hairline)'
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--measure-doc)',
      margin: '0 auto',
      padding: 'clamp(2.5rem,6vw,5rem) var(--pad)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '.8rem'
    }
  }, "RGPD \xB7 ART. 13.\xBA/14.\xBA"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-black)',
      fontSize: 'clamp(2.2rem,5vw,3.4rem)',
      lineHeight: 1.05,
      letterSpacing: 'var(--ls-tight)',
      textTransform: 'uppercase',
      marginBottom: '1rem'
    }
  }, "Pol\xEDtica de privacidade"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--t-lede)',
      fontStyle: 'italic',
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure-lede)',
      marginBottom: '2.4rem'
    }
  }, "Esta pol\xEDtica descreve como a Diernus recolhe, utiliza, conserva e protege os dados pessoais que nos confia, em conformidade com o RGPD."), /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "1. Quem \xE9 o respons\xE1vel"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '1rem'
    }
  }, "O respons\xE1vel pelo tratamento dos seus dados pessoais \xE9:"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/React.createElement("b", null, "Diernus, Lda."), /*#__PURE__*/React.createElement("br", null), "NIPC: [NIPC]", /*#__PURE__*/React.createElement("br", null), "Sede: [MORADA COMPLETA, PORTUGAL]", /*#__PURE__*/React.createElement("br", null), "Email: ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:estudio@diernus.com",
    style: a
  }, "estudio@diernus.com")), /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "2. Que dados recolhemos"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '0 0 1rem 1.4rem'
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '.4rem'
    }
  }, /*#__PURE__*/React.createElement("b", null, "Dados de identifica\xE7\xE3o e contacto"), " \u2014 nome, email, telefone, empresa."), /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '.4rem'
    }
  }, /*#__PURE__*/React.createElement("b", null, "Dados de projeto"), " \u2014 descri\xE7\xF5es, ficheiros t\xE9cnicos, plantas, refer\xEAncias visuais, or\xE7amentos."), /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '.4rem'
    }
  }, /*#__PURE__*/React.createElement("b", null, "Dados de utiliza\xE7\xE3o do portal"), " \u2014 endere\xE7o IP, p\xE1ginas visitadas, timestamps."), /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '.4rem'
    }
  }, /*#__PURE__*/React.createElement("b", null, "Cookies e dados de sess\xE3o"), " \u2014 ver ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: a
  }, "Pol\xEDtica de Cookies"), ".")), /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "3. Os seus direitos"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '1rem'
    }
  }, "Acesso, retifica\xE7\xE3o, apagamento, limita\xE7\xE3o, portabilidade, oposi\xE7\xE3o e revoga\xE7\xE3o do consentimento. Pode reclamar junto da CNPD."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-sm)',
      letterSpacing: 'var(--ls-mono)',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      marginTop: '2.4rem',
      paddingTop: '1.2rem',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, "\xDAltima atualiza\xE7\xE3o \xB7 28/05/2026 \xB7 Diernus, Lda."));
}
Object.assign(window, {
  LegalPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/LegalPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/MoodMarquee.jsx
try { (() => {
const {
  MoodFigure
} = window.DiernusDesignSystem_ebdb11;
const MOODS = [['mood-sala-1.jpg', 'SALA DE ESTAR · I', 'var(--amber)', -0.5], ['mood-quarto-1.jpg', 'QUARTO PRINCIPAL · I', 'var(--cobalt)', 0.6], ['mood-escritorio-1.jpg', 'ESCRITÓRIO · I', 'var(--cobalt)', -0.4], ['mood-quarto-2.jpg', 'QUARTO PRINCIPAL · II', 'var(--cobalt)', 0.5], ['mood-crianca.jpg', 'QUARTO DE CRIANÇA', 'var(--stamp)', -0.6], ['mood-sala-2.jpg', 'SALA DE ESTAR · II', 'var(--amber)', 0.4], ['mood-escritorio-2.jpg', 'ESCRITÓRIO · II', 'var(--cobalt)', -0.5], ['mood-escritorio-3.jpg', 'ESCRITÓRIO · III', 'var(--cobalt)', 0.5]];
function MoodMarquee() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page-alt)',
      padding: '1.5rem 0 clamp(4.5rem,9vw,7rem)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes drn-mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}'), [0, 1].map(row => /*#__PURE__*/React.createElement("div", {
    key: row,
    style: {
      overflow: 'hidden',
      padding: '1.1rem 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(1rem,2vw,1.6rem)',
      width: 'max-content',
      animation: 'drn-mq ' + (row ? 72 : 58) + 's linear infinite',
      animationDirection: row ? 'reverse' : 'normal'
    }
  }, [...MOODS, ...MOODS].map(([file, cap, dot, rot], i) => /*#__PURE__*/React.createElement(MoodFigure, {
    key: row + '-' + i,
    src: '../../assets/' + file,
    alt: cap,
    caption: cap,
    dot: dot,
    rotate: rot
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'baseline',
      gap: '.6rem 1.4rem',
      margin: 'clamp(2.2rem,5vw,3.5rem) var(--pad) 0',
      paddingTop: '1.2rem',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontStyle: 'italic',
      color: 'var(--text-muted)',
      fontSize: '1.05rem',
      margin: 0
    }
  }, "O teu espa\xE7o podia estar neste carrossel.")));
}
Object.assign(window, {
  MoodMarquee
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/MoodMarquee.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteFooter.jsx
try { (() => {
const {
  Wordmark
} = window.DiernusDesignSystem_ebdb11;
function SiteFooter() {
  const h4 = {
    fontFamily: 'var(--font-mono)',
    fontSize: '.66rem',
    letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase',
    color: 'var(--text-inverse-muted)',
    marginBottom: '.7rem',
    fontWeight: 500
  };
  const link = {
    color: 'var(--text-inverse)',
    textDecoration: 'none',
    borderBottom: '1px solid transparent',
    fontSize: 'var(--t-sm)'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse-deep)',
      color: 'var(--text-inverse)',
      fontSize: 'var(--t-sm)',
      lineHeight: 1.55,
      padding: 'clamp(2.4rem,5vw,4rem) var(--pad) 2rem',
      borderTop: '1px solid var(--border-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 'clamp(2rem,4vw,3.5rem)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: h4
  }, "Diernus"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-inverse-muted)',
      fontSize: '.92rem',
      maxWidth: '30em',
      marginBottom: '.6rem'
    }
  }, "Est\xFAdio de desenho de mobili\xE1rio por medida. Da ideia \xE0 pe\xE7a montada, em Portugal."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '.66rem',
      letterSpacing: 'var(--ls-chip)',
      color: 'var(--ink-35)'
    }
  }, "Gandra, Portugal")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: h4
  }, "Legal"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '.5rem',
      margin: 0,
      padding: 0
    }
  }, ['Privacidade', 'Termos e condições', 'Cookies', 'Aviso legal'].map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: h4
  }, "Contacto"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '.5rem',
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:estudio@diernus.com",
    style: link
  }, "estudio@diernus.com")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Formul\xE1rio de contacto")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Portal do cliente"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2.2rem',
      paddingTop: '1.4rem',
      borderTop: '1px solid var(--border-inverse)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem 2rem',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: '.66rem',
      letterSpacing: 'var(--ls-mono)',
      color: 'var(--ink-35)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Diernus, Lda. \xB7 Todos os direitos reservados"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Wordmark, {
    tone: "ink",
    size: ".66rem",
    accent: false
  }), " \xB7 Desenhado ao mil\xEDmetro")));
}
Object.assign(window, {
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SketchGallery.jsx
try { (() => {
const {
  SketchCard,
  Button
} = window.DiernusDesignSystem_ebdb11;
function SketchGallery({
  setView
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '1.5rem var(--pad) clamp(4rem,9vw,7rem)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12,1fr)',
      gap: 'clamp(1.2rem,2.5vw,2.2rem)',
      alignItems: 'start',
      maxWidth: 1240
    }
  }, /*#__PURE__*/React.createElement(SketchCard, {
    style: {
      gridColumn: '1 / span 6'
    },
    src: "../../assets/sketch-vitrine.jpg",
    alt: "Esbo\xE7o \xE0 m\xE3o de uma vitrine de loja em cedro vermelho",
    title: "VITRINE \xB7 RETALHO",
    index: "ESBO\xC7O 01",
    rotate: -1.2,
    tape: "rgba(217,142,74,.55)"
  }), /*#__PURE__*/React.createElement(SketchCard, {
    style: {
      gridColumn: '8 / span 4',
      marginTop: 'clamp(2rem,6vw,5rem)'
    },
    src: "../../assets/sketch-cama-ab.jpg",
    alt: "Esbo\xE7o \xE0 m\xE3o de cama com cabeceira estofada, vers\xF5es A e B",
    title: "CAMA \xB7 VERS\xD5ES A + B",
    index: "ESBO\xC7O 02",
    rotate: 1.4,
    tape: "rgba(127,164,118,.5)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'baseline',
      gap: '.6rem 1.4rem',
      marginTop: 'clamp(2.2rem,5vw,3.5rem)',
      paddingTop: '1.2rem',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontStyle: 'italic',
      color: 'var(--text-muted)',
      fontSize: '1.05rem',
      margin: 0
    }
  }, "Tens uma pe\xE7a na cabe\xE7a? N\xF3s pomo-la no papel."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setView('contact');
    },
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono)',
      letterSpacing: 'var(--ls-mono)',
      color: 'var(--text-accent)',
      textDecoration: 'none',
      borderBottom: '1px solid var(--cobalt)',
      paddingBottom: '.15rem'
    }
  }, "Falar com o est\xFAdio \u2192")));
}
Object.assign(window, {
  SketchGallery
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SketchGallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/TechnicalSheet.jsx
try { (() => {
const {
  SectionHead,
  SpecGrid,
  SpecCell,
  MaterialCard,
  NoteCard,
  RevisionItem,
  TitleBlock,
  Checklist,
  Stamp
} = window.DiernusDesignSystem_ebdb11;
function ChairDrawing() {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '.9rem',
      width: 'min(100%,360px)',
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '1rem',
      fontFamily: 'var(--font-mono)',
      fontSize: '.58rem',
      letterSpacing: 'var(--ls-mono)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-accent)',
      fontWeight: 600,
      letterSpacing: 'var(--ls-label)'
    }
  }, "L-CH-01"), " \xB7 CADEIRA"), /*#__PURE__*/React.createElement("span", null, "FOLHA DE DETALHE \xB7 ESC 1:5")), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 560 660",
    style: {
      width: '100%',
      overflow: 'visible'
    },
    role: "img",
    "aria-label": "Desenho t\xE9cnico de uma cadeira"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "var(--graphite)",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "280",
    y1: "24",
    x2: "280",
    y2: "636",
    strokeWidth: "1",
    strokeDasharray: "6 8",
    opacity: ".5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "180",
    y: "36",
    width: "200",
    height: "64",
    rx: "10",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("g", {
    strokeWidth: "1",
    opacity: ".55"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "230",
    y1: "52",
    x2: "230",
    y2: "84"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "280",
    y1: "52",
    x2: "280",
    y2: "84"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "330",
    y1: "52",
    x2: "330",
    y2: "84"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "170",
    y: "130",
    width: "18",
    height: "120",
    rx: "4",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "372",
    y: "130",
    width: "18",
    height: "120",
    rx: "4",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "174",
    y: "116",
    width: "10",
    height: "14",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "376",
    y: "116",
    width: "10",
    height: "14",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "150",
    y: "286",
    width: "260",
    height: "20",
    rx: "5",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "336",
    r: "6",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "360",
    cy: "336",
    r: "6",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "168",
    y: "362",
    width: "224",
    height: "28",
    rx: "4",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M176 418 L196 418 L190 598 L181 598 Z",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M364 418 L384 418 L379 598 L370 598 Z",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("g", {
    strokeWidth: "1",
    strokeDasharray: "6 8",
    opacity: ".5"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "216",
    y1: "418",
    x2: "212",
    y2: "598"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "344",
    y1: "418",
    x2: "340",
    y2: "598"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "196",
    y: "512",
    width: "168",
    height: "12",
    rx: "3",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "120",
    y1: "606",
    x2: "460",
    y2: "606",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("g", {
    strokeWidth: "1",
    opacity: ".5"
  }, [150, 205, 260, 315, 370, 425].map(x => /*#__PURE__*/React.createElement("line", {
    key: x,
    x1: x,
    y1: "618",
    x2: x + 12,
    y2: "606"
  })))), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "var(--cobalt)",
    strokeWidth: "1.2",
    opacity: ".9"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "486",
    y1: "36",
    x2: "486",
    y2: "598"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "481",
    y1: "41",
    x2: "491",
    y2: "31"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "481",
    y1: "603",
    x2: "491",
    y2: "593"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "150",
    y1: "634",
    x2: "410",
    y2: "634"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "145",
    y1: "639",
    x2: "155",
    y2: "629"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "405",
    y1: "639",
    x2: "415",
    y2: "629"
  })), /*#__PURE__*/React.createElement("g", {
    fontFamily: "var(--font-mono)",
    fontSize: "13",
    letterSpacing: "1.5"
  }, /*#__PURE__*/React.createElement("text", {
    transform: "translate(508 340) rotate(-90)",
    textAnchor: "middle",
    fill: "var(--cobalt)"
  }, "820 MM"), /*#__PURE__*/React.createElement("text", {
    x: "280",
    y: "656",
    textAnchor: "middle",
    fill: "var(--cobalt)"
  }, "440 MM"), /*#__PURE__*/React.createElement("text", {
    x: "24",
    y: "72",
    fill: "var(--graphite)"
  }, "01 \xB7 ENCOSTO"), /*#__PURE__*/React.createElement("text", {
    x: "24",
    y: "300",
    fill: "var(--graphite)"
  }, "02 \xB7 ASSENTO"), /*#__PURE__*/React.createElement("text", {
    x: "24",
    y: "340",
    fill: "var(--graphite)"
  }, "CAVILHA \xD88"), /*#__PURE__*/React.createElement("text", {
    x: "24",
    y: "380",
    fill: "var(--graphite)"
  }, "03 \xB7 SAIA"), /*#__PURE__*/React.createElement("text", {
    x: "24",
    y: "470",
    fill: "var(--graphite)"
  }, "04 \xB7 PERNA")), /*#__PURE__*/React.createElement("g", {
    stroke: "var(--graphite)",
    strokeWidth: "1",
    opacity: ".5"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "136",
    y1: "68",
    x2: "176",
    y2: "68"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "134",
    y1: "296",
    x2: "146",
    y2: "296"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "122",
    y1: "336",
    x2: "190",
    y2: "336"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "98",
    y1: "376",
    x2: "164",
    y2: "376"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "110",
    y1: "466",
    x2: "176",
    y2: "466"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: '.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      border: '1px solid var(--border-rule)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      background: 'var(--bone)'
    }
  }, ['DESENHO 2D', 'MODELO 3D'].map((l, i) => /*#__PURE__*/React.createElement("button", {
    key: l,
    "aria-pressed": i === 0,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '.6rem',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      padding: '.38rem .75rem',
      border: 0,
      cursor: 'pointer',
      background: i === 0 ? 'var(--graphite)' : 'transparent',
      color: i === 0 ? 'var(--bone)' : 'var(--text-muted)'
    }
  }, l)))));
}
function TechnicalSheet() {
  const sy = {
    padding: 'var(--section-y) var(--pad)'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...sy,
      background: 'var(--surface-page)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'clamp(2rem,4vw,3.5rem)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "CAP\xCDTULO 03",
    title: "A folha decide",
    lede: "Cotas, materiais e notas de produ\xE7\xE3o num desenho que a oficina l\xEA \xE0 primeira."
  }), /*#__PURE__*/React.createElement(TitleBlock, {
    style: {
      marginTop: '2.2rem'
    },
    items: [{
      label: 'Folha',
      value: 'L-CH-01'
    }, {
      label: 'Escala',
      value: '1:5'
    }, {
      label: 'Revisão',
      value: 'R3'
    }, {
      label: 'Data',
      value: '28/05/2026'
    }]
  })), /*#__PURE__*/React.createElement(ChairDrawing, null)), /*#__PURE__*/React.createElement("section", {
    style: {
      ...sy,
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "FICHA T\xC9CNICA",
    title: "Desenhado ao mil\xEDmetro, pesado ao quilo",
    lede: "Tudo o que a oficina precisa est\xE1 na folha \u2014 dimens\xF5es, pesos, quantidades, toler\xE2ncias. Nada fica por dizer."
  }), /*#__PURE__*/React.createElement(SpecGrid, {
    columns: 6,
    style: {
      marginTop: '2.6rem'
    }
  }, /*#__PURE__*/React.createElement(SpecCell, {
    value: 2032,
    unit: "MM",
    label: "Comprimento"
  }), /*#__PURE__*/React.createElement(SpecCell, {
    value: 762,
    unit: "MM",
    label: "Profundidade"
  }), /*#__PURE__*/React.createElement(SpecCell, {
    value: 762,
    unit: "MM",
    label: "Altura"
  }), /*#__PURE__*/React.createElement(SpecCell, {
    value: 254,
    unit: "MM \xD8",
    label: "Rolos"
  }), /*#__PURE__*/React.createElement(SpecCell, {
    value: 204,
    unit: "MM",
    label: "Almofada"
  }), /*#__PURE__*/React.createElement(SpecCell, {
    value: 90,
    unit: "KG",
    label: "Peso"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...sy,
      background: 'var(--surface-page-alt)'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "LISTA DE MATERIAIS",
    title: "Tr\xEAs materiais, zero ambiguidade",
    lede: "Refer\xEAncias reais de fornecedor, dire\xE7\xE3o de risca, brilho do verniz \u2014 especificado uma vez, cumprido sempre."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(270px,100%),1fr))',
      gap: '1.2rem',
      marginTop: '2.6rem'
    }
  }, /*#__PURE__*/React.createElement(MaterialCard, {
    code: "A1 \xB7 WDF-05",
    name: "Mapa Burl",
    texture: "burl",
    supplierRef: "AMOSTRA DE CONTROLO DO DESIGNER"
  }, "Folheado de raiz tingido escuro, verniz mate 15%. Aplicado s\xF3 depois da montagem \u2014 juntas invis\xEDveis na pe\xE7a final."), /*#__PURE__*/React.createElement(MaterialCard, {
    code: "A2 \xB7 FBF-24",
    name: "Zak+Fox \xB7 Bayan",
    texture: "velvet",
    supplierRef: "REF. ZFBY-10 (BLUE-10)"
  }, "Veludo azul da almofada de assento fixa. Costuras expostas com ponto invis\xEDvel, linhas a condizer."), /*#__PURE__*/React.createElement(MaterialCard, {
    code: "A3 \xB7 FBF-20",
    name: "Clarence House \xB7 New Kenya",
    texture: "stripe",
    supplierRef: "REF. 56792-09 (BLUES)"
  }, "Risca dos rolos com vivo no mesmo tecido e bot\xE3o forrado com efeito capiton\xEA."))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...sy,
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "NOTAS DE PRODU\xC7\xC3O",
    title: "O que a oficina l\xEA antes de cortar",
    lede: "Uma boa folha responde \xE0s perguntas antes de elas chegarem ao telefone."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))',
      gap: '1.2rem',
      marginTop: '2.6rem'
    }
  }, /*#__PURE__*/React.createElement(NoteCard, {
    kicker: "NOTA \xB7 MONTAGEM",
    title: "Folheado ap\xF3s montagem"
  }, "O folheado burl \xE9 aplicado apenas depois dos 4 m\xF3dulos montados, garantindo a aus\xEAncia de juntas vis\xEDveis."), /*#__PURE__*/React.createElement(NoteCard, {
    kicker: "NOTA \xB7 CONFORTO",
    title: "Assento sem molas"
  }, "Almofada fixa com aro de madeira e pressintas el\xE1sticas. Espuma de alta densidade coberta por espuma macia, dacron e penas.", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-xs)',
      letterSpacing: '.06em'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '.6rem'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 110,
      height: 16,
      borderRadius: 2,
      background: 'var(--foam-down)',
      flex: 'none'
    }
  }), "PENAS / PLUMAS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '.6rem'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 150,
      height: 16,
      borderRadius: 2,
      background: 'var(--foam-mid)',
      flex: 'none'
    }
  }), "CMHR 25\u201330 KG/M\xB3 + DACRON"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '.6rem'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 190,
      height: 16,
      borderRadius: 2,
      background: 'var(--foam-core)',
      flex: 'none'
    }
  }), "CMHR 40\u201345 KG/M\xB3"))), /*#__PURE__*/React.createElement(NoteCard, {
    kicker: "NOTA \xB7 FIXA\xC7\xC3O",
    title: "Rolos que n\xE3o fogem"
  }, "Os rolos \xD8254 fixam-se aos bra\xE7os com velcro para evitar deslocamento."), /*#__PURE__*/React.createElement(NoteCard, {
    kicker: "NOTA \xB7 OBRA",
    title: "Detalhes que n\xE3o se veem"
  }, "Forro preto no fundo, p\xE9s niveladores transparentes regul\xE1veis, estrutura refor\xE7ada em madeira."))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...sy,
      background: 'var(--surface-inverse)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    tone: "blueprint",
    kicker: "CONTROLO DE REVIS\xD5ES",
    title: "Tr\xEAs revis\xF5es, zero adivinhas",
    lede: "Cada pedido do cliente fica registado na folha. A oficina constr\xF3i a \xFAltima palavra \u2014 n\xE3o a mem\xF3ria de uma reuni\xE3o."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 1,
      background: 'var(--border-inverse)',
      border: '1px solid var(--border-inverse)',
      marginTop: '2.6rem'
    }
  }, /*#__PURE__*/React.createElement(RevisionItem, {
    rev: "R1",
    date: "29/04/2026",
    status: "PEDIDO CLIENTE"
  }, "Primeira emiss\xE3o da folha: geometria, m\xF3dulos e inten\xE7\xE3o de materiais."), /*#__PURE__*/React.createElement(RevisionItem, {
    rev: "R2",
    date: "07/05/2026",
    status: "PEDIDO CLIENTE"
  }, "Afina\xE7\xE3o de estofos e notas de conforto \u2014 espumas, pressintas, suporte do assento."), /*#__PURE__*/React.createElement(RevisionItem, {
    rev: "R3",
    date: "28/05/2026",
    status: "VALIDADA",
    latest: true
  }, "Folha validada para produ\xE7\xE3o: 7 p\xE1ginas, bilingue PT/EN, pronta para a oficina.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2rem',
      marginTop: '2.6rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Checklist, {
    items: [{
      label: 'MOD-01',
      done: true
    }, {
      label: 'MOD-02',
      done: true
    }, {
      label: 'MOD-03',
      done: true
    }, {
      label: 'MOD-04',
      done: true
    }, {
      label: 'ESTOFO',
      done: true
    }, {
      label: 'ACABAMENTO'
    }],
    style: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '.5rem 1.4rem'
    }
  }), /*#__PURE__*/React.createElement(Stamp, {
    label: "R3 \xB7 VALIDADO",
    sub: "28/05/2026 \xB7 DIERNUS"
  }))));
}
Object.assign(window, {
  TechnicalSheet,
  ChairDrawing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/TechnicalSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/TopBar.jsx
try { (() => {
const {
  Wordmark,
  LangToggle,
  Button
} = window.DiernusDesignSystem_ebdb11;
function TopBar({
  view,
  setView,
  lang,
  setLang,
  progress = 0
}) {
  const links = [['home', '01 · IDEIA'], ['moods', '02 · CONCEÇÃO'], ['sheet', '03 · DESENHO TÉCNICO'], ['contact', '04 · CONTACTO']];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '.65rem var(--pad)',
      background: 'color-mix(in srgb,var(--bone) 88%,transparent)',
      backdropFilter: 'var(--blur-bar)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setView('home');
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1.4rem',
      marginLeft: '2rem'
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setView(id);
    },
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono)',
      letterSpacing: 'var(--ls-mono)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      padding: '.2rem 0',
      color: view === id ? 'var(--text-accent)' : 'var(--text-body)',
      borderBottom: '1px solid ' + (view === id ? 'var(--cobalt)' : 'transparent')
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "bar",
    size: "sm",
    onClick: () => setView('contact')
  }, "Falar connosco"), /*#__PURE__*/React.createElement(LangToggle, {
    value: lang,
    onChange: setLang
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: -2,
      height: 2,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      display: 'block',
      height: '100%',
      width: progress + '%',
      background: 'var(--cobalt)'
    }
  })));
}
Object.assign(window, {
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/TopBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.HandNote = __ds_scope.HandNote;

__ds_ns.LangToggle = __ds_scope.LangToggle;

__ds_ns.Stamp = __ds_scope.Stamp;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.FormFeedback = __ds_scope.FormFeedback;

__ds_ns.SubmitButton = __ds_scope.SubmitButton;

__ds_ns.TrustList = __ds_scope.TrustList;

__ds_ns.MoodFigure = __ds_scope.MoodFigure;

__ds_ns.SketchCard = __ds_scope.SketchCard;

__ds_ns.Checklist = __ds_scope.Checklist;

__ds_ns.MaterialCard = __ds_scope.MaterialCard;

__ds_ns.NoteCard = __ds_scope.NoteCard;

__ds_ns.RevisionItem = __ds_scope.RevisionItem;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.SpecCell = __ds_scope.SpecCell;

__ds_ns.SpecGrid = __ds_scope.SpecGrid;

__ds_ns.TitleBlock = __ds_scope.TitleBlock;

})();
