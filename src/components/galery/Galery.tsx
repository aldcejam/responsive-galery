import Image from 'next/image';


interface SlideProps {
    groupImages: Array<{
        srcImg: string,
        altImg?: string,
        titleImg?:string
    }> | undefined
}
const Galery = ({ groupImages }: SlideProps) => {

    return (
        
            <div className="flex-1 overflow-y-auto max-w-[1000px] mx-auto">
                <div className="xl:content xl:mx-auto ">
                    {
                        groupImages ?
                            groupImages.map((image) => {
                                return (
                                    <div key={image.srcImg} className="col-span-6 row-span-6 relative w-full h-[70vh] sm:h-[90vh] sm:max-h-[900px]">
                                        <Image src={image.srcImg} alt={image.altImg} title={image.titleImg} layout="fill" objectFit="cover" quality={100} />
                                    </div>
                                )
                            }) : null
                    }

                </div>
            </div>

    )
}

export default Galery