// store.js
import { create } from 'zustand';

const useStore = create((set) => ({
  name:null,
  setName:(newName)=>set({name:newName}),
  email:null,
  setEmail:(newEmail)=>set({email:newEmail}),
  image:null,
  setImage:(newImage)=>set({image:newImage})
}));

export default useStore;
