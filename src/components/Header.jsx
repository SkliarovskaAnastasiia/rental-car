import { palette } from '../theme/palette';
import { Link, NavLink } from 'react-router';
import { AppBar, List, ListItem, Toolbar } from '@mui/material';
import { LogoIcon } from '../assets';

const linkStyles = ({ isActive }) => ({
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '1.25',
  textDecoration: 'none',
  color: isActive ? palette.blue.dark : palette.black.main,
});

export const Header = () => {
  return (
    <AppBar
      sx={{
        position: 'static',
        boxShadow: 'none',
        borderBottom: `1px solid ${palette.white[200]};`,
        backgroundColor: palette.white[200],
      }}
    >
      <Toolbar
        sx={{
          '&.MuiToolbar-root': {
            paddingInline: '120px',
          },
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/" state={{ display: 'block', paddingBlock: '26px' }}>
          <LogoIcon style={{ width: '104px', height: '16px' }} />
        </Link>

        <List
          sx={{
            display: 'flex',
            gap: '32px',
            '& .MuiListItem-root ': { padding: '0' },
            paddingBlock: '26px',
          }}
        >
          <ListItem>
            <NavLink to="/" style={linkStyles}>
              Home
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/catalog" style={linkStyles}>
              Catalog
            </NavLink>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
};
