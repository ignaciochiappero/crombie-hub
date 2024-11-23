import Image from "next/image";
import React from "react";

export default function ProfilePage() {
  return (
    <div className="mt-40 p-2 font-[family-name:var(--blender-medium)]">
      
      <div className=" flex">
        
        
        {/* Contenedor imagen e insignia */}
        <div className="w-1/3  flex flex-col items-center justify-center">
          
          <Image
            src={"/perfil-n-d.png"}
            width={200}
            height={200}
            alt="profile-image"
            className="border rounded-full"
          />

          <div className="mt-5 text-lg">
            Nacho Chiappero
          </div>
        </div>

        {/* Contenedor de info */}
        <div className="rounded-3xl w-2/3 flex gap-16 items-center justify-center bg-[#353535]">

            <div className="">

                <div className="h-20 w-20 rounded-full flex justify-center items-center text-white bg-black shadow-[0_0_10px_#ff007f,0_0_20px_#ff007f,0_0_40px_#ff007f] hover:h-32 hover:w-32 transition-all hover:shadow-[0_0_20px_#ff007f,0_0_40px_#ff007f,0_0_60px_#ff007f]">
                caja 1
                </div>
            </div>


            <div className="">

                <div className="h-20 w-20 rounded-full flex justify-center items-center text-white bg-black shadow-[0_0_10px_#ff007f,0_0_20px_#ff007f,0_0_40px_#ff007f] hover:h-32 hover:w-32 transition-all hover:shadow-[0_0_20px_#ff007f,0_0_40px_#ff007f,0_0_60px_#ff007f]">
                caja 1
                </div>
            </div>

            
            <div className="">

                <div className="h-20 w-20 rounded-full flex justify-center items-center text-white bg-black shadow-[0_0_10px_#ff007f,0_0_20px_#ff007f,0_0_40px_#ff007f] hover:h-32 hover:w-32 transition-all hover:shadow-[0_0_20px_#ff007f,0_0_40px_#ff007f,0_0_60px_#ff007f]">
                caja 1
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
