import {create} from "zustand"

interface VideoStore{
    videolist:boolean
}

export const useVideoStore = create<VideoStore>(()=>({
    videolist:false
}));