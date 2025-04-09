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
    static title:string;
    static version:string;
    static description:string;
    static icon:string;

    static acceptedMinecraftVersions:Array<string>;
    static acceptedEaglerUpdates:Array<string>;
    static acceptedEFVersions:Array<string>;
    static acceptedEFFlavour:string;

    static clientSideOnly:boolean;
    static serverSideOnly:boolean;
    
    static init(): void;
    static postInit(): void;
}

declare class OvenMDK {
    static mods: Array<any>;
    
    static registerMod(modClass:any): void;
}