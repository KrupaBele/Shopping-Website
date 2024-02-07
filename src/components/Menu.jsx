import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";

export default function Menu() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          className=""
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <ListIcon />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>
                      <NavLink
                        to="/"
                        className={({ isActive }) => `block py-2${
                          isActive ? " text-orange-700" : " text-gray-700"
                        } pr-4 pl-3 duration-200 border-b border-gray-100
                                        lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                      >
                        Home
                      </NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <NavLink
                        to="/about"
                        className={({ isActive }) => `block py-2${
                          isActive ? " text-orange-700" : " text-gray-700"
                        } pr-4 pl-3 duration-200 border-b border-gray-100
                                        lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                      >
                        About
                      </NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <NavLink
                        to="/contact"
                        className={({ isActive }) => `block py-2${
                          isActive ? " text-orange-700" : " text-gray-700"
                        } pr-4 pl-3 duration-200 border-b border-gray-100
                                        lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                      >
                        Contact
                      </NavLink>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
