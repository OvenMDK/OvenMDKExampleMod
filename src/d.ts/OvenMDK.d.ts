/*
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	OvenMDK Runtime Type Definitions
	D.TS file for OvenMDK INDEV
	
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

declare class OMod {
  static title: string;
  static version: string;
  static description: string;
  static icon: string;

  static acceptedMinecraftVersions: Array<string>;
  static acceptedEaglerUpdates: Array<string>;
  static acceptedEFVersions: Array<string>;
  static acceptedEFFlavour: string;

  static clientSideOnly: boolean;
  static serverSideOnly: boolean;
  static Debug_mode: boolean;
  static config(): void;
  static init(): void;
  static postInit(): void;
}

declare class OvenMDK {
  static mods: Array<any>;

  static registerMod(modClass: any): void;
}
/**
 * Represents a custom item in the system.
 * @version 0.1
 * @param item_name - The display name of the item.
 * @param item_id - The unique identifier for the item.
 * @param itemstack - The maximum stack size for the item.
 * @param texture - The texture path or identifier for the item.
 * @param onRightClick - A callback function triggered when the item is right-clicked.
 *                        Receives the current item stack as an argument.
 *
 * @example
 * ```ts
 * const Magic_Wand = new OItem(
 *   "Magic Wand",
 *   "magic_wand_001",
 *   "textures/items/magic_wand.png",
 *   (itemstack) => {
 *     console.log("Right-clicked item:", itemstack);
 *     // Perform custom logic here
 *   }
 * );
 *
 * ```
 */
declare function OItem(
  item_name: string,
  item_id: string,
  itemstack: number,
  texture: string,
  onRightClick: ($itemstack?: any, $world?: any, $player?: any) => void,
  onItemUse?: (
    $itemstack?: any,
    $world?: any,
    $player?: any,
    $blockpos?: any
  ) => void
): void;

declare namespace OItem {
  /**
   * Registers the client-side handlers or assets for OItem.
   * @version 0.1
   *
   * @example
   * ```ts
   * const Magic_Wand = new OItem(
   *   "Magic Wand",
   *   "magic_wand_001",
   *    1,
   *   "textures/items/magic_wand.png",
   *   (itemstack) => {
   *     console.log("Right-clicked item:", itemstack);
   *     // Perform custom logic here
   *   }
   * );
   * Magic_Wand.registerItem();
   * ```
   */
  function registerItem(): void;
  /**
   * @version 0.1
   * @deprecated This function is deprecated due to a
   * function that runs it, which removed the need for
   * manual activation/
   */
  function registerClient(): void;
}

/**
 * Represents a custom block in the system.
 *
 * @version 0.1
 * @param block_name - The display name of the block.
 * @param block_id - The unique identifier for the block.
 * @param texture - The texture path or identifier for the block.
 * @param onBreak - A callback function triggered when the block is destroyed.
 *
 * @example
 * ```ts
 * const Custom_Block = new OBlock(
 *   "Custom Block",
 *   "custom_block_001",
 *   "textures/blocks/custom_block.png",
 *   ($blockpos) => {
 *     console.log("Block destroyed at:" $blockpos);
 *     // Perform custom logic here
 *   }
 * );
 *
 * ```
 */
declare function OBlock(
  block_name: string,
  block_id: string,
  texture: string,
  onBreak?: ($world: any, $blockpos: any, $blockstate: any) => void
): void;

