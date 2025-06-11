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
    console.log("logging uh idk");
    const oitem = new OItem();

    ModAPI.dedicatedServer.appendCode(() => oitem);

    ModAPI.addEventListener("lib:asyncsink", async () => {
      ModAPI.addEventListener(
        "lib:asyncsink:registeritems",
        (renderItem: any) => {
          renderItem.registerItem(
            oitem.example_item,
            ModAPI.util.str("exampleitem")
          );
        }
      );

      AsyncSink.L10N.set("item.exampleitem.name", "Example Item");

      AsyncSink.setFile(
        "resourcepacks/AsyncSinkLib/assets/minecraft/models/item/exampleitem.json",
        JSON.stringify({
          parent: "builtin/generated",
          textures: {
            layer0: "items/exampleitem",
          },
          display: {
            thirdperson: {
              rotation: [-90, 0, 0],
              translation: [0, 1, -3],
              scale: [0.55, 0.55, 0.55],
            },
            firstperson: {
              rotation: [0, -135, 25],
              translation: [0, 4, 2],
              scale: [1.7, 1.7, 1.7],
            },
          },
        })
      );

      AsyncSink.setFile(
        "resourcepacks/AsyncSinkLib/assets/minecraft/textures/items/exampleitem.png",
        await (await fetch(icon)).arrayBuffer()
      );
    });
  }
}

OvenMDK.registerMod(ExampleMod);
