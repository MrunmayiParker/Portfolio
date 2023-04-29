import './portfolio.scss'
import { useState, useEffect } from 'react';
import Portfoliolist from  '../../components/portfoliolist/Portfoliolist'
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    machinelearningPortfolio,
    
  } from "../../data";
export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list= [
        {
            id: "featured",
            title: "Featured",
          },
          {
            id: "websites",
            title: "Websites",
          },
          {
            id: "mobileapp",
            title: "Mobile App",
          },
          {
            id: "machinelearning",
            title: "Machine Learning",
          },
          
    ];

    useEffect(()=>{
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "websites":
                setData(webPortfolio);
                break;
            case "mobileapp":
                setData(mobilePortfolio);
                break;
            case "machinelearning":
                setData(machinelearningPortfolio);
                break;
    
            default:
                setData(featuredPortfolio);

        }
    },[selected])

  return (
    <div className='portfolio' id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
            {list.map(item=>(
                <Portfoliolist title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
            ))}


        </ul>

        <div className="cont">
            {data.map((d) => (
                <div className="item" onClick={d.url}>
                <img src={d.img} alt="" />
                <h3>{d.title}</h3>
            </div>
            ))}
            
        </div>
    </div>
  )
}
