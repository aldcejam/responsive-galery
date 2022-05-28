import Image from "next/image";
import { useState } from "react";
import ModalForGalery from "../ModalForGalery";
import styles from './styles.module.scss'
import { AiOutlineFullscreen } from "react-icons/ai";


interface SectionGaleryProps {
    groupImages: Array<{
        srcImg: string
        altImg?: string,
        titleImg?: string
    }>
}

const SectionGalery = ({ groupImages }: SectionGaleryProps) => {

    const [isOpenGalery, setIsOpenGalery] = useState(false)

    const handleOpenGalery = () => {
        setIsOpenGalery(true)
        document.body.style.overflow = "hidden"
    }
    const handleCloseGalery = () => {
        setIsOpenGalery(false)
        document.body.style.overflow = "auto"
    }
    return (
        <>
            <div className={styles['images-group']}>
                {
                    groupImages ?
                        groupImages.map((img, index, array) => {
                            if (index == 2) {
                                return (
                                    <div key={img.srcImg} onClick={handleOpenGalery} >
                                        <Image src={img.srcImg} layout="fill" objectFit='cover' />
                                        <div className={styles['open-galery-mobile']}>+{array.length - 2}</div>
                                        <AiOutlineFullscreen className={styles['open-galery-desktop']}/>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={img.srcImg} onClick={handleOpenGalery}>
                                        <Image src={img.srcImg} layout="fill" objectFit='cover' />
                                        <AiOutlineFullscreen className={styles['open-galery-desktop']}/>
                                    </div>
                                )
                            }
                        })
                        : null
                }
            </div>
            <ModalForGalery
                handleCloseGalery={handleCloseGalery}
                isOpenGalery={isOpenGalery}
                groupImages={groupImages}
            />
        </>
    )
}

export default SectionGalery;