//  PlayPause button 
export function PlayPause({fill}) {
    return (
        <svg fill={fill}
            version="1.1"
            id="mdi-play-pause"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path d="M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5" />
        </svg>
    );
}

//  SkipBackward button 
export function SkipBackward({fill}){
    return (
        <svg height="16" width="16" fill={fill}>
            <path d="M8.014 3.621C6.53 4.286 3.705 5.645 0 7.996c3.584 2.302 6.501 3.703 8.014 4.381v-3.76c3.101 1.913 5.636 3.15 6.998 3.76V3.621c-1.34.6-3.813 1.809-6.998 3.76zM.619 12.258c-.01.021-.002.001-.01.017a.67.67 0 0 1-.018.037l.001-.001.026-.052z" overflow="visible" />
            <path d="M1 12H0V4l1-.25z"   overflow="visible"  white-space="normal"/>
        </svg>
    );
}

//  SkipForward button 
export function SkipForward ({fill}){
    return (
        <svg height="16" width="16" fill={fill}>
            <path d="M7.986 3.621C9.47 4.286 12.294 5.645 16 7.996c-3.585 2.302-6.502 3.703-8.014 4.381v-3.76c-3.101 1.913-5.636 3.15-6.998 3.76V3.621c1.339.6 3.812 1.809 6.998 3.76zm7.395 8.637c.009.021.002.001.01.017a.67.67 0 0 0 .018.037l-.001-.001-.027-.052z" overflow="visible"  />
            <path d="M15 12h1V4l-1-.25z" overflow="visible"  white-space="normal" />
        </svg>
    );
}