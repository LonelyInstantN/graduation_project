import {
  Titlebar,
  Color,
  RGBA
} from '@rozzzly/custom-electron-titlebar'

// import { Menu } from '@electron/remote';



export default function () {
  // console.log(Menu.getApplicationMenu())
  new Titlebar({
    backgroundColor: Color.fromHex('#A7C0C9'),
    itemBackgroundColor: new Color(new RGBA(0, 0, 0, .16)),
  });
}