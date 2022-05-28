import Modal from 'react-modal'
import Galery from './Galery'
import { FaAngleLeft } from "react-icons/fa";
import { motion } from "framer-motion"

interface ModalForGaleryProps {
    isOpenGalery: boolean
    handleCloseGalery: () => void
    groupImages?: Array<{
        srcImg: string
        altImg?: string,
        titleImg?: string
    }>
}

export default function ModalForGalery({ handleCloseGalery, isOpenGalery, groupImages }: ModalForGaleryProps) {
    return (

        <Modal
            isOpen={isOpenGalery}
            onRequestClose={handleCloseGalery}
            className='outline-0 z-[9999] absolute inset-x-0 mx-auto overflow-y-scroll  w-full h-full'>
            <motion.div
                className="z-[9999] absolute inset-x-0 items-center bg-white"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration:1.4, type:'spring'}}
            >
                <div
                    className="flex items-center bg-white w-full py-2 pl-2 max-w-[1000px] mx-auto">
                    <div
                        onClick={handleCloseGalery}
                        className="cursor-pointer bg-[#e8e8e8] rounded-lg flex items-center mr-2 ">
                        <FaAngleLeft className='p-1 text-[30px]' />
                    </div>
                    <div className="font-semibold select-none">Galeria</div>
                </div>
                <Galery groupImages={groupImages} />
            </motion.div>
        </Modal>
    )
}