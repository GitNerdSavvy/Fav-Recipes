import React,{useState,useEffect} from 'react'
import {CiCoffeeCup, CiMedicalMask} from 'react-icons/ci'
import {GiButter,GiFruitBowl,GiCheckMark, GiStairsCake} from 'react-icons/gi'
// import {MdOutlineIcecream} from 'react-icons/md'
import {fetchTabData} from '../service'

function Tabs(props) {
    const [active,setActive] = useState('Pizza')
    const [tabData,setTabData] = useState('')
    const [tabLabel,setTabLabel] = useState([
        {
            name: 'Tea',
            icon:<CiCoffeeCup />,
            id: '13cee5ce5858fd8ac32d216503dad795'
        },
        {
            name: 'Sweets',
            icon:<GiButter />,
            id: 'ca3d9ef95d9175aef0e3271216bad299'
        },
        {
            name: 'Desert',
            icon:<GiFruitBowl />,
            id: 'fec62dbffeb69a3265ed009f14834936'
        },
        {
            name: 'Cake',
            icon:<GiStairsCake />,
            id: '5ef4ad81e000c6e6a623f11572b4b86e'
        },
    ])

    const handleClick = (name,id) => {
        setActive(name)
        fetchTabData(id).then((response)=> {
            setTabData(response);
            props.setLoader(false)
        })
    }

    useEffect(()=> {
        fetchTabData(tabLabel[0].id).then((response)=> {
            setTabData(response);
            props.setLoader(false)
        })
    },[])

  return (
    <div className="container">
        <h1 className='recipeHeading'>What would you like to try!</h1>
        <div className="tabs">
            {tabLabel.map((item,index)=> (
                <div onClick={()=> (handleClick(item.name,item.id),props.setLoader(true))} key={index} className={`tablist ${active === item.name ? 'active':""}`}>
                    {item.icon}
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
        <div className='recipe_banner'>
            {tabData !== '' && tabData.recipe &&  <>
                <div className="left-col">
                    <span className='badge'>{tabData.recipe?.cuisineType[0].toUpperCase()}</span>
                    <h1>{tabData.recipe.label}</h1>
                    <p><strong>Recipe by:</strong><small>{tabData.recipe.source}</small></p>
                    <h3>Ingredients</h3>
                    <div className='ingredients'>
                        <ul>
                            {tabData.recipe.ingredientLines.map((list,index)=> 
                                (<li key={index}><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>{list}</span></li>)
                            )}
                            
                        </ul>
                    </div>
                </div>
                <div className="right-col">
                    <div className="image-wrapper">
                    <img src={tabData.recipe.image} alt={tabData.recipe.label} />
                    </div>
                </div>
            </>}
        </div>
    </div>
  )
}

export default Tabs
