/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import { CustomLink } from 'components/custom-link';

export const NavbarTemplate = ({ data }) => (
  <nav>
    {data.navbarItems.length > 0 && (
      <div
        sx={{
          display: 'flex',
          listStyle: 'none',
        }}
      >
        {data.navbarItems.map((menuItem) => (
          <div key={menuItem.linkURL} sx={{ variant: 'styles.navitem' }}>
            <CustomLink linkType={menuItem.linkType} linkURL={menuItem.linkURL}>
              {menuItem.label}
            </CustomLink>
          </div>
        ))}
      </div>
    )}
  </nav>
);

NavbarTemplate.propTypes = {
  data: PropTypes.shape().isRequired,
};

const Navbar = (props) => {
  if (!props.data) {
    return null;
  }

  const data = props.data.edges[0].node.frontmatter;

  return <NavbarTemplate data={data} />;
};

Navbar.propTypes = {
  data: PropTypes.shape(),
};

Navbar.defaultProps = {
  data: null,
};

export default Navbar;
