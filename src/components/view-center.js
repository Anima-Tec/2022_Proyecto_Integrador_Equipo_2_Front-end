import { x } from '@xstyled/styled-components'
import BancoComida from '../iamges/banco-de-comida.jpeg'
import { useNavigate } from 'react-router-dom';

export default function ViewCenter() {
    const navigate = useNavigate();
    return (
            <x.div 
                onClick={() => navigate(`./center/nombreCenter`)}
                w={{ _:'19rem', lg:'30rem' , xl:'40rem' }} 
                h={{_:'8rem', lg:'11rem', xl:'14rem' }}
                mb={{_:'2rem', lg:'3rem'}}
                position='relative'
                display='flex'
                alignItems='center'
                justifyContent='space-evenly'
                boxShadow='0px 4px 20px rgba(0, 0, 0, 0.1)'
                borderRadius='20px'
            >
                <x.img
                    src={BancoComida}
                    w={{ _:'7rem', lg:'10rem', xl:'13rem' }} 
                    h={{_:'5.6rem', lg:'8rem', xl:'10rem' }}
                    borderRadius='20px'
                    objectFit='cover'
                />
                <x.div
                    display='flex'
                    flexDirection='column' 
                    gap={{_:'1rem', xl:'2rem'}} 
                    fontSize={{_:'12px', lg:'18px'}}>
                    <x.h2 fontWeight='bold'>nombre</x.h2>
                    <x.p>Se requieren alimentos</x.p>
                    <x.p>Se requieren voluntarios</x.p>
                </x.div>
                <x.p
                    fontSize={{_:'10px', lg:'14px'}} 
                    color='#1E1E1E'
                    right='2rem'
                    bottom={{_:'0.5rem', xl:'1rem'}}
                    position='absolute'
                >
                    Toca para más detalles
                </x.p>
            </x.div>
        
    );
}
