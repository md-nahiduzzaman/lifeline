import { useParams } from "react-router-dom"
import {ZegoUIKitPrebuilt} from'@zegocloud/zego-uikit-prebuilt'
const VideoChatsPages = () => {
    const {id}=useParams()as any

const myMetting=async (element: HTMLDivElement | null)=> {
const appId=2040395265
const serverSecret="65170dbb7c050473f02020a1669963bb"
const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appId,serverSecret,id,Date.now().toString(),'Sanim Hasan')

const zp=ZegoUIKitPrebuilt.create(kitToken)
zp.joinRoom({
    container:element,
    scenario:{
        mode:ZegoUIKitPrebuilt.VideoConference
    }
})
    }

  return (
    <div className="" ref={myMetting} />
  )
}

export default VideoChatsPages
