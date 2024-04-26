import * as React from 'react';
import Switch from '@mui/material/Switch';
import useSettings from '../../../hooks/useSettings';

export default function ModeSwitch() {
  const { themeMode, onToggleMode } = useSettings();

  const handleChange = (event) => {
    onToggleMode();
  };

  return (
    <Switch
      checked={themeMode === 'dark'}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'theme-switch' }}
    />
  );
}
