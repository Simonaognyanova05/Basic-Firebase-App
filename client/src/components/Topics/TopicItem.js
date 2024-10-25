export default function TopicItem({topic}) {
    return (
        <div>
            <img src={topic.img} />
            <h2>{topic.title}</h2>

            <p>{topic.description}</p>
        </div>
    );
}