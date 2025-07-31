import { useLocation } from "react-router-dom";

const Page3 = () => {
    const location = useLocation()

    const {name,name2}=location.state
    const sum = name  +  name2

    return(<div>
        <h3>number 1 = {name}</h3>
        <h3>number 2 = {name2}</h3>

        <h2>Sum is = {sum} </h2>
    </div>);

}
export default Page3