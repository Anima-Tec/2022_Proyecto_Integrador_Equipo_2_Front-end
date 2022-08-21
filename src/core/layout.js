import PropTypes from 'prop-types';
import PageWrapper from 'components/page-wrapper';

export default function Layout({ children, ...rest }) {
  return <PageWrapper {...rest}>{children}</PageWrapper>;
}

Layout.propTypes = {
  children: PropTypes.node
};
