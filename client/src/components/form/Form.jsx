import { useState } from "react";
import axios from "axios";
import '../../App.css';


function Form({ isUploadClicked, setIsUploadClicked }) {
    const [image, setImage] = useState(null);
    const [dimensions, setDimensions] = useState("");
    const [medium, setMedium] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [painting, setPainting] = useState([]);

      
    const handleFileChange = (event) => {
        setImage(event.target?.files[0])
    };

    const handleFormClose = (event) => {
        setIsUploadClicked(!isUploadClicked)
    };

        
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('dimensions', dimensions);
        formData.append('medium', medium);
        formData.append('title', title);
        formData.append('text', text);
        formData.append('width', width);
        formData.append('height', height);

        await axios.post("http://localhost:8000/api/gallery/new", 
        formData,
        {
            headers : { "Content-Type" : "multipart/form-data" },
        }
        )
        .then((response) => {
            setPainting(response.data)
        }).catch((err) => console.log(err))

             
        
    }

    const handleClear = (e) => {
        e.preventDefault();
        setImage(null)
        setDimensions("")
        setMedium("")
        setTitle("")
        setText("")
        setWidth("")
        setHeight("")
    }

    return (
        <div className='form-container'>
            <div className='form'>
                <div className='form-header'>
                <h3 className='form-title'>UPLOAD A NEW PAINTING</h3>
                </div>
                <div className='form-close' onClick={handleFormClose}> x </div>
                <div className='form-body'>
                <form className="form-content" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="input-image">
                    <div className="input-text">
                        <h4>Image:</h4>
                    </div>
                    <div>
                        <input id="image-input" className="input-field" type="file" name="image" accept=".jpeg, .jpg, .png" onChange={(e) => handleFileChange(e)} />
                    </div>
                </div>
                <div className="dimensions">
                    <div className="input-text">
                        <h4>Dimensions:</h4>
                    </div>
                    <div>
                        <input className="input-field" type="text" placeholder="dimensions" value={dimensions} onChange={(e) => setDimensions(e.target.value)} />
                    </div>
                </div>
                <div className="medium">
                    <div className="input-text">
                        <h4>Medium:</h4>
                    </div>
                    <div>
                        <input className="input-field" type="text" placeholder="medium" value={medium} onChange={(e) => setMedium(e.target.value)} />
                    </div>
                </div>
                <div className="title">
                    <div className="input-text">
                        <h4>Title:</h4>
                    </div>
                    <div>
                        <input className="input-field" type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                </div>
                <div className="description">
                    <div className="input-text">
                        <h4>Description:</h4>
                    </div>
                    <div>
                        <textarea className="input-field" placeholder="description" value={text} onChange={(e) => setText(e.target.value)} />
                    </div>
                </div>
                <div className="width">
                    <div className="input-text">
                        <h4>Width:</h4>
                    </div>
                    <div>
                        <input className="input-field" type="text" placeholder="width" value={width} onChange={(e) => setWidth(e.target.value)} />
                    </div>
                </div>
                <div className="height">
                    <div className="input-text">
                        <h4>Height:</h4>
                    </div>
                    <div>
                        <input className="input-field" type="text" placeholder="height" value={height} onChange={(e) => setHeight(e.target.value)} />
                    </div>
                </div>
                    <div className="buttons"><button className="clear" onClick={handleClear}> Clear </button> <input className="submit" type="submit" /></div>
                </form>
                </div>
            </div>
        </div>
    )
}



export default Form;