import React from 'react'
// import { Link } from 'react-router-dom';
const Dev: React.FC = () => {
    return (
        <>
            <div className="text-center pt-[30vh] px-[20vw]">
                <div className="flex space-x-2">
                    <img src="/icon.svg" className="h-5" alt="hereicon" />
                    <span className="text-gray-400 text-sm">Note</span>
                </div>
                <br />
                <span className="text-gray-400 text-sm">
                    You can't access this site because the <a href="https://www.google.com/search?q=development+meaning&rlz=1C1GCEB_enIN1093IN1093&oq=Development+meaning&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIPCAEQABgUGIcCGLEDGIAEMgoIAhAAGLEDGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMg0IBhAAGIMBGLEDGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEIMzEwOGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" className='text-blue-600'>development</a> is under progress. To be Launched very soon.
                    Explore the below social media handles rather.
                </span>
                <div className="p-10">
                    <span className='flex space-x-4'>
                        <a href="https://x.com/@lightxcv"><img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Twitter_glyph_svg-128.png" alt="Twitter" className='h-6' />
                        </a>
                        <a href="https://github.com/itsshreyashk"><img src="https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-64.png" alt="Twitter" className='h-6' />
                        </a>
                    </span>
                </div>

            </div>
        </>
    )
}
export default Dev;