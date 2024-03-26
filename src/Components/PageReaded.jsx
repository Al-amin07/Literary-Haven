import { ReadBook } from "./ReadLoacalStorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const PageReaded = () => {
    const data = ReadBook();
    console.log(data)
    
    return (
        <div>
           <BarChart height={500} width={700} data={data}>
            <XAxis dataKey={'bookName'}></XAxis>
            <YAxis dataKey={'totalPages'}></YAxis>
            
           </BarChart>
        </div>
    );
};

export default PageReaded;