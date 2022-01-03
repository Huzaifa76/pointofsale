import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const Order = ({title,img,price}) => {
  const [add, setadd] = useState(1)
  return (
    <>
      <div className="col-md-4 col-4">
          <div className="title_img mb-3">
        <h3 className="d-flex mt-2">{title}</h3>
        <img src={img} alt="Title Iamge" />
        </div>
      </div>
      <div className="col-md-4 col-4">
        <div className="add_subtract">
           <button className="btn remove" onClick={()=>setadd(add > 1 ? add-1 : add)}><RemoveIcon fontSize="small"/></button>
           <h6 className="amount">{add}</h6>
         <button className="btn add" onClick={()=>setadd(add+1)} ><AddIcon fontSize="small"/></button>
        </div>
      </div>
      <div className="col-md-2 col-2 mt-1">
        {price}
      </div>
      <div className="col-md-2 col-2">
        <button className="btn delete" onClick={()=>setadd(1)}><DeleteIcon fontSize="small"/></button>
      </div>
    </>
  );
};

export default Order;