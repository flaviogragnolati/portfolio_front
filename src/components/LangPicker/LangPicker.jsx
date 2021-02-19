import React, { useState } from 'react';
import {
  Button,
  capitalize,
  InputAdornment,
  MenuItem,
  Select,
  Menu,
  TextField,
  ClickAwayListener,
  MenuList,
  Fade,
} from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useLangContext } from 'context/LangWrapper/langContext';
import { langList } from 'assets/lang';

// prepare array of options from langList
let options = [];
for (const lang in langList) {
  if (Object.hasOwnProperty.call(langList, lang)) {
    const langISO = langList[lang];
    options.push({ label: capitalize(lang), value: langISO });
  }
}

function LangPicker() {
  const [lang, changeLang] = useLangContext();
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event, index) => {
    const newLang = event.target.getAttribute('value');
    setSelectedIndex(index);
    setAnchorEl(null);
    changeLang(newLang);
  };

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="langPicker"
        aria-haspopup="true"
        onClick={handleButtonClick}
        startIcon={<TranslateIcon />}
        endIcon={<ExpandMoreIcon />}
      >
        {lang}
      </Button>
      <Menu
        id="langPickerMenu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {options.map((option, idx) => (
          <MenuItem
            key={option.value}
            value={option.value}
            selected={idx === selectedIndex}
            onClick={(event) => handleChange(event, idx)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default LangPicker;
