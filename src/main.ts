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
  static credits: string = "Block_2222 and BendieGames";
  static icon: string = icon;

  static acceptedMinecraftVersions = ["1.8.8"];
  static acceptedEFVersions = ["2.7.3"];

  static init(): void {
    console.log("logging uh idk");
    const itemTexture =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAKZJREFUOE9j/P//PxMDBIBoEP6HREOl4PLIciA2AyPIgMcM//7KgvWSDJjBBpx9/+YvJzc3Sbq12DhB6sEGsJ19/+YnmQawYhigzc7FcPXnN4KugbqAHWQAy9n3b34T4wJkw6EGYLqAoNVQBWS5ANlwZBfAvUCs/0EGkW0AzBKqGoCSDgh5A80F2KMRpAgfAKUT6kcjsfEPUycmKMQgy8AETkgUZWcAS3CPIf4oSPsAAAAASUVORK5CYII=";

    const exampleItem = new OItem(
      "Example Item",
      "example_item",
      itemTexture,
      (itemstack) => {
        ModAPI.displayToChat("Used example item!");
      }
    );
    exampleItem.registerClient();
  }
}

OvenMDK.registerMod(ExampleMod);