declare namespace OBlock {
  /**
   * Registers a OBlock.
   * @version 0.1
   *
   * @example
   * ```ts
   * const Custom_Block = new OBlock(
   *   "Custom Block",
   *   "custom_block_001",
   *   "textures/blocks/custom_block.png",
   *   ($blockpos) => {
   *     console.log("Block destroyed at:" $blockpos);
   *     // Perform custom logic here
   *   }
   * );
   * Custom_Block.registerBlock();
   * ```
   */
  function registerBlock(): void;
  /**
   * @version 0.1
   * @deprecated This function is deprecated due to a
   * function that runs it, which removed the need for
   * manual activation.
   */
  function registerClient(): void;
}
/**
 * Represents a custom entity in the OvenMDK environment.
 *
 * @version 0.2
 * @param entity_name - The display name of the entity.
 * @param entity_id - The unique identifier for the entity (lowercase, unique).
 * @param texture - The texture path or base64 identifier for the entity.
 * @param model - The model name to be used (e.g., "ModelCow", "ModelPlayer").
 * @param main_sound - The main sound of the entity.
 * @param [entityBreedItem] - Optional breeding item for the entity.
 * @param [entityDropItem] - Optional item dropped by the entity upon death.
 *
 * @example
 * ```ts
 * const CoolCow = new OEntity(
 *   "Cool Cow",
 *   "cool_cow",
 *   "textures/entities/cow.png",
 *   "ModelCow"
 * );
 * CoolCow.registerOEntity();
 * ```
 */
declare function OEntity(
  entity_name: string,
  entity_id: string,
  texture: string,
  model: string,
  main_sound: string,
  entityBreedItem?: string,
  entityDropItem?: string
): void;

declare namespace OEntity {
  /**
   * Registers the custom OEntity in the game.
   *
   * @version 0.2
   * @example
   * ```ts
   * const CoolCow = new OEntity(
   *   "Cool Cow",
   *   "cool_cow",
   *   "textures/entities/cow.png",
   *   "ModelCow",
   *    cool_main_sound
   * );
   * CoolCow.registerOEntity();
   * ```
   */
  function registerOEntity(): void;
}
/**
 * Registers a custom command in OvenMDK.
 * @version 0.2
 *
 * @param prefix - The command prefix (should be `/` or empty).
 * @param command_id - Unique identifier for the command.
 * @param handler - Callback function invoked when the command is run.
 *
 * @example
 * ```ts
 * simplecommand("/", "greet", () => {
 *   ModAPI.displayToChat("Hello, player!");
 * });
 * ```
 */
declare function simplecommand(
  prefix: string,
  command_id: string,
  handler: () => void
): void;
/**
 * Executes a Minecraft command as a specific player entity.
 *
 * @version 0.2
 *
 * @param player - The player entity (raw or wrapped) to execute the command as.
 * @param command - The Minecraft command to execute. Must include proper formatting
 *                  (e.g., `/summon`, `/give`, etc.).
 * @param [feedback=false] - If true, the command will display output in the chat.
 *
 * @example
 * ```ts
 * // Summon a custom entity at the player's current position
 * OvenMDK__executeCommandAs(player, `/summon example_oentity 100 64 200`, true);
 *
 * // Give the player an item
 * OvenMDK__executeCommandAs(player, `/give @p minecraft:diamond 1`, true);
 * ```
 */
declare function OvenMDK__executeCommandAs(player: any, command: string, feedback: boolean): void;
// generate tsdocs for OvenOre from main.ts

/**
 * Represents a custom ore generation configuration for oven/world generation systems.
 *
 * @version 0.2
 * @param block_id - The unique identifier for the ore block to be generated.
 * @param vein_size - The number of blocks per ore vein.
 * @param vein_count - The number of veins generated per chunk or area.
 * @param min_height - The minimum vertical height (Y level) at which the ore can spawn.
 * @param max_height - The maximum vertical height (Y level) at which the ore can spawn.
 *
 * @example
 * ```ts
 * const cool_ore = new OvenOre(
 *   "example_oblock", // blockID
 *   4,                // vein size
 *   250,              // vein count
 *   0,                // min generation height
 *   40                // max generation height
 * );
 *
 * cool_ore.registerOvenOre();
 * ```
 */
declare function OvenOre(
  block_id: string,
  vein_size: number,
  vein_count: number,
  min_height: number,
  max_height: number
): void;

declare namespace OvenOre {
  /**
   * Registers the OvenOre for generation using the specified configuration.
   *
   * @version 0.2
   *
   * @example
   * ```ts
   * const myOre = new OvenOre("my_ore", 6, 20, 5, 40);
   * myOre.registerOvenOre();
   * ```
   */
  function registerOvenOre(): void;
}

