import * as React from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function SimpleBadge() {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={3} color="primary">
        <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={34} color="secondary">
        <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={555} color="success">
        <MailIcon color="action" />
      </Badge>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Stack>
  );
}