import Image from 'next/image'
import React from 'react'

export default function ProfilePage() {
  return (
    <div className='mt-40 p-2'>


        <div className='border flex'>


            {/* Contenedor de info */}
            <div className='w-2/3'>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi assumenda velit beatae eligendi dolorem modi atque accusamus soluta molestias voluptatem vel, quis, nam tempora nostrum. Ipsum quidem unde praesentium quas?</span>
            
            
            </div>


            {/* Contenedor imagen e insignia */}
            <div className='w-1/3 border flex items-center justify-center'>

                <Image 
                    src={"/perfil-n-d.png"}
                    width={200}
                    height={200}
                    alt='profile-image'
                    className='border'
                
                />


            </div>
            
        </div>

        
    </div>
  )
}
