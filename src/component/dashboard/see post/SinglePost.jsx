import {useState} from "react";

const SinglePost = ({data}) => {

    // console.log(data)

    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const words = data.text.split(' ');
    const shortContent = showMore ? data.text : words.slice(0, 30).join(' ');

    return (

        <div className="border-b-2 border-b-gray-800 border-e-2 border-e-gray-800 border-s-2 border-s-gray-300 border-t-2 border-t-gray-300 shadow p-3 my-4">
            <div className={'text-center'}>
                <img src={data.image} alt={data.title} className={'rounded max-w-full max-h-60'}/>
            </div>
            <h2>{data.title}</h2>
            <p className={'text-break'}>{shortContent}</p>
            {words.length > 30 && (
                <button onClick={toggleShowMore}>
                    {showMore ? 'Read Less' : 'Read More'}
                </button>
            )}
        </div>
    );
};
export default SinglePost;




