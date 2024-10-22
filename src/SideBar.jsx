
import Button from 'react-bootstrap/Button';
import { Form } from './Form';
import { ResultDiv } from './Result';
import { useContext,createContext} from 'react';
import { AppStore } from './Store/context';



export const SideBar=()=>{
  const {Home,HandleHome,HandlePost}=useContext(AppStore);

  return(
    <>
     <div className='flex gap-4'>
    <div className="md:w-[20vw] mt-1 bg-black h-[90vh] text-white pt-5 p-4">
<div className='flex flex-col gap-4'>
<Button  className="md:py-2 md:text-[1.5rem] font-medium text-[1rem]"variant="light" onClick={HandleHome} active={Home} >Home</Button >{' '}
<Button className=" md:py-2 md:text-[1.5rem] font-medium text-[1rem]" variant="light" onClick={HandlePost} active={!Home} >Create Post</Button>{' '}
</div>
    </div>
    {Home ? <ResultDiv />: <Form /> }
    </div>
    </>
  )
}