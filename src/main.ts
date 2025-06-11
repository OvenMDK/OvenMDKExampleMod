/*
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	OvenMDK Example Mod
	Example mod for OvenMDK INDEV
	
	Copyright 2025 Block_2222
    Licenced under GNU LGPL-3.0-or-later
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    This file is part of OvenMDK.

    OvenMDK is free software: you can redistribute it and/or modify it under
    the terms of the GNU Lesser General Public License as published by the Free
    Software Foundation, either version 3 of the License, or (at your option) 
    any later version.

    OvenMDK is distributed in the hope that it will be useful, but WITHOUT ANY 
    WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS 
    FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License along 
    with Oven MDK. If not, see <https://www.gnu.org/licenses/>.
*/
import icon from "./ASSETS/icon.png";

class ExampleMod extends OMod {
  static title: string = "OvenMDK Example Mod";
  static description: string = "Example mod for OvenMDK INDEV";
  static credits: string = "Block_2222";
  static icon: string = icon;

  static acceptedMinecraftVersions = ["1.8.8"];
  static acceptedEFVersions = ["2.7.3"];

  static init(): void {
    console.log("ExampleMod Loaded!");
    const config = {
      itemName: "customitem",
      itemTexture: icon,
    };

    const customItem = new OItem(config);

    customItem.setupAsyncSink();
  }
}

OvenMDK.registerMod(ExampleMod);
