export default {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontSize: 2,
  },
  pre: {
    variant: 'prism',
    fontFamily: 'monospace',
    tabSize: 4,
    hyphens: 'none',
    marginBottom: 2,
    color: 'white',
    bg: 'prism.background',
    overflow: 'auto',
    borderRadius: 10,
    p: 3,
  },
  code: {
    fontFamily: 'monospace',
    // from typography overrideThemeStyles
    // 'h1 code, h2 code, h3 code, h4 code, h5 code, h6 code'
    fontSize: 'inherit',
  },
  inlineCode: {
    borderRadius: '0.3em',
    color: 'secondary',
    bg: 'highlight',
    paddingTop: '0.15em',
    paddingBottom: '0.05em',
    paddingX: '0.2em',
  },
  // from typography overrideThemeStyles
  a: {
    color: 'secondary',
  },
  hr: {
    border: 0,
    my: 4,
    borderBottom: '1px solid',
    borderColor: 'muted',
  },
  p: {
    code: {
      fontSize: 'inherit',
    },
  },
  li: {
    code: {
      fontSize: 'inherit',
    },
  },
  blockquote: {
    color: 'inherit',
    borderLeftColor: 'inherit',
    opacity: 0.8,
    '&.translation': {
      fontSize: '1em',
    },
  },
  navlink: {
    color: 'inherit',
    textDecoration: 'none',
    ':hover,:focus': {
      color: 'primary',
    },
  },
  navitem: {
    variant: 'styles.navlink',
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 3,
    marginRight: 3,
    a: {
      color: 'primary',
    },
  },
  footeritem: {
    variant: 'styles.navlink',
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: 0,
    marginRight: 1,
    a: {
      color: 'primary',
    },
  },
};
