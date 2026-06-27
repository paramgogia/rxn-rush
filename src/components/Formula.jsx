// Renders a chemical formula in monospace. Formulas already use Unicode
// subscripts/superscripts in the data, so no parsing is needed.
export default function Formula({ children, className = '', ...rest }) {
  return (
    <span className={`mono ${className}`} {...rest}>
      {children}
    </span>
  )
}
