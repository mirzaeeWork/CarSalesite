import styles from './searchBar.module.css'
import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchBar() {
    const rout = useRouter()

    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    
    const searchHandler = () => {
        if (min && max) {
            rout.push(`filter/${min}/${max}`)
        } else {
            alert("Please Enter minimum and maximum price!");
        }
    }
    return (
        <div className={styles.container}>
            <div>
                <input placeholder='Input min-price' value={min}
                    onChange={(e) => setMin(e.target.value)} type="number" className={styles.hideNumberInputArrows}/>
                <input placeholder='Input max-price' value={max}
                    onChange={(e) => setMax(e.target.value)} />
            </div>
            <button onClick={searchHandler}>Search</button>
        </div>
    )
}
