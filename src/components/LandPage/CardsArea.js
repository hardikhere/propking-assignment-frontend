import axios from 'axios';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import APIS from '../../utils/endpoints';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import LandCard from './LandCard';

const CardsArea = () => {
    const [limit, setlimit] = useState(10);
    const [hasMore, sethasMore] = useState(true);
    const [skip, setskip] = useState(0);
    const [lands, setlands] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchNextData = () => {
        setLoading(true)
        axios.get(APIS.getLands + `?limit=${limit}&skip=${skip}`)
            .then(res => {
                console.log("got data", res.data);
                if (res.data.data.length < limit)
                    sethasMore(false);
                else {
                    setskip(skip + limit);
                }
                setlands(lands.concat(res.data.data));
                setLoading(false)
            })
    };
    useEffect(() => {
        fetchNextData();
    }, []);

    const [showDeleteModal, setshowDeleteModal] = useState(false);
    const [showEditModal, setshowEditModal] = useState(false);
    const toggleShowDeleteModal = (el) => {
        if (!showDeleteModal) {
            setselectedLandCard(el)
        }
        setshowDeleteModal(!showDeleteModal)
    };
    const toggleShowEditModal = (el) => {
        if (!showEditModal) {
            setselectedLandCard(el)
        }
        setshowEditModal(!showEditModal)
    };
    const [selectedLandCard, setselectedLandCard] = useState()
    return (
        <>
            <DeleteModal open={showDeleteModal}
                handleClose={toggleShowDeleteModal}
                {...selectedLandCard}
            />
            <EditModal  open={showEditModal}
                handleClose={toggleShowEditModal}
                {...selectedLandCard}/>

            <InfiniteScroll
                hasMore={hasMore}
                dataLength={lands.length}
                next={fetchNextData}
                loader={<h3>loading..</h3>}
            >
                {
                    lands.map(el => {
                        return <React.Fragment key={el.name}>
                            <LandCard {...el} 
                            ToggleShowDeleteModal={() => toggleShowDeleteModal(el)} 
                            toggleEditModal={() => toggleShowEditModal(el)} />
                        </React.Fragment>
                    })
                }
            </InfiniteScroll>
        </>
    )
}

export default CardsArea
