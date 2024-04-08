import { PerspectiveCamera, View } from "@react-three/drei"
import Lights from './Lights'
import { Suspense } from "react"
import IPhone from './IPhone'
const ModelView = ({index, groupRef, gsapType, controlRef, setRotationSize, size, item}) => {
  return (
    
      <View index={index}
      id={gsapType}
      className={`border-2 border-red-500 w-full h-full ${index === 2 ? 'right-[-100%]' : ''}`}
      >
        <ambientLight intensity={0.3}/>
        <PerspectiveCamera makeDefault position={[0,0,4]}/> 
        <Lights/>
        <Suspense fullback={<div>Loading</div>}>

        </Suspense>
        <IPhone/>  
      </View>
      )
}

export default ModelView
