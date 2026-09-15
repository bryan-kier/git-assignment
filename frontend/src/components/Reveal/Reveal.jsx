import { useReveal } from '../../hooks/useReveal';

// Thin wrapper that adds scroll-reveal behavior to its children via the
// shared `.reveal` styles in tokens.css.
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
