import axios from "axios";

const url=" https://covid19.mathdro.id/api";


 export const fetchData = async () => {
    try {
        const {data: {confrimed,recoverd,deaths,lestUpdate}} = await axios.get(url);
        return  {confrimed,recoverd,deaths,lestUpdate};
    } catch (error) {
        
    }
}