import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      
      
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center">

        <Image
          className=" animate-pulse"
          src="/logo-mini-3.png"
          alt="Crombie-hub-logo"
          width={300}
          height={300}
          
        />


        <div className=" w-full flex items-center justify-center">

          <span className=" text-3xl font-[family-name:var(--blender-bold)]">Bienvenidos a CrombieHub!</span>
        </div>




      </main>
     
     
     
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-20">
        By NachoDev - 2024
      </footer>
    </div>
  );
}
