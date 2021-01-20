import { Child, ChildAsFC } from './Child';

// const Parent = () => {
//   return (
//     <Child
//       color="red"
//       onClick={() => console.log('clicked!')}
//     >

//     </Child>
//   );
// };

const Parent = () => {
  return (
    <ChildAsFC
      color="red"
      onClick={() => console.log('clicked!')}
    >
      <div>I am a child</div>
    </ChildAsFC>
  );
};

export default Parent;