
import './styles.css';

interface VideoPlayerProps {
    src: string;
    width?: string;
    height?: string;
    controls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src,
    width = "100%",
    height = "auto",
    controls = false,
    autoPlay = true,
    loop = true,
    muted = true
    
}) => {
    return (
        <div className='video-player-container'>
            <video
                src={src}
                width={width}
                height={height}
                controls={controls}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                className='video-player'
                playsInline
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
