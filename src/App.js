import {useState,useEffect} from "react"
import {format} from "date-fns"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const[items,setItems]=useState([])
  const[query,setQuery]=useState("")
  const [text,setText]=useState("")
  const [largeTitle,setLargeTitle]=useState([])
  const[isLoading,setIsLoading]=useState(true)

  useEffect(()=>{
    setIsLoading(true)
    const fetchArticles=async()=>{
      const res=await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
      // const res=await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=604cf0bfa7974fc7b1aeb43285fb5e2c")
      // let result=await res.json();
      const data=await res.json()
      setItems(data.hits)
      setLargeTitle(data.hits[0])
    }

    fetchArticles()
    setIsLoading(false)
  },[query])
  const handleSubmit=(e)=>{
    e.preventDefault()

    if(!text){
      //Do something here
      toast("INPUT IS EMPTY")
    }else{
      setQuery(text)
      setText("")
    }
  }
   return<>
   <section clasName="section">
     <form autoComplete="off" onSubmit={handleSubmit}>
      <input type="text" name="search" id="search" value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder="Search for something" />
      <button>Search</button>
     </form>

     <ToastContainer
     position="bottom-right"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"
     />
     {isLoading ? (<
      div className="spinner"></div> ): 
      <>
     <article className="title">
      <h1>{largeTitle.title}</h1>
      <a href={largeTitle.url} target="_blank" rel="noreferrer">Read Full Article</a>
     <p className="category">Category: <span>{query}</span></p>
      </article>
       <article className="cards">
        {/* <div>
          <h2>Heading 2</h2>

         <ul>
          <li>By Chayan</li>
          <li><a href="">Read Full article</a></li>
        </ul>
        <p>Date</p>
      </div> */}
    </article>

    <article className="cards">
      {/* <div>
        <h2>Heading 2</h2>

        <ul>
          <li>By Chayan</li>
          <li><a href="">Read Full article</a></li>
        </ul>
        <p>Date</p>
      </div> */}
      {items.map(({author,created_at,title,url,objectId})=>(
        <div key={objectId}>
          <h2>{title}</h2>
          <ul>
            <li>By {author}</li>
            <li><a href={url} target="_blank" rel="noreferrer">Read Full Article</a></li>
          </ul>
          <p>{format(new Date(created_at),"dd MMMM yyyy")}</p>
        </div>

      ))}
    </article></>}
   </section>
   </>
}

export default App;
