import { useState, useEffect } from 'react'

const ResponsiveLayout = ({ breakpoint, renderMobile, renderDesktop, renderTablet }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth); setHeight(window.innerHeight);
        }
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize) };
    }, [])
    console.log(width, height);
    let render;
    if (width < breakpoint){
        render = renderMobile();
    }
    else {
        if (width < height){
            render = renderTablet();
        }
        else{
            render = renderDesktop();
        }
    }
    return(render)
}

export default ResponsiveLayout
