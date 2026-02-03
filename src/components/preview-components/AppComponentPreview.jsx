import video from '../../assets/app-images/video.mp4'


const AppComponentPreview = ()=>{
    return(
        <div className="relative w-full h-full rounded-lg overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
            {/* Video Container */}
            <div className="relative w-full h-full">
              <video
                className="w-full h-full object-cover transition-all duration-500"
                autoPlay
                loop
                muted
                disablePictureInPicture
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
        
            </div>
          </div>
    )
}
export default AppComponentPreview