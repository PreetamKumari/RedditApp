import { useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'

import styles from './Cards.module.scss'

export const CardDetails = () => {
	let {id} = useParams();
	let [singleView, updateSingleView] = useState({});
	let {author, url, title, ups, downs} = singleView;

  let api = `https://www.reddit.com/r/pics/.json?jsonp`;

	useEffect(()=>{
    (async function(){
      let result = await fetch(api).then(res=>res.json())
      const redditData = result.data.children
			const singleData = redditData.filter((item)=>{
				return item.data.id===id
			})
      updateSingleView(singleData[0].data)
    })();
  }, [api, id])

	return (
		<div className="container d-flex flex-column justify-content-center">
				<h3 className="text-center mt-5">Title: {title}</h3>
				<img className={`${styles.img} rounded mx-auto d-block`} src={url} alt="not found"></img>
				<h5 className="text-center"> Author: {author}</h5>
				<h6 className="text-center"> Upvote: {ups}</h6>
				<h6 className="text-center"> Downvote: {downs}</h6>
		</div>
	)
}
