"use client";
import FontPicker from "./lifonts/lifp";

export default function AcmeLogo() {
  return (
    <div>
		<div className="flex flex-row items-center leading-none text-red" >
		  <p className="text-left hover:text-center">select laNg_font:</p>
		</div>
		<div className="w-full leading-none text-black" >
		  <FontPicker />
		</div>
    </div>
  );
}
