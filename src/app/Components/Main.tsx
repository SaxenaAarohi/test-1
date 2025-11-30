//@ts-nocheck
"use client"
export default function Main({ name, count, images }) {
    return (
        <div className="flex h-full justify-center items-center" >
            <div className="h-[120px] w-[540px] bg-black flex justify-around items-center  p-4 ">

                <div className="flex  gap-8">

                    <div className="flex flex-wrap w-[76px]">
                        {
                            images.map((image, index) => (
                                image.ready === "true" ?
                                    <img key={index} className="w-[38px] h-[38px] border border-black rounded-full" src={image.url} alt={`Image ${index + 1}`} />
                                    :

                                    <img key={index} className="w-[38px] h-[38px] border border-black rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/072/682/301/small_2x/error-warning-triangle-animation-on-black-background-free-video.jpg" alt="Profile" />
                                )
                            )
                        }
                    </div>

                    <div>
                        <h1 className="text-white text-xl font-bold">{name} <span>{count}</span></h1>
                        <p>Moradabad, Uttar Pradesh</p>
                    </div>

                </div>

                {images.some(img => img.ready !== "true") && (
                    <div>
                        <img className="w-[38px] h-[38px] border border-black rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/072/682/301/small_2x/error-warning-triangle-animation-on-black-background-free-video.jpg" alt="Profile" />

                    </div>
                )}


            </div>
        </div>

    )
}
