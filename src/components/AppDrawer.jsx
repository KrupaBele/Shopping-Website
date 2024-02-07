import { styled } from "@mui/system";
import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { red, yellow } from "@mui/material/colors";

export default function AppDrawer() {
  // const{ drawerOpen,setDrawerOpen}=
  return (
    <Drawer open={true} className="   ">
      <List className=" w-72    h-52 " sx={{}}>
        <ListItemButton>
          <ListItemText>Home</ListItemText>
        </ListItemButton>
        <Divider variant=" middle"></Divider>
        <middleDivider />
        <ListItemButton>
          <ListItemText>Home</ListItemText>
        </ListItemButton>
        <Divider variant=" middle"></Divider>
        <ListItemButton>
          <ListItemText>Home</ListItemText>
        </ListItemButton>
        <Divider variant=" middle"></Divider>
        <ListItemButton>
          <ListItemText>Home</ListItemText>
        </ListItemButton>
        <Divider variant=" middle"></Divider>
      </List>
    </Drawer>
  );
}
