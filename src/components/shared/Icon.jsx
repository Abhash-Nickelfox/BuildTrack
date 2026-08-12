/**
 * Wraps a Material Symbols Outlined glyph.
 * Usage: <Icon name="architecture" className="text-2xl text-primary" fill />
 * Icon names must match a valid Material Symbols ligature, e.g. "menu", "close", "architecture".
 * `fill` toggles the filled ('FILL' 1) vs outlined ('FILL' 0) glyph variant; defaults to filled.
 */
export function Icon({ name, className = 'text-xl', fill = true, style, ...props }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontVariationSettings: `'FILL' ${fill ? 1 : 0}`, ...style }}
      aria-hidden="true"
      {...props}
    >
      {name}
    </span>
  )
}

export default Icon
