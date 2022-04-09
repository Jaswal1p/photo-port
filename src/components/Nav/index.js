import React, { useEffect } from "react";

import { capitalizeFirstLetter } from "../../utils/helpers";


// useEffect(() => {
//     document.title = capitalizeFirstLetter(currentCategory.name);
// }, [currentCategory]);


// The following commented out code was 'lifted' to the paremt component App.js & props function  added

// const Nav = () =>{

//     const  [categories] = useState([
//         { name: 'commercial', description: 'Photos of grocery stores, food trucks, and other commercial projects' },
//         { name: 'portraits', description: 'Portraits of people in my life' },
//         { name: 'food', description: 'Delicious delicacies' },
//         { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' }
//       ]);

//       const [currentCategory, setCurrentCategory] = useState(categories[0]);
    
    //   const handleClick = () => {
    //     console.log("click handled")
    //   }

function Nav(props) {

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, );

        const { 
            categories = [],

            setCurrentCategory,

            currentCategory,
        } = props;
    

       return(
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 
                    {" "}
                    📸
                    </span>{" "}
                    Oh Snap!

                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    
                    <li className="mx-2">
                        
                        <a 
                          href="#about" 
                        >
                        About me
                        </a>

                    </li>

                    <li>
                        <span>Contact</span>
                    </li>
                    
                    {categories.map((category) => (

                        <li className={`mx-1 ${
                            currentCategory.name === category.name && 'navActive'
                        }`} key={category.name}>

                        <span
                        
                          onClick={() => {
                            setCurrentCategory(category)
                    }}
                    >
                        {capitalizeFirstLetter(category.name)}
                        </span>

                        </li>
                    ))}
                   
                    
                </ul>
            </nav>
       </header>
        
  );
}

export default Nav;