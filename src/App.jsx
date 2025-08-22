// // import React from "react";
// // import "./App.css";

// import { useState } from "react"

// // function App() {
// //   return (
// //     <div className="app">
// //       {/* HEADER */}
// //       <header className="header">
// //         <h1 className="logo">My UI</h1>
// //         <nav className="nav">
// //           <a href="#">Home</a>
// //           <a href="#">About</a>
// //           <a href="#">Contact</a>
// //         </nav>
// //       </header>

// //       {/* HERO SECTION */}
// //       <section className="hero">
// //         <img
// //           src="https://via.placeholder.com/1200x400"
// //           alt="Hero"
// //           className="hero-image"
// //         />
// //         <div className="hero-text">
// //           <h2>Welcome to My Page</h2>
// //           <p>Your catchy slogan goes here</p>
// //         </div>
// //       </section>

// //       {/* CONTENT SECTION */}
// //       <main className="card-grid">
// //         {Array.from({ length: 6 }).map((_, i) => (
// //           <div key={i} className="card">
// //             <img
// //               src="https://via.placeholder.com/400x250"
// //               alt={`Card ${i + 1}`}
// //             />
// //             <div className="card-body">
// //               <h3>Card Title {i + 1}</h3>
// //               <p>This is a short description of the card content.</p>
// //             </div>
// //           </div>
// //         ))}
// //       </main>

// //       {/* FOOTER */}
// //       <footer className="footer">
// //         © 2025 My UI. All rights reserved.
// //       </footer>
// //     </div>
// //   );
// // }

// // export default App;

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import Weather from "./pages/Weather";
// import "./App.css";


// function App() {
//   return (
//     <Router>
//       <nav style={{ margin: "10px" }}>
//         <Link to="/">Home</Link> |{" "}
//         <Link to="/lahore">Lahore</Link> |{" "}
//         <Link to="/karachi">Karachi</Link> |{" "}
//         <Link to="/sahiwal">Sahiwal</Link> |{" "}
//         <Link to="/sialkot">Sialkot</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/:city" element={<Weather />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


 import './App.css'
 import Header from './component/header'


 function App() {
   return (
     <div className='bg-[#012C4B] scroll h-[1000px]'>
       <Header />
     </div>
   )
 }

 export default App





// const[count, setcount]= useState(0)
// count[Names, setName] = useState("")
// count[Names, setNames]= useState(["Hassan","Ali","Ahmad","Zeeshan"])

//  function App() {
//   return (
     
//    )
//  }

//  export default App


// Ecommerce





// import { useEffect, useState } from 'react'
// import './App.css'
// import axios from 'axios'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form'

// function App() {
//   const [products, setProducts] = useState([])
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [imageURL, setImageURL] = useState("");
//   const [productIdOfUpdate, setProductIdOfUpdate] = useState(0);


//   useEffect(() => {

//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("http://localhost:5050/products")
//         console.log(res.data)
//         setProducts(res.data)
        
//       }
//       catch (err) {
//         console.log(err)
//       }
//     }
//     fetchProducts()
//   }, [])

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value)
//   }
//   const handleDescChange = (e) => {
//     setDescription(e.target.value)
//   }
//   const handleImageURLChange = (e) => {
//     setImageURL(e.target.value)
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {

//       const newProduct = {
//         id: products.length + 1,
//         name: title,
//         desc: description,
//         imageUrl: imageURL
//       }
//       await axios.post("http://localhost:5050/products", newProduct)

//       setProducts([...products, newProduct])
//       alert("Saved")
//     }
//     catch (err) {
//       console.log(err)
//     }
//   }
//   const handleUpdate = async (e) => {
//     e.preventDefault()
//     try {
//       console.log(productIdOfUpdate)
//       const updatedData = {
//         title: title,
//         description: description,
//         imageURL: imageURL
//       }
//       await axios.put(`http://localhost:5050/products/${productIdOfUpdate}`, updatedData)

//       alert("Saved")
//     }
//     catch (err) {
//       console.log(err)
//     }
//   }

//   async function deleteProduct(id) {
//     try {
//       await axios.delete(`http://localhost:5050/products/${id}`)

//       const updateProducts = products.filter((pr) => {
//         if (pr.id != id) {
//           return pr
//         }
//       })
//       setProducts(updateProducts)
//       alert("Product Removed")
//     }
//     catch (err) {
//       alert("Something went wrong")
//       console.log(err)

//     }
//   }

//   return (
//     <>
//       <div style={{ display: "flex" }}>

//         <div>
//           <h2>New Product</h2>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>title</Form.Label>
//               <Form.Control type="text" placeholder="Enter title" onChange={handleTitleChange} />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>Image URL</Form.Label>
//               <Form.Control type="text" placeholder="Enter Image URL" onChange={handleImageURLChange} />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//               <Form.Label>Description</Form.Label>
//               <Form.Control as="textarea" rows={3} onChange={handleDescChange} />
//             </Form.Group>

//             <Button variant="primary" type='submit'>Add</Button>
//           </Form>
//         </div>
//         <div>
//           <h2>Product Update</h2>
//           <Form onSubmit={handleUpdate}>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>title</Form.Label>
//               <Form.Control type="text" placeholder="Enter title" onChange={handleTitleChange} />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>Image URL</Form.Label>
//               <Form.Control type="text" placeholder="Enter Image URL" onChange={handleImageURLChange} />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//               <Form.Label>Description</Form.Label>
//               <Form.Control as="textarea" rows={3} onChange={handleDescChange} />
//             </Form.Group>

//             <Button variant="primary" type='submit'>Update</Button>
//           </Form>
//         </div>
//       </div>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
//         {products.map((pr) => {
//           return (<Card style={{ width: '18rem', border: "2px solid black", borderRadius: 10 }}>
//             <Card.Img variant="top" src={pr.imageUrl} width={200} />
//             <Card.Body>
//               <Card.Title>{pr.name}</Card.Title>
//               <Card.Text>
//                 {pr.desc}
//               </Card.Text>
//               <Button variant="primary" onClick={() => setProductIdOfUpdate(pr.id)}>Update</Button>
//               <Button variant="primary" onClick={() => deleteProduct(pr.id)}>Delete</Button>
//               <Button variant="primary">Add to Cart</Button>
//             </Card.Body>
//           </Card>)
//         })}
//       </div>
//     </>
//   )
// }

// export default App