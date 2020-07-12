export default {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontSize: 2,
  },
  h1: {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    fontSize: 5,
  },
  h2: {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    fontSize: 4,
  },
  h3: {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    fontSize: 3,
  },
  h4: {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    fontSize: 2,
  },
  h5: {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    fontSize: 1,
  },
  h6: {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    fontSize: 0,
  },
  a: {
    color: 'secondary',
    textDecoration: 'none',
  },
  pre: {
    fontFamily: 'monospace',
    overflowX: 'auto',
    code: {
      color: 'inherit',
    },
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 'inherit',
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
  },
  th: {
    textAlign: 'left',
    borderBottomStyle: 'solid',
  },
  td: {
    textAlign: 'left',
    borderBottomStyle: 'solid',
  },
  img: {
    maxWidth: '100%',
  },
  navlink: {
    color: 'inherit',
    textDecoration: 'none',
    ':hover,:focus': {
      color: 'secondary',
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
      color: 'secondary',
      lineHeight: 1,
      verticalAlign: 'middle',
      marginTop: '3px',
    },
  },
  footeritem: {
    variant: 'styles.navlink',
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: 0,
    maxWidth: '24px',
    marginRight: [2],
    a: {
      color: 'secondary',
    },
    svg: {
      width: '100%',
      fill: 'secondary',
    },
  },
  projectLink: {
    position: 'relative',
    display: 'block',
    ':hover div': {
      display: 'flex',
    },
  },
  projectLinkHover: {
    display: 'none',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    backgroundColor: 'rgba(0, 0, 0, .85)',
    transition: 'background-color 140ms cubic-bezier(.33,0,.2,1)',
  },
};
