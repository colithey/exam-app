import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import './Shop.scss'
import { getAllPhotos } from '../../api/index.api'

export const Shop = () => {

    const [photo, setPhoto] = useState([])
    const [error, setError] = useState('')


    const getPhotos = async () => {
        try {
            const { data } = await getAllPhotos()
            setPhoto(data)
            console.log(photo);
        } catch (err) {

        }
    }

    useEffect(() => {
        getPhotos()
    }, [])

    return (
        <>
            <section className='shop' id='shop'>
                <div className="container shop__container">
                   {
                    photo.map((el) => (
                        <>
                        <Card image={el.thumbnailUrl} title={el.title} />
                        </>
                    ))
                   }
                </div>
            </section>
        </>
    )
}