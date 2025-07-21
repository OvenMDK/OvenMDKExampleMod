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
declare const AsyncSink: any;
declare class OvenMDK {
  static mods: Array<any>;

  static registerMod(modClass: any): void;
}
/**
 * Represents a custom item in the system.
 *
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
  onRightClick: (itemstack: any) => void
): void;

declare namespace OItem {
  /**
   * Registers the client-side handlers or assets for OItem.
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
   * @deprecated This function is deprecated due to a
   * function that runs it, which removed the need for
   * manual activation/
   */
  function registerClient(): void;
}

/**
 * Represents a custom block in the system.
 *
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
   * @deprecated This function is deprecated due to a
   * function that runs it, which removed the need for
   * manual activation.
   */
  function registerClient(): void;
}