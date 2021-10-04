import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    // const categories = ['Dragon Ball','Bleach', 'Shingeky no kyojin'];
    const [categories, setCategories] = useState(['Bleach']);

    // const handleAdd = ()=>{

    //     // setCategories([...categories, 'Naruto']);
    //     setCategories(category => [...category, 'Naruto']);


    // }
        return(
            <>
            <h2>GifExpertApp</h2>
            <AddCategory setCat = {setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                        key = {category}
                        category = {category}/>
                    ))
                }
            </ol>

            </>
        );

};