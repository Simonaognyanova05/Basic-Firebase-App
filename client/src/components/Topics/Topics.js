import { useEffect, useState } from "react";
import TopicItem from "./TopicItem";
import { getTopics } from "../../services/getTopics";

export default function Topics() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTopics()
            .then(result => {
                return result.json();
            })
            .then(res => {
                setTopics(res);
            })
    }, [topics]);


    return (
        <>
            <h1>Теми</h1>

            {
                topics.length > 0
                    ?
                    topics.map(x => <TopicItem key={x._id} topic={x} />)
                    : <p>No topics</p>
            }


        </>
    );
}