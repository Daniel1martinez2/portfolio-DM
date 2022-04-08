import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";


const Box = () => {
  // const colorMap = useLoader(TextureLoader, texture) || null;
  
  // console.log(colorMap);
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshNormalMaterial attach="material" />
      {/* <meshLambertMaterial attach="material" color="blue" /> */}
      {/* <meshStandardMaterial map={colorMap} /> */}
    </mesh>
  )
}

export default Box;