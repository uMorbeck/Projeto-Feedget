import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';
import { Popover } from '@headlessui/react'

//Widget utilizando a biblioteca Popover para acessibilidade, já integrado com o React

export function Widget(){
    
    return( 
    <Popover className='absolute bottom-5 right-5'>
        <Popover.Panel>Hello World!</Popover.Panel>

        <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
            <ChatTeardropDots className='h-6 w-6'/>

            <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                <span className='pl-2'/>
                Feedback
            </span>
        </Popover.Button>
    </Popover>

)}

//Widget sem acessibilidade, utilizando apenas o useState do React 

// export function Widget(){
//     const[isWidgetOpen, setIsWidgetOpen] = useState(false)

//     function toggleWidgetVisibility(){
//         setIsWidgetOpen(!isWidgetOpen)
//     }

//     return( 
//     <div className='absolute bottom-5 right-5'>
//         {isWidgetOpen ? <p>Hello World!</p> : null}

//         <button onClick={toggleWidgetVisibility} className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
//             <ChatTeardropDots className='h-6 w-6'/>

//             <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
//                 <span className='pl-2'/>
//                 Feedback
//             </span>
//         </button>
//     </div>

// )}