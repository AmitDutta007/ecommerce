import React from "react";
import "./List.scss";
import Card from "../Card/Card";
// import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {

// const data = [
//       {
//         id: 1,
//         img: "product1.jpg",
//         title: "Product 1",
//         isNew:true,
//         oldPrice: 100,
//         price: 80
//       },
      
//        {
//         id: 2,
//         img: "product2.jpg",
//         title: "Product 2",
//         isNew:true,
//         oldPrice: 200,
//         price: 150
//       },
      
//       {
//         id: 3,
//         img: "product3.jpg",
//         title: "Product 3",
//         isNew:true,
//         oldPrice: 150,
//         price: 120
//       },
      
//       {
//         id: 4,
//         img: "product4.jpg",
//         title: "Product 4",
//         isNew:true,
//         oldPrice: 80,
//         price: 60
//       },
      
//        {
//         id: 5,
//         img: "product5.jpg",
//         title: "Product 5",
//         isNew:true,
//         oldPrice: 250,
//         price: 200
//       }
      
      
// ]

//   const { data, loading, error } = useFetch(
//     `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
//       (item) => `&[filters][sub_categories][id][$eq]=${item}`
//     )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
//   );

  return (
    <div className="list">
      {/* {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)} */}
        {/* {data?.map(item=>(
            <Card item={item} key={item.id} />
        ))} */}
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>
        <h1>fgghghgh</h1>

    </div>
  );
};

export default List;